**rational, rationalize** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"rational"}><b>rational</b></ClLinks> *number → rational* 



<ClLinks  term={"rationalize"}><b>rationalize</b></ClLinks> *number → rational* 



**Arguments and Values:** 



<ClLinks  term={"number"}><i>number</i></ClLinks>—a *real*. 



<ClLinks  term={"rational"}><i>rational</i></ClLinks>—a <ClLinks  term={"rational"}><i>rational</i></ClLinks>. 



**Description:** 



<ClLinks  term={"rational"}><b>rational</b></ClLinks> and <ClLinks  term={"rationalize"}><b>rationalize</b></ClLinks> convert *reals* to <ClLinks  term={"rational"}><i>rationals</i></ClLinks>. 



If <ClLinks  term={"number"}><i>number</i></ClLinks> is already <ClLinks  term={"rational"}><i>rational</i></ClLinks>, it is returned. 



If <ClLinks  term={"number"}><i>number</i></ClLinks> is a <ClLinks  term={"float"}><i>float</i></ClLinks>, <ClLinks  term={"rational"}><b>rational</b></ClLinks> returns a <ClLinks  term={"rational"}><i>rational</i></ClLinks> that is mathematically equal in value to the <ClLinks  term={"float"}><i>float</i></ClLinks>. <ClLinks  term={"rationalize"}><b>rationalize</b></ClLinks> returns a <ClLinks  term={"rational"}><i>rational</i></ClLinks> that approximates the <ClLinks  term={"float"}><i>float</i></ClLinks> to the accuracy of the underlying floating-point representation. 



<ClLinks  term={"rational"}><b>rational</b></ClLinks> assumes that the <ClLinks  term={"float"}><i>float</i></ClLinks> is completely accurate. 



<ClLinks  term={"rationalize"}><b>rationalize</b></ClLinks> assumes that the <ClLinks  term={"float"}><i>float</i></ClLinks> is accurate only to the precision of the floating-point representation. 



**Examples:**
```lisp
(rational 0) → 0 
(rationalize -11/100) → -11/100 
(rational .1) → 13421773/134217728 ;implementation-dependent 
(rationalize .1) → 1/10 
```
**Affected By:** 



The <ClLinks  term={"implementation"}><i>implementation</i></ClLinks>. 



**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks  term={"number"}><i>number</i></ClLinks> is not a *real*. Might signal <ClLinks  term={"arithmetic-error"}><b>arithmetic-error</b></ClLinks>. 



 



 



**Notes:** 



It is always the case that 



(float (rational x) x) *≡* x 



and 



(float (rationalize x) x) *≡* x 



That is, rationalizing a <ClLinks  term={"float"}><i>float</i></ClLinks> by either method and then converting it back to a <ClLinks  term={"float"}><i>float</i></ClLinks> of the same format produces the original <ClLinks  term={"number"}><i>number</i></ClLinks>. 



