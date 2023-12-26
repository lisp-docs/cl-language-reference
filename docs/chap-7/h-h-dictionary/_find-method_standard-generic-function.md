**find-method** <GlossaryTerm styled={true} term={"standard generic function"}><i>Standard Generic Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"find-method"}><b>find-method</b></DictionaryLink> *generic-function method-qualifiers specializers* &amp;optional *errorp* 



*! method* 



**Method Signatures:** 



<DictionaryLink  term={"find-method"}><b>find-method</b></DictionaryLink> (*generic-function* <DictionaryLink  term={"standard-generic-function"}><b>standard-generic-function</b></DictionaryLink>) 



*method-qualifiers specializers* &amp;optional *errorp* 



**Arguments and Values:** 



*generic-function*—a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>. 



*method-qualifiers*—a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm>. 



*specializers*—a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm>. 



*errorp*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>. 



<GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm>—a *method object*, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



The <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> <DictionaryLink  term={"find-method"}><b>find-method</b></DictionaryLink> takes a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> and returns the *method object* that agrees on <GlossaryTerm  term={"qualifier"}><i>qualifiers</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> with the *method-qualifiers* and *specializers* arguments of <DictionaryLink  term={"find-method"}><b>find-method</b></DictionaryLink>. *Method-qualifiers* contains the method <GlossaryTerm  term={"qualifier"}><i>qualifiers</i></GlossaryTerm> for the <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm>. The order of the method <GlossaryTerm  term={"qualifier"}><i>qualifiers</i></GlossaryTerm> is significant. For a definition of agreement in this context, see Section 7.6.3 (Agreement on Parameter Specializers and Qualifiers). 



The *specializers* argument contains the parameter specializers for the <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm>. It must correspond in length to the number of required arguments of the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>, or an error is signaled. This means that to obtain the default <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> on a given *generic-function*, a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> whose elements are the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> must be given. 







 



 



If there is no such <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> and *errorp* is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>, <DictionaryLink  term={"find-method"}><b>find-method</b></DictionaryLink> signals an error. If there is no such <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> and *errorp* is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>, <DictionaryLink  term={"find-method"}><b>find-method</b></DictionaryLink> returns <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



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



<DictionaryLink  term={"add-method"}><b>add-method</b></DictionaryLink>, <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink>, <DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink>, <DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink> 



**Exceptional Situations:** 



If the *specializers* argument does not correspond in length to the number of required arguments of the *generic-function*, an an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> is signaled. 



If there is no such <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> and *errorp* is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>, <DictionaryLink  term={"find-method"}><b>find-method</b></DictionaryLink> signals an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink>. 



**See Also:** 



Section 7.6.3 (Agreement on Parameter Specializers and Qualifiers) 



