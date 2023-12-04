**sin, cos, tan** *Function* 



**Syntax:** 



**sin** *radians → number* 



**cos** *radians → number* 



**tan** *radians → number* 



**Arguments and Values:** 



*radians*—a *number* given in radians. 



*number*—a *number* . 



**Description:** 



**sin**, **cos**, and **tan** return the sine, cosine, and tangent, respectively, of *radians*. 



**Examples:**
```lisp
 



(sin 0) *→* 0.0 



(cos 0.7853982) *→* 0.707107 



(tan #c(0 1)) *→* #C(0.0 0.761594) 




```
**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *radians* is not a *number* . Might signal **arithmetic-error**. 



**See Also:** 



**asin**, **acos**, **atan**, Section 12.1.3.3 (Rule of Float Substitutability) 







 



 



**asin, acos, atan** 



