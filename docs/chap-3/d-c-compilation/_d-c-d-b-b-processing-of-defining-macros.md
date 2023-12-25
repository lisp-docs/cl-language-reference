 



Defining <GlossaryTerm styled={true} term={"macro"}><i>macros</i></GlossaryTerm> (such as <DictionaryLink styled={true} term={"defmacro"}><b>defmacro</b></DictionaryLink> or <DictionaryLink styled={true} term={"defvar"}><b>defvar</b></DictionaryLink>) appearing within a file being processed by <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink> normally have compile-time side effects which affect how subsequent <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> in the same <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> are compiled. A convenient model for explaining how these side effects happen is that the defining macro expands into one or more <DictionaryLink styled={true} term={"eval-when"}><b>eval-when</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>, and that the calls which cause the compile-time side effects to happen appear in the body of an (eval-when (:compile-toplevel) ...) <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



The compile-time side effects may cause information about the definition to be stored differently than if the defining macro had been processed in the ‘normal’ way (either interpretively or by loading the compiled file). 



In particular, the information stored by the defining <GlossaryTerm styled={true} term={"macro"}><i>macros</i></GlossaryTerm> at compile time might or might not be available to the interpreter (either during or after compilation), or during subsequent calls to the <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> . For example, the following code is nonportable because it assumes that the <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> stores the macro definition of foo where it is available to the interpreter: 



(defmacro foo (x) ‘(car ,x)) 



(eval-when (:execute :compile-toplevel :load-toplevel) 



(print (foo ’(a b c)))) 



A portable way to do the same thing would be to include the macro definition inside the <DictionaryLink styled={true} term={"eval-when"}><b>eval-when</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, as in: 



(eval-when (:execute :compile-toplevel :load-toplevel) 



(defmacro foo (x) ‘(car ,x)) 



(print (foo ’(a b c)))) 



Figure 3–8 lists macros that make definitions available both in the compilation and run-time <GlossaryTerm styled={true} term={"environment"}><i>environments</i></GlossaryTerm>. It is not specified whether definitions made available in the *compilation environment* are available in the evaluation <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>, nor is it specified whether they are available in subsequent compilation units or subsequent invocations of the compiler. As with <DictionaryLink styled={true} term={"eval-when"}><b>eval-when</b></DictionaryLink>, these compile-time side effects happen only when the defining macros appear at top level. 



|**declaim define-modify-macro defsetf defclass define-setf-expander defstruct defconstant defmacro deftype define-compiler-macro defpackage defvar define-condition defparameter**|

| :- |





**Figure 3–8. Defining Macros That Affect the Compile-Time Environment**  







