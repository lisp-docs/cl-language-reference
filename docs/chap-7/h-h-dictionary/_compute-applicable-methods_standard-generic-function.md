**compute-applicable-methods** <GlossaryTerm styled={true} term={"standard generic function"}><i>Standard Generic Function</i></GlossaryTerm> 



**Syntax:** 



<ClLinks  term={"compute-applicable-methods"}><b>compute-applicable-methods</b></ClLinks> *generic-function function-arguments → methods* 



**Method Signatures:** 



<ClLinks  term={"compute-applicable-methods"}><b>compute-applicable-methods</b></ClLinks> (*generic-function* <ClLinks  term={"standard-generic-function"}><b>standard-generic-function</b></ClLinks>) 



**Arguments and Values:** 



*generic-function*—a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>. 



*function-arguments*—a <ClLinks  term={"list"}><i>list</i></ClLinks> of arguments for the *generic-function*. 



<ClLinks  term={"method"}><i>methods</i></ClLinks>—a <ClLinks  term={"list"}><i>list</i></ClLinks> of *method objects*. 



**Description:** 



Given a *generic-function* and a set of *function-arguments*, the function <ClLinks  term={"compute-applicable-methods"}><b>compute-applicable-methods</b></ClLinks> returns the set of <ClLinks  term={"method"}><i>methods</i></ClLinks> that are applicable for those arguments sorted according to precedence order. See Section 7.6.6 (Method Selection and Combination). 







 



 



**Affected By:** 



<ClLinks  term={"defmethod"}><b>defmethod</b></ClLinks> 



**See Also:** 



Section 7.6.6 (Method Selection and Combination) 



