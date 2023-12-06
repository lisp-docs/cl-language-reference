**method-qualifiers** *Standard Generic Function* 



**Syntax:** 



**method-qualifiers** *method → qualifiers* 







 



 



**Method Signatures:** 



**method-qualifiers** (*method* **standard-method**) 



**Arguments and Values:** 



*method*—a *method*. 



*qualifiers*—a *proper list*. 



**Description:** 



Returns a *list* of the *qualifiers* of the *method*. 



**Examples:**
```lisp
 

(defmethod some-gf :before ((a integer)) a) 

*→* #<STANDARD-METHOD SOME-GF (:BEFORE) (INTEGER) 42736540> 

(method-qualifiers \*) *→* (:BEFORE) 


```
**See Also:** 



**define-method-combination** 



