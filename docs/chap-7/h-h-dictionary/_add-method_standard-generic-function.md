**add-method** *Standard Generic Function* 



**Syntax:** 



**add-method** *generic-function method ! generic-function* 



**Method Signatures:** 



**add-method** (*generic-function* **standard-generic-function**) 



(*method* **method**) 



**Arguments and Values:** 



*generic-function*—a *generic function object*. 



*method*—a *method object*. 



**Description:** 



The generic function **add-method** adds a *method* to a *generic function*. 







 



 



If *method* agrees with an existing *method* of *generic-function* on *parameter specializers* and *qualifiers*, the existing *method* is replaced. 



**Exceptional Situations:** 



The *lambda list* of the method function of *method* must be congruent with the *lambda list* of *generic-function*, or an error of *type* **error** is signaled. 



If *method* is a *method object* of another *generic function*, an error of *type* **error** is signaled. 



**See Also:** 



**defmethod**, **defgeneric**, **find-method**, **remove-method**, Section 7.6.3 (Agreement on Parameter Specializers and Qualifiers) 



