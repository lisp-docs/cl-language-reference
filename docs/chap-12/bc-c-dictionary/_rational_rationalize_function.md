**rational, rationalize** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"rational"}><b>rational</b></ClLinks> *number → rational* 



<ClLinks styled={true} term={"rationalize"}><b>rationalize</b></ClLinks> *number → rational* 



**Arguments and Values:** 



<ClLinks styled={true} term={"number"}><i>number</i></ClLinks>—a *real*. 



<ClLinks styled={true} term={"rational"}><i>rational</i></ClLinks>—a <ClLinks styled={true} term={"rational"}><i>rational</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"rational"}><b>rational</b></ClLinks> and <ClLinks styled={true} term={"rationalize"}><b>rationalize</b></ClLinks> convert *reals* to <ClLinks styled={true} term={"rational"}><i>rationals</i></ClLinks>. 



If <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> is already <ClLinks styled={true} term={"rational"}><i>rational</i></ClLinks>, it is returned. 



If <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> is a <ClLinks styled={true} term={"float"}><i>float</i></ClLinks>, <ClLinks styled={true} term={"rational"}><b>rational</b></ClLinks> returns a <ClLinks styled={true} term={"rational"}><i>rational</i></ClLinks> that is mathematically equal in value to the <ClLinks styled={true} term={"float"}><i>float</i></ClLinks>. <ClLinks styled={true} term={"rationalize"}><b>rationalize</b></ClLinks> returns a <ClLinks styled={true} term={"rational"}><i>rational</i></ClLinks> that approximates the <ClLinks styled={true} term={"float"}><i>float</i></ClLinks> to the accuracy of the underlying floating-point representation. 



<ClLinks styled={true} term={"rational"}><b>rational</b></ClLinks> assumes that the <ClLinks styled={true} term={"float"}><i>float</i></ClLinks> is completely accurate. 



<ClLinks styled={true} term={"rationalize"}><b>rationalize</b></ClLinks> assumes that the <ClLinks styled={true} term={"float"}><i>float</i></ClLinks> is accurate only to the precision of the floating-point representation. 



**Examples:**
```lisp

(rational 0) → 0 
(rationalize -11/100) → -11/100 
(rational .1) → 13421773/134217728 ;implementation-dependent 
(rationalize .1) → 1/10 

```
**Affected By:** 



The <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>. 



**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> is not a *real*. Might signal <ClLinks styled={true} term={"arithmetic-error"}><b>arithmetic-error</b></ClLinks>. 



 



 



**Notes:** 



It is always the case that 



(float (rational x) x) *≡* x 



and 



(float (rationalize x) x) *≡* x 



That is, rationalizing a <ClLinks styled={true} term={"float"}><i>float</i></ClLinks> by either method and then converting it back to a <ClLinks styled={true} term={"float"}><i>float</i></ClLinks> of the same format produces the original <ClLinks styled={true} term={"number"}><i>number</i></ClLinks>. 



