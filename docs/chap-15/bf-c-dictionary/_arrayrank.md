**array-rank** *Function* 



**Syntax:** 



**array-rank** *array → rank* 



**Arguments and Values:** 



*array*—an *array*. 



*rank*—a non-negative *integer* . 



**Description:** 



Returns the number of *dimensions* of *array*. 



**Examples:**
```lisp
 



(array-rank (make-array ’())) *→* 0 



(array-rank (make-array 4)) *→* 1 



(array-rank (make-array ’(4))) *→* 1 



(array-rank (make-array ’(2 3))) *→* 2 




```
**Exceptional Situations:** 



Should signal an error of *type* **type-error** if its argument is not an *array*. 



**See Also:** 



**array-rank-limit**, **make-array** 



