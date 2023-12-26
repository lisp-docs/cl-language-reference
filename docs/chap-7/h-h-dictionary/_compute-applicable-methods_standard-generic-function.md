**compute-applicable-methods** <GlossaryTerm styled={true} term={"standard generic function"}><i>Standard Generic Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"compute-applicable-methods"}><b>compute-applicable-methods</b></DictionaryLink> *generic-function function-arguments → methods* 



**Method Signatures:** 



<DictionaryLink  term={"compute-applicable-methods"}><b>compute-applicable-methods</b></DictionaryLink> (*generic-function* <DictionaryLink  term={"standard-generic-function"}><b>standard-generic-function</b></DictionaryLink>) 



**Arguments and Values:** 



*generic-function*—a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>. 



*function-arguments*—a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of arguments for the *generic-function*. 



<GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm>—a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of *method objects*. 



**Description:** 



Given a *generic-function* and a set of *function-arguments*, the function <DictionaryLink  term={"compute-applicable-methods"}><b>compute-applicable-methods</b></DictionaryLink> returns the set of <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> that are applicable for those arguments sorted according to precedence order. See Section 7.6.6 (Method Selection and Combination). 







 



 



**Affected By:** 



<DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink> 



**See Also:** 



Section 7.6.6 (Method Selection and Combination) 



