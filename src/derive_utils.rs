// Copyright (c) 2017-present PyO3 Project and Contributors
//
// based on Daniel Grunwald's https://github.com/dgrunwald/rust-cpython

//! Functionality for the code generated by the derive backend

use crate::err::PyResult;
use crate::exceptions::TypeError;
use crate::init_once;
use crate::instance::PyNativeType;
use crate::pyclass::PyClass;
use crate::pyclass_init::PyClassInitializer;
use crate::types::{PyAny, PyDict, PyModule, PyTuple};
use crate::{ffi, GILPool, IntoPy, PyObject, Python};
use std::ptr;

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
                kwargs.as_ref().unwrap().del_item(p.name).unwrap();
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

/// Builds a module (or null) from a user given initializer. Used for `#[pymodule]`.
pub unsafe fn make_module(
    name: &str,
    doc: &str,
    initializer: impl Fn(Python, &PyModule) -> PyResult<()>,
) -> *mut ffi::PyObject {
    use crate::IntoPyPointer;

    init_once();

    #[cfg(py_sys_config = "WITH_THREAD")]
    // > Changed in version 3.7: This function is now called by Py_Initialize(), so you don’t have
    // > to call it yourself anymore.
    #[cfg(not(Py_3_7))]
    ffi::PyEval_InitThreads();

    static mut MODULE_DEF: ffi::PyModuleDef = ffi::PyModuleDef_INIT;
    // We can't convert &'static str to *const c_char within a static initializer,
    // so we'll do it here in the module initialization:
    MODULE_DEF.m_name = name.as_ptr() as *const _;

    let module = ffi::PyModule_Create(&mut MODULE_DEF);
    if module.is_null() {
        return module;
    }

    let py = Python::assume_gil_acquired();
    let _pool = GILPool::new(py);
    let module = match py.from_owned_ptr_or_err::<PyModule>(module) {
        Ok(m) => m,
        Err(e) => {
            e.restore(py);
            return ptr::null_mut();
        }
    };

    module
        .add("__doc__", doc)
        .expect("Failed to add doc for module");
    match initializer(py, module) {
        Ok(_) => module.into_ptr(),
        Err(e) => {
            e.restore(py);
            ptr::null_mut()
        }
    }
}

/// This trait wraps a T: IntoPy<PyObject> into PyResult<T> while PyResult<T> remains PyResult<T>.
///
/// This is necessary because proc macros run before typechecking and can't decide
/// whether a return type is a (possibly aliased) PyResult or not. It is also quite handy because
/// the codegen is currently built on the assumption that all functions return a PyResult.
pub trait IntoPyResult<T> {
    fn into_py_result(self) -> PyResult<T>;
}

impl<T: IntoPy<PyObject>> IntoPyResult<T> for T {
    fn into_py_result(self) -> PyResult<T> {
        Ok(self)
    }
}

impl<T: IntoPy<PyObject>> IntoPyResult<T> for PyResult<T> {
    fn into_py_result(self) -> PyResult<T> {
        self
    }
}

/// Variant of IntoPyResult for the specific case of `#[new]`. In the case of returning (Sub, Base)
/// from `#[new]`, IntoPyResult can't apply because (Sub, Base) doesn't implement IntoPy<PyObject>.
pub trait IntoPyNewResult<T: PyClass, I: Into<PyClassInitializer<T>>> {
    fn into_pynew_result(self) -> PyResult<I>;
}

impl<T: PyClass, I: Into<PyClassInitializer<T>>> IntoPyNewResult<T, I> for I {
    fn into_pynew_result(self) -> PyResult<I> {
        Ok(self)
    }
}

impl<T: PyClass, I: Into<PyClassInitializer<T>>> IntoPyNewResult<T, I> for PyResult<I> {
    fn into_pynew_result(self) -> PyResult<I> {
        self
    }
}

pub trait GetPropertyValue {
    fn get_property_value(&self, py: Python) -> PyObject;
}

impl<T> GetPropertyValue for &T
where
    T: IntoPy<PyObject> + Clone,
{
    fn get_property_value(&self, py: Python) -> PyObject {
        (*self).clone().into_py(py)
    }
}

impl GetPropertyValue for PyObject {
    fn get_property_value(&self, py: Python) -> PyObject {
        self.clone_ref(py)
    }
}

/// Utilities for basetype
pub trait PyBaseTypeUtils {
    type Dict;
    type WeakRef;
    type LayoutAsBase;
    type BaseNativeType;
}

impl<T: PyClass> PyBaseTypeUtils for T {
    type Dict = T::Dict;
    type WeakRef = T::WeakRef;
    type LayoutAsBase = crate::pycell::PyCellInner<T>;
    type BaseNativeType = T::BaseNativeType;
}
