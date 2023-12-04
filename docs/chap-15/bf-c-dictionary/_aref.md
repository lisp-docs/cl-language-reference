**aref** *Accessor* 



**Syntax:** 



**aref** *array* &rest *subscripts → element* 



**(setf (aref** *array* &rest *subscripts***)** *new-element***)** 



**Arguments and Values:** 



*array*—an *array*. 



*subscripts*—a *list* of *valid array indices* for the *array*. 



*element*, *new-element*—an *object*. 



**Description:** 



*Accesses* the *array element* specified by the *subscripts*. If no *subscripts* are supplied and *array* is zero rank, **aref** *accesses* the sole element of *array*. 



**aref** ignores *fill pointers*. It is permissible to use **aref** to *access* any *array element*, whether *active* or not. 



**Examples:**
```lisp
 



If the variable foo names a 3-by-5 array, then the first index could be 0, 1, or 2, and then second index could be 0, 1, 2, 3, or 4. The array elements can be referred to by using the *function* **aref**; for example, (aref foo 2 1) refers to element (2, 1) of the array. 



(aref (setq alpha (make-array 4)) 3) *→ implementation-dependent* 



(setf (aref alpha 3) ’sirens) *→* SIRENS 



(aref alpha 3) *→* SIRENS 



(aref (setq beta (make-array ’(2 4) 



:element-type ’(unsigned-byte 2) 



:initial-contents ’((0 1 2 3) (3 2 1 0)))) 



1 2) *→* 1 







 



 



(setq gamma ’(0 2)) 



(apply #’aref beta gamma) *→* 2 



(setf (apply #’aref beta gamma) 3) *→* 3 



(apply #’aref beta gamma) *→* 3 



(aref beta 0 2) *→* 3 




```
**See Also:** 



**bit**, **char**, **elt**, **row-major-aref**, **svref**, Section 3.2.1 (Compiler Terminology) 



