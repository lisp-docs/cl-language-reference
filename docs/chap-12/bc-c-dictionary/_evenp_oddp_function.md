**evenp, oddp** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"evenp"}><b>evenp</b></ClLinks> *integer → generalized-boolean* 



<ClLinks styled={true} term={"oddp"}><b>oddp</b></ClLinks> *integer → generalized-boolean* 



**Arguments and Values:** 



*integer*—an *integer* . 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



<ClLinks styled={true} term={"evenp"}><b>evenp</b></ClLinks> returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if *integer* is even (divisible by two); otherwise, returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



<ClLinks styled={true} term={"oddp"}><b>oddp</b></ClLinks> returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if *integer* is odd (not divisible by two); otherwise, returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 

**Examples:**
```lisp

(evenp 0) → true 
(oddp 10000000000000000000000) → false 
(oddp -1) → true 

```
**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *integer* is not an *integer* . 







 



 



**Notes:** 



(evenp *integer*) *≡* (not (oddp *integer*)) 



(oddp *integer*) *≡* (not (evenp *integer*)) 



