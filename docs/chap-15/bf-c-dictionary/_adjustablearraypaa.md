**adjustable-array-p**, **make-array**, **array-dimension-limit**, **array-total-size-limit**, **array adjustable-array-p** *Function* 



**Syntax:** 



**adjustable-array-p** *array → generalized-boolean* 



**Arguments and Values:** 



*array*—an *array*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns true if and only if **adjust-array** could return a *value* which is *identical* to *array* when given that *array* as its first *argument*. 



**Examples:**
```lisp
 

(adjustable-array-p 

(make-array 5 

:element-type ’character 



 

 

:adjustable t 

:fill-pointer 3)) *→ true* 

(adjustable-array-p (make-array 4)) *→ implementation-dependent* 


```
**Exceptional Situations:** 



Should signal an error of *type* **type-error** if its argument is not an *array*. 



**See Also:** 



**adjust-array**, **make-array** 



