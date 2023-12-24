**compute-applicable-methods** *Standard Generic Function* 



**Syntax:** 



<ClLinks styled={true} term={"compute-applicable-methods"}><b>compute-applicable-methods</b></ClLinks> *generic-function function-arguments → methods* 



**Method Signatures:** 



<ClLinks styled={true} term={"compute-applicable-methods"}><b>compute-applicable-methods</b></ClLinks> (*generic-function* <ClLinks styled={true} term={"standard-generic-function"}><b>standard-generic-function</b></ClLinks>) 



**Arguments and Values:** 



*generic-function*—a *generic function*. 



*function-arguments*—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of arguments for the *generic-function*. 



<ClLinks styled={true} term={"method"}><i>methods</i></ClLinks>—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of *method objects*. 



**Description:** 



Given a *generic-function* and a set of *function-arguments*, the function <ClLinks styled={true} term={"compute-applicable-methods"}><b>compute-applicable-methods</b></ClLinks> returns the set of <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> that are applicable for those arguments sorted according to precedence order. See Section 7.6.6 (Method Selection and Combination). 







 



 



**Affected By:** 



<ClLinks styled={true} term={"defmethod"}><b>defmethod</b></ClLinks> 



**See Also:** 



Section 7.6.6 (Method Selection and Combination) 



