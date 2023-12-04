**minusp, plusp** *Function* 



**Syntax:** 



**minusp** *real → generalized-boolean* 



**plusp** *real → generalized-boolean* 



**Arguments and Values:** 



*real*—a *real*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



**minusp** returns *true* if *real* is less than zero; otherwise, returns *false*. 



**plusp** returns *true* if *real* is greater than zero; otherwise, returns *false*. 



Regardless of whether an *implementation* provides distinct representations for positive and negative *float* zeros, (minusp -0.0) always returns *false*. 



**Examples:**
```lisp
 



(minusp -1) *→ true* 



(plusp 0) *→ false* 



(plusp least-positive-single-float) *→ true* 




```
**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *real* is not a *real*. 







 



 



