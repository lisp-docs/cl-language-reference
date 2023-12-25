**conjugate** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"conjugate"}><b>conjugate</b></DictionaryLink> *number → conjugate* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> . 



*conjugate*—a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> . 



**Description:** 



Returns the complex conjugate of <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm>. The conjugate of a *real* number is itself. 



 



 



**Examples:**
```lisp

(conjugate #c(0 -1)) *→* #C(0 1) 
(conjugate #c(1 1)) *→* #C(1 -1) 
(conjugate 1.5) *→* 1.5 
(conjugate #C(3/5 4/5)) *→* #C(3/5 -4/5) 
(conjugate #C(0.0D0 -1.0D0)) *→* #C(0.0D0 1.0D0) 
(conjugate 3.7) *→* 3.7 

```
**Notes:** 



For a <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> number z, 



(conjugate z) *≡* (complex (realpart z) (- (imagpart z))) 



