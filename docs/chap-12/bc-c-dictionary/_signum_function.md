**signum** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"signum"}><b>signum</b></DictionaryLink> *number → signed-prototype* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> . 



*signed-prototype*—a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> . 



**Description:** 



<DictionaryLink styled={true} term={"signum"}><b>signum</b></DictionaryLink> determines a numerical value that indicates whether <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> is negative, zero, or positive. 



For a <GlossaryTerm styled={true} term={"rational"}><i>rational</i></GlossaryTerm>, <DictionaryLink styled={true} term={"signum"}><b>signum</b></DictionaryLink> returns one of -1, 0, or 1 according to whether <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> is negative, zero, or positive. For a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm>, the result is a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> of the same format whose value is minus one, zero, or one. For a <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> number z, (signum *z*) is a complex number of the same phase but with unit magnitude, unless z is a complex zero, in which case the result is z. 



For *rational arguments*, <DictionaryLink styled={true} term={"signum"}><b>signum</b></DictionaryLink> is a rational function, but it may be irrational for *complex arguments*. 



If <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm>, the result is a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm>. If <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"rational"}><i>rational</i></GlossaryTerm>, the result is a <GlossaryTerm styled={true} term={"rational"}><i>rational</i></GlossaryTerm>. If <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> is a *complex float*, the result is a *complex float*. If <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> is a *complex rational*, the result is a <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> , but it is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether that result is a *complex rational* or a *complex float*. 



**Examples:**
```lisp

(signum 0) *→* 0 
(signum 99) *→* 1 
(signum 4/5) *→* 1 
(signum -99/100) *→* -1 
(signum 0.0) *→* 0.0 
(signum #c(0 33)) *→* #C(0.0 1.0) 
(signum #c(7.5 10.0)) *→* #C(0.6 0.8) 
(signum #c(0.0 -14.7)) *→* #C(0.0 -1.0) 
(eql (signum -0.0) -0.0) *→ true* 




```
**See Also:** 



Section 12.1.3.3 (Rule of Float Substitutability) 



**Notes:** 



(signum x) *≡* (if (zerop x) x (/ x (abs x))) 



