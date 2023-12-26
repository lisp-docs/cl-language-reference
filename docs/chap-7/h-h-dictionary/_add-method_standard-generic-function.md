**add-method** <GlossaryTerm styled={true} term={"standard generic function"}><i>Standard Generic Function</i></GlossaryTerm> 



**Syntax:** 



<ClLinks  term={"add-method"}><b>add-method</b></ClLinks> *generic-function method ! generic-function* 



**Method Signatures:** 



<ClLinks  term={"add-method"}><b>add-method</b></ClLinks> (*generic-function* <ClLinks  term={"standard-generic-function"}><b>standard-generic-function</b></ClLinks>) 



(<ClLinks  term={"method"}><i>method</i></ClLinks> <ClLinks  term={"method"}><b>method</b></ClLinks>) 



**Arguments and Values:** 



*generic-function*—a *generic function object*. 



<ClLinks  term={"method"}><i>method</i></ClLinks>—a *method object*. 



**Description:** 



The generic function <ClLinks  term={"add-method"}><b>add-method</b></ClLinks> adds a <ClLinks  term={"method"}><i>method</i></ClLinks> to a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>. 







 



 



If <ClLinks  term={"method"}><i>method</i></ClLinks> agrees with an existing <ClLinks  term={"method"}><i>method</i></ClLinks> of *generic-function* on <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> and <ClLinks  term={"qualifier"}><i>qualifiers</i></ClLinks>, the existing <ClLinks  term={"method"}><i>method</i></ClLinks> is replaced. 



**Exceptional Situations:** 



The <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> of the method function of <ClLinks  term={"method"}><i>method</i></ClLinks> must be congruent with the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> of *generic-function*, or an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"error"}><b>error</b></ClLinks> is signaled. 



If <ClLinks  term={"method"}><i>method</i></ClLinks> is a *method object* of another <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"error"}><b>error</b></ClLinks> is signaled. 



**See Also:** 



<ClLinks  term={"defmethod"}><b>defmethod</b></ClLinks>, <ClLinks  term={"defgeneric"}><b>defgeneric</b></ClLinks>, <ClLinks  term={"find-method"}><b>find-method</b></ClLinks>, <ClLinks  term={"remove-method"}><b>remove-method</b></ClLinks>, Section 7.6.3 (Agreement on Parameter Specializers and Qualifiers) 



