**realpart, imagpart** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"realpart"}><b>realpart</b></DictionaryLink> *number → real* 



<DictionaryLink styled={true} term={"imagpart"}><b>imagpart</b></DictionaryLink> *number → real* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> . 



*real*—a *real*. 



**Description:** 



<DictionaryLink styled={true} term={"realpart"}><b>realpart</b></DictionaryLink> and <DictionaryLink styled={true} term={"imagpart"}><b>imagpart</b></DictionaryLink> return the real and imaginary parts of <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> respectively. If <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> is *real*, then <DictionaryLink styled={true} term={"realpart"}><b>realpart</b></DictionaryLink> returns <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> and <DictionaryLink styled={true} term={"imagpart"}><b>imagpart</b></DictionaryLink> returns (\* 0 <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm>), which has the effect that the imaginary part of a <GlossaryTerm styled={true} term={"rational"}><i>rational</i></GlossaryTerm> is 0 and that of a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> is a floating-point zero of the same format. 



**Examples:**
```lisp

(realpart #c(23 41)) *→* 23 
(imagpart #c(23 41.0)) *→* 41.0 
(realpart #c(23 41.0)) *→* 23.0 
(imagpart 23.0) *→* 0.0 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> . 



**See Also:** 



<DictionaryLink styled={true} term={"complex"}><b>complex</b></DictionaryLink> 







 



 



