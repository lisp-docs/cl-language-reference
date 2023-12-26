**rational, rationalize** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"rational"}><b>rational</b></DictionaryLink> *number → rational* 



<DictionaryLink  term={"rationalize"}><b>rationalize</b></DictionaryLink> *number → rational* 



**Arguments and Values:** 



<GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm>—a *real*. 



<GlossaryTerm  term={"rational"}><i>rational</i></GlossaryTerm>—a <GlossaryTerm  term={"rational"}><i>rational</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"rational"}><b>rational</b></DictionaryLink> and <DictionaryLink  term={"rationalize"}><b>rationalize</b></DictionaryLink> convert *reals* to <GlossaryTerm  term={"rational"}><i>rationals</i></GlossaryTerm>. 



If <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> is already <GlossaryTerm  term={"rational"}><i>rational</i></GlossaryTerm>, it is returned. 



If <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> is a <GlossaryTerm  term={"float"}><i>float</i></GlossaryTerm>, <DictionaryLink  term={"rational"}><b>rational</b></DictionaryLink> returns a <GlossaryTerm  term={"rational"}><i>rational</i></GlossaryTerm> that is mathematically equal in value to the <GlossaryTerm  term={"float"}><i>float</i></GlossaryTerm>. <DictionaryLink  term={"rationalize"}><b>rationalize</b></DictionaryLink> returns a <GlossaryTerm  term={"rational"}><i>rational</i></GlossaryTerm> that approximates the <GlossaryTerm  term={"float"}><i>float</i></GlossaryTerm> to the accuracy of the underlying floating-point representation. 



<DictionaryLink  term={"rational"}><b>rational</b></DictionaryLink> assumes that the <GlossaryTerm  term={"float"}><i>float</i></GlossaryTerm> is completely accurate. 



<DictionaryLink  term={"rationalize"}><b>rationalize</b></DictionaryLink> assumes that the <GlossaryTerm  term={"float"}><i>float</i></GlossaryTerm> is accurate only to the precision of the floating-point representation. 



**Examples:**
```lisp
(rational 0) → 0 
(rationalize -11/100) → -11/100 
(rational .1) → 13421773/134217728 ;implementation-dependent 
(rationalize .1) → 1/10 
```
**Affected By:** 



The <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm>. 



**Exceptional Situations:** 



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> is not a *real*. Might signal <DictionaryLink  term={"arithmetic-error"}><b>arithmetic-error</b></DictionaryLink>. 



 



 



**Notes:** 



It is always the case that 



(float (rational x) x) *≡* x 



and 



(float (rationalize x) x) *≡* x 



That is, rationalizing a <GlossaryTerm  term={"float"}><i>float</i></GlossaryTerm> by either method and then converting it back to a <GlossaryTerm  term={"float"}><i>float</i></GlossaryTerm> of the same format produces the original <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm>. 



