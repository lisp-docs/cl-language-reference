**realpart, imagpart** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"realpart"}><b>realpart</b></ClLinks> *number → real* 



<ClLinks  term={"imagpart"}><b>imagpart</b></ClLinks> *number → real* 



**Arguments and Values:** 



<ClLinks  term={"number"}><i>number</i></ClLinks>—a <ClLinks  term={"number"}><i>number</i></ClLinks> . 



*real*—a *real*. 



**Description:** 



<ClLinks  term={"realpart"}><b>realpart</b></ClLinks> and <ClLinks  term={"imagpart"}><b>imagpart</b></ClLinks> return the real and imaginary parts of <ClLinks  term={"number"}><i>number</i></ClLinks> respectively. If <ClLinks  term={"number"}><i>number</i></ClLinks> is *real*, then <ClLinks  term={"realpart"}><b>realpart</b></ClLinks> returns <ClLinks  term={"number"}><i>number</i></ClLinks> and <ClLinks  term={"imagpart"}><b>imagpart</b></ClLinks> returns (\* 0 <ClLinks  term={"number"}><i>number</i></ClLinks>), which has the effect that the imaginary part of a <ClLinks  term={"rational"}><i>rational</i></ClLinks> is 0 and that of a <ClLinks  term={"float"}><i>float</i></ClLinks> is a floating-point zero of the same format. 



**Examples:**
```lisp
(realpart #c(23 41)) → 23 
(imagpart #c(23 41.0)) → 41.0 
(realpart #c(23 41.0)) → 23.0 
(imagpart 23.0) → 0.0 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks  term={"number"}><i>number</i></ClLinks> is not a <ClLinks  term={"number"}><i>number</i></ClLinks> . 



**See Also:** 



<ClLinks  term={"complex"}><b>complex</b></ClLinks> 







 



 



