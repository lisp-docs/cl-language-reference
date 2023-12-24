**add-method** *Standard Generic Function* 



**Syntax:** 



<ClLinks styled={true} term={"add-method"}><b>add-method</b></ClLinks> *generic-function method ! generic-function* 



**Method Signatures:** 



<ClLinks styled={true} term={"add-method"}><b>add-method</b></ClLinks> (*generic-function* <ClLinks styled={true} term={"standard-generic-function"}><b>standard-generic-function</b></ClLinks>) 



(<ClLinks styled={true} term={"method"}><i>method</i></ClLinks> <ClLinks styled={true} term={"method"}><b>method</b></ClLinks>) 



**Arguments and Values:** 



*generic-function*—a *generic function object*. 



<ClLinks styled={true} term={"method"}><i>method</i></ClLinks>—a *method object*. 



**Description:** 



The generic function <ClLinks styled={true} term={"add-method"}><b>add-method</b></ClLinks> adds a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> to a *generic function*. 







 



 



If <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> agrees with an existing <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> of *generic-function* on *parameter specializers* and <ClLinks styled={true} term={"qualifier"}><i>qualifiers</i></ClLinks>, the existing <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> is replaced. 



**Exceptional Situations:** 



The *lambda list* of the method function of <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> must be congruent with the *lambda list* of *generic-function*, or an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> is signaled. 



If <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> is a *method object* of another *generic function*, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> is signaled. 



**See Also:** 



<ClLinks styled={true} term={"defmethod"}><b>defmethod</b></ClLinks>, <ClLinks styled={true} term={"defgeneric"}><b>defgeneric</b></ClLinks>, <ClLinks styled={true} term={"find-method"}><b>find-method</b></ClLinks>, <ClLinks styled={true} term={"remove-method"}><b>remove-method</b></ClLinks>, Section 7.6.3 (Agreement on Parameter Specializers and Qualifiers) 



