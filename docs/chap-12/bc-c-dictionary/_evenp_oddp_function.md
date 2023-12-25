**evenp, oddp** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"evenp"}><b>evenp</b></ClLinks> *integer → generalized-boolean* 



<ClLinks  term={"oddp"}><b>oddp</b></ClLinks> *integer → generalized-boolean* 



**Arguments and Values:** 



*integer*—an *integer* . 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



<ClLinks  term={"evenp"}><b>evenp</b></ClLinks> returns <ClLinks  term={"true"}><i>true</i></ClLinks> if *integer* is even (divisible by two); otherwise, returns <ClLinks  term={"false"}><i>false</i></ClLinks>. 



<ClLinks  term={"oddp"}><b>oddp</b></ClLinks> returns <ClLinks  term={"true"}><i>true</i></ClLinks> if *integer* is odd (not divisible by two); otherwise, returns <ClLinks  term={"false"}><i>false</i></ClLinks>. 

**Examples:**
```lisp
(evenp 0) → true 
(oddp 10000000000000000000000) → false 
(oddp -1) → true 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if *integer* is not an *integer* . 







 



 



**Notes:** 



(evenp *integer*) *≡* (not (oddp *integer*)) 



(oddp *integer*) *≡* (not (evenp *integer*)) 



