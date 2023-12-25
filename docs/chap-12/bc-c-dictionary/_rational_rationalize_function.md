**rational, rationalize** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"rational"}><b>rational</b></DictionaryLink> *number → rational* 



<DictionaryLink styled={true} term={"rationalize"}><b>rationalize</b></DictionaryLink> *number → rational* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm>—a *real*. 



<GlossaryTerm styled={true} term={"rational"}><i>rational</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"rational"}><i>rational</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"rational"}><b>rational</b></DictionaryLink> and <DictionaryLink styled={true} term={"rationalize"}><b>rationalize</b></DictionaryLink> convert *reals* to <GlossaryTerm styled={true} term={"rational"}><i>rationals</i></GlossaryTerm>. 



If <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> is already <GlossaryTerm styled={true} term={"rational"}><i>rational</i></GlossaryTerm>, it is returned. 



If <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm>, <DictionaryLink styled={true} term={"rational"}><b>rational</b></DictionaryLink> returns a <GlossaryTerm styled={true} term={"rational"}><i>rational</i></GlossaryTerm> that is mathematically equal in value to the <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm>. <DictionaryLink styled={true} term={"rationalize"}><b>rationalize</b></DictionaryLink> returns a <GlossaryTerm styled={true} term={"rational"}><i>rational</i></GlossaryTerm> that approximates the <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> to the accuracy of the underlying floating-point representation. 



<DictionaryLink styled={true} term={"rational"}><b>rational</b></DictionaryLink> assumes that the <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> is completely accurate. 



<DictionaryLink styled={true} term={"rationalize"}><b>rationalize</b></DictionaryLink> assumes that the <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> is accurate only to the precision of the floating-point representation. 



**Examples:**
```lisp

(rational 0) *→* 0 
(rationalize -11/100) *→* -11/100 
(rational .1) *→* 13421773/134217728 ;implementation-dependent 
(rationalize .1) *→* 1/10 

```
**Affected By:** 



The <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>. 



**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> is not a *real*. Might signal <DictionaryLink styled={true} term={"arithmetic-error"}><b>arithmetic-error</b></DictionaryLink>. 



 



 



**Notes:** 



It is always the case that 



(float (rational x) x) *≡* x 



and 



(float (rationalize x) x) *≡* x 



That is, rationalizing a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> by either method and then converting it back to a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> of the same format produces the original <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm>. 



