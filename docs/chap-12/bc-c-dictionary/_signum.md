**signum** *Function* 



**Syntax:** 



**signum** *number → signed-prototype* 



**Arguments and Values:** 



*number*—a *number* . 



*signed-prototype*—a *number* . 



**Description:** 



**signum** determines a numerical value that indicates whether *number* is negative, zero, or positive. 



For a *rational*, **signum** returns one of -1, 0, or 1 according to whether *number* is negative, zero, or positive. For a *float*, the result is a *float* of the same format whose value is minus one, zero, or one. For a *complex* number z, (signum *z*) is a complex number of the same phase but with unit magnitude, unless z is a complex zero, in which case the result is z. 



For *rational arguments*, **signum** is a rational function, but it may be irrational for *complex arguments*. 



If *number* is a *float*, the result is a *float*. If *number* is a *rational*, the result is a *rational*. If *number* is a *complex float*, the result is a *complex float*. If *number* is a *complex rational*, the result is a *complex* , but it is *implementation-dependent* whether that result is a *complex rational* or a *complex float*. 



**Examples:**
```lisp
 



(signum 0) *→* 0 



(signum 99) *→* 1 



(signum 4/5) *→* 1 



(signum -99/100) *→* -1 



(signum 0.0) *→* 0.0 



(signum #c(0 33)) *→* #C(0.0 1.0) 



(signum #c(7.5 10.0)) *→* #C(0.6 0.8) 



(signum #c(0.0 -14.7)) *→* #C(0.0 -1.0) 



(eql (signum -0.0) -0.0) *→ true* 







 



 




```
**See Also:** 



Section 12.1.3.3 (Rule of Float Substitutability) 



**Notes:** 



(signum x) *≡* (if (zerop x) x (/ x (abs x))) 



