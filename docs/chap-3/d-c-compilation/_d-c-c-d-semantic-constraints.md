 



All <GlossaryTerm styled={true} term={"conforming program"}><i>conforming programs</i></GlossaryTerm> must obey the following constraints, which are designed to minimize the observable differences between compiled and interpreted programs: 



*•* Definitions of any referenced <GlossaryTerm  term={"macro"}><i>macros</i></GlossaryTerm> must be present in the <GlossaryTerm styled={true} term={"compilation environment"}><i>compilation environment</i></GlossaryTerm>. Any <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> that is a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> beginning with a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> that does not name a <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> or a <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm> defined in the <GlossaryTerm styled={true} term={"compilation environment"}><i>compilation environment</i></GlossaryTerm> is treated by the compiler as a function call. 



*•* **Special** proclamations for <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variables</i></GlossaryTerm> must be made in the <GlossaryTerm styled={true} term={"compilation environment"}><i>compilation environment</i></GlossaryTerm>. Any <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> for which there is no <DictionaryLink  term={"special"}><b>special</b></DictionaryLink> declaration or proclamation in the <GlossaryTerm styled={true} term={"compilation environment"}><i>compilation environment</i></GlossaryTerm> is treated by the compiler as a <GlossaryTerm styled={true} term={"lexical binding"}><i>lexical binding</i></GlossaryTerm>. 



*•* The definition of a function that is defined and declared <DictionaryLink  term={"inline"}><b>inline</b></DictionaryLink> in the <GlossaryTerm styled={true} term={"compilation environment"}><i>compilation environment</i></GlossaryTerm> must be the same at run time. 



*•* Within a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> named *F*, the compiler may (but is not required to) assume that an apparent recursive call to a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> named *F* refers to the same definition of *F*, unless that function has been declared <DictionaryLink  term={"notinline"}><b>notinline</b></DictionaryLink>. The consequences of redefining such a recursively defined *function F* while it is executing are undefined. 



*•* A call within a file to a named function that is defined in the same file refers to that function, unless that function has been declared <DictionaryLink  term={"notinline"}><b>notinline</b></DictionaryLink>. The consequences are unspecified if functions are redefined individually at run time or multiply defined in the same file. 



*•* The argument syntax and number of return values for all functions whose <DictionaryLink  term={"ftype"}><b>ftype</b></DictionaryLink> is declared at compile time must remain the same at run time.  







*• Constant variables* defined in the <GlossaryTerm styled={true} term={"compilation environment"}><i>compilation environment</i></GlossaryTerm> must have a <GlossaryTerm  term={"similar"}><i>similar</i></GlossaryTerm> value at run time. A reference to a <GlossaryTerm styled={true} term={"constant variable"}><i>constant variable</i></GlossaryTerm> in <GlossaryTerm styled={true} term={"source code"}><i>source code</i></GlossaryTerm> is equivalent to a reference to a *literal object* that is the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"constant variable"}><i>constant variable</i></GlossaryTerm>. 



*•* Type definitions made with <DictionaryLink  term={"deftype"}><b>deftype</b></DictionaryLink> or <DictionaryLink  term={"defstruct"}><b>defstruct</b></DictionaryLink> in the <GlossaryTerm styled={true} term={"compilation environment"}><i>compilation environment</i></GlossaryTerm> must retain the same definition at run time. Classes defined by <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> in the <GlossaryTerm styled={true} term={"compilation environment"}><i>compilation environment</i></GlossaryTerm> must be defined at run time to have the same *superclasses* and same <GlossaryTerm  term={"metaclass"}><i>metaclass</i></GlossaryTerm>. 



This implies that <GlossaryTerm  term={"subtype"}><i>subtype</i></GlossaryTerm>/<GlossaryTerm  term={"supertype"}><i>supertype</i></GlossaryTerm> relationships of <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm> must not change between <GlossaryTerm styled={true} term={"compile time"}><i>compile time</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"run time"}><i>run time</i></GlossaryTerm>. 



*•* Type declarations present in the compilation <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm> must accurately describe the corresponding values at run time; otherwise, the consequences are undefined. It is permissible for an unknown <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> to appear in a declaration at compile time, though a warning might be signaled in such a case. 



*•* Except in the situations explicitly listed above, a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> defined in the <GlossaryTerm styled={true} term={"evaluation environment"}><i>evaluation environment</i></GlossaryTerm> is permitted to have a different definition or a different <GlossaryTerm  term={"signature"}><i>signature</i></GlossaryTerm> at run time, and the run-time definition prevails. 



<GlossaryTerm styled={true} term={"conforming program"}><i>Conforming programs</i></GlossaryTerm> should not be written using any additional assumptions about consistency between the run-time <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm> and the startup, evaluation, and compilation <GlossaryTerm  term={"environment"}><i>environments</i></GlossaryTerm>. 



Except where noted, when a compile-time and a run-time definition are different, one of the following occurs at run time: 



*•* an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> is signaled 



*•* the compile-time definition prevails 



*•* the run-time definition prevails 



If the <GlossaryTerm  term={"compiler"}><i>compiler</i></GlossaryTerm> processes a <GlossaryTerm styled={true} term={"function form"}><i>function form</i></GlossaryTerm> whose <GlossaryTerm  term={"operator"}><i>operator</i></GlossaryTerm> is not defined at compile time, no error is signaled at compile time. 



