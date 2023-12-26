**minusp, plusp** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"minusp"}><b>minusp</b></ClLinks> *real → generalized-boolean* 



<ClLinks  term={"plusp"}><b>plusp</b></ClLinks> *real → generalized-boolean* 



**Arguments and Values:** 



*real*—a *real*. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



<ClLinks  term={"minusp"}><b>minusp</b></ClLinks> returns <ClLinks  term={"true"}><i>true</i></ClLinks> if *real* is less than zero; otherwise, returns <ClLinks  term={"false"}><i>false</i></ClLinks>. 



<ClLinks  term={"plusp"}><b>plusp</b></ClLinks> returns <ClLinks  term={"true"}><i>true</i></ClLinks> if *real* is greater than zero; otherwise, returns <ClLinks  term={"false"}><i>false</i></ClLinks>. 



Regardless of whether an <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> provides distinct representations for positive and negative <ClLinks  term={"float"}><i>float</i></ClLinks> zeros, (minusp -0.0) always returns <ClLinks  term={"false"}><i>false</i></ClLinks>. 



**Examples:**
```lisp
(minusp -1) → true 
(plusp 0) → false 
(plusp least-positive-single-float) → true 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if *real* is not a *real*. 







 



 



