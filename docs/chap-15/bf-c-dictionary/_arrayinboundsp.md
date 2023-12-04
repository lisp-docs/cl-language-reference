**array-in-bounds-p** *Function* 



**Syntax:** 



**array-in-bounds-p** *array* &rest *subscripts → generalized-boolean* 



**Arguments and Values:** 



*array*—an *array*. 



*subscripts*—a list of *integers* of length equal to the *rank* of the *array*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if the *subscripts* are all in bounds for *array*; otherwise returns *false*. (If *array* is a *vector* with a *fill pointer* , that *fill pointer* is ignored.) 



**Examples:**
```lisp
 



(setq a (make-array ’(7 11) :element-type ’string-char)) 



(array-in-bounds-p a 0 0) *→ true* 



(array-in-bounds-p a 6 10) *→ true* 



(array-in-bounds-p a 0 -1) *→ false* 



(array-in-bounds-p a 0 11) *→ false* 



(array-in-bounds-p a 7 0) *→ false* 




```
**See Also:** 



**array-dimensions** 



**Notes:** 



(array-in-bounds-p array subscripts) 



*≡* (and (not (some #’minusp (list subscripts))) 



(every #’< (list subscripts) (array-dimensions array))) 







 



 



