**remove-method** *Standard Generic Function* 



**Syntax:** 



<ClLinks styled={true} term={"remove-method"}><b>remove-method</b></ClLinks> *generic-function method → generic-function* 



**Method Signatures:** 



<ClLinks styled={true} term={"remove-method"}><b>remove-method</b></ClLinks> (*generic-function* <ClLinks styled={true} term={"standard-generic-function"}><b>standard-generic-function</b></ClLinks>) 



<ClLinks styled={true} term={"method"}><i>method</i></ClLinks> 



**Arguments and Values:** 



*generic-function*—a *generic function*. 



<ClLinks styled={true} term={"method"}><i>method</i></ClLinks>—a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks>. 



**Description:** 



The *generic function* <ClLinks styled={true} term={"remove-method"}><b>remove-method</b></ClLinks> removes a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> from *generic-function* by modifying the *generic-function* (if necessary). 



<ClLinks styled={true} term={"remove-method"}><b>remove-method</b></ClLinks> must not signal an error if the <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> is not one of the <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> on the *generic-function*. 



**See Also:** 



<ClLinks styled={true} term={"find-method"}><b>find-method</b></ClLinks> 



