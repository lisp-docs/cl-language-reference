**exp, expt** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"exp"}><b>exp</b></ClLinks> *number → result* 



<ClLinks  term={"expt"}><b>expt</b></ClLinks> *base-number power-number → result* 



**Arguments and Values:** 



<ClLinks  term={"number"}><i>number</i></ClLinks>—a <ClLinks  term={"number"}><i>number</i></ClLinks> . 



*base-number*—a <ClLinks  term={"number"}><i>number</i></ClLinks> . 



*power-number*—a <ClLinks  term={"number"}><i>number</i></ClLinks> . 



*result*—a <ClLinks  term={"number"}><i>number</i></ClLinks> . 



**Description:** 



<ClLinks  term={"exp"}><b>exp</b></ClLinks> and <ClLinks  term={"expt"}><b>expt</b></ClLinks> perform exponentiation. 



<ClLinks  term={"exp"}><b>exp</b></ClLinks> returns *e* raised to the power <ClLinks  term={"number"}><i>number</i></ClLinks>, where *e* is the base of the natural logarithms. <ClLinks  term={"exp"}><b>exp</b></ClLinks> has no branch cut. 



<ClLinks  term={"expt"}><b>expt</b></ClLinks> returns *base-number* raised to the power *power-number*. If the *base-number* is a <ClLinks  term={"rational"}><i>rational</i></ClLinks> and *power-number* is an *integer* , the calculation is exact and the result will be of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"rational"}><b>rational</b></ClLinks>; otherwise a floating-point approximation might result. For <ClLinks  term={"expt"}><b>expt</b></ClLinks> of a <GlossaryTerm styled={true} term={"complex rational"}><i>complex rational</i></GlossaryTerm> to an *integer* power, the calculation must be exact and the result is of type (or rational (complex rational)). 



The result of <ClLinks  term={"expt"}><b>expt</b></ClLinks> can be a <ClLinks  term={"complex"}><i>complex</i></ClLinks> , even when neither argument is a <ClLinks  term={"complex"}><i>complex</i></ClLinks> , if *base-number* is negative and *power-number* is not an *integer* . The result is always the *principal complex value*. For example, (expt -8 1/3) is not permitted to return -2, even though -2 is one of the cube roots of -8. The <ClLinks  term={"principal"}><i>principal</i></ClLinks> cube root is a <ClLinks  term={"complex"}><i>complex</i></ClLinks> approximately equal to #C(1.0 1.73205), not -2. 



<b>expt</b> is defined as <i>b<sup>x</sup> = e<sup>xlogb</sup></i>. This defines the <i>principal values</i> precisely. The range of <b>expt</b> is the entire complex plane. Regarded as a function of <i>x</i>, with <i>b</i> fixed, there is no branch cut. Regarded as a function of <i>b</i>, with <i>x</i> fixed, there is in general a branch cut along the negative real axis, continuous with quadrant II. The domain excludes the origin. By definition, 0<sup>0</sup>=1. If <i>b</i>=0 and the real part of <i>x</i> is strictly positive, then <i>b<sup>x</sup></i>=0. For all other values of <i>x</i>, 0<i><sup>x</sup></i>is an error. 







 



 



When *power-number* is an *integer* 0, then the result is always the value one in the <ClLinks  term={"type"}><i>type</i></ClLinks> of *base-number*, even if the *base-number* is zero (of any <ClLinks  term={"type"}><i>type</i></ClLinks>). That is: 



(expt x 0) *≡* (coerce 1 (type-of x)) 



If *power-number* is a zero of any other <ClLinks  term={"type"}><i>type</i></ClLinks>, then the result is also the value one, in the <ClLinks  term={"type"}><i>type</i></ClLinks> of the arguments after the application of the contagion rules in Section 12.1.1.2 (Contagion in Numeric Operations), with one exception: the consequences are undefined if *base-number* is zero when *power-number* is zero and not of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"integer"}><b>integer</b></ClLinks>. 



**Examples:**
```lisp
(exp 0) → 1.0 
(exp 1) → 2.718282 
(exp (log 5)) → 5.0 
(expt 2 8) → 256 
(expt 4 .5) → 2.0 
(expt #c(0 1) 2) → -1 
(expt #c(2 2) 3) → #C(-16 16) 
(expt #c(2 2) 4) → -64 
```
**See Also:** 



<ClLinks  term={"log"}><b>log</b></ClLinks>, Section 12.1.3.3 (Rule of Float Substitutability) 



**Notes:** 



Implementations of <ClLinks  term={"expt"}><b>expt</b></ClLinks> are permitted to use different algorithms for the cases of a *power-number* of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"rational"}><b>rational</b></ClLinks> and a *power-number* of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"float"}><b>float</b></ClLinks>. 



Note that by the following logic, (sqrt (expt *x* 3)) is not equivalent to (expt *x* 3/2). 



(setq x (exp (/ (\* 2 pi #c(0 1)) 3))) ;exp(2.pi.i/3) 



(expt x 3) → 1 ;except for round-off error 



(sqrt (expt x 3)) → 1 ;except for round-off error 



(expt x 3/2) → -1 ;except for round-off error 



