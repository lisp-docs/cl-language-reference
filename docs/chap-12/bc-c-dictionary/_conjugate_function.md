**conjugate** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"conjugate"}><b>conjugate</b></ClLinks> *number → conjugate* 



**Arguments and Values:** 



<ClLinks styled={true} term={"number"}><i>number</i></ClLinks>—a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> . 



*conjugate*—a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> . 



**Description:** 



Returns the complex conjugate of <ClLinks styled={true} term={"number"}><i>number</i></ClLinks>. The conjugate of a *real* number is itself. 



 



 



**Examples:**
```lisp
(conjugate #c(0 -1)) → #C(0 1) 
(conjugate #c(1 1)) → #C(1 -1) 
(conjugate 1.5) → 1.5 
(conjugate #C(3/5 4/5)) → #C(3/5 -4/5) 
(conjugate #C(0.0D0 -1.0D0)) → #C(0.0D0 1.0D0) 
(conjugate 3.7) → 3.7 
```
**Notes:** 



For a <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> number z, 



(conjugate z) *≡* (complex (realpart z) (- (imagpart z))) 



