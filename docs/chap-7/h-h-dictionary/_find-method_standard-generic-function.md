**find-method** *Standard Generic Function* 



**Syntax:** 



<DictionaryLink styled={true} term={"find-method"}><b>find-method</b></DictionaryLink> *generic-function method-qualifiers specializers* &amp;optional *errorp* 



*! method* 



**Method Signatures:** 



<DictionaryLink styled={true} term={"find-method"}><b>find-method</b></DictionaryLink> (*generic-function* <DictionaryLink styled={true} term={"standard-generic-function"}><b>standard-generic-function</b></DictionaryLink>) 



*method-qualifiers specializers* &amp;optional *errorp* 



**Arguments and Values:** 



*generic-function*—a *generic function*. 



*method-qualifiers*—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



*specializers*—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



*errorp*—a *generalized boolean*. The default is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>—a *method object*, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



The *generic function* <DictionaryLink styled={true} term={"find-method"}><b>find-method</b></DictionaryLink> takes a *generic function* and returns the *method object* that agrees on <GlossaryTerm styled={true} term={"qualifier"}><i>qualifiers</i></GlossaryTerm> and *parameter specializers* with the *method-qualifiers* and *specializers* arguments of <DictionaryLink styled={true} term={"find-method"}><b>find-method</b></DictionaryLink>. *Method-qualifiers* contains the method <GlossaryTerm styled={true} term={"qualifier"}><i>qualifiers</i></GlossaryTerm> for the <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>. The order of the method <GlossaryTerm styled={true} term={"qualifier"}><i>qualifiers</i></GlossaryTerm> is significant. For a definition of agreement in this context, see Section 7.6.3 (Agreement on Parameter Specializers and Qualifiers). 



The *specializers* argument contains the parameter specializers for the <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>. It must correspond in length to the number of required arguments of the *generic function*, or an error is signaled. This means that to obtain the default <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> on a given *generic-function*, a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> whose elements are the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> must be given. 







 



 



If there is no such <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> and *errorp* is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, <DictionaryLink styled={true} term={"find-method"}><b>find-method</b></DictionaryLink> signals an error. If there is no such <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> and *errorp* is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, <DictionaryLink styled={true} term={"find-method"}><b>find-method</b></DictionaryLink> returns <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



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



<DictionaryLink styled={true} term={"add-method"}><b>add-method</b></DictionaryLink>, <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink>, <DictionaryLink styled={true} term={"defgeneric"}><b>defgeneric</b></DictionaryLink>, <DictionaryLink styled={true} term={"defmethod"}><b>defmethod</b></DictionaryLink> 



**Exceptional Situations:** 



If the *specializers* argument does not correspond in length to the number of required arguments of the *generic-function*, an an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> is signaled. 



If there is no such <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> and *errorp* is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, <DictionaryLink styled={true} term={"find-method"}><b>find-method</b></DictionaryLink> signals an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink>. 



**See Also:** 



Section 7.6.3 (Agreement on Parameter Specializers and Qualifiers) 



