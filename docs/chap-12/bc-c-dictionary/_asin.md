**asin, acos, atan** *Function* 



**Syntax:** 



**asin** *number → radians* 



**acos** *number → radians* 



**atan** *number1* &amp;optional *number2 → radians* 



**Arguments and Values:** 



*number*—a *number* . 



*number1*—a *number* if *number2* is not supplied, or a *real* if *number2* is supplied. 



*number2*—a *real*. 



*radians*—a *number* (of radians). 



**Description:** 



**asin**, **acos**, and **atan** compute the arc sine, arc cosine, and arc tangent respectively. 



The arc sine, arc cosine, and arc tangent (with only *number1* supplied) functions can be defined mathematically for *number* or *number1* specified as *x* as in Figure 12–14. 



|<b><sup>Function Definition</sup></b><i>√</i> |

| :- |

|<p>Arc sine *−i* log *ix* +1 *− x*<sup>2</sup> </p><p>Arc cosine (*π/*2) *−* arcsin *x* </p><p><sub>Arc tangent <i>−i</i> log (1 + <i>ix</i>)</sub><sup>p</sup>1<i>/</i>(1 + <i>x</i><sup>2</sup><sub>)</sub> </p>|





**Figure 12–14. Mathematical definition of arc sine, arc cosine, and arc tangent** 



These formulae are mathematically correct, assuming completely accurate computation. They are not necessarily the simplest ones for real-valued computations. 



If both *number1* and *number2* are supplied for **atan**, the result is the arc tangent of *number1*/*number2*. The value of **atan** is always between *−π* (exclusive) and *π* (inclusive) when minus zero is not supported. The range of the two-argument arc tangent when minus zero is supported includes *−π*. 



For a *real number1*, the result is a *real* and lies between *−π/*2 and *π/*2 (both exclusive). *number1* can be a *complex* if *number2* is not supplied. If both are supplied, *number2* can be zero provided *number1* is not zero. 



The following definition for arc sine determines the range and branch cuts: 







 



 



**asin, acos, atan** 







arcsin *z* = *−i* log 



<sub><i>iz</i> +</sub><sup>p</sup>1 <i>− z</i><sup>2</sup>  



The branch cut for the arc sine function is in two pieces: one along the negative real axis to the left of *−*1 (inclusive), continuous with quadrant II, and one along the positive real axis to the right of 1 (inclusive), continuous with quadrant IV. The range is that strip of the complex plane containing numbers whose real part is between *−π/*2 and *π/*2. A number with real part equal to *−π/*2 is in the range if and only if its imaginary part is non-negative; a number with real part equal to *π/*2 is in the range if and only if its imaginary part is non-positive. 



The following definition for arc cosine determines the range and branch cuts: <sub>arccos <i>z</i> =</sub><i><sup>π</sup></i><sub>2</sub><i>−</i> arcsin <i>z</i> 



or, which are equivalent, 







arccos *z* = *−i* log 



<sub><i>z</i> + <i>i</i></sub><sup>p</sup>1 <i>− z</i><sup>2</sup>  



<sub>arccos <i>z</i> =2 log</sub> <sup>p</sup><sub>(1 + <i>z</i>)<i>/</i>2 + <i>i</i></sub><sup>p</sup><sub>(1 <i>− z</i>)<i>/</i>2</sub>  



*i* 



The branch cut for the arc cosine function is in two pieces: one along the negative real axis to the left of *−*1 (inclusive), continuous with quadrant II, and one along the positive real axis to the right of 1 (inclusive), continuous with quadrant IV. This is the same branch cut as for arc sine. The range is that strip of the complex plane containing numbers whose real part is between 0 and *π*. A number with real part equal to 0 is in the range if and only if its imaginary part is non-negative; a number with real part equal to *π* is in the range if and only if its imaginary part is non-positive. 



The following definition for (one-argument) arc tangent determines the range and branch cuts: 



arctan <i>z</i> =<sup>log (1 + <i>iz</i>) <i>−</i> log (1 <i>− iz</i>)</sup> 



2*i* 



Beware of simplifying this formula; “obvious” simplifications are likely to alter the branch cuts or the values on the branch cuts incorrectly. The branch cut for the arc tangent function is in two pieces: one along the positive imaginary axis above *i* (exclusive), continuous with quadrant 



II, and one along the negative imaginary axis below *−i* (exclusive), continuous with quadrant IV. The points *i* and *−i* are excluded from the domain. The range is that strip of the complex plane containing numbers whose real part is between *−π/*2 and *π/*2. A number with real part equal to *−π/*2 is in the range if and only if its imaginary part is strictly positive; a number with real part equal to *π/*2 is in the range if and only if its imaginary part is strictly negative. Thus the range of 



arc tangent is identical to that of arc sine with the points *−π/*2 and *π/*2 excluded. 



 



 



**asin, acos, atan** 



For **atan**, the signs of *number1* (indicated as *x*) and *number2* (indicated as *y*) are used to derive quadrant information. Figure 12–15 details various special cases. The asterisk (\*) indicates that the entry in the figure applies to implementations that support minus zero. 



|*y* **Condition** *x* **Condition Cartesian locus Range of result**|

| :- |

|<p>*y* = 0 *x* &gt; 0 Positive x-axis 0 </p><p>\* *y* = +0 *x* &gt; 0 Positive x-axis +0 </p><p>\* *y* = *−*0 *x* &gt; 0 Positive x-axis *−*0 </p><p>*y* &gt; 0 *x* &gt; 0 Quadrant I 0 &lt; result &lt; *π/*2 *y* &gt; 0 *x* = 0 Positive y-axis *π/*2 </p><p>*y* &gt; 0 *x* &lt; 0 Quadrant II *π/*2 &lt; result &lt; *π y* = 0 *x* &lt; 0 Negative x-axis *π* </p><p>\* *y* = +0 *x* &lt; 0 Negative x-axis +*π* </p><p>\* *y* = *−*0 *x* &lt; 0 Negative x-axis *−π* </p><p>*y* &lt; 0 *x* &lt; 0 Quadrant III *−π* &lt; result &lt; *−π/*2 *y* &lt; 0 *x* = 0 Negative y-axis *−π/*2 </p><p>*y* &lt; 0 *x* &gt; 0 Quadrant IV *−π/*2 &lt; result &lt; 0 *y* = 0 *x* = 0 Origin undefined consequences \* *y* = +0 *x* = +0 Origin +0 </p><p>\* *y* = *−*0 *x* = +0 Origin *−*0 </p><p>\* *y* = +0 *x* = *−*0 Origin +*π* </p><p>\* *y* = *−*0 *x* = *−*0 Origin *−π*</p>|





**Figure 12–15. Quadrant information for arc tangent** 



**Examples:**
```lisp
 

(asin 0) *→* 0.0 

(acos #c(0 1)) *→* #C(1.5707963267948966 -0.8813735870195432) 

(/ (atan 1 (sqrt 3)) 6) *→* 0.087266 

(atan #c(0 2)) *→* #C(-1.5707964 0.54930615) 


```
**Exceptional Situations:** 



**acos** and **asin** should signal an error of *type* **type-error** if *number* is not a *number* . **atan** should signal **type-error** if one argument is supplied and that argument is not a *number* , or if two arguments are supplied and both of those arguments are not *reals*. 



**acos**, **asin**, and **atan** might signal **arithmetic-error**. 



**See Also:** 



**log**, **sqrt**, Section 12.1.3.3 (Rule of Float Substitutability) 







 



 



**Notes:** 



The result of either **asin** or **acos** can be a *complex* even if *number* is not a *complex* ; this occurs when the absolute value of *number* is greater than one. 



