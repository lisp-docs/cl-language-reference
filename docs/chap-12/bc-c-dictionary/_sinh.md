**sinh, cosh, tanh, asinh, acosh, atanh** *Function* 



**Syntax:** 



**sinh** *number → result* 



**cosh** *number → result* 



**tanh** *number → result* 



**asinh** *number → result* 



**acosh** *number → result* 



**atanh** *number → result* 



**Arguments and Values:** 



*number*—a *number* . 



*result*—a *number* . 



**Description:** 



These functions compute the hyperbolic sine, cosine, tangent, arc sine, arc cosine, and arc tangent functions, which are mathematically defined for an argument *x* as given in Figure 12–16. 



|**Function Definition**|

| :- |

|<p>Hyperbolic sine (<i>e<sup>x</sup> − e<sup>−x</sup></i>)<i>/</i>2 </p><p>Hyperbolic cosine (<i>e<sup>x</sup></i> + <i>e<sup>−x</sup></i>)<i>/</i>2 </p><p>Hyperbolic tangent (<i>e<sup>x</sup> − e<sup>−x</sup></i>)<i>/</i>(<i>e<sup>x</sup></i> + <i>e<sup>−x</sup></i>) </p><p><sub>Hyperbolic arc sine log (<i>x</i> +</sub><i><sup>√</sup></i>1 + <i>x</i><s><sup>2</sup></s>) </p><p><sub>Hyperbolic arc cosine 2 log (</sub><sup>p</sup><sub>(<i>x</i> + 1)<i>/</i>2 +</sub> <sup>p</sup>(<i>x −</i> 1)<i>/</i>2) </p><p>Hyperbolic arc tangent (log (1 + *x*) *−* log (1 *− x*))*/*2</p>|





**Figure 12–16. Mathematical definitions for hyperbolic functions** 



The following definition for the inverse hyperbolic cosine determines the range and branch cuts: 



arccosh *z* = 2 log 



` `<sup>p</sup><sub>(<i>z</i> + 1)<i>/</i>2 +</sub> <sup>p</sup><sub>(<i>z −</i> 1)<i>/</i>2</sub></sup> <i>.</i> 



The branch cut for the inverse hyperbolic cosine function lies along the real axis to the left of 1 (inclusive), extending indefinitely along the negative real axis, continuous with quadrant II and (between 0 and 1) with quadrant I. The range is that half-strip of the complex plane containing 



numbers whose real part is non-negative and whose imaginary part is between *−π* (exclusive) and *π* (inclusive). A number with real part zero is in the range if its imaginary part is between zero (inclusive) and *π* (inclusive). 







 



 



**sinh, cosh, tanh, asinh, acosh, atanh** 



The following definition for the inverse hyperbolic sine determines the range and branch cuts: 







arcsinh *z* = log 



<sub><i>z</i> +</sub><sup>p</sup>1 + <i>z</i><sup>2</sup> <i>.</i> 



The branch cut for the inverse hyperbolic sine function is in two pieces: one along the positive imaginary axis above *i* (inclusive), continuous with quadrant I, and one along the negative imaginary axis below *−i* (inclusive), continuous with quadrant III. The range is that strip of the complex plane containing numbers whose imaginary part is between *−π/*2 and *π/*2. A number with imaginary part equal to *−π/*2 is in the range if and only if its real part is non-positive; a number with imaginary part equal to *π/*2 is in the range if and only if its imaginary part is non-negative. 



The following definition for the inverse hyperbolic tangent determines the range and branch cuts: arctanh <i>z</i> =<sup>log (1 + <i>z</i>) <i>−</i> log (1 <i>− z</i>)</sup> 



<sub>2</sub>▷ 



Note that: 



*i* arctan *z* = arctanh *iz.* 



The branch cut for the inverse hyperbolic tangent function is in two pieces: one along the negative real axis to the left of *−*1 (inclusive), continuous with quadrant III, and one along the positive real axis to the right of 1 (inclusive), continuous with quadrant I. The points *−*1 and 1 are excluded from the domain. The range is that strip of the complex plane containing numbers whose imaginary part is between *−π/*2 and *π/*2. A number with imaginary part equal to *−π/*2 is in the range if and only if its real part is strictly negative; a number with imaginary part equal to *π/*2 is in the range if and only if its imaginary part is strictly positive. Thus the range of the inverse hyperbolic tangent function is identical to that of the inverse hyperbolic sine function with the points *−πi/*2 and *πi/*2 excluded. 



**Examples:**
```lisp
 



(sinh 0) *→* 0.0 



(cosh (complex 0 -1)) *→* #C(0.540302 -0.0) 




```
**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *number* is not a *number* . Might signal **arithmetic-error**. 



**See Also:** 



**log**, **sqrt**, Section 12.1.3.3 (Rule of Float Substitutability) 



**Notes:** 



The result of **acosh** may be a *complex* even if *number* is not a *complex* ; this occurs when *number* is less than one. Also, the result of **atanh** may be a *complex* even if *number* is not a *complex* ; this occurs when the absolute value of *number* is greater than one. 







 



 



The branch cut formulae are mathematically correct, assuming completely accurate computation. Implementors should consult a good text on numerical analysis. The formulae given above are not necessarily the simplest ones for real-valued computations; they are chosen to define the branch cuts in desirable ways for the complex case. 



*∗ Function* 



**Syntax:** 



**\*** &rest *numbers → product* 



**Arguments and Values:** 



*number*—a *number* . 



*product*—a *number* . 



**Description:** 



Returns the product of *numbers*, performing any necessary type conversions in the process. If no *numbers* are supplied, 1 is returned. 



**Examples:** 



(\*) *→* 1 



(\* 3 5) *→* 15 



(\* 1.0 #c(22 33) 55/98) *→* #C(12.346938775510203 18.520408163265305) 



**Exceptional Situations:** 



Might signal **type-error** if some *argument* is not a *number* . Might signal **arithmetic-error**. 



**See Also:** 



Section 12.1.1 (Numeric Operations), Section 12.1.3 (Rational Computations), Section 12.1.4 (Floating-point Computations), Section 12.1.5 (Complex Computations) 







 



 



