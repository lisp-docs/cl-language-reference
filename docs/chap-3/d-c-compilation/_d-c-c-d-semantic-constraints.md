 



All *conforming programs* must obey the following constraints, which are designed to minimize the observable differences between compiled and interpreted programs: 



*•* Definitions of any referenced <ClLinks styled={true} term={"macro"}><i>macros</i></ClLinks> must be present in the *compilation environment*. Any <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that is a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> beginning with a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that does not name a *special operator* or a <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> defined in the *compilation environment* is treated by the compiler as a function call. 



*•* **Special** proclamations for *dynamic variables* must be made in the *compilation environment*. Any <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> for which there is no <ClLinks styled={true} term={"special"}><b>special</b></ClLinks> declaration or proclamation in the *compilation environment* is treated by the compiler as a *lexical binding*. 



*•* The definition of a function that is defined and declared <ClLinks styled={true} term={"inline"}><b>inline</b></ClLinks> in the *compilation environment* must be the same at run time. 



*•* Within a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> named *F*, the compiler may (but is not required to) assume that an apparent recursive call to a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> named *F* refers to the same definition of *F*, unless that function has been declared <ClLinks styled={true} term={"notinline"}><b>notinline</b></ClLinks>. The consequences of redefining such a recursively defined *function F* while it is executing are undefined. 



*•* A call within a file to a named function that is defined in the same file refers to that function, unless that function has been declared <ClLinks styled={true} term={"notinline"}><b>notinline</b></ClLinks>. The consequences are unspecified if functions are redefined individually at run time or multiply defined in the same file. 



*•* The argument syntax and number of return values for all functions whose <ClLinks styled={true} term={"ftype"}><b>ftype</b></ClLinks> is declared at compile time must remain the same at run time.  







*• Constant variables* defined in the *compilation environment* must have a <ClLinks styled={true} term={"similar"}><i>similar</i></ClLinks> value at run time. A reference to a *constant variable* in *source code* is equivalent to a reference to a *literal object* that is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of the *constant variable*. 



*•* Type definitions made with <ClLinks styled={true} term={"deftype"}><b>deftype</b></ClLinks> or <ClLinks styled={true} term={"defstruct"}><b>defstruct</b></ClLinks> in the *compilation environment* must retain the same definition at run time. Classes defined by <ClLinks styled={true} term={"defclass"}><b>defclass</b></ClLinks> in the *compilation environment* must be defined at run time to have the same *superclasses* and same <ClLinks styled={true} term={"metaclass"}><i>metaclass</i></ClLinks>. 



This implies that <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks>/<ClLinks styled={true} term={"supertype"}><i>supertype</i></ClLinks> relationships of *type specifiers* must not change between *compile time* and *run time*. 



*•* Type declarations present in the compilation <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> must accurately describe the corresponding values at run time; otherwise, the consequences are undefined. It is permissible for an unknown <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> to appear in a declaration at compile time, though a warning might be signaled in such a case. 



*•* Except in the situations explicitly listed above, a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> defined in the *evaluation environment* is permitted to have a different definition or a different <ClLinks styled={true} term={"signature"}><i>signature</i></ClLinks> at run time, and the run-time definition prevails. 



*Conforming programs* should not be written using any additional assumptions about consistency between the run-time <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> and the startup, evaluation, and compilation <ClLinks styled={true} term={"environment"}><i>environments</i></ClLinks>. 



Except where noted, when a compile-time and a run-time definition are different, one of the following occurs at run time: 



*•* an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> is signaled 



*•* the compile-time definition prevails 



*•* the run-time definition prevails 



If the <ClLinks styled={true} term={"compiler"}><i>compiler</i></ClLinks> processes a *function form* whose <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> is not defined at compile time, no error is signaled at compile time. 



