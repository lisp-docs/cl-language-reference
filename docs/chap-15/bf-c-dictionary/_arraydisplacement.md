**array-displacement** *Function* 



**Syntax:** 



**array-displacement** *array → displaced-to, displaced-index-offset* 



**Arguments and Values:** 



*array*—an *array*. 



*displaced-to*—an *array* or **nil**. 



*displaced-index-offset*—a non-negative *fixnum*. 



**Description:** 



If the *array* is a *displaced array*, returns the *values* of the :displaced-to and :displaced-index-offset options for the *array* (see the *functions* **make-array** and **adjust-array**). If the *array* is not a *displaced array*, **nil** and 0 are returned. 



If **array-displacement** is called on an *array* for which a *non-nil object* was provided as the :displaced-to *argument* to **make-array** or **adjust-array**, it must return that *object* as its first value. It is *implementation-dependent* whether **array-displacement** returns a *non-nil primary value* for any other *array*. 



**Examples:**
```lisp
 



(setq a1 (make-array 5)) *→* #<ARRAY 5 simple 46115576> 



(setq a2 (make-array 4 :displaced-to a1 



:displaced-index-offset 1)) 



*→* #<ARRAY 4 indirect 46117134> 



(array-displacement a2) 



*→* #<ARRAY 5 simple 46115576>, 1 



(setq a3 (make-array 2 :displaced-to a2 



:displaced-index-offset 2)) 



*→* #<ARRAY 2 indirect 46122527> 







 



 



(array-displacement a3) 



*→* #<ARRAY 4 indirect 46117134>, 2 




```
**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *array* is not an *array*. 



**See Also:** 



**make-array** 



