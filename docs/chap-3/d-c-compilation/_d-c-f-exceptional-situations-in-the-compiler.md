 



<DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink> and <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink> are permitted to signal errors and warnings, including errors due to compile-time processing of (eval-when (:compile-toplevel) ...) forms, macro expansion, and conditions signaled by the compiler itself. 



<GlossaryTerm styled={true} term={"condition"}><i>Conditions</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> might be signaled by the compiler in situations where the compilation cannot proceed without intervention. 



In addition to situations for which the standard specifies that <GlossaryTerm styled={true} term={"condition"}><i>conditions</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"warning"}><b>warning</b></DictionaryLink> must or might be signaled, warnings might be signaled in situations where the compiler can determine that the consequences are undefined or that a run-time error will be signaled. Examples of this situation are as follows: violating type declarations, altering or assigning the value of a constant defined with <DictionaryLink styled={true} term={"defconstant"}><b>defconstant</b></DictionaryLink>, calling built-in Lisp functions with a wrong number of arguments or malformed keyword argument lists, and using unrecognized declaration specifiers. 



The compiler is permitted to issue warnings about matters of programming style as conditions of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"style-warning"}><b>style-warning</b></DictionaryLink>. Examples of this situation are as follows: redefining a function using a different argument list, calling a function with a wrong number of arguments, not declaring <DictionaryLink styled={true} term={"ignore"}><b>ignore</b></DictionaryLink> of a local variable that is not referenced, and referencing a variable declared <DictionaryLink styled={true} term={"ignore"}><b>ignore</b></DictionaryLink>. 



Both <DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink> and <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink> are permitted (but not required) to <GlossaryTerm styled={true} term={"establish"}><i>establish</i></GlossaryTerm> a <GlossaryTerm styled={true} term={"handler"}><i>handler</i></GlossaryTerm> for <GlossaryTerm styled={true} term={"condition"}><i>conditions</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink>. For example, they might signal a warning, and restart compilation from some <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> point in order to let the compilation proceed without manual intervention. 



Both <DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink> and <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink> return three values, the second two indicating whether the source code being compiled contained errors and whether style warnings were issued. 



Some warnings might be deferred until the end of compilation. See <DictionaryLink styled={true} term={"with-compilation-unit"}><b>with-compilation-unit</b></DictionaryLink>. 











