 



The purpose of the *compiler macro* facility is to permit selective source code transformations as optimization advice to the <ClLinks  term={"compiler"}><i>compiler</i></ClLinks> . When a *compound form* is being processed (as by the compiler), if the <ClLinks  term={"operator"}><i>operator</i></ClLinks> names a *compiler macro* then the *compiler macro function* may be 



invoked on the form, and the resulting expansion recursively processed in preference to performing the usual processing on the original <ClLinks  term={"form"}><i>form</i></ClLinks> according to its normal interpretation as a *function form* or *macro form*. 



A *compiler macro function*, like a *macro function*, is a <ClLinks  term={"function"}><i>function</i></ClLinks> of two <ClLinks  term={"argument"}><i>arguments</i></ClLinks>: the entire call <ClLinks  term={"form"}><i>form</i></ClLinks> and the <ClLinks  term={"environment"}><i>environment</i></ClLinks>. Unlike an ordinary *macro function*, a *compiler macro function* can decline to provide an expansion merely by returning a value that is the <ClLinks  term={"same"}><i>same</i></ClLinks> as the original <ClLinks  term={"form"}><i>form</i></ClLinks>. The consequences are undefined if a *compiler macro function* destructively modifies any part of its <ClLinks  term={"form"}><i>form</i></ClLinks> argument. 



The <ClLinks  term={"form"}><i>form</i></ClLinks> passed to the compiler macro function can either be a <ClLinks  term={"list"}><i>list</i></ClLinks> whose <ClLinks  term={"car"}><i>car</i></ClLinks> is the function name, or a <ClLinks  term={"list"}><i>list</i></ClLinks> whose <ClLinks  term={"car"}><i>car</i></ClLinks> is <ClLinks  term={"funcall"}><b>funcall</b></ClLinks> and whose <ClLinks  term={"cadr"}><i>cadr</i></ClLinks> is a list (function <ClLinks  term={"name"}><i>name</i></ClLinks>); note that this affects destructuring of the form argument by the *compiler macro function*. <ClLinks  term={"define-compiler-macro"}><b>define-compiler-macro</b></ClLinks> arranges for destructuring of arguments to be performed correctly for both possible formats. 



When <ClLinks  term={"compile-file"}><b>compile-file</b></ClLinks> chooses to expand a *top level form* that is a *compiler macro form*, the expansion is also treated as a *top level form* for the purposes of <ClLinks  term={"eval-when"}><b>eval-when</b></ClLinks> processing; see Section 3.2.3.1 (Processing of Top Level Forms). 



