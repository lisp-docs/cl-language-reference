**remove-method** *Standard Generic Function* 



**Syntax:** 



**remove-method** *generic-function method → generic-function* 



**Method Signatures:** 



**remove-method** (*generic-function* **standard-generic-function**) 



*method* 



**Arguments and Values:** 



*generic-function*—a *generic function*. 



*method*—a *method*. 



**Description:** 



The *generic function* **remove-method** removes a *method* from *generic-function* by modifying the *generic-function* (if necessary). 



**remove-method** must not signal an error if the *method* is not one of the *methods* on the *generic-function*. 



**See Also:** 



**find-method** 



