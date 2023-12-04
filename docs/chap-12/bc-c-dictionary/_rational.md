**rational, rationalize** *Function* 



**Syntax:** 



**rational** *number → rational* 



**rationalize** *number → rational* 



**Arguments and Values:** 



*number*—a *real*. 



*rational*—a *rational*. 



**Description:** 



**rational** and **rationalize** convert *reals* to *rationals*. 



If *number* is already *rational*, it is returned. 



If *number* is a *float*, **rational** returns a *rational* that is mathematically equal in value to the *float*. **rationalize** returns a *rational* that approximates the *float* to the accuracy of the underlying floating-point representation. 



**rational** assumes that the *float* is completely accurate. 



**rationalize** assumes that the *float* is accurate only to the precision of the floating-point representation. 



**Examples:**
```lisp
 



(rational 0) *→* 0 



(rationalize -11/100) *→* -11/100 



(rational .1) *→* 13421773/134217728 ;implementation-dependent 



(rationalize .1) *→* 1/10 




```
**Affected By:** 



The *implementation*. 



**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *number* is not a *real*. Might signal **arithmetic-error**. 



 



 



**Notes:** 



It is always the case that 



(float (rational x) x) *≡* x 



and 



(float (rationalize x) x) *≡* x 



That is, rationalizing a *float* by either method and then converting it back to a *float* of the same format produces the original *number*. 



