**realpart, imagpart** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"realpart"}><b>realpart</b></ClLinks> *number → real* 



<ClLinks styled={true} term={"imagpart"}><b>imagpart</b></ClLinks> *number → real* 



**Arguments and Values:** 



<ClLinks styled={true} term={"number"}><i>number</i></ClLinks>—a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> . 



*real*—a *real*. 



**Description:** 



<ClLinks styled={true} term={"realpart"}><b>realpart</b></ClLinks> and <ClLinks styled={true} term={"imagpart"}><b>imagpart</b></ClLinks> return the real and imaginary parts of <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> respectively. If <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> is *real*, then <ClLinks styled={true} term={"realpart"}><b>realpart</b></ClLinks> returns <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> and <ClLinks styled={true} term={"imagpart"}><b>imagpart</b></ClLinks> returns (\* 0 <ClLinks styled={true} term={"number"}><i>number</i></ClLinks>), which has the effect that the imaginary part of a <ClLinks styled={true} term={"rational"}><i>rational</i></ClLinks> is 0 and that of a <ClLinks styled={true} term={"float"}><i>float</i></ClLinks> is a floating-point zero of the same format. 



**Examples:**
```lisp
(realpart #c(23 41)) → 23 
(imagpart #c(23 41.0)) → 41.0 
(realpart #c(23 41.0)) → 23.0 
(imagpart 23.0) → 0.0 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> is not a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> . 



**See Also:** 



<ClLinks styled={true} term={"complex"}><b>complex</b></ClLinks> 







 



 



