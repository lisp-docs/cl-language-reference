**exp, expt** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"exp"}><b>exp</b></DictionaryLink> *number → result* 



<DictionaryLink  term={"expt"}><b>expt</b></DictionaryLink> *base-number power-number → result* 



**Arguments and Values:** 



<GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm>—a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> . 



*base-number*—a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> . 



*power-number*—a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> . 



*result*—a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> . 



**Description:** 



<DictionaryLink  term={"exp"}><b>exp</b></DictionaryLink> and <DictionaryLink  term={"expt"}><b>expt</b></DictionaryLink> perform exponentiation. 



<DictionaryLink  term={"exp"}><b>exp</b></DictionaryLink> returns *e* raised to the power <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm>, where *e* is the base of the natural logarithms. <DictionaryLink  term={"exp"}><b>exp</b></DictionaryLink> has no branch cut. 



<DictionaryLink  term={"expt"}><b>expt</b></DictionaryLink> returns *base-number* raised to the power *power-number*. If the *base-number* is a <GlossaryTerm  term={"rational"}><i>rational</i></GlossaryTerm> and *power-number* is an *integer* , the calculation is exact and the result will be of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"rational"}><b>rational</b></DictionaryLink>; otherwise a floating-point approximation might result. For <DictionaryLink  term={"expt"}><b>expt</b></DictionaryLink> of a <GlossaryTerm styled={true} term={"complex rational"}><i>complex rational</i></GlossaryTerm> to an *integer* power, the calculation must be exact and the result is of type (or rational (complex rational)). 



The result of <DictionaryLink  term={"expt"}><b>expt</b></DictionaryLink> can be a <GlossaryTerm  term={"complex"}><i>complex</i></GlossaryTerm> , even when neither argument is a <GlossaryTerm  term={"complex"}><i>complex</i></GlossaryTerm> , if *base-number* is negative and *power-number* is not an *integer* . The result is always the *principal complex value*. For example, (expt -8 1/3) is not permitted to return -2, even though -2 is one of the cube roots of -8. The <GlossaryTerm  term={"principal"}><i>principal</i></GlossaryTerm> cube root is a <GlossaryTerm  term={"complex"}><i>complex</i></GlossaryTerm> approximately equal to #C(1.0 1.73205), not -2. 



<b>expt</b> is defined as <i>b<sup>x</sup> = e<sup>xlogb</sup></i>. This defines the <i>principal values</i> precisely. The range of <b>expt</b> is the entire complex plane. Regarded as a function of <i>x</i>, with <i>b</i> fixed, there is no branch cut. Regarded as a function of <i>b</i>, with <i>x</i> fixed, there is in general a branch cut along the negative real axis, continuous with quadrant II. The domain excludes the origin. By definition, 0<sup>0</sup>=1. If <i>b</i>=0 and the real part of <i>x</i> is strictly positive, then <i>b<sup>x</sup></i>=0. For all other values of <i>x</i>, 0<i><sup>x</sup></i>is an error. 







 



 



When *power-number* is an *integer* 0, then the result is always the value one in the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> of *base-number*, even if the *base-number* is zero (of any <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm>). That is: 



(expt x 0) *≡* (coerce 1 (type-of x)) 



If *power-number* is a zero of any other <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm>, then the result is also the value one, in the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> of the arguments after the application of the contagion rules in Section 12.1.1.2 (Contagion in Numeric Operations), with one exception: the consequences are undefined if *base-number* is zero when *power-number* is zero and not of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"integer"}><b>integer</b></DictionaryLink>. 



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



<DictionaryLink  term={"log"}><b>log</b></DictionaryLink>, Section 12.1.3.3 (Rule of Float Substitutability) 



**Notes:** 



Implementations of <DictionaryLink  term={"expt"}><b>expt</b></DictionaryLink> are permitted to use different algorithms for the cases of a *power-number* of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"rational"}><b>rational</b></DictionaryLink> and a *power-number* of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"float"}><b>float</b></DictionaryLink>. 



Note that by the following logic, (sqrt (expt *x* 3)) is not equivalent to (expt *x* 3/2). 



(setq x (exp (/ (\* 2 pi #c(0 1)) 3))) ;exp(2.pi.i/3) 



(expt x 3) → 1 ;except for round-off error 



(sqrt (expt x 3)) → 1 ;except for round-off error 



(expt x 3/2) → -1 ;except for round-off error 



