// Copyright (c) 2017-present PyO3 Project and Contributors
//
// based on Daniel Grunwald's https://github.com/dgrunwald/rust-cpython

//! Functionality for the code generated by the derive backend

use crate::err::{PyErr, PyResult};
use crate::exceptions::TypeError;
use crate::instance::PyNativeType;
use crate::pyclass::{PyClass, PyClassThreadChecker};
use crate::types::{PyAny, PyDict, PyModule, PyTuple};
use crate::{ffi, GILPool, IntoPy, PyCell, Python};
use std::cell::UnsafeCell;

/// Description of a python parameter; used for `parse_args()`.
#[derive(Debug)]
pub struct ParamDescription {
    /// The name of the parameter.
    pub name: &'static str,
    /// Whether the parameter is optional.
    pub is_optional: bool,
    /// Whether the parameter is optional.
    pub kw_only: bool,
}

/// Parse argument list
///
/// * fname:  Name of the current function
/// * params: Declared parameters of the function
/// * args:   Positional arguments
/// * kwargs: Keyword arguments
/// * output: Output array that receives the arguments.
///           Must have same length as `params` and must be initialized to `None`.
pub fn parse_fn_args<'p>(
    fname: Option<&str>,
    params: &[ParamDescription],
    args: &'p PyTuple,
    kwargs: Option<&'p PyDict>,
    accept_args: bool,
    accept_kwargs: bool,
    output: &mut [Option<&'p PyAny>],
) -> PyResult<(&'p PyTuple, Option<&'p PyDict>)> {
    let nargs = args.len();
    let mut used_args = 0;
    macro_rules! raise_error {
        ($s: expr $(,$arg:expr)*) => (return Err(TypeError::py_err(format!(
            concat!("{} ", $s), fname.unwrap_or("function") $(,$arg)*
        ))))
    }
    // Copy kwargs not to modify it
    let kwargs = match kwargs {
        Some(k) => Some(k.copy()?),
        None => None,
    };
    // Iterate through the parameters and assign values to output:
    for (i, (p, out)) in params.iter().zip(output).enumerate() {
        *out = match kwargs.and_then(|d| d.get_item(p.name)) {
            Some(kwarg) => {
                if i < nargs {
                    raise_error!("got multiple values for argument: {}", p.name)
                }
                kwargs.as_ref().unwrap().del_item(p.name)?;
                Some(kwarg)
            }
            None => {
                if p.kw_only {
                    if !p.is_optional {
                        raise_error!("missing required keyword-only argument: {}", p.name)
                    }
                    None
                } else if i < nargs {
                    used_args += 1;
                    Some(args.get_item(i))
                } else {
                    if !p.is_optional {
                        raise_error!("missing required positional argument: {}", p.name)
                    }
                    None
                }
            }
        }
    }
    let is_kwargs_empty = kwargs.as_ref().map_or(true, |dict| dict.is_empty());
    // Raise an error when we get an unknown key
    if !accept_kwargs && !is_kwargs_empty {
        let (key, _) = kwargs.unwrap().iter().next().unwrap();
        raise_error!("got an unexpected keyword argument: {}", key)
    }
    // Raise an error when we get too many positional args
    if !accept_args && used_args < nargs {
        raise_error!(
            "takes at most {} positional argument{} ({} given)",
            used_args,
            if used_args == 1 { "" } else { "s" },
            nargs
        )
    }
    // Adjust the remaining args
    let args = if accept_args {
        let py = args.py();
        let slice = args.slice(used_args as isize, nargs as isize).into_py(py);
        py.checked_cast_as(slice).unwrap()
    } else {
        args
    };
    let kwargs = if accept_kwargs && is_kwargs_empty {
        None
    } else {
        kwargs
    };
    Ok((args, kwargs))
}

/// `Sync` wrapper of `ffi::PyModuleDef`.
#[doc(hidden)]
pub struct ModuleDef(UnsafeCell<ffi::PyModuleDef>);

unsafe impl Sync for ModuleDef {}

impl ModuleDef {
    /// Make new module defenition with given module name.
    ///
    /// # Safety
    /// `name` must be a null-terminated string.
    pub const unsafe fn new(name: &'static str) -> Self {
        let mut init = ffi::PyModuleDef_INIT;
        init.m_name = name.as_ptr() as *const _;
        ModuleDef(UnsafeCell::new(init))
    }
    /// Builds a module using user given initializer. Used for `#[pymodule]`.
    ///
    /// # Safety
    /// The caller must have GIL.
    pub unsafe fn make_module(
        &'static self,
        doc: &str,
        initializer: impl Fn(Python, &PyModule) -> PyResult<()>,
    ) -> PyResult<*mut ffi::PyObject> {
        #[cfg(py_sys_config = "WITH_THREAD")]
        // > Changed in version 3.7: This function is now called by Py_Initialize(), so you don’t have
        // > to call it yourself anymore.
        #[cfg(not(Py_3_7))]
        ffi::PyEval_InitThreads();

        let module = ffi::PyModule_Create(self.0.get());
        let pool = GILPool::new();
        let py = pool.python();
        if module.is_null() {
            return Err(crate::PyErr::fetch(py));
        }
        let module = py.from_owned_ptr_or_err::<PyModule>(module)?;
        module.add("__doc__", doc)?;
        initializer(py, module)?;
        Ok(crate::IntoPyPointer::into_ptr(module))
    }
}

/// Utilities for basetype
#[doc(hidden)]
pub trait PyBaseTypeUtils: Sized {
    type Dict;
    type WeakRef;
    type LayoutAsBase;
    type BaseNativeType;
    type ThreadChecker: PyClassThreadChecker<Self>;
}

impl<T: PyClass> PyBaseTypeUtils for T {
    type Dict = T::Dict;
    type WeakRef = T::WeakRef;
    type LayoutAsBase = crate::pycell::PyCellInner<T>;
    type BaseNativeType = T::BaseNativeType;
    type ThreadChecker = T::ThreadChecker;
}

/// Utility trait to enable &PyClass as a pymethod/function argument
#[doc(hidden)]
pub trait ExtractExt<'a> {
    type Target: crate::FromPyObject<'a>;
}

impl<'a, T> ExtractExt<'a> for T
where
    T: crate::FromPyObject<'a>,
{
    type Target = T;
}

/// A trait for types that can be borrowed from a cell.
///
/// This serves to unify the use of `PyRef` and `PyRefMut` in automatically
/// derived code, since both types can be obtained from a `PyCell`.
#[doc(hidden)]
pub trait TryFromPyCell<'a, T: PyClass>: Sized {
    type Error: Into<PyErr>;
    fn try_from_pycell(cell: &'a crate::PyCell<T>) -> Result<Self, Self::Error>;
}

impl<'a, T, R> TryFromPyCell<'a, T> for R
where
    T: 'a + PyClass,
    R: std::convert::TryFrom<&'a PyCell<T>>,
    R::Error: Into<PyErr>,
{
    type Error = R::Error;
    fn try_from_pycell(cell: &'a crate::PyCell<T>) -> Result<Self, Self::Error> {
        <R as std::convert::TryFrom<&'a PyCell<T>>>::try_from(cell)
    }
}
