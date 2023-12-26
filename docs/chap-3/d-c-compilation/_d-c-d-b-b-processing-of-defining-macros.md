 



Defining <ClLinks  term={"macro"}><i>macros</i></ClLinks> (such as <DictionaryLink  term={"defmacro"}><b>defmacro</b></DictionaryLink> or <DictionaryLink  term={"defvar"}><b>defvar</b></DictionaryLink>) appearing within a file being processed by <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink> normally have compile-time side effects which affect how subsequent <ClLinks  term={"form"}><i>forms</i></ClLinks> in the same <ClLinks  term={"file"}><i>file</i></ClLinks> are compiled. A convenient model for explaining how these side effects happen is that the defining macro expands into one or more <DictionaryLink  term={"eval-when"}><b>eval-when</b></DictionaryLink> <ClLinks  term={"form"}><i>forms</i></ClLinks>, and that the calls which cause the compile-time side effects to happen appear in the body of an (eval-when (:compile-toplevel) ...) <ClLinks  term={"form"}><i>form</i></ClLinks>. 



The compile-time side effects may cause information about the definition to be stored differently than if the defining macro had been processed in the ‘normal’ way (either interpretively or by loading the compiled file). 



In particular, the information stored by the defining <ClLinks  term={"macro"}><i>macros</i></ClLinks> at compile time might or might not be available to the interpreter (either during or after compilation), or during subsequent calls to the <ClLinks  term={"compiler"}><i>compiler</i></ClLinks> . For example, the following code is nonportable because it assumes that the <ClLinks  term={"compiler"}><i>compiler</i></ClLinks> stores the macro definition of foo where it is available to the interpreter: 



(defmacro foo (x) ‘(car ,x)) 



(eval-when (:execute :compile-toplevel :load-toplevel) 



(print (foo ’(a b c)))) 



A portable way to do the same thing would be to include the macro definition inside the <DictionaryLink  term={"eval-when"}><b>eval-when</b></DictionaryLink> <ClLinks  term={"form"}><i>form</i></ClLinks>, as in: 



(eval-when (:execute :compile-toplevel :load-toplevel) 



(defmacro foo (x) ‘(car ,x)) 



(print (foo ’(a b c)))) 



Figure 3–8 lists macros that make definitions available both in the compilation and run-time <ClLinks  term={"environment"}><i>environments</i></ClLinks>. It is not specified whether definitions made available in the <GlossaryTerm styled={true} term={"compilation environment"}><i>compilation environment</i></GlossaryTerm> are available in the evaluation <ClLinks  term={"environment"}><i>environment</i></ClLinks>, nor is it specified whether they are available in subsequent compilation units or subsequent invocations of the compiler. As with <DictionaryLink  term={"eval-when"}><b>eval-when</b></DictionaryLink>, these compile-time side effects happen only when the defining macros appear at top level. 



|**declaim define-modify-macro defsetf defclass define-setf-expander defstruct defconstant defmacro deftype define-compiler-macro defpackage defvar define-condition defparameter**|

| :- |





**Figure 3–8. Defining Macros That Affect the Compile-Time Environment**  







