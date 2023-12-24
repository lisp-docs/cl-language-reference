**find-method** *Standard Generic Function* 



**Syntax:** 



<ClLinks styled={true} term={"find-method"}><b>find-method</b></ClLinks> *generic-function method-qualifiers specializers* &amp;optional *errorp* 



*! method* 



**Method Signatures:** 



<ClLinks styled={true} term={"find-method"}><b>find-method</b></ClLinks> (*generic-function* <ClLinks styled={true} term={"standard-generic-function"}><b>standard-generic-function</b></ClLinks>) 



*method-qualifiers specializers* &amp;optional *errorp* 



**Arguments and Values:** 



*generic-function*—a *generic function*. 



*method-qualifiers*—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 



*specializers*—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 



*errorp*—a *generalized boolean*. The default is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. 



<ClLinks styled={true} term={"method"}><i>method</i></ClLinks>—a *method object*, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



The *generic function* <ClLinks styled={true} term={"find-method"}><b>find-method</b></ClLinks> takes a *generic function* and returns the *method object* that agrees on <ClLinks styled={true} term={"qualifier"}><i>qualifiers</i></ClLinks> and *parameter specializers* with the *method-qualifiers* and *specializers* arguments of <ClLinks styled={true} term={"find-method"}><b>find-method</b></ClLinks>. *Method-qualifiers* contains the method <ClLinks styled={true} term={"qualifier"}><i>qualifiers</i></ClLinks> for the <ClLinks styled={true} term={"method"}><i>method</i></ClLinks>. The order of the method <ClLinks styled={true} term={"qualifier"}><i>qualifiers</i></ClLinks> is significant. For a definition of agreement in this context, see Section 7.6.3 (Agreement on Parameter Specializers and Qualifiers). 



The *specializers* argument contains the parameter specializers for the <ClLinks styled={true} term={"method"}><i>method</i></ClLinks>. It must correspond in length to the number of required arguments of the *generic function*, or an error is signaled. This means that to obtain the default <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> on a given *generic-function*, a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> whose elements are the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> must be given. 







 



 



If there is no such <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> and *errorp* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, <ClLinks styled={true} term={"find-method"}><b>find-method</b></ClLinks> signals an error. If there is no such <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> and *errorp* is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, <ClLinks styled={true} term={"find-method"}><b>find-method</b></ClLinks> returns <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



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



<ClLinks styled={true} term={"add-method"}><b>add-method</b></ClLinks>, <ClLinks styled={true} term={"defclass"}><b>defclass</b></ClLinks>, <ClLinks styled={true} term={"defgeneric"}><b>defgeneric</b></ClLinks>, <ClLinks styled={true} term={"defmethod"}><b>defmethod</b></ClLinks> 



**Exceptional Situations:** 



If the *specializers* argument does not correspond in length to the number of required arguments of the *generic-function*, an an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> is signaled. 



If there is no such <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> and *errorp* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, <ClLinks styled={true} term={"find-method"}><b>find-method</b></ClLinks> signals an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks>. 



**See Also:** 



Section 7.6.3 (Agreement on Parameter Specializers and Qualifiers) 



