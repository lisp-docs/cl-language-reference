 



The purpose of the *compiler macro* facility is to permit selective source code transformations as optimization advice to the <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> . When a *compound form* is being processed (as by the compiler), if the <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> names a *compiler macro* then the *compiler macro function* may be 



invoked on the form, and the resulting expansion recursively processed in preference to performing the usual processing on the original <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> according to its normal interpretation as a *function form* or *macro form*. 



A *compiler macro function*, like a *macro function*, is a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>: the entire call <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> and the <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>. Unlike an ordinary *macro function*, a *compiler macro function* can decline to provide an expansion merely by returning a value that is the <GlossaryTerm styled={true} term={"same"}><i>same</i></GlossaryTerm> as the original <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. The consequences are undefined if a *compiler macro function* destructively modifies any part of its <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> argument. 



The <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> passed to the compiler macro function can either be a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> whose <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> is the function name, or a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> whose <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> is <DictionaryLink styled={true} term={"funcall"}><b>funcall</b></DictionaryLink> and whose <GlossaryTerm styled={true} term={"cadr"}><i>cadr</i></GlossaryTerm> is a list (function <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>); note that this affects destructuring of the form argument by the *compiler macro function*. <DictionaryLink styled={true} term={"define-compiler-macro"}><b>define-compiler-macro</b></DictionaryLink> arranges for destructuring of arguments to be performed correctly for both possible formats. 



When <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink> chooses to expand a *top level form* that is a *compiler macro form*, the expansion is also treated as a *top level form* for the purposes of <DictionaryLink styled={true} term={"eval-when"}><b>eval-when</b></DictionaryLink> processing; see Section 3.2.3.1 (Processing of Top Level Forms). 



