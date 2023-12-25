**minusp, plusp** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"minusp"}><b>minusp</b></ClLinks> *real → generalized-boolean* 



<ClLinks styled={true} term={"plusp"}><b>plusp</b></ClLinks> *real → generalized-boolean* 



**Arguments and Values:** 



*real*—a *real*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



<ClLinks styled={true} term={"minusp"}><b>minusp</b></ClLinks> returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if *real* is less than zero; otherwise, returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



<ClLinks styled={true} term={"plusp"}><b>plusp</b></ClLinks> returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if *real* is greater than zero; otherwise, returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



Regardless of whether an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> provides distinct representations for positive and negative <ClLinks styled={true} term={"float"}><i>float</i></ClLinks> zeros, (minusp -0.0) always returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



**Examples:**
```lisp
(minusp -1) → true 
(plusp 0) → false 
(plusp least-positive-single-float) → true 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *real* is not a *real*. 







 



 



