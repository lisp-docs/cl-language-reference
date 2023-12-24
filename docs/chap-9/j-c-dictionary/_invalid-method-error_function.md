**invalid-method-error** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"invalid-method-error"}><b>invalid-method-error</b></ClLinks> *method format-control* &amp;rest *args → implementation-dependent* 



**Arguments and Values:** 



<ClLinks styled={true} term={"method"}><i>method</i></ClLinks>—a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks>. 



*format-control*—a *format control*. 



*args*—*format arguments* for the *format-control*. 



**Description:** 



The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"invalid-method-error"}><b>invalid-method-error</b></ClLinks> is used to signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> when there is an applicable <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> whose <ClLinks styled={true} term={"qualifier"}><i>qualifiers</i></ClLinks> are not valid for the method combination type. The error message is constructed by using the *format-control* suitable for <ClLinks styled={true} term={"format"}><b>format</b></ClLinks> and any *args* to it. Because an implementation may need to add additional contextual information to the error message, <ClLinks styled={true} term={"invalid-method-error"}><b>invalid-method-error</b></ClLinks> should be called only within the dynamic extent of a method combination function. 



The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"invalid-method-error"}><b>invalid-method-error</b></ClLinks> is called automatically when a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> fails to satisfy every <ClLinks styled={true} term={"qualifier"}><i>qualifier</i></ClLinks> pattern and predicate in a <ClLinks styled={true} term={"define-method-combination"}><b>define-method-combination</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. A method combination function that imposes additional restrictions should call <ClLinks styled={true} term={"invalid-method-error"}><b>invalid-method-error</b></ClLinks> explicitly if it encounters a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> it cannot accept. 



Whether <ClLinks styled={true} term={"invalid-method-error"}><b>invalid-method-error</b></ClLinks> returns to its caller or exits via <ClLinks styled={true} term={"throw"}><b>throw</b></ClLinks> is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



 



 



**Side Effects:** 



The debugger might be entered. 



**Affected By:** 



<ClLinks styled={true} term={"break-on-signals"}><b>\*break-on-signals\*</b></ClLinks> 



**See Also:** 



<ClLinks styled={true} term={"define-method-combination"}><b>define-method-combination</b></ClLinks> 



