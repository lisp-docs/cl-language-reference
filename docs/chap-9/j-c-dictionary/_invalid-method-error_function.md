**invalid-method-error** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"invalid-method-error"}><b>invalid-method-error</b></DictionaryLink> *method format-control* &amp;rest *args → implementation-dependent* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>. 



*format-control*—a *format control*. 



*args*—*format arguments* for the *format-control*. 



**Description:** 



The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"invalid-method-error"}><b>invalid-method-error</b></DictionaryLink> is used to signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> when there is an applicable <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> whose <GlossaryTerm styled={true} term={"qualifier"}><i>qualifiers</i></GlossaryTerm> are not valid for the method combination type. The error message is constructed by using the *format-control* suitable for <DictionaryLink styled={true} term={"format"}><b>format</b></DictionaryLink> and any *args* to it. Because an implementation may need to add additional contextual information to the error message, <DictionaryLink styled={true} term={"invalid-method-error"}><b>invalid-method-error</b></DictionaryLink> should be called only within the dynamic extent of a method combination function. 



The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"invalid-method-error"}><b>invalid-method-error</b></DictionaryLink> is called automatically when a <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> fails to satisfy every <GlossaryTerm styled={true} term={"qualifier"}><i>qualifier</i></GlossaryTerm> pattern and predicate in a <DictionaryLink styled={true} term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. A method combination function that imposes additional restrictions should call <DictionaryLink styled={true} term={"invalid-method-error"}><b>invalid-method-error</b></DictionaryLink> explicitly if it encounters a <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> it cannot accept. 



Whether <DictionaryLink styled={true} term={"invalid-method-error"}><b>invalid-method-error</b></DictionaryLink> returns to its caller or exits via <DictionaryLink styled={true} term={"throw"}><b>throw</b></DictionaryLink> is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



 



 



**Side Effects:** 



The debugger might be entered. 



**Affected By:** 



<DictionaryLink styled={true} term={"break-on-signals"}><b>\*break-on-signals\*</b></DictionaryLink> 



**See Also:** 



<DictionaryLink styled={true} term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink> 



