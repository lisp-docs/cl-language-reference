**3.2.3.1.1 Processing of Defining Macros** 

Defining *macros* (such as **defmacro** or **defvar**) appearing within a file being processed by **compile-file** normally have compile-time side effects which affect how subsequent *forms* in the same *file* are compiled. A convenient model for explaining how these side effects happen is that the defining macro expands into one or more **eval-when** *forms*, and that the calls which cause the compile-time side effects to happen appear in the body of an (eval-when (:compile-toplevel) ...) *form*. 

The compile-time side effects may cause information about the definition to be stored differently than if the defining macro had been processed in the ‘normal’ way (either interpretively or by loading the compiled file). 

In particular, the information stored by the defining *macros* at compile time might or might not be available to the interpreter (either during or after compilation), or during subsequent calls to the *compiler* . For example, the following code is nonportable because it assumes that the *compiler* stores the macro definition of foo where it is available to the interpreter: 

(defmacro foo (x) ‘(car ,x)) 

(eval-when (:execute :compile-toplevel :load-toplevel) 

(print (foo ’(a b c)))) 

A portable way to do the same thing would be to include the macro definition inside the **eval-when** *form*, as in: 

(eval-when (:execute :compile-toplevel :load-toplevel) 

(defmacro foo (x) ‘(car ,x)) 

(print (foo ’(a b c)))) 

Figure 3–8 lists macros that make definitions available both in the compilation and run-time *environments*. It is not specified whether definitions made available in the *compilation environment* are available in the evaluation *environment*, nor is it specified whether they are available in subsequent compilation units or subsequent invocations of the compiler. As with **eval-when**, these compile-time side effects happen only when the defining macros appear at top level. 

|**declaim define-modify-macro defsetf defclass define-setf-expander defstruct defconstant defmacro deftype define-compiler-macro defpackage defvar define-condition defparameter**|
| :- |


**Figure 3–8. Defining Macros That Affect the Compile-Time Environment**  



