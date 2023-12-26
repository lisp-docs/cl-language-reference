**rational, rationalize** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"rational"}><b>rational</b></DictionaryLink> *number → rational* 



<DictionaryLink  term={"rationalize"}><b>rationalize</b></DictionaryLink> *number → rational* 



**Arguments and Values:** 



<ClLinks  term={"number"}><i>number</i></ClLinks>—a *real*. 



<ClLinks  term={"rational"}><i>rational</i></ClLinks>—a <ClLinks  term={"rational"}><i>rational</i></ClLinks>. 



**Description:** 



<DictionaryLink  term={"rational"}><b>rational</b></DictionaryLink> and <DictionaryLink  term={"rationalize"}><b>rationalize</b></DictionaryLink> convert *reals* to <ClLinks  term={"rational"}><i>rationals</i></ClLinks>. 



If <ClLinks  term={"number"}><i>number</i></ClLinks> is already <ClLinks  term={"rational"}><i>rational</i></ClLinks>, it is returned. 



If <ClLinks  term={"number"}><i>number</i></ClLinks> is a <ClLinks  term={"float"}><i>float</i></ClLinks>, <DictionaryLink  term={"rational"}><b>rational</b></DictionaryLink> returns a <ClLinks  term={"rational"}><i>rational</i></ClLinks> that is mathematically equal in value to the <ClLinks  term={"float"}><i>float</i></ClLinks>. <DictionaryLink  term={"rationalize"}><b>rationalize</b></DictionaryLink> returns a <ClLinks  term={"rational"}><i>rational</i></ClLinks> that approximates the <ClLinks  term={"float"}><i>float</i></ClLinks> to the accuracy of the underlying floating-point representation. 



<DictionaryLink  term={"rational"}><b>rational</b></DictionaryLink> assumes that the <ClLinks  term={"float"}><i>float</i></ClLinks> is completely accurate. 



<DictionaryLink  term={"rationalize"}><b>rationalize</b></DictionaryLink> assumes that the <ClLinks  term={"float"}><i>float</i></ClLinks> is accurate only to the precision of the floating-point representation. 



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



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <ClLinks  term={"number"}><i>number</i></ClLinks> is not a *real*. Might signal <DictionaryLink  term={"arithmetic-error"}><b>arithmetic-error</b></DictionaryLink>. 



 



 



**Notes:** 



It is always the case that 



(float (rational x) x) *≡* x 



and 



(float (rationalize x) x) *≡* x 



That is, rationalizing a <ClLinks  term={"float"}><i>float</i></ClLinks> by either method and then converting it back to a <ClLinks  term={"float"}><i>float</i></ClLinks> of the same format produces the original <ClLinks  term={"number"}><i>number</i></ClLinks>. 



