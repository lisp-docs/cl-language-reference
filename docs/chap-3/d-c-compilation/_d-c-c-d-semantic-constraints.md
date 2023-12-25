 



All *conforming programs* must obey the following constraints, which are designed to minimize the observable differences between compiled and interpreted programs: 



*•* Definitions of any referenced <GlossaryTerm styled={true} term={"macro"}><i>macros</i></GlossaryTerm> must be present in the *compilation environment*. Any <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> beginning with a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that does not name a *special operator* or a <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> defined in the *compilation environment* is treated by the compiler as a function call. 



*•* **Special** proclamations for *dynamic variables* must be made in the *compilation environment*. Any <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> for which there is no <DictionaryLink styled={true} term={"special"}><b>special</b></DictionaryLink> declaration or proclamation in the *compilation environment* is treated by the compiler as a *lexical binding*. 



*•* The definition of a function that is defined and declared <DictionaryLink styled={true} term={"inline"}><b>inline</b></DictionaryLink> in the *compilation environment* must be the same at run time. 



*•* Within a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> named *F*, the compiler may (but is not required to) assume that an apparent recursive call to a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> named *F* refers to the same definition of *F*, unless that function has been declared <DictionaryLink styled={true} term={"notinline"}><b>notinline</b></DictionaryLink>. The consequences of redefining such a recursively defined *function F* while it is executing are undefined. 



*•* A call within a file to a named function that is defined in the same file refers to that function, unless that function has been declared <DictionaryLink styled={true} term={"notinline"}><b>notinline</b></DictionaryLink>. The consequences are unspecified if functions are redefined individually at run time or multiply defined in the same file. 



*•* The argument syntax and number of return values for all functions whose <DictionaryLink styled={true} term={"ftype"}><b>ftype</b></DictionaryLink> is declared at compile time must remain the same at run time.  







*• Constant variables* defined in the *compilation environment* must have a <GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm> value at run time. A reference to a *constant variable* in *source code* is equivalent to a reference to a *literal object* that is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of the *constant variable*. 



*•* Type definitions made with <DictionaryLink styled={true} term={"deftype"}><b>deftype</b></DictionaryLink> or <DictionaryLink styled={true} term={"defstruct"}><b>defstruct</b></DictionaryLink> in the *compilation environment* must retain the same definition at run time. Classes defined by <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> in the *compilation environment* must be defined at run time to have the same *superclasses* and same <GlossaryTerm styled={true} term={"metaclass"}><i>metaclass</i></GlossaryTerm>. 



This implies that <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm>/<GlossaryTerm styled={true} term={"supertype"}><i>supertype</i></GlossaryTerm> relationships of *type specifiers* must not change between *compile time* and *run time*. 



*•* Type declarations present in the compilation <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> must accurately describe the corresponding values at run time; otherwise, the consequences are undefined. It is permissible for an unknown <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> to appear in a declaration at compile time, though a warning might be signaled in such a case. 



*•* Except in the situations explicitly listed above, a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> defined in the *evaluation environment* is permitted to have a different definition or a different <GlossaryTerm styled={true} term={"signature"}><i>signature</i></GlossaryTerm> at run time, and the run-time definition prevails. 



*Conforming programs* should not be written using any additional assumptions about consistency between the run-time <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> and the startup, evaluation, and compilation <GlossaryTerm styled={true} term={"environment"}><i>environments</i></GlossaryTerm>. 



Except where noted, when a compile-time and a run-time definition are different, one of the following occurs at run time: 



*•* an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> is signaled 



*•* the compile-time definition prevails 



*•* the run-time definition prevails 



If the <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> processes a *function form* whose <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> is not defined at compile time, no error is signaled at compile time. 



