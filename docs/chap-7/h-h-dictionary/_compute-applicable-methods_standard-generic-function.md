**compute-applicable-methods** *Standard Generic Function* 



**Syntax:** 



<DictionaryLink styled={true} term={"compute-applicable-methods"}><b>compute-applicable-methods</b></DictionaryLink> *generic-function function-arguments → methods* 



**Method Signatures:** 



<DictionaryLink styled={true} term={"compute-applicable-methods"}><b>compute-applicable-methods</b></DictionaryLink> (*generic-function* <DictionaryLink styled={true} term={"standard-generic-function"}><b>standard-generic-function</b></DictionaryLink>) 



**Arguments and Values:** 



*generic-function*—a *generic function*. 



*function-arguments*—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of arguments for the *generic-function*. 



<GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of *method objects*. 



**Description:** 



Given a *generic-function* and a set of *function-arguments*, the function <DictionaryLink styled={true} term={"compute-applicable-methods"}><b>compute-applicable-methods</b></DictionaryLink> returns the set of <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> that are applicable for those arguments sorted according to precedence order. See Section 7.6.6 (Method Selection and Combination). 







 



 



**Affected By:** 



<DictionaryLink styled={true} term={"defmethod"}><b>defmethod</b></DictionaryLink> 



**See Also:** 



Section 7.6.6 (Method Selection and Combination) 



