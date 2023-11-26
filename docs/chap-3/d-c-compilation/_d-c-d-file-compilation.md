**3.2.3 File Compilation** 

The *function* **compile-file** performs compilation of *forms* in a file following the rules specified in Section 3.2.2 (Compilation Semantics), and produces an output file that can be loaded by using **load**. 

Normally, the *top level forms* appearing in a file compiled with **compile-file** are evaluated only when the resulting compiled file is loaded, and not when the file is compiled. However, it is typically the case that some forms in the file need to be evaluated at compile time so the remainder of the file can be read and compiled correctly.  



The **eval-when** *special form* can be used to control whether a *top level form* is evaluated at compile time, load time, or both. It is possible to specify any of three situations with **eval-when**, denoted by the symbols :compile-toplevel, :load-toplevel, and :execute. For top level **eval-when** forms, :compile-toplevel specifies that the compiler must evaluate the body at compile time, and :load-toplevel specifies that the compiler must arrange to evaluate the body at load time. For non-top level **eval-when** forms, :execute specifies that the body must be executed in the run-time *environment*. 

The behavior of this *form* can be more precisely understood in terms of a model of how **compile-file** processes forms in a file to be compiled. There are two processing modes, called “not-compile-time” and “compile-time-too”. 

Successive forms are read from the file by **compile-file** and processed in not-compile-time mode; in this mode, **compile-file** arranges for forms to be evaluated only at load time and not at compile time. When **compile-file** is in compile-time-too mode, forms are evaluated both at compile time and load time. 

