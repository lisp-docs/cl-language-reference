**realpart, imagpart** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"realpart"}><b>realpart</b></DictionaryLink> *number → real* 



<DictionaryLink  term={"imagpart"}><b>imagpart</b></DictionaryLink> *number → real* 



**Arguments and Values:** 



<ClLinks  term={"number"}><i>number</i></ClLinks>—a <ClLinks  term={"number"}><i>number</i></ClLinks> . 



*real*—a *real*. 



**Description:** 



<DictionaryLink  term={"realpart"}><b>realpart</b></DictionaryLink> and <DictionaryLink  term={"imagpart"}><b>imagpart</b></DictionaryLink> return the real and imaginary parts of <ClLinks  term={"number"}><i>number</i></ClLinks> respectively. If <ClLinks  term={"number"}><i>number</i></ClLinks> is *real*, then <DictionaryLink  term={"realpart"}><b>realpart</b></DictionaryLink> returns <ClLinks  term={"number"}><i>number</i></ClLinks> and <DictionaryLink  term={"imagpart"}><b>imagpart</b></DictionaryLink> returns (\* 0 <ClLinks  term={"number"}><i>number</i></ClLinks>), which has the effect that the imaginary part of a <ClLinks  term={"rational"}><i>rational</i></ClLinks> is 0 and that of a <ClLinks  term={"float"}><i>float</i></ClLinks> is a floating-point zero of the same format. 



**Examples:**
```lisp
(realpart #c(23 41)) → 23 
(imagpart #c(23 41.0)) → 41.0 
(realpart #c(23 41.0)) → 23.0 
(imagpart 23.0) → 0.0 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <ClLinks  term={"number"}><i>number</i></ClLinks> is not a <ClLinks  term={"number"}><i>number</i></ClLinks> . 



**See Also:** 



<DictionaryLink  term={"complex"}><b>complex</b></DictionaryLink> 







 



 



