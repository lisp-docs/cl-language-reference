**method-combination-error** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"method-combination-error"}><b>method-combination-error</b></DictionaryLink> *format-control* &amp;rest *args → implementation-dependent* 



**Arguments and Values:** 



*format-control*—a *format control*. 



*args*—*format arguments* for *format-control*. 



**Description:** 



The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"method-combination-error"}><b>method-combination-error</b></DictionaryLink> is used to signal an error in method combination. 



The error message is constructed by using a *format-control* suitable for <DictionaryLink styled={true} term={"format"}><b>format</b></DictionaryLink> and any *args* to it. Because an implementation may need to add additional contextual information to the error message, <DictionaryLink styled={true} term={"method-combination-error"}><b>method-combination-error</b></DictionaryLink> should be called only within the dynamic extent of a method combination function. 



Whether <DictionaryLink styled={true} term={"method-combination-error"}><b>method-combination-error</b></DictionaryLink> returns to its caller or exits via <DictionaryLink styled={true} term={"throw"}><b>throw</b></DictionaryLink> is *implementation dependent*. 



**Side Effects:** 



The debugger might be entered. 



**Affected By:** 



<DictionaryLink styled={true} term={"break-on-signals"}><b>\*break-on-signals\*</b></DictionaryLink> 



**See Also:** 



<DictionaryLink styled={true} term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink> 







 



 



<DictionaryLink styled={true} term={"signal"}><b>signal</b></DictionaryLink> 



