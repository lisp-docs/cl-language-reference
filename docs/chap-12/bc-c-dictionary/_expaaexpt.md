**exp, expt** *Function* 

**Syntax:** 

**exp** *number → result* 

**expt** *base-number power-number → result* 

**Arguments and Values:** 

*number*—a *number* . 

*base-number*—a *number* . 

*power-number*—a *number* . 

*result*—a *number* . 

**Description:** 

**exp** and **expt** perform exponentiation. 

**exp** returns *e* raised to the power *number*, where *e* is the base of the natural logarithms. **exp** has no branch cut. 

**expt** returns *base-number* raised to the power *power-number*. If the *base-number* is a *rational* and *power-number* is an *integer* , the calculation is exact and the result will be of *type* **rational**; otherwise a floating-point approximation might result. For **expt** of a *complex rational* to an *integer* power, the calculation must be exact and the result is of type (or rational (complex rational)). 

The result of **expt** can be a *complex* , even when neither argument is a *complex* , if *base-number* is negative and *power-number* is not an *integer* . The result is always the *principal complex value*. For example, (expt -8 1/3) is not permitted to return -2, even though -2 is one of the cube roots of -8. The *principal* cube root is a *complex* approximately equal to #C(1.0 1.73205), not -2. 

&#60;b&#62;expt&#60;/b&#62; is defined as &#60;i&#62;b&#60;sup&#62;x&#60;/sup&#62; = e&#60;sup&#62;xlogb&#60;/sup&#62;&#60;/i&#62;. This defines the &#60;i&#62;principal values&#60;/i&#62; precisely. The range of &#60;b&#62;expt&#60;/b&#62; is the entire complex plane. Regarded as a function of &#60;i&#62;x&#60;/i&#62;, with &#60;i&#62;b&#60;/i&#62; fixed, there is no branch cut. Regarded as a function of &#60;i&#62;b&#60;/i&#62;, with &#60;i&#62;x&#60;/i&#62; fixed, there is in general a branch cut along the negative real axis, continuous with quadrant II. The domain excludes the origin. By definition, 0&#60;sup&#62;0&#60;/sup&#62;=1. If &#60;i&#62;b&#60;/i&#62;=0 and the real part of &#60;i&#62;x&#60;/i&#62; is strictly positive, then &#60;i&#62;b&#60;sup&#62;x&#60;/sup&#62;&#60;/i&#62;=0. For all other values of &#60;i&#62;x&#60;/i&#62;, 0&#60;i&#62;&#60;sup&#62;x&#60;/sup&#62;&#60;/i&#62;is an error. 



 

 

When *power-number* is an *integer* 0, then the result is always the value one in the *type* of *base-number*, even if the *base-number* is zero (of any *type*). That is: 

(expt x 0) *≡* (coerce 1 (type-of x)) 

If *power-number* is a zero of any other *type*, then the result is also the value one, in the *type* of the arguments after the application of the contagion rules in Section 12.1.1.2 (Contagion in Numeric Operations), with one exception: the consequences are undefined if *base-number* is zero when *power-number* is zero and not of *type* **integer**. 

**Examples:** 

(exp 0) *→* 1.0 

(exp 1) *→* 2.718282 

(exp (log 5)) *→* 5.0 

(expt 2 8) *→* 256 

(expt 4 .5) *→* 2.0 

(expt #c(0 1) 2) *→* -1 

(expt #c(2 2) 3) *→* #C(-16 16) 

(expt #c(2 2) 4) *→* -64 

**See Also:** 

**log**, Section 12.1.3.3 (Rule of Float Substitutability) 

**Notes:** 

Implementations of **expt** are permitted to use different algorithms for the cases of a *power-number* of *type* **rational** and a *power-number* of *type* **float**. 

Note that by the following logic, (sqrt (expt *x* 3)) is not equivalent to (expt *x* 3/2). 

(setq x (exp (/ (\* 2 pi #c(0 1)) 3))) ;exp(2.pi.i/3) 

(expt x 3) *→* 1 ;except for round-off error 

(sqrt (expt x 3)) *→* 1 ;except for round-off error 

(expt x 3/2) *→* -1 ;except for round-off error 

