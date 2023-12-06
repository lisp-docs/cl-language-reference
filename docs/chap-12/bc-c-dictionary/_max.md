**max, min** *Function* 



**Syntax:** 



**max** &amp;rest *reals*<sup>+</sup> *→ max-real* 







 



 



**max, min** 



**min** &amp;rest *reals*<sup>+</sup> *→ min-real* 



**Arguments and Values:** 



*real*—a *real*. 



*max-real*, *min-real*—a *real*. 



**Description:** 



**max** returns the *real* that is greatest (closest to positive infinity). **min** returns the *real* that is least (closest to negative infinity). 



For **max**, the implementation has the choice of returning the largest argument as is or applying the rules of floating-point *contagion*, taking all the arguments into consideration for *contagion* purposes. Also, if one or more of the arguments are **=**, then any one of them may be chosen as the value to return. For example, if the *reals* are a mixture of *rationals* and *floats*, and the largest argument is a *rational*, then the implementation is free to produce either that *rational* or its *float* approximation; if the largest argument is a *float* of a smaller format than the largest format of any *float* argument, then the implementation is free to return the argument in its given format or expanded to the larger format. Similar remarks apply to **min** (replacing “largest argument” by “smallest argument”). 



**Examples:**
```lisp
 

(max 3) *→* 3 

(min 3) *→* 3 

(max 6 12) *→* 12 

(min 6 12) *→* 6 

(max -6 -12) *→* -6 

(min -6 -12) *→* -12 

(max 1 3 2 -7) *→* 3 

(min 1 3 2 -7) *→* -7 

(max -2 3 0 7) *→* 7 

(min -2 3 0 7) *→* -2 

(max 5.0 2) *→* 5.0 

(min 5.0 2) 

*→* 2 

<i><sup>or</sup>→</i> 2.0 

(max 3.0 7 1) 

*→* 7 

<i><sup>or</sup>→</i> 7.0 

(min 3.0 7 1) 

*→* 1 

<i><sup>or</sup>→</i> 1.0 

(max 1.0s0 7.0d0) *→* 7.0d0 



 

 

(min 1.0s0 7.0d0) 

*→* 1.0s0 

<i><sup>or</sup>→</i> 1.0d0 

(max 3 1 1.0s0 1.0d0) 

*→* 3 

<i><sup>or</sup>→</i> 3.0d0 

(min 3 1 1.0s0 1.0d0) 

*→* 1 

<i><sup>or</sup>→</i> 1.0s0 

<i><sup>or</sup>→</i> 1.0d0 


```
**Exceptional Situations:** 



Should signal an error of *type* **type-error** if any *number* is not a *real*. 



