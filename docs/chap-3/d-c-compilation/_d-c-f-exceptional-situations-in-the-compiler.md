 



<ClLinks  term={"compile"}><b>compile</b></ClLinks> and <ClLinks  term={"compile-file"}><b>compile-file</b></ClLinks> are permitted to signal errors and warnings, including errors due to compile-time processing of (eval-when (:compile-toplevel) ...) forms, macro expansion, and conditions signaled by the compiler itself. 



<ClLinks  term={"condition"}><i>Conditions</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"error"}><b>error</b></ClLinks> might be signaled by the compiler in situations where the compilation cannot proceed without intervention. 



In addition to situations for which the standard specifies that <ClLinks  term={"condition"}><i>conditions</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"warning"}><b>warning</b></ClLinks> must or might be signaled, warnings might be signaled in situations where the compiler can determine that the consequences are undefined or that a run-time error will be signaled. Examples of this situation are as follows: violating type declarations, altering or assigning the value of a constant defined with <ClLinks  term={"defconstant"}><b>defconstant</b></ClLinks>, calling built-in Lisp functions with a wrong number of arguments or malformed keyword argument lists, and using unrecognized declaration specifiers. 



The compiler is permitted to issue warnings about matters of programming style as conditions of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"style-warning"}><b>style-warning</b></ClLinks>. Examples of this situation are as follows: redefining a function using a different argument list, calling a function with a wrong number of arguments, not declaring <ClLinks  term={"ignore"}><b>ignore</b></ClLinks> of a local variable that is not referenced, and referencing a variable declared <ClLinks  term={"ignore"}><b>ignore</b></ClLinks>. 



Both <ClLinks  term={"compile"}><b>compile</b></ClLinks> and <ClLinks  term={"compile-file"}><b>compile-file</b></ClLinks> are permitted (but not required) to <ClLinks  term={"establish"}><i>establish</i></ClLinks> a <ClLinks  term={"handler"}><i>handler</i></ClLinks> for <ClLinks  term={"condition"}><i>conditions</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"error"}><b>error</b></ClLinks>. For example, they might signal a warning, and restart compilation from some <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> point in order to let the compilation proceed without manual intervention. 



Both <ClLinks  term={"compile"}><b>compile</b></ClLinks> and <ClLinks  term={"compile-file"}><b>compile-file</b></ClLinks> return three values, the second two indicating whether the source code being compiled contained errors and whether style warnings were issued. 



Some warnings might be deferred until the end of compilation. See <ClLinks  term={"with-compilation-unit"}><b>with-compilation-unit</b></ClLinks>. 











