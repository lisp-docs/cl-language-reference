**+** *Function* 



**Syntax:** 



**+** &amp;rest *numbers → sum* 



**Arguments and Values:** 



*number*—a *number* . 



*sum*—a *number* . 



**Description:** 



Returns the sum of *numbers*, performing any necessary type conversions in the process. If no *numbers* are supplied, 0 is returned. 



**Examples:**
```lisp
 
(+) → 0 
(+ 1) → 1 
(+ 31/100 69/100) → 1 
(+ 1/5 0.8) → 1.0 

```
**Exceptional Situations:** 



Might signal **type-error** if some *argument* is not a *number* . Might signal **arithmetic-error**. 



**See Also:** 



Section 12.1.1 (Numeric Operations), Section 12.1.3 (Rational Computations), Section 12.1.4 (Floating-point Computations), Section 12.1.5 (Complex Computations) 



*− Function* 



**Syntax:** 



*− number → negation* 



*− minuend* &amp;rest *subtrahends*<sup>+</sup> → difference 



**Arguments and Values:** 



*number*, *minuend*, *subtrahend*—a *number* . 



*negation*, *difference*—a *number* . 



**Description:** 



The *function* **-** performs arithmetic subtraction and negation. 







 



 



If only one *number* is supplied, the negation of that *number* is returned. 



If more than one *argument* is given, it subtracts all of the *subtrahends* from the *minuend* and returns the result. 



The *function* **-** performs necessary type conversions. 



**Examples:**
```lisp

(- 55.55) → -55.55 
(- #c(3 -5)) → #C(-3 5) 
(- 0) → 0 
(eql (- 0.0) -0.0) → true 
(- #c(100 45) #c(0 45)) → 100 
(- 10 1 2 3 4) → 0 

```
**Exceptional Situations:** 



Might signal **type-error** if some *argument* is not a *number* . Might signal **arithmetic-error**. 



**See Also:** 



Section 12.1.1 (Numeric Operations), Section 12.1.3 (Rational Computations), Section 12.1.4 (Floating-point Computations), Section 12.1.5 (Complex Computations) 



