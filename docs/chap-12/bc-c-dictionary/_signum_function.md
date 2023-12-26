**signum** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"signum"}><b>signum</b></DictionaryLink> *number → signed-prototype* 



**Arguments and Values:** 



<GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm>—a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> . 



*signed-prototype*—a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> . 



**Description:** 



<DictionaryLink  term={"signum"}><b>signum</b></DictionaryLink> determines a numerical value that indicates whether <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> is negative, zero, or positive. 



For a <GlossaryTerm  term={"rational"}><i>rational</i></GlossaryTerm>, <DictionaryLink  term={"signum"}><b>signum</b></DictionaryLink> returns one of -1, 0, or 1 according to whether <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> is negative, zero, or positive. For a <GlossaryTerm  term={"float"}><i>float</i></GlossaryTerm>, the result is a <GlossaryTerm  term={"float"}><i>float</i></GlossaryTerm> of the same format whose value is minus one, zero, or one. For a <GlossaryTerm  term={"complex"}><i>complex</i></GlossaryTerm> number z, (signum *z*) is a complex number of the same phase but with unit magnitude, unless z is a complex zero, in which case the result is z. 



For *rational arguments*, <DictionaryLink  term={"signum"}><b>signum</b></DictionaryLink> is a rational function, but it may be irrational for *complex arguments*. 



If <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> is a <GlossaryTerm  term={"float"}><i>float</i></GlossaryTerm>, the result is a <GlossaryTerm  term={"float"}><i>float</i></GlossaryTerm>. If <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> is a <GlossaryTerm  term={"rational"}><i>rational</i></GlossaryTerm>, the result is a <GlossaryTerm  term={"rational"}><i>rational</i></GlossaryTerm>. If <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"complex float"}><i>complex float</i></GlossaryTerm>, the result is a <GlossaryTerm styled={true} term={"complex float"}><i>complex float</i></GlossaryTerm>. If <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"complex rational"}><i>complex rational</i></GlossaryTerm>, the result is a <GlossaryTerm  term={"complex"}><i>complex</i></GlossaryTerm> , but it is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether that result is a <GlossaryTerm styled={true} term={"complex rational"}><i>complex rational</i></GlossaryTerm> or a <GlossaryTerm styled={true} term={"complex float"}><i>complex float</i></GlossaryTerm>. 



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



