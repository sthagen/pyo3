// Copyright (c) 2017-present PyO3 Project and Contributors
//! Code generation for the function that initializes a python module and adds classes and function.

use crate::method::{self, FnArg};
use crate::pyfunction::PyFunctionAttr;
use crate::pymethod::{check_generic, get_arg_names, impl_arg_params};
use crate::utils;
use proc_macro2::{Span, TokenStream};
use quote::{format_ident, quote};
use syn::{spanned::Spanned, Ident, Result};

/// Generates the function that is called by the python interpreter to initialize the native
/// module
pub fn py_init(fnname: &Ident, name: &Ident, doc: syn::LitStr) -> TokenStream {
    let cb_name = Ident::new(&format!("PyInit_{}", name), Span::call_site());

    quote! {
        #[no_mangle]
        #[allow(non_snake_case)]
        /// This autogenerated function is called by the python interpreter when importing
        /// the module.
        pub unsafe extern "C" fn #cb_name() -> *mut pyo3::ffi::PyObject {
            use pyo3::derive_utils::ModuleDef;
            const NAME: &'static str = concat!(stringify!(#name), "\0");
            static MODULE_DEF: ModuleDef = unsafe { ModuleDef::new(NAME) };

            pyo3::callback::handle_panic(|_py| { MODULE_DEF.make_module(#doc, #fnname) })
        }
    }
}

/// Finds and takes care of the #[pyfn(...)] in `#[pymodule]`
pub fn process_functions_in_module(func: &mut syn::ItemFn) -> syn::Result<()> {
    let mut stmts: Vec<syn::Stmt> = Vec::new();

    for stmt in func.block.stmts.iter_mut() {
        if let syn::Stmt::Item(syn::Item::Fn(func)) = stmt {
            if let Some((module_name, python_name, pyfn_attrs)) =
                extract_pyfn_attrs(&mut func.attrs)?
            {
                let function_to_python = add_fn_to_module(func, python_name, pyfn_attrs)?;
                let function_wrapper_ident = function_wrapper_ident(&func.sig.ident);
                let item: syn::ItemFn = syn::parse_quote! {
                    fn block_wrapper() {
                        #function_to_python
                        #module_name.add_function(#function_wrapper_ident(#module_name)?)?;
                    }
                };
                stmts.extend(item.block.stmts.into_iter());
            }
        };
        stmts.push(stmt.clone());
    }

    func.block.stmts = stmts;
    Ok(())
}

/// Extracts the data from the #[pyfn(...)] attribute of a function
fn extract_pyfn_attrs(
    attrs: &mut Vec<syn::Attribute>,
) -> syn::Result<Option<(syn::Path, Ident, PyFunctionAttr)>> {
    let mut new_attrs = Vec::new();
    let mut fnname = None;
    let mut modname = None;
    let mut fn_attrs = PyFunctionAttr::default();

    for attr in attrs.drain(..) {
        match attr.parse_meta() {
            Ok(syn::Meta::List(list)) if list.path.is_ident("pyfn") => {
                let meta: Vec<_> = list.nested.iter().cloned().collect();
                if meta.len() >= 2 {
                    // read module name
                    match &meta[0] {
                        syn::NestedMeta::Meta(syn::Meta::Path(path)) => {
                            modname = Some(path.clone())
                        }
                        _ => bail_spanned!(
                            meta[0].span() => "the first parameter of pyfn must be a MetaItem"
                        ),
                    }
                    // read Python function name
                    match &meta[1] {
                        syn::NestedMeta::Lit(syn::Lit::Str(lits)) => {
                            fnname = Some(syn::Ident::new(&lits.value(), lits.span()));
                        }
                        _ => bail_spanned!(
                            meta[1].span() => "the second parameter of pyfn must be a Literal"
                        ),
                    }
                    // Read additional arguments
                    if list.nested.len() >= 3 {
                        fn_attrs = PyFunctionAttr::from_meta(&meta[2..meta.len()])?;
                    }
                } else {
                    bail_spanned!(
                        attr.span() => format!("can not parse 'pyfn' params {:?}", attr)
                    );
                }
            }
            _ => new_attrs.push(attr),
        }
    }

    *attrs = new_attrs;
    match (modname, fnname) {
        (Some(modname), Some(fnname)) => Ok(Some((modname, fnname, fn_attrs))),
        _ => Ok(None),
    }
}

/// Coordinates the naming of a the add-function-to-python-module function
fn function_wrapper_ident(name: &Ident) -> Ident {
    // Make sure this ident matches the one of wrap_pyfunction
    format_ident!("__pyo3_get_function_{}", name)
}

/// Generates python wrapper over a function that allows adding it to a python module as a python
/// function
pub fn add_fn_to_module(
    func: &mut syn::ItemFn,
    python_name: Ident,
    pyfn_attrs: PyFunctionAttr,
) -> syn::Result<TokenStream> {
    check_generic(&func.sig)?;

    let mut arguments = func
        .sig
        .inputs
        .iter_mut()
        .map(FnArg::parse)
        .collect::<syn::Result<Vec<_>>>()?;

    if pyfn_attrs.pass_module {
        const PASS_MODULE_ERR: &str = "expected &PyModule as first argument with `pass_module`";
        ensure_spanned!(
            !arguments.is_empty(),
            func.span() => PASS_MODULE_ERR
        );
        let arg = arguments.remove(0);
        ensure_spanned!(
            type_is_pymodule(arg.ty),
            arg.ty.span() => PASS_MODULE_ERR
        );
    }

    let ty = method::get_return_info(&func.sig.output);

    let text_signature = utils::parse_text_signature_attrs(&mut func.attrs, &python_name)?;
    let doc = utils::get_doc(&func.attrs, text_signature, true)?;

    let function_wrapper_ident = function_wrapper_ident(&func.sig.ident);

    let spec = method::FnSpec {
        tp: method::FnType::FnStatic,
        name: &function_wrapper_ident,
        python_name,
        attrs: pyfn_attrs.arguments,
        args: arguments,
        output: ty,
        doc,
    };

    let doc = &spec.doc;
    let python_name = &spec.python_name;

    let name = &func.sig.ident;
    let wrapper_ident = format_ident!("__pyo3_raw_{}", name);
    let wrapper = function_c_wrapper(name, &wrapper_ident, &spec, pyfn_attrs.pass_module)?;
    Ok(quote! {
        #wrapper
        pub(crate) fn #function_wrapper_ident<'a>(
            args: impl Into<pyo3::derive_utils::PyFunctionArguments<'a>>
        ) -> pyo3::PyResult<&'a pyo3::types::PyCFunction> {
            let name = concat!(stringify!(#python_name), "\0");
            pyo3::types::PyCFunction::internal_new(
                pyo3::class::methods::PyMethodDef::cfunction_with_keywords(
                    name,
                    pyo3::class::methods::PyCFunctionWithKeywords(#wrapper_ident),
                    #doc,
                ),
                args.into(),
            )
        }
    })
}

fn type_is_pymodule(ty: &syn::Type) -> bool {
    if let syn::Type::Reference(tyref) = ty {
        if let syn::Type::Path(typath) = tyref.elem.as_ref() {
            if typath
                .path
                .segments
                .last()
                .map(|seg| seg.ident == "PyModule")
                .unwrap_or(false)
            {
                return true;
            }
        }
    }
    false
}

/// Generate static function wrapper (PyCFunction, PyCFunctionWithKeywords)
fn function_c_wrapper(
    name: &Ident,
    wrapper_ident: &Ident,
    spec: &method::FnSpec<'_>,
    pass_module: bool,
) -> Result<TokenStream> {
    let names: Vec<Ident> = get_arg_names(&spec);
    let cb;
    let slf_module;
    if pass_module {
        cb = quote! {
            pyo3::callback::convert(_py, #name(_slf, #(#names),*))
        };
        slf_module = Some(quote! {
            let _slf = _py.from_borrowed_ptr::<pyo3::types::PyModule>(_slf);
        });
    } else {
        cb = quote! {
            pyo3::callback::convert(_py, #name(#(#names),*))
        };
        slf_module = None;
    };
    let body = impl_arg_params(spec, None, cb)?;
    Ok(quote! {
        unsafe extern "C" fn #wrapper_ident(
            _slf: *mut pyo3::ffi::PyObject,
            _args: *mut pyo3::ffi::PyObject,
            _kwargs: *mut pyo3::ffi::PyObject) -> *mut pyo3::ffi::PyObject
        {
            const _LOCATION: &'static str = concat!(stringify!(#name), "()");
            pyo3::callback::handle_panic(|_py| {
                #slf_module
                let _args = _py.from_borrowed_ptr::<pyo3::types::PyTuple>(_args);
                let _kwargs: Option<&pyo3::types::PyDict> = _py.from_borrowed_ptr_or_opt(_kwargs);

                #body
            })
        }
    })
}
