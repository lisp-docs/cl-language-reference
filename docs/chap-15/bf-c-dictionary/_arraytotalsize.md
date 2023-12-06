**array-total-size** *Function* 



**Syntax:** 



**array-total-size** *array → size* 



**Arguments and Values:** 



*array*—an *array*. 



*size*—a non-negative *integer* . 



**Description:** 



Returns the *array total size* of the *array*. 







 



 



**Examples:**
```lisp
 

(array-total-size (make-array 4)) *→* 4 

(array-total-size (make-array 4 :fill-pointer 2)) *→* 4 

(array-total-size (make-array 0)) *→* 0 

(array-total-size (make-array ’(4 2))) *→* 8 

(array-total-size (make-array ’(4 0))) *→* 0 

(array-total-size (make-array ’())) *→* 1 


```
**Exceptional Situations:** 



Should signal an error of *type* **type-error** if its argument is not an *array*. 



**See Also:** 



**make-array**, **array-dimensions** 



**Notes:** 



If the *array* is a *vector* with a *fill pointer* , the *fill pointer* is ignored when calculating the *array total size*. 



Since the product of no arguments is one, the *array total size* of a zero-dimensional *array* is one. 



(array-total-size x) 



*≡* (apply #’\* (array-dimensions x)) 



*≡* (reduce #’\* (array-dimensions x)) 



