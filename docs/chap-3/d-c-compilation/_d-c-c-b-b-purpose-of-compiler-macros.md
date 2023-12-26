 



The purpose of the <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macro</i></GlossaryTerm> facility is to permit selective source code transformations as optimization advice to the <ClLinks  term={"compiler"}><i>compiler</i></ClLinks> . When a <GlossaryTerm styled={true} term={"compound form"}><i>compound form</i></GlossaryTerm> is being processed (as by the compiler), if the <ClLinks  term={"operator"}><i>operator</i></ClLinks> names a <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macro</i></GlossaryTerm> then the <GlossaryTerm styled={true} term={"compiler macro function"}><i>compiler macro function</i></GlossaryTerm> may be 



invoked on the form, and the resulting expansion recursively processed in preference to performing the usual processing on the original <ClLinks  term={"form"}><i>form</i></ClLinks> according to its normal interpretation as a <GlossaryTerm styled={true} term={"function form"}><i>function form</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm>. 



A <GlossaryTerm styled={true} term={"compiler macro function"}><i>compiler macro function</i></GlossaryTerm>, like a <GlossaryTerm styled={true} term={"macro function"}><i>macro function</i></GlossaryTerm>, is a <ClLinks  term={"function"}><i>function</i></ClLinks> of two <ClLinks  term={"argument"}><i>arguments</i></ClLinks>: the entire call <ClLinks  term={"form"}><i>form</i></ClLinks> and the <ClLinks  term={"environment"}><i>environment</i></ClLinks>. Unlike an ordinary <GlossaryTerm styled={true} term={"macro function"}><i>macro function</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"compiler macro function"}><i>compiler macro function</i></GlossaryTerm> can decline to provide an expansion merely by returning a value that is the <ClLinks  term={"same"}><i>same</i></ClLinks> as the original <ClLinks  term={"form"}><i>form</i></ClLinks>. The consequences are undefined if a <GlossaryTerm styled={true} term={"compiler macro function"}><i>compiler macro function</i></GlossaryTerm> destructively modifies any part of its <ClLinks  term={"form"}><i>form</i></ClLinks> argument. 



The <ClLinks  term={"form"}><i>form</i></ClLinks> passed to the compiler macro function can either be a <ClLinks  term={"list"}><i>list</i></ClLinks> whose <ClLinks  term={"car"}><i>car</i></ClLinks> is the function name, or a <ClLinks  term={"list"}><i>list</i></ClLinks> whose <ClLinks  term={"car"}><i>car</i></ClLinks> is <DictionaryLink  term={"funcall"}><b>funcall</b></DictionaryLink> and whose <ClLinks  term={"cadr"}><i>cadr</i></ClLinks> is a list (function <ClLinks  term={"name"}><i>name</i></ClLinks>); note that this affects destructuring of the form argument by the <GlossaryTerm styled={true} term={"compiler macro function"}><i>compiler macro function</i></GlossaryTerm>. <DictionaryLink  term={"define-compiler-macro"}><b>define-compiler-macro</b></DictionaryLink> arranges for destructuring of arguments to be performed correctly for both possible formats. 



When <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink> chooses to expand a <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm> that is a <GlossaryTerm styled={true} term={"compiler macro form"}><i>compiler macro form</i></GlossaryTerm>, the expansion is also treated as a <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm> for the purposes of <DictionaryLink  term={"eval-when"}><b>eval-when</b></DictionaryLink> processing; see Section 3.2.3.1 (Processing of Top Level Forms). 



