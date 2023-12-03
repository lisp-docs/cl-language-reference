 

When the arguments to an irrational mathematical *function* are all *rational* and the true mathe matical result is also (mathematically) rational, then unless otherwise noted an implementation is free to return either an accurate *rational* result or a *single float* approximation. If the arguments 

are all *rational* but the result cannot be expressed as a *rational* number, then a *single float* approximation is always returned. 

If the arguments to an irrational mathematical *function* are all of type 

(or rational (complex rational)) and the true mathematical result is (mathematically) a complex number with rational real and imaginary parts, then unless otherwise noted an imple mentation is free to return either an accurate result of type (or rational (complex rational)) or a *single float* (permissible only if the imaginary part of the true mathematical result is zero) or (complex single-float). If the arguments are all of type (or rational (complex rational)) but the result cannot be expressed as a *rational* or *complex rational*, then the returned value will be of *type* **single-float** (permissible only if the imaginary part of the true mathematical result is zero) or (complex single-float). 

Float substitutability applies neither to the rational *functions* **+**, **-**, **\***, and **/** nor to the related *operators* **1+**, **1-**, **incf**, **decf**, and **conjugate**. For rational *functions*, if all arguments are *rational*, then the result is *rational*; if all arguments are of type (or rational (complex rational)), then the result is of type (or rational (complex rational)). 



 

 

|**Function Sample Results**|
| :- |
|&#60;p&#62;**abs** (abs #c(3 4)) *→* 5 *or* 5.0 &#60;/p&#62;&#60;p&#62;**acos** (acos 1) *→* 0 *or* 0.0 &#60;/p&#62;&#60;p&#62;**acosh** (acosh 1) *→* 0 *or* 0.0 &#60;/p&#62;&#60;p&#62;**asin** (asin 0) *→* 0 *or* 0.0 &#60;/p&#62;&#60;p&#62;**asinh** (asinh 0) *→* 0 *or* 0.0 &#60;/p&#62;&#60;p&#62;**atan** (atan 0) *→* 0 *or* 0.0 &#60;/p&#62;&#60;p&#62;**atanh** (atanh 0) *→* 0 *or* 0.0 &#60;/p&#62;&#60;p&#62;**cis** (cis 0) *→* 1 *or* #c(1.0 0.0) &#60;/p&#62;&#60;p&#62;**cos** (cos 0) *→* 1 *or* 1.0 &#60;/p&#62;&#60;p&#62;**cosh** (cosh 0) *→* 1 *or* 1.0 &#60;/p&#62;&#60;p&#62;**exp** (exp 0) *→* 1 *or* 1.0 &#60;/p&#62;&#60;p&#62;**expt** (expt 8 1/3) *→* 2 *or* 2.0 &#60;/p&#62;&#60;p&#62;**log** (log 1) *→* 0 *or* 0.0 &#60;/p&#62;&#60;p&#62;(log 8 2) *→* 3 *or* 3.0 &#60;/p&#62;&#60;p&#62;**phase** (phase 7) *→* 0 *or* 0.0 &#60;/p&#62;&#60;p&#62;**signum** (signum #c(3 4)) *→* #c(3/5 4/5) *or* #c(0.6 0.8) **sin** (sin 0) *→* 0 *or* 0.0 &#60;/p&#62;&#60;p&#62;**sinh** (sinh 0) *→* 0 *or* 0.0 &#60;/p&#62;&#60;p&#62;**sqrt** (sqrt 4) *→* 2 *or* 2.0 &#60;/p&#62;&#60;p&#62;(sqrt 9/16) *→* 3/4 *or* 0.75 &#60;/p&#62;&#60;p&#62;**tan** (tan 0) *→* 0 *or* 0.0 &#60;/p&#62;&#60;p&#62;**tanh** (tanh 0) *→* 0 *or* 0.0&#60;/p&#62;|


**Figure 12–8. Functions Affected by Rule of Float Substitutability** 

