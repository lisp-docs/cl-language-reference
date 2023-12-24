**abs** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"abs"}><b>abs</b></ClLinks> *number → absolute-value* 



**Arguments and Values:** 



<ClLinks styled={true} term={"number"}><i>number</i></ClLinks>—a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> . 



*absolute-value*—a non-negative *real*. 



**Description:** 



<ClLinks styled={true} term={"abs"}><b>abs</b></ClLinks> returns the absolute value of <ClLinks styled={true} term={"number"}><i>number</i></ClLinks>. 



If <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> is a *real*, the result is of the same <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> as <ClLinks styled={true} term={"number"}><i>number</i></ClLinks>. 



If <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> is a <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> , the result is a positive *real* with the same magnitude as <ClLinks styled={true} term={"number"}><i>number</i></ClLinks>. The result can be a <ClLinks styled={true} term={"float"}><i>float</i></ClLinks> even if <ClLinks styled={true} term={"number"}><i>number</i></ClLinks>’s components are <ClLinks styled={true} term={"rational"}><i>rationals</i></ClLinks> and an exact rational result would have been possible. Thus the result of (abs #c(3 4)) can be either 5 or 5.0, depending on the implementation. 



**Examples:**
```lisp

(abs 0) → 0 



(abs 12/13) → 12/13 
(abs -1.09) → 1.09 
(abs #c(5.0 -5.0)) → 7.071068 
(abs #c(5 5)) → 7.071068 
(abs #c(3/5 4/5)) → 1 or approximately 1.0 
(eql (abs -0.0) -0.0) → true 

```
**See Also:** 



Section 12.1.3.3 (Rule of Float Substitutability) 



**Notes:** 



If <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> is a <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> , the result is equivalent to the following: 



(sqrt (+ (expt (realpart <ClLinks styled={true} term={"number"}><i>number</i></ClLinks>) 2) (expt (imagpart <ClLinks styled={true} term={"number"}><i>number</i></ClLinks>) 2))) 



An implementation should not use this formula directly for all *complexes* but should handle very large or very small components specially to avoid intermediate overflow or underflow. 



