**method-combination-error** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"method-combination-error"}><b>method-combination-error</b></ClLinks> *format-control* &amp;rest *args → implementation-dependent* 



**Arguments and Values:** 



*format-control*—a <GlossaryTerm styled={true} term={"format control"}><i>format control</i></GlossaryTerm>. 



*args*—<GlossaryTerm styled={true} term={"format argument"}><i>format arguments</i></GlossaryTerm> for *format-control*. 



**Description:** 



The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"method-combination-error"}><b>method-combination-error</b></ClLinks> is used to signal an error in method combination. 



The error message is constructed by using a *format-control* suitable for <ClLinks styled={true} term={"format"}><b>format</b></ClLinks> and any *args* to it. Because an implementation may need to add additional contextual information to the error message, <ClLinks styled={true} term={"method-combination-error"}><b>method-combination-error</b></ClLinks> should be called only within the dynamic extent of a method combination function. 



Whether <ClLinks styled={true} term={"method-combination-error"}><b>method-combination-error</b></ClLinks> returns to its caller or exits via <ClLinks styled={true} term={"throw"}><b>throw</b></ClLinks> is *implementation dependent*. 



**Side Effects:** 



The debugger might be entered. 



**Affected By:** 



<ClLinks styled={true} term={"break-on-signals"}><b>\*break-on-signals\*</b></ClLinks> 



**See Also:** 



<ClLinks styled={true} term={"define-method-combination"}><b>define-method-combination</b></ClLinks> 







 



 



<ClLinks styled={true} term={"signal"}><b>signal</b></ClLinks> 



