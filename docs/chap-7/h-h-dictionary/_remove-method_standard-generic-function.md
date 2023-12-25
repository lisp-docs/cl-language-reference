**remove-method** *Standard Generic Function* 



**Syntax:** 



<ClLinks  term={"remove-method"}><b>remove-method</b></ClLinks> *generic-function method → generic-function* 



**Method Signatures:** 



<ClLinks  term={"remove-method"}><b>remove-method</b></ClLinks> (*generic-function* <ClLinks  term={"standard-generic-function"}><b>standard-generic-function</b></ClLinks>) 



<ClLinks  term={"method"}><i>method</i></ClLinks> 



**Arguments and Values:** 



*generic-function*—a *generic function*. 



<ClLinks  term={"method"}><i>method</i></ClLinks>—a <ClLinks  term={"method"}><i>method</i></ClLinks>. 



**Description:** 



The *generic function* <ClLinks  term={"remove-method"}><b>remove-method</b></ClLinks> removes a <ClLinks  term={"method"}><i>method</i></ClLinks> from *generic-function* by modifying the *generic-function* (if necessary). 



<ClLinks  term={"remove-method"}><b>remove-method</b></ClLinks> must not signal an error if the <ClLinks  term={"method"}><i>method</i></ClLinks> is not one of the <ClLinks  term={"method"}><i>methods</i></ClLinks> on the *generic-function*. 



**See Also:** 



<ClLinks  term={"find-method"}><b>find-method</b></ClLinks> 



