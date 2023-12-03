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
|&#60;p&#62;Hyperbolic sine (&#60;i&#62;e&#60;sup&#62;x&#60;/sup&#62; − e&#60;sup&#62;−x&#60;/sup&#62;&#60;/i&#62;)&#60;i&#62;/&#60;/i&#62;2 &#60;/p&#62;&#60;p&#62;Hyperbolic cosine (&#60;i&#62;e&#60;sup&#62;x&#60;/sup&#62;&#60;/i&#62; + &#60;i&#62;e&#60;sup&#62;−x&#60;/sup&#62;&#60;/i&#62;)&#60;i&#62;/&#60;/i&#62;2 &#60;/p&#62;&#60;p&#62;Hyperbolic tangent (&#60;i&#62;e&#60;sup&#62;x&#60;/sup&#62; − e&#60;sup&#62;−x&#60;/sup&#62;&#60;/i&#62;)&#60;i&#62;/&#60;/i&#62;(&#60;i&#62;e&#60;sup&#62;x&#60;/sup&#62;&#60;/i&#62; + &#60;i&#62;e&#60;sup&#62;−x&#60;/sup&#62;&#60;/i&#62;) &#60;/p&#62;&#60;p&#62;&#60;sub&#62;Hyperbolic arc sine log (&#60;i&#62;x&#60;/i&#62; +&#60;/sub&#62;&#60;i&#62;&#60;sup&#62;√&#60;/sup&#62;&#60;/i&#62;1 + &#60;i&#62;x&#60;/i&#62;&#60;s&#62;&#60;sup&#62;2&#60;/sup&#62;&#60;/s&#62;) &#60;/p&#62;&#60;p&#62;&#60;sub&#62;Hyperbolic arc cosine 2 log (&#60;/sub&#62;&#60;sup&#62;p&#60;/sup&#62;&#60;sub&#62;(&#60;i&#62;x&#60;/i&#62; + 1)&#60;i&#62;/&#60;/i&#62;2 +&#60;/sub&#62; &#60;sup&#62;p&#60;/sup&#62;(&#60;i&#62;x −&#60;/i&#62; 1)&#60;i&#62;/&#60;/i&#62;2) &#60;/p&#62;&#60;p&#62;Hyperbolic arc tangent (log (1 + *x*) *−* log (1 *− x*))*/*2&#60;/p&#62;|


**Figure 12–16. Mathematical definitions for hyperbolic functions** 

The following definition for the inverse hyperbolic cosine determines the range and branch cuts: 

arccosh *z* = 2 log 

` `&#60;sup&#62;p&#60;/sup&#62;&#60;sub&#62;(&#60;i&#62;z&#60;/i&#62; + 1)&#60;i&#62;/&#60;/i&#62;2 +&#60;/sub&#62; &#60;sup&#62;p&#60;/sup&#62;&#60;sub&#62;(&#60;i&#62;z −&#60;/i&#62; 1)&#60;i&#62;/&#60;/i&#62;2&#60;/sub&#62;&#60;/sup&#62; &#60;i&#62;.&#60;/i&#62; 

The branch cut for the inverse hyperbolic cosine function lies along the real axis to the left of 1 (inclusive), extending indefinitely along the negative real axis, continuous with quadrant II and (between 0 and 1) with quadrant I. The range is that half-strip of the complex plane containing 

numbers whose real part is non-negative and whose imaginary part is between *−π* (exclusive) and *π* (inclusive). A number with real part zero is in the range if its imaginary part is between zero (inclusive) and *π* (inclusive). 



 

 

**sinh, cosh, tanh, asinh, acosh, atanh** 

The following definition for the inverse hyperbolic sine determines the range and branch cuts: 



arcsinh *z* = log 

&#60;sub&#62;&#60;i&#62;z&#60;/i&#62; +&#60;/sub&#62;&#60;sup&#62;p&#60;/sup&#62;1 + &#60;i&#62;z&#60;/i&#62;&#60;sup&#62;2&#60;/sup&#62; &#60;i&#62;.&#60;/i&#62; 

The branch cut for the inverse hyperbolic sine function is in two pieces: one along the positive imaginary axis above *i* (inclusive), continuous with quadrant I, and one along the negative imaginary axis below *−i* (inclusive), continuous with quadrant III. The range is that strip of the complex plane containing numbers whose imaginary part is between *−π/*2 and *π/*2. A number with imaginary part equal to *−π/*2 is in the range if and only if its real part is non-positive; a number with imaginary part equal to *π/*2 is in the range if and only if its imaginary part is non-negative. 

The following definition for the inverse hyperbolic tangent determines the range and branch cuts: arctanh &#60;i&#62;z&#60;/i&#62; =&#60;sup&#62;log (1 + &#60;i&#62;z&#60;/i&#62;) &#60;i&#62;−&#60;/i&#62; log (1 &#60;i&#62;− z&#60;/i&#62;)&#60;/sup&#62; 

&#60;sub&#62;2&#60;/sub&#62;&#9655; 

Note that: 

*i* arctan *z* = arctanh *iz.* 

The branch cut for the inverse hyperbolic tangent function is in two pieces: one along the negative real axis to the left of *−*1 (inclusive), continuous with quadrant III, and one along the positive real axis to the right of 1 (inclusive), continuous with quadrant I. The points *−*1 and 1 are excluded from the domain. The range is that strip of the complex plane containing numbers whose imaginary part is between *−π/*2 and *π/*2. A number with imaginary part equal to *−π/*2 is in the range if and only if its real part is strictly negative; a number with imaginary part equal to *π/*2 is in the range if and only if its imaginary part is strictly positive. Thus the range of the inverse hyperbolic tangent function is identical to that of the inverse hyperbolic sine function with the points *−πi/*2 and *πi/*2 excluded. 

**Examples:** 

(sinh 0) *→* 0.0 

(cosh (complex 0 -1)) *→* #C(0.540302 -0.0) 

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



 

 

