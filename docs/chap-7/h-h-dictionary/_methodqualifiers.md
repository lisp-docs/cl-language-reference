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

(defmethod some-gf :before ((a integer)) a) 

*→* #&#60;STANDARD-METHOD SOME-GF (:BEFORE) (INTEGER) 42736540&#62; 

(method-qualifiers \*) *→* (:BEFORE) 

**See Also:** 

**define-method-combination** 

