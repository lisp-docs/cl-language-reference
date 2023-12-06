**find-method** *Standard Generic Function* 



**Syntax:** 



**find-method** *generic-function method-qualifiers specializers* &amp;optional *errorp* 



*! method* 



**Method Signatures:** 



**find-method** (*generic-function* **standard-generic-function**) 



*method-qualifiers specializers* &amp;optional *errorp* 



**Arguments and Values:** 



*generic-function*—a *generic function*. 



*method-qualifiers*—a *list*. 



*specializers*—a *list*. 



*errorp*—a *generalized boolean*. The default is *true*. 



*method*—a *method object*, or **nil**. 



**Description:** 



The *generic function* **find-method** takes a *generic function* and returns the *method object* that agrees on *qualifiers* and *parameter specializers* with the *method-qualifiers* and *specializers* arguments of **find-method**. *Method-qualifiers* contains the method *qualifiers* for the *method*. The order of the method *qualifiers* is significant. For a definition of agreement in this context, see Section 7.6.3 (Agreement on Parameter Specializers and Qualifiers). 



The *specializers* argument contains the parameter specializers for the *method*. It must correspond in length to the number of required arguments of the *generic function*, or an error is signaled. This means that to obtain the default *method* on a given *generic-function*, a *list* whose elements are the *class* **t** must be given. 







 



 



If there is no such *method* and *errorp* is *true*, **find-method** signals an error. If there is no such *method* and *errorp* is *false*, **find-method** returns **nil**. 



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



**add-method**, **defclass**, **defgeneric**, **defmethod** 



**Exceptional Situations:** 



If the *specializers* argument does not correspond in length to the number of required arguments of the *generic-function*, an an error of *type* **error** is signaled. 



If there is no such *method* and *errorp* is *true*, **find-method** signals an error of *type* **error**. 



**See Also:** 



Section 7.6.3 (Agreement on Parameter Specializers and Qualifiers) 



