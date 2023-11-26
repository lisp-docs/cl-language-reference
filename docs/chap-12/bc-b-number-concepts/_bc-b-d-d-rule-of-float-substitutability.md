 

When the arguments to an irrational mathematical *function* are all *rational* and the true mathe matical result is also (mathematically) rational, then unless otherwise noted an implementation is free to return either an accurate *rational* result or a *single float* approximation. If the arguments 

are all *rational* but the result cannot be expressed as a *rational* number, then a *single float* approximation is always returned. 

If the arguments to an irrational mathematical *function* are all of type 

(or rational (complex rational)) and the true mathematical result is (mathematically) a complex number with rational real and imaginary parts, then unless otherwise noted an imple mentation is free to return either an accurate result of type (or rational (complex rational)) or a *single float* (permissible only if the imaginary part of the true mathematical result is zero) or (complex single-float). If the arguments are all of type (or rational (complex rational)) but the result cannot be expressed as a *rational* or *complex rational*, then the returned value will be of *type* **single-float** (permissible only if the imaginary part of the true mathematical result is zero) or (complex single-float). 

Float substitutability applies neither to the rational *functions* **+**, **-**, **\***, and **/** nor to the related *operators* **1+**, **1-**, **incf**, **decf**, and **conjugate**. For rational *functions*, if all arguments are *rational*, then the result is *rational*; if all arguments are of type (or rational (complex rational)), then the result is of type (or rational (complex rational)). 

Numbers **12–5**

 

 

|**Function Sample Results**|
| :- |
|\<p\>**abs** (abs #c(3 4)) *→* 5 *or* 5.0 \</p\>\<p\>**acos** (acos 1) *→* 0 *or* 0.0 \</p\>\<p\>**acosh** (acosh 1) *→* 0 *or* 0.0 \</p\>\<p\>**asin** (asin 0) *→* 0 *or* 0.0 \</p\>\<p\>**asinh** (asinh 0) *→* 0 *or* 0.0 \</p\>\<p\>**atan** (atan 0) *→* 0 *or* 0.0 \</p\>\<p\>**atanh** (atanh 0) *→* 0 *or* 0.0 \</p\>\<p\>**cis** (cis 0) *→* 1 *or* #c(1.0 0.0) \</p\>\<p\>**cos** (cos 0) *→* 1 *or* 1.0 \</p\>\<p\>**cosh** (cosh 0) *→* 1 *or* 1.0 \</p\>\<p\>**exp** (exp 0) *→* 1 *or* 1.0 \</p\>\<p\>**expt** (expt 8 1/3) *→* 2 *or* 2.0 \</p\>\<p\>**log** (log 1) *→* 0 *or* 0.0 \</p\>\<p\>(log 8 2) *→* 3 *or* 3.0 \</p\>\<p\>**phase** (phase 7) *→* 0 *or* 0.0 \</p\>\<p\>**signum** (signum #c(3 4)) *→* #c(3/5 4/5) *or* #c(0.6 0.8) **sin** (sin 0) *→* 0 *or* 0.0 \</p\>\<p\>**sinh** (sinh 0) *→* 0 *or* 0.0 \</p\>\<p\>**sqrt** (sqrt 4) *→* 2 *or* 2.0 \</p\>\<p\>(sqrt 9/16) *→* 3/4 *or* 0.75 \</p\>\<p\>**tan** (tan 0) *→* 0 *or* 0.0 \</p\>\<p\>**tanh** (tanh 0) *→* 0 *or* 0.0\</p\>|


**Figure 12–8. Functions Affected by Rule of Float Substitutability** 

