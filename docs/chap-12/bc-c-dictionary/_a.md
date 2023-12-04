**/** *Function* 



**Syntax:** 



**/** *number → reciprocal* 



**/** *numerator* &rest *denominators*<sup>+</sup> *→ quotient* 



**Arguments and Values:** 



*number*, *denominator*—a non-zero *number* . 



*numerator*, *quotient*, *reciprocal*—a *number* . 



**Description:** 



The *function* **/** performs division or reciprocation. 



If no *denominators* are supplied, the *function* **/** returns the reciprocal of *number*. 



If at least one *denominator* is supplied, the *function* **/** divides the *numerator* by all of the *denominators* and returns the resulting *quotient*. 



If each *argument* is either an *integer* or a *ratio*, and the result is not an *integer* , then it is a *ratio*. 



 



 



The *function* **/** performs necessary type conversions. 



If any *argument* is a *float* then the rules of floating-point contagion apply; see Section 12.1.4 (Floating-point Computations). 



**Examples:**
```lisp
 



(/ 12 4) *→* 3 



(/ 13 4) *→* 13/4 



(/ -8) *→* -1/8 



(/ 3 4 5) *→* 3/20 



(/ 0.5) *→* 2.0 



(/ 20 5) *→* 4 



(/ 5 20) *→* 1/4 



(/ 60 -2 3 5.0) *→* -2.0 



(/ 2 #c(2 2)) *→* #C(1/2 -1/2) 




```
**Exceptional Situations:** 



The consequences are unspecified if any *argument* other than the first is zero. If there is only one *argument*, the consequences are unspecified if it is zero. 



Might signal **type-error** if some *argument* is not a *number* . Might signal **division-by-zero** if division by zero is attempted. Might signal **arithmetic-error**. 



**See Also:** 



**floor**, **ceiling**, **truncate**, **round** 



**1+, 1***− Function* 



**Syntax:** 



**1+** *number → successor* 



**1***− number → predecessor* 



**Arguments and Values:** 



*number*—a *number* . 



*successor*, *predecessor*—a *number* . 



**Description:** 



**1+** returns a *number* that is one more than its argument *number*. **1-** returns a *number* that is one less than its argument *number*. 







 



 



**Examples:** 



(1+ 99) *→* 100 



(1- 100) *→* 99 



(1+ (complex 0.0)) *→* #C(1.0 0.0) 



(1- 5/3) *→* 2/3 



**Exceptional Situations:** 



Might signal **type-error** if its *argument* is not a *number* . Might signal **arithmetic-error**. 



**See Also:** 



**incf**, **decf** 



**Notes:** 



(1+ *number*) *≡* (+ *number* 1) 



(1- *number*) *≡* (- *number* 1) 



Implementors are encouraged to make the performance of both the previous expressions be the same. 



