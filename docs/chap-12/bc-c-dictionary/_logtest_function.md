**logtest** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"logtest"}><b>logtest</b></ClLinks> *integer-1 integer-2 → generalized-boolean* 



**Arguments and Values:** 



*integer-1*—an *integer* . 



*integer-2*—an *integer* . 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if any of the bits designated by the 1’s in *integer-1* is 1 in *integer-2*; otherwise it is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. *integer-1* and *integer-2* are treated as if they were binary. 



Negative *integer-1* and *integer-2* are treated as if they were represented in two’s-complement binary. 

**Examples:**
```lisp
(logtest 1 7) → true 
(logtest 1 2) → false 

(logtest -2 -1) → true 
(logtest 0 -1) → false 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *integer-1* is not an *integer* . Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *integer-2* is not an *integer* . 



**Notes:** 



(logtest *x y*) *≡* (not (zerop (logand *x y*))) 



