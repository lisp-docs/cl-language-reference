**add-method** *Standard Generic Function* 



**Syntax:** 



<ClLinks  term={"add-method"}><b>add-method</b></ClLinks> *generic-function method ! generic-function* 



**Method Signatures:** 



<ClLinks  term={"add-method"}><b>add-method</b></ClLinks> (*generic-function* <ClLinks  term={"standard-generic-function"}><b>standard-generic-function</b></ClLinks>) 



(<ClLinks  term={"method"}><i>method</i></ClLinks> <ClLinks  term={"method"}><b>method</b></ClLinks>) 



**Arguments and Values:** 



*generic-function*—a *generic function object*. 



<ClLinks  term={"method"}><i>method</i></ClLinks>—a *method object*. 



**Description:** 



The generic function <ClLinks  term={"add-method"}><b>add-method</b></ClLinks> adds a <ClLinks  term={"method"}><i>method</i></ClLinks> to a *generic function*. 







 



 



If <ClLinks  term={"method"}><i>method</i></ClLinks> agrees with an existing <ClLinks  term={"method"}><i>method</i></ClLinks> of *generic-function* on *parameter specializers* and <ClLinks  term={"qualifier"}><i>qualifiers</i></ClLinks>, the existing <ClLinks  term={"method"}><i>method</i></ClLinks> is replaced. 



**Exceptional Situations:** 



The *lambda list* of the method function of <ClLinks  term={"method"}><i>method</i></ClLinks> must be congruent with the *lambda list* of *generic-function*, or an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"error"}><b>error</b></ClLinks> is signaled. 



If <ClLinks  term={"method"}><i>method</i></ClLinks> is a *method object* of another *generic function*, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"error"}><b>error</b></ClLinks> is signaled. 



**See Also:** 



<ClLinks  term={"defmethod"}><b>defmethod</b></ClLinks>, <ClLinks  term={"defgeneric"}><b>defgeneric</b></ClLinks>, <ClLinks  term={"find-method"}><b>find-method</b></ClLinks>, <ClLinks  term={"remove-method"}><b>remove-method</b></ClLinks>, Section 7.6.3 (Agreement on Parameter Specializers and Qualifiers) 



