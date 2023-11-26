**3.2.5 Exceptional Situations in the Compiler** 

**compile** and **compile-file** are permitted to signal errors and warnings, including errors due to compile-time processing of (eval-when (:compile-toplevel) ...) forms, macro expansion, and conditions signaled by the compiler itself. 

*Conditions* of *type* **error** might be signaled by the compiler in situations where the compilation cannot proceed without intervention. 

In addition to situations for which the standard specifies that *conditions* of *type* **warning** must or might be signaled, warnings might be signaled in situations where the compiler can determine that the consequences are undefined or that a run-time error will be signaled. Examples of this situation are as follows: violating type declarations, altering or assigning the value of a constant defined with **defconstant**, calling built-in Lisp functions with a wrong number of arguments or malformed keyword argument lists, and using unrecognized declaration specifiers. 

The compiler is permitted to issue warnings about matters of programming style as conditions of *type* **style-warning**. Examples of this situation are as follows: redefining a function using a different argument list, calling a function with a wrong number of arguments, not declaring **ignore** of a local variable that is not referenced, and referencing a variable declared **ignore**. 

Both **compile** and **compile-file** are permitted (but not required) to *establish* a *handler* for *conditions* of *type* **error**. For example, they might signal a warning, and restart compilation from some *implementation-dependent* point in order to let the compilation proceed without manual intervention. 

Both **compile** and **compile-file** return three values, the second two indicating whether the source code being compiled contained errors and whether style warnings were issued. 

Some warnings might be deferred until the end of compilation. See **with-compilation-unit**. 





