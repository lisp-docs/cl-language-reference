 
<DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink> and <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink> are permitted to signal errors and warnings, including errors due to compile-time processing of `(eval-when (:compile-toplevel) ...)` forms, macro expansion, and conditions signaled by the compiler itself.



<GlossaryTerm  term={"condition"}><i>Conditions</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> might be signaled by the compiler in situations where the compilation cannot proceed without intervention. 



In addition to situations for which the standard specifies that <GlossaryTerm  term={"condition"}><i>conditions</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"warning"}><b>warning</b></DictionaryLink> must or might be signaled, warnings might be signaled in situations where the compiler can determine that the consequences are undefined or that a run-time error will be signaled. Examples of this situation are as follows: violating type declarations, altering or assigning the value of a constant defined with <DictionaryLink  term={"defconstant"}><b>defconstant</b></DictionaryLink>, calling built-in Lisp functions with a wrong number of arguments or malformed keyword argument lists, and using unrecognized declaration specifiers. 



The compiler is permitted to issue warnings about matters of programming style as conditions of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"style-warning"}><b>style-warning</b></DictionaryLink>. Examples of this situation are as follows: redefining a function using a different argument list, calling a function with a wrong number of arguments, not declaring <DictionaryLink  term={"ignore"}><b>ignore</b></DictionaryLink> of a local variable that is not referenced, and referencing a variable declared <DictionaryLink  term={"ignore"}><b>ignore</b></DictionaryLink>. 



Both <DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink> and <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink> are permitted (but not required) to <GlossaryTerm  term={"establish"}><i>establish</i></GlossaryTerm> a <GlossaryTerm  term={"handler"}><i>handler</i></GlossaryTerm> for <GlossaryTerm  term={"condition"}><i>conditions</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink>. For example, they might signal a warning, and restart compilation from some <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> point in order to let the compilation proceed without manual intervention. 



Both <DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink> and <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink> return three values, the second two indicating whether the source code being compiled contained errors and whether style warnings were issued. 



Some warnings might be deferred until the end of compilation. See <DictionaryLink  term={"with-compilation-unit"}><b>with-compilation-unit</b></DictionaryLink>.

