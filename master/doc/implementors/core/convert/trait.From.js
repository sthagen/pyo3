(function() {var implementors = {};
implementors["pyo3"] = [{"text":"impl From&lt;PyErr&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;W:&nbsp;'static + Send + Sync + Debug&gt; From&lt;IntoInnerError&lt;W&gt;&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl From&lt;Infallible&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl From&lt;TryFromSliceError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl From&lt;ParseIntError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl From&lt;ParseFloatError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl From&lt;TryFromIntError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl From&lt;ParseBoolError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl From&lt;IntoStringError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl From&lt;NulError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl From&lt;Utf8Error&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl From&lt;FromUtf8Error&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl From&lt;FromUtf16Error&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl From&lt;DecodeUtf16Error&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl From&lt;AddrParseError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;PyDowncastError&lt;'a&gt;&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyBaseException&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyBaseException&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyBaseException&gt; for Py&lt;PyBaseException&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyException&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyException&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyException&gt; for Py&lt;PyException&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyStopAsyncIteration&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyStopAsyncIteration&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyStopAsyncIteration&gt; for Py&lt;PyStopAsyncIteration&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyStopIteration&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyStopIteration&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyStopIteration&gt; for Py&lt;PyStopIteration&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyGeneratorExit&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyGeneratorExit&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyGeneratorExit&gt; for Py&lt;PyGeneratorExit&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyArithmeticError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyArithmeticError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyArithmeticError&gt; for Py&lt;PyArithmeticError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyLookupError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyLookupError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyLookupError&gt; for Py&lt;PyLookupError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyAssertionError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyAssertionError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyAssertionError&gt; for Py&lt;PyAssertionError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyAttributeError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyAttributeError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyAttributeError&gt; for Py&lt;PyAttributeError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyBufferError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyBufferError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyBufferError&gt; for Py&lt;PyBufferError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyEOFError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyEOFError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyEOFError&gt; for Py&lt;PyEOFError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyFloatingPointError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyFloatingPointError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyFloatingPointError&gt; for Py&lt;PyFloatingPointError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyOSError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyOSError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyOSError&gt; for Py&lt;PyOSError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyImportError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyImportError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyImportError&gt; for Py&lt;PyImportError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyModuleNotFoundError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyModuleNotFoundError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyModuleNotFoundError&gt; for Py&lt;PyModuleNotFoundError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyIndexError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyIndexError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyIndexError&gt; for Py&lt;PyIndexError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyKeyError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyKeyError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyKeyError&gt; for Py&lt;PyKeyError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyKeyboardInterrupt&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyKeyboardInterrupt&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyKeyboardInterrupt&gt; for Py&lt;PyKeyboardInterrupt&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyMemoryError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyMemoryError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyMemoryError&gt; for Py&lt;PyMemoryError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyNameError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyNameError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyNameError&gt; for Py&lt;PyNameError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyOverflowError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyOverflowError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyOverflowError&gt; for Py&lt;PyOverflowError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyRuntimeError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyRuntimeError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyRuntimeError&gt; for Py&lt;PyRuntimeError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyRecursionError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyRecursionError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyRecursionError&gt; for Py&lt;PyRecursionError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyNotImplementedError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyNotImplementedError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyNotImplementedError&gt; for Py&lt;PyNotImplementedError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PySyntaxError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PySyntaxError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PySyntaxError&gt; for Py&lt;PySyntaxError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyReferenceError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyReferenceError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyReferenceError&gt; for Py&lt;PyReferenceError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PySystemError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PySystemError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PySystemError&gt; for Py&lt;PySystemError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PySystemExit&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PySystemExit&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PySystemExit&gt; for Py&lt;PySystemExit&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyTypeError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyTypeError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyTypeError&gt; for Py&lt;PyTypeError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyUnboundLocalError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyUnboundLocalError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyUnboundLocalError&gt; for Py&lt;PyUnboundLocalError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyUnicodeError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyUnicodeError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyUnicodeError&gt; for Py&lt;PyUnicodeError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyUnicodeDecodeError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyUnicodeDecodeError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyUnicodeDecodeError&gt; for Py&lt;PyUnicodeDecodeError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyUnicodeEncodeError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyUnicodeEncodeError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyUnicodeEncodeError&gt; for Py&lt;PyUnicodeEncodeError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyUnicodeTranslateError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyUnicodeTranslateError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyUnicodeTranslateError&gt; for Py&lt;PyUnicodeTranslateError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyValueError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyValueError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyValueError&gt; for Py&lt;PyValueError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyZeroDivisionError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyZeroDivisionError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyZeroDivisionError&gt; for Py&lt;PyZeroDivisionError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyBlockingIOError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyBlockingIOError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyBlockingIOError&gt; for Py&lt;PyBlockingIOError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyBrokenPipeError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyBrokenPipeError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyBrokenPipeError&gt; for Py&lt;PyBrokenPipeError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyChildProcessError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyChildProcessError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyChildProcessError&gt; for Py&lt;PyChildProcessError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyConnectionError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyConnectionError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyConnectionError&gt; for Py&lt;PyConnectionError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyConnectionAbortedError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyConnectionAbortedError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyConnectionAbortedError&gt; for Py&lt;PyConnectionAbortedError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyConnectionRefusedError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyConnectionRefusedError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyConnectionRefusedError&gt; for Py&lt;PyConnectionRefusedError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyConnectionResetError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyConnectionResetError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyConnectionResetError&gt; for Py&lt;PyConnectionResetError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyFileExistsError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyFileExistsError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyFileExistsError&gt; for Py&lt;PyFileExistsError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyFileNotFoundError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyFileNotFoundError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyFileNotFoundError&gt; for Py&lt;PyFileNotFoundError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyInterruptedError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyInterruptedError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyInterruptedError&gt; for Py&lt;PyInterruptedError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyIsADirectoryError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyIsADirectoryError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyIsADirectoryError&gt; for Py&lt;PyIsADirectoryError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyNotADirectoryError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyNotADirectoryError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyNotADirectoryError&gt; for Py&lt;PyNotADirectoryError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyPermissionError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyPermissionError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyPermissionError&gt; for Py&lt;PyPermissionError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyProcessLookupError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyProcessLookupError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyProcessLookupError&gt; for Py&lt;PyProcessLookupError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyTimeoutError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyTimeoutError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyTimeoutError&gt; for Py&lt;PyTimeoutError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyEnvironmentError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyEnvironmentError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyEnvironmentError&gt; for Py&lt;PyEnvironmentError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyIOError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyIOError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyIOError&gt; for Py&lt;PyIOError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ CancelledError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a CancelledError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ CancelledError&gt; for Py&lt;CancelledError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ InvalidStateError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a InvalidStateError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ InvalidStateError&gt; for Py&lt;InvalidStateError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ TimeoutError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a TimeoutError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ TimeoutError&gt; for Py&lt;TimeoutError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ IncompleteReadError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a IncompleteReadError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ IncompleteReadError&gt; for Py&lt;IncompleteReadError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ LimitOverrunError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a LimitOverrunError&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ LimitOverrunError&gt; for Py&lt;LimitOverrunError&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ QueueEmpty&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a QueueEmpty&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ QueueEmpty&gt; for Py&lt;QueueEmpty&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ QueueFull&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a QueueFull&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ QueueFull&gt; for Py&lt;QueueFull&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ herror&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a herror&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ herror&gt; for Py&lt;herror&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ gaierror&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a gaierror&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ gaierror&gt; for Py&lt;gaierror&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ timeout&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a timeout&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ timeout&gt; for Py&lt;timeout&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T, '_&gt; From&lt;&amp;'_ T&gt; for PyObject <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: AsPyPointer + PyNativeType,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; From&lt;Py&lt;T&gt;&gt; for PyObject <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: AsRef&lt;PyAny&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T, '_&gt; From&lt;&amp;'_ PyCell&lt;T&gt;&gt; for Py&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: PyClass,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; From&lt;PyRef&lt;'a, T&gt;&gt; for Py&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: PyClass,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; From&lt;PyRefMut&lt;'a, T&gt;&gt; for Py&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: PyClass,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PanicException&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PanicException&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PanicException&gt; for Py&lt;PanicException&gt;","synthetic":false,"types":[]},{"text":"impl From&lt;PyBorrowError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl From&lt;PyBorrowMutError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; From&lt;T&gt; for PyClassInitializer&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: PyClass,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::BaseType: PyTypeInfo&lt;Initializer = PyNativeTypeInitializer&lt;T::BaseType&gt;&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;S, B&gt; From&lt;(S, B)&gt; for PyClassInitializer&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: PyClass + PyTypeInfo&lt;BaseType = B&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::BaseLayout: PySizedLayout&lt;B&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: PyClass + PyTypeInfo&lt;Initializer = PyClassInitializer&lt;B&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::BaseType: PyTypeInfo&lt;Initializer = PyNativeTypeInitializer&lt;B::BaseType&gt;&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyBool&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyBool&gt; for Py&lt;PyBool&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyByteArray&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyByteArray&gt; for Py&lt;PyByteArray&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyBytes&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyBytes&gt; for Py&lt;PyBytes&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyComplex&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyComplex&gt; for Py&lt;PyComplex&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyDate&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyDate&gt; for Py&lt;PyDate&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyDateTime&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyDateTime&gt; for Py&lt;PyDateTime&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyTime&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyTime&gt; for Py&lt;PyTime&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyTzInfo&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyTzInfo&gt; for Py&lt;PyTzInfo&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyDelta&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyDelta&gt; for Py&lt;PyDelta&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyDict&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyDict&gt; for Py&lt;PyDict&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyFloat&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyFloat&gt; for Py&lt;PyFloat&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyCFunction&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyCFunction&gt; for Py&lt;PyCFunction&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyFunction&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyFunction&gt; for Py&lt;PyFunction&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyList&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyList&gt; for Py&lt;PyList&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyModule&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyModule&gt; for Py&lt;PyModule&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyLong&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyLong&gt; for Py&lt;PyLong&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PySet&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PySet&gt; for Py&lt;PySet&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyFrozenSet&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyFrozenSet&gt; for Py&lt;PyFrozenSet&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PySlice&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PySlice&gt; for Py&lt;PySlice&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyString&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyString&gt; for Py&lt;PyString&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyTuple&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyTuple&gt; for Py&lt;PyTuple&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyType&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyType&gt; for Py&lt;PyType&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()