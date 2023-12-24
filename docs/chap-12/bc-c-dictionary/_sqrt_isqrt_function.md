**sqrt, isqrt** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"sqrt"}><b>sqrt</b></ClLinks> *number → root* 



<ClLinks styled={true} term={"isqrt"}><b>isqrt</b></ClLinks> *natural → natural-root* 



**Arguments and Values:** 



<ClLinks styled={true} term={"number"}><i>number</i></ClLinks>, *root*—a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> . 



*natural*, *natural-root*—a non-negative *integer* . 



**Description:** 



<ClLinks styled={true} term={"sqrt"}><b>sqrt</b></ClLinks> and <ClLinks styled={true} term={"isqrt"}><b>isqrt</b></ClLinks> compute square roots. 



<ClLinks styled={true} term={"sqrt"}><b>sqrt</b></ClLinks> returns the <ClLinks styled={true} term={"principal"}><i>principal</i></ClLinks> square root of <ClLinks styled={true} term={"number"}><i>number</i></ClLinks>. If the <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> is not a <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> but is negative, then the result is a <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> . 



<ClLinks styled={true} term={"isqrt"}><b>isqrt</b></ClLinks> returns the greatest *integer* less than or equal to the exact positive square root of *natural*. 



If <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> is a positive <ClLinks styled={true} term={"rational"}><i>rational</i></ClLinks>, it is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether *root* is a <ClLinks styled={true} term={"rational"}><i>rational</i></ClLinks> or a <ClLinks styled={true} term={"float"}><i>float</i></ClLinks>. If <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> is a negative <ClLinks styled={true} term={"rational"}><i>rational</i></ClLinks>, it is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether *root* is a *complex rational* or a *complex float*. 



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



The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"sqrt"}><b>sqrt</b></ClLinks> should signal <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if its argument is not a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> . 



The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"isqrt"}><b>isqrt</b></ClLinks> should signal <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if its argument is not a non-negative *integer* . The functions <ClLinks styled={true} term={"sqrt"}><b>sqrt</b></ClLinks> and <ClLinks styled={true} term={"isqrt"}><b>isqrt</b></ClLinks> might signal <ClLinks styled={true} term={"arithmetic-error"}><b>arithmetic-error</b></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"exp"}><b>exp</b></ClLinks>, <ClLinks styled={true} term={"log"}><b>log</b></ClLinks>, Section 12.1.3.3 (Rule of Float Substitutability) 



**Notes:** 



(isqrt x) *≡* (values (floor (sqrt x))) 



but it is potentially more efficient. 



