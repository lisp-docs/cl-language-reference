**realpart, imagpart** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"realpart"}><b>realpart</b></DictionaryLink> *number → real* 



<DictionaryLink  term={"imagpart"}><b>imagpart</b></DictionaryLink> *number → real* 



**Arguments and Values:** 



<GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm>—a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> . 



*real*—a *real*. 



**Description:** 



<DictionaryLink  term={"realpart"}><b>realpart</b></DictionaryLink> and <DictionaryLink  term={"imagpart"}><b>imagpart</b></DictionaryLink> return the real and imaginary parts of <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> respectively. If <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> is *real*, then <DictionaryLink  term={"realpart"}><b>realpart</b></DictionaryLink> returns <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> and <DictionaryLink  term={"imagpart"}><b>imagpart</b></DictionaryLink> returns (\* 0 <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm>), which has the effect that the imaginary part of a <GlossaryTerm  term={"rational"}><i>rational</i></GlossaryTerm> is 0 and that of a <GlossaryTerm  term={"float"}><i>float</i></GlossaryTerm> is a floating-point zero of the same format. 



**Examples:**
```lisp
(realpart #c(23 41)) → 23 
(imagpart #c(23 41.0)) → 41.0 
(realpart #c(23 41.0)) → 23.0 
(imagpart 23.0) → 0.0 
```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> is not a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> . 



**See Also:** 



<DictionaryLink  term={"complex"}><b>complex</b></DictionaryLink> 







 



 



