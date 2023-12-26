 



The <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink> performs compilation of <ClLinks  term={"form"}><i>forms</i></ClLinks> in a file following the rules specified in Section 3.2.2 (Compilation Semantics), and produces an output file that can be loaded by using <DictionaryLink  term={"load"}><b>load</b></DictionaryLink>. 



Normally, the <GlossaryTerm styled={true} term={"top level form"}><i>top level forms</i></GlossaryTerm> appearing in a file compiled with <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink> are evaluated only when the resulting compiled file is loaded, and not when the file is compiled. However, it is typically the case that some forms in the file need to be evaluated at compile time so the remainder of the file can be read and compiled correctly.  







The <DictionaryLink  term={"eval-when"}><b>eval-when</b></DictionaryLink> <GlossaryTerm styled={true} term={"special form"}><i>special form</i></GlossaryTerm> can be used to control whether a <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm> is evaluated at compile time, load time, or both. It is possible to specify any of three situations with <DictionaryLink  term={"eval-when"}><b>eval-when</b></DictionaryLink>, denoted by the symbols :compile-toplevel, :load-toplevel, and :execute. For top level <DictionaryLink  term={"eval-when"}><b>eval-when</b></DictionaryLink> forms, :compile-toplevel specifies that the compiler must evaluate the body at compile time, and :load-toplevel specifies that the compiler must arrange to evaluate the body at load time. For non-top level <DictionaryLink  term={"eval-when"}><b>eval-when</b></DictionaryLink> forms, :execute specifies that the body must be executed in the run-time <ClLinks  term={"environment"}><i>environment</i></ClLinks>. 



The behavior of this <ClLinks  term={"form"}><i>form</i></ClLinks> can be more precisely understood in terms of a model of how <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink> processes forms in a file to be compiled. There are two processing modes, called “not-compile-time” and “compile-time-too”. 



Successive forms are read from the file by <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink> and processed in not-compile-time mode; in this mode, <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink> arranges for forms to be evaluated only at load time and not at compile time. When <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink> is in compile-time-too mode, forms are evaluated both at compile time and load time. 



