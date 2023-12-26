 



All <GlossaryTerm styled={true} term={"conforming program"}><i>conforming programs</i></GlossaryTerm> must obey the following constraints, which are designed to minimize the observable differences between compiled and interpreted programs: 



*•* Definitions of any referenced <ClLinks  term={"macro"}><i>macros</i></ClLinks> must be present in the <GlossaryTerm styled={true} term={"compilation environment"}><i>compilation environment</i></GlossaryTerm>. Any <ClLinks  term={"form"}><i>form</i></ClLinks> that is a <ClLinks  term={"list"}><i>list</i></ClLinks> beginning with a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> that does not name a <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> or a <ClLinks  term={"macro"}><i>macro</i></ClLinks> defined in the <GlossaryTerm styled={true} term={"compilation environment"}><i>compilation environment</i></GlossaryTerm> is treated by the compiler as a function call. 



*•* **Special** proclamations for <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variables</i></GlossaryTerm> must be made in the <GlossaryTerm styled={true} term={"compilation environment"}><i>compilation environment</i></GlossaryTerm>. Any <ClLinks  term={"binding"}><i>binding</i></ClLinks> for which there is no <ClLinks  term={"special"}><b>special</b></ClLinks> declaration or proclamation in the <GlossaryTerm styled={true} term={"compilation environment"}><i>compilation environment</i></GlossaryTerm> is treated by the compiler as a <GlossaryTerm styled={true} term={"lexical binding"}><i>lexical binding</i></GlossaryTerm>. 



*•* The definition of a function that is defined and declared <ClLinks  term={"inline"}><b>inline</b></ClLinks> in the <GlossaryTerm styled={true} term={"compilation environment"}><i>compilation environment</i></GlossaryTerm> must be the same at run time. 



*•* Within a <ClLinks  term={"function"}><i>function</i></ClLinks> named *F*, the compiler may (but is not required to) assume that an apparent recursive call to a <ClLinks  term={"function"}><i>function</i></ClLinks> named *F* refers to the same definition of *F*, unless that function has been declared <ClLinks  term={"notinline"}><b>notinline</b></ClLinks>. The consequences of redefining such a recursively defined *function F* while it is executing are undefined. 



*•* A call within a file to a named function that is defined in the same file refers to that function, unless that function has been declared <ClLinks  term={"notinline"}><b>notinline</b></ClLinks>. The consequences are unspecified if functions are redefined individually at run time or multiply defined in the same file. 



*•* The argument syntax and number of return values for all functions whose <ClLinks  term={"ftype"}><b>ftype</b></ClLinks> is declared at compile time must remain the same at run time.  







*• Constant variables* defined in the <GlossaryTerm styled={true} term={"compilation environment"}><i>compilation environment</i></GlossaryTerm> must have a <ClLinks  term={"similar"}><i>similar</i></ClLinks> value at run time. A reference to a <GlossaryTerm styled={true} term={"constant variable"}><i>constant variable</i></GlossaryTerm> in <GlossaryTerm styled={true} term={"source code"}><i>source code</i></GlossaryTerm> is equivalent to a reference to a *literal object* that is the <ClLinks  term={"value"}><i>value</i></ClLinks> of the <GlossaryTerm styled={true} term={"constant variable"}><i>constant variable</i></GlossaryTerm>. 



*•* Type definitions made with <ClLinks  term={"deftype"}><b>deftype</b></ClLinks> or <ClLinks  term={"defstruct"}><b>defstruct</b></ClLinks> in the <GlossaryTerm styled={true} term={"compilation environment"}><i>compilation environment</i></GlossaryTerm> must retain the same definition at run time. Classes defined by <ClLinks  term={"defclass"}><b>defclass</b></ClLinks> in the <GlossaryTerm styled={true} term={"compilation environment"}><i>compilation environment</i></GlossaryTerm> must be defined at run time to have the same *superclasses* and same <ClLinks  term={"metaclass"}><i>metaclass</i></ClLinks>. 



This implies that <ClLinks  term={"subtype"}><i>subtype</i></ClLinks>/<ClLinks  term={"supertype"}><i>supertype</i></ClLinks> relationships of <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm> must not change between <GlossaryTerm styled={true} term={"compile time"}><i>compile time</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"run time"}><i>run time</i></GlossaryTerm>. 



*•* Type declarations present in the compilation <ClLinks  term={"environment"}><i>environment</i></ClLinks> must accurately describe the corresponding values at run time; otherwise, the consequences are undefined. It is permissible for an unknown <ClLinks  term={"type"}><i>type</i></ClLinks> to appear in a declaration at compile time, though a warning might be signaled in such a case. 



*•* Except in the situations explicitly listed above, a <ClLinks  term={"function"}><i>function</i></ClLinks> defined in the <GlossaryTerm styled={true} term={"evaluation environment"}><i>evaluation environment</i></GlossaryTerm> is permitted to have a different definition or a different <ClLinks  term={"signature"}><i>signature</i></ClLinks> at run time, and the run-time definition prevails. 



<GlossaryTerm styled={true} term={"conforming program"}><i>Conforming programs</i></GlossaryTerm> should not be written using any additional assumptions about consistency between the run-time <ClLinks  term={"environment"}><i>environment</i></ClLinks> and the startup, evaluation, and compilation <ClLinks  term={"environment"}><i>environments</i></ClLinks>. 



Except where noted, when a compile-time and a run-time definition are different, one of the following occurs at run time: 



*•* an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"error"}><b>error</b></ClLinks> is signaled 



*•* the compile-time definition prevails 



*•* the run-time definition prevails 



If the <ClLinks  term={"compiler"}><i>compiler</i></ClLinks> processes a <GlossaryTerm styled={true} term={"function form"}><i>function form</i></GlossaryTerm> whose <ClLinks  term={"operator"}><i>operator</i></ClLinks> is not defined at compile time, no error is signaled at compile time. 



