**abs** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"abs"}><b>abs</b></DictionaryLink> *number → absolute-value* 



**Arguments and Values:** 



<ClLinks  term={"number"}><i>number</i></ClLinks>—a <ClLinks  term={"number"}><i>number</i></ClLinks> . 



*absolute-value*—a non-negative *real*. 



**Description:** 



<DictionaryLink  term={"abs"}><b>abs</b></DictionaryLink> returns the absolute value of <ClLinks  term={"number"}><i>number</i></ClLinks>. 



If <ClLinks  term={"number"}><i>number</i></ClLinks> is a *real*, the result is of the same <ClLinks  term={"type"}><i>type</i></ClLinks> as <ClLinks  term={"number"}><i>number</i></ClLinks>. 



If <ClLinks  term={"number"}><i>number</i></ClLinks> is a <ClLinks  term={"complex"}><i>complex</i></ClLinks> , the result is a positive *real* with the same magnitude as <ClLinks  term={"number"}><i>number</i></ClLinks>. The result can be a <ClLinks  term={"float"}><i>float</i></ClLinks> even if <ClLinks  term={"number"}><i>number</i></ClLinks>’s components are <ClLinks  term={"rational"}><i>rationals</i></ClLinks> and an exact rational result would have been possible. Thus the result of (abs #c(3 4)) can be either 5 or 5.0, depending on the implementation. 



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



If <ClLinks  term={"number"}><i>number</i></ClLinks> is a <ClLinks  term={"complex"}><i>complex</i></ClLinks> , the result is equivalent to the following: 



(sqrt (+ (expt (realpart <ClLinks  term={"number"}><i>number</i></ClLinks>) 2) (expt (imagpart <ClLinks  term={"number"}><i>number</i></ClLinks>) 2))) 



An implementation should not use this formula directly for all *complexes* but should handle very large or very small components specially to avoid intermediate overflow or underflow. 



