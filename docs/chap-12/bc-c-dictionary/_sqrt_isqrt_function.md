**sqrt, isqrt** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"sqrt"}><b>sqrt</b></ClLinks> *number → root* 



<ClLinks  term={"isqrt"}><b>isqrt</b></ClLinks> *natural → natural-root* 



**Arguments and Values:** 



<ClLinks  term={"number"}><i>number</i></ClLinks>, *root*—a <ClLinks  term={"number"}><i>number</i></ClLinks> . 



*natural*, *natural-root*—a non-negative *integer* . 



**Description:** 



<ClLinks  term={"sqrt"}><b>sqrt</b></ClLinks> and <ClLinks  term={"isqrt"}><b>isqrt</b></ClLinks> compute square roots. 



<ClLinks  term={"sqrt"}><b>sqrt</b></ClLinks> returns the <ClLinks  term={"principal"}><i>principal</i></ClLinks> square root of <ClLinks  term={"number"}><i>number</i></ClLinks>. If the <ClLinks  term={"number"}><i>number</i></ClLinks> is not a <ClLinks  term={"complex"}><i>complex</i></ClLinks> but is negative, then the result is a <ClLinks  term={"complex"}><i>complex</i></ClLinks> . 



<ClLinks  term={"isqrt"}><b>isqrt</b></ClLinks> returns the greatest *integer* less than or equal to the exact positive square root of *natural*. 



If <ClLinks  term={"number"}><i>number</i></ClLinks> is a positive <ClLinks  term={"rational"}><i>rational</i></ClLinks>, it is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether *root* is a <ClLinks  term={"rational"}><i>rational</i></ClLinks> or a <ClLinks  term={"float"}><i>float</i></ClLinks>. If <ClLinks  term={"number"}><i>number</i></ClLinks> is a negative <ClLinks  term={"rational"}><i>rational</i></ClLinks>, it is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether *root* is a <GlossaryTerm styled={true} term={"complex rational"}><i>complex rational</i></GlossaryTerm> or a <GlossaryTerm styled={true} term={"complex float"}><i>complex float</i></GlossaryTerm>. 



The mathematical definition of complex square root (whether or not minus zero is supported) follows: 



(sqrt *x*) = (exp (/ (log *x*) 2)) 



The branch cut for square root lies along the negative real axis, continuous with quadrant II. The range consists of the right half-plane, including the non-negative imaginary axis and excluding the negative imaginary axis. 



**Examples:**
```lisp
(sqrt 9.0) → 3.0 
(sqrt -9.0) → #C(0.0 3.0) 

(isqrt 9) → 3 
(sqrt 12) → 3.4641016 
(isqrt 12) → 3 
(isqrt 300) → 17 
(isqrt 325) → 18 
(sqrt 25) 
→ 5 
<i><sup>or</sup>→</i> 5.0 
(isqrt 25) → 5 
(sqrt -1) → #C(0.0 1.0) 
(sqrt #c(0 2)) → #C(1.0 1.0) 
```
**Exceptional Situations:** 



The <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"sqrt"}><b>sqrt</b></ClLinks> should signal <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if its argument is not a <ClLinks  term={"number"}><i>number</i></ClLinks> . 



The <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"isqrt"}><b>isqrt</b></ClLinks> should signal <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if its argument is not a non-negative *integer* . The functions <ClLinks  term={"sqrt"}><b>sqrt</b></ClLinks> and <ClLinks  term={"isqrt"}><b>isqrt</b></ClLinks> might signal <ClLinks  term={"arithmetic-error"}><b>arithmetic-error</b></ClLinks>. 



**See Also:** 



<ClLinks  term={"exp"}><b>exp</b></ClLinks>, <ClLinks  term={"log"}><b>log</b></ClLinks>, Section 12.1.3.3 (Rule of Float Substitutability) 



**Notes:** 



(isqrt x) *≡* (values (floor (sqrt x))) 



but it is potentially more efficient. 



