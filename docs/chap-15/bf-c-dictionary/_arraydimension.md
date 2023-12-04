**array-dimension** *Function* 



**Syntax:** 



**array-dimension** *array axis-number → dimension* 



**Arguments and Values:** 



*array*—an *array*. 



*axis-number*—an *integer* greater than or equal to zero and less than the *rank* of the *array*. *dimension*—a non-negative *integer* . 



**Description:** 



**array-dimension** returns the *axis-number dimension*<sub>1</sub> of *array*. (Any *fill pointer* is ignored.) **Examples:**
```lisp
 



(array-dimension (make-array 4) 0) *→* 4 



(array-dimension (make-array ’(2 3)) 1) *→* 3 




```
**Affected By:** 



None. 



**See Also:** 



**array-dimensions**, **length** 



**Notes:** 



(array-dimension array n) *≡* (nth n (array-dimensions array)) 







 



 



