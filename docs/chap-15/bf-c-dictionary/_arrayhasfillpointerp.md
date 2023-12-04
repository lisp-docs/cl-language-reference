**array-has-fill-pointer-p** *Function* 



**Syntax:** 



**array-has-fill-pointer-p** *array → generalized-boolean* 



**Arguments and Values:** 



*array*—an *array*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if *array* has a *fill pointer* ; otherwise returns *false*. 



**Examples:**
```lisp
 



(array-has-fill-pointer-p (make-array 4)) *→ implementation-dependent* 



(array-has-fill-pointer-p (make-array ’(2 3))) *→ false* 



(array-has-fill-pointer-p 



(make-array 8 



:fill-pointer 2 



:initial-element ’filler)) *→ true* 







 



 




```
**Exceptional Situations:** 



Should signal an error of *type* **type-error** if its argument is not an *array*. 



**See Also:** 



**make-array**, **fill-pointer** 



**Notes:** 



Since *arrays* of *rank* other than one cannot have a *fill pointer* , **array-has-fill-pointer-p** always returns **nil** when its argument is such an array. 



