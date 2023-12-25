**signum** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"signum"}><b>signum</b></ClLinks> *number → signed-prototype* 



**Arguments and Values:** 



<ClLinks  term={"number"}><i>number</i></ClLinks>—a <ClLinks  term={"number"}><i>number</i></ClLinks> . 



*signed-prototype*—a <ClLinks  term={"number"}><i>number</i></ClLinks> . 



**Description:** 



<ClLinks  term={"signum"}><b>signum</b></ClLinks> determines a numerical value that indicates whether <ClLinks  term={"number"}><i>number</i></ClLinks> is negative, zero, or positive. 



For a <ClLinks  term={"rational"}><i>rational</i></ClLinks>, <ClLinks  term={"signum"}><b>signum</b></ClLinks> returns one of -1, 0, or 1 according to whether <ClLinks  term={"number"}><i>number</i></ClLinks> is negative, zero, or positive. For a <ClLinks  term={"float"}><i>float</i></ClLinks>, the result is a <ClLinks  term={"float"}><i>float</i></ClLinks> of the same format whose value is minus one, zero, or one. For a <ClLinks  term={"complex"}><i>complex</i></ClLinks> number z, (signum *z*) is a complex number of the same phase but with unit magnitude, unless z is a complex zero, in which case the result is z. 



For *rational arguments*, <ClLinks  term={"signum"}><b>signum</b></ClLinks> is a rational function, but it may be irrational for *complex arguments*. 



If <ClLinks  term={"number"}><i>number</i></ClLinks> is a <ClLinks  term={"float"}><i>float</i></ClLinks>, the result is a <ClLinks  term={"float"}><i>float</i></ClLinks>. If <ClLinks  term={"number"}><i>number</i></ClLinks> is a <ClLinks  term={"rational"}><i>rational</i></ClLinks>, the result is a <ClLinks  term={"rational"}><i>rational</i></ClLinks>. If <ClLinks  term={"number"}><i>number</i></ClLinks> is a *complex float*, the result is a *complex float*. If <ClLinks  term={"number"}><i>number</i></ClLinks> is a *complex rational*, the result is a <ClLinks  term={"complex"}><i>complex</i></ClLinks> , but it is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether that result is a *complex rational* or a *complex float*. 



**Examples:**
```lisp
(signum 0) → 0 
(signum 99) → 1 
(signum 4/5) → 1 
(signum -99/100) → -1 
(signum 0.0) → 0.0 
(signum #c(0 33)) → #C(0.0 1.0) 
(signum #c(7.5 10.0)) → #C(0.6 0.8) 
(signum #c(0.0 -14.7)) → #C(0.0 -1.0) 
(eql (signum -0.0) -0.0) → true 


```
**See Also:** 



Section 12.1.3.3 (Rule of Float Substitutability) 



**Notes:** 



(signum x) *≡* (if (zerop x) x (/ x (abs x))) 



