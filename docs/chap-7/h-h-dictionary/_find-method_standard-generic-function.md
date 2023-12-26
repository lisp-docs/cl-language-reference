**find-method** <GlossaryTerm styled={true} term={"standard generic function"}><i>Standard Generic Function</i></GlossaryTerm> 



**Syntax:** 



<ClLinks  term={"find-method"}><b>find-method</b></ClLinks> *generic-function method-qualifiers specializers* &amp;optional *errorp* 



*! method* 



**Method Signatures:** 



<ClLinks  term={"find-method"}><b>find-method</b></ClLinks> (*generic-function* <ClLinks  term={"standard-generic-function"}><b>standard-generic-function</b></ClLinks>) 



*method-qualifiers specializers* &amp;optional *errorp* 



**Arguments and Values:** 



*generic-function*—a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>. 



*method-qualifiers*—a <ClLinks  term={"list"}><i>list</i></ClLinks>. 



*specializers*—a <ClLinks  term={"list"}><i>list</i></ClLinks>. 



*errorp*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <ClLinks  term={"true"}><i>true</i></ClLinks>. 



<ClLinks  term={"method"}><i>method</i></ClLinks>—a *method object*, or <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



The <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> <ClLinks  term={"find-method"}><b>find-method</b></ClLinks> takes a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> and returns the *method object* that agrees on <ClLinks  term={"qualifier"}><i>qualifiers</i></ClLinks> and <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> with the *method-qualifiers* and *specializers* arguments of <ClLinks  term={"find-method"}><b>find-method</b></ClLinks>. *Method-qualifiers* contains the method <ClLinks  term={"qualifier"}><i>qualifiers</i></ClLinks> for the <ClLinks  term={"method"}><i>method</i></ClLinks>. The order of the method <ClLinks  term={"qualifier"}><i>qualifiers</i></ClLinks> is significant. For a definition of agreement in this context, see Section 7.6.3 (Agreement on Parameter Specializers and Qualifiers). 



The *specializers* argument contains the parameter specializers for the <ClLinks  term={"method"}><i>method</i></ClLinks>. It must correspond in length to the number of required arguments of the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>, or an error is signaled. This means that to obtain the default <ClLinks  term={"method"}><i>method</i></ClLinks> on a given *generic-function*, a <ClLinks  term={"list"}><i>list</i></ClLinks> whose elements are the <ClLinks  term={"class"}><i>class</i></ClLinks> <ClLinks  term={"t"}><b>t</b></ClLinks> must be given. 







 



 



If there is no such <ClLinks  term={"method"}><i>method</i></ClLinks> and *errorp* is <ClLinks  term={"true"}><i>true</i></ClLinks>, <ClLinks  term={"find-method"}><b>find-method</b></ClLinks> signals an error. If there is no such <ClLinks  term={"method"}><i>method</i></ClLinks> and *errorp* is <ClLinks  term={"false"}><i>false</i></ClLinks>, <ClLinks  term={"find-method"}><b>find-method</b></ClLinks> returns <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



**Examples:**
```lisp
(defmethod some-operation ((a integer) (b float)) (list a b)) 
*!* #<STANDARD-METHOD SOME-OPERATION (INTEGER FLOAT) 26723357> 
(find-method #’some-operation ’() (mapcar #’find-class ’(integer float))) 
*!* #<STANDARD-METHOD SOME-OPERATION (INTEGER FLOAT) 26723357> 
(find-method #’some-operation ’() (mapcar #’find-class ’(integer integer))) 
▷ Error: No matching method 
(find-method #’some-operation ’() (mapcar #’find-class ’(integer integer)) nil) *!* NIL 
```
**Aected By:** 



<ClLinks  term={"add-method"}><b>add-method</b></ClLinks>, <ClLinks  term={"defclass"}><b>defclass</b></ClLinks>, <ClLinks  term={"defgeneric"}><b>defgeneric</b></ClLinks>, <ClLinks  term={"defmethod"}><b>defmethod</b></ClLinks> 



**Exceptional Situations:** 



If the *specializers* argument does not correspond in length to the number of required arguments of the *generic-function*, an an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"error"}><b>error</b></ClLinks> is signaled. 



If there is no such <ClLinks  term={"method"}><i>method</i></ClLinks> and *errorp* is <ClLinks  term={"true"}><i>true</i></ClLinks>, <ClLinks  term={"find-method"}><b>find-method</b></ClLinks> signals an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"error"}><b>error</b></ClLinks>. 



**See Also:** 



Section 7.6.3 (Agreement on Parameter Specializers and Qualifiers) 



