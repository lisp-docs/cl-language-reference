**abs** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"abs"}><b>abs</b></DictionaryLink> *number → absolute-value* 



**Arguments and Values:** 



<GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm>—a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> . 



*absolute-value*—a non-negative *real*. 



**Description:** 



<DictionaryLink  term={"abs"}><b>abs</b></DictionaryLink> returns the absolute value of <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm>. 



If <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> is a *real*, the result is of the same <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> as <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm>. 



If <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> is a <GlossaryTerm  term={"complex"}><i>complex</i></GlossaryTerm> , the result is a positive *real* with the same magnitude as <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm>. The result can be a <GlossaryTerm  term={"float"}><i>float</i></GlossaryTerm> even if <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm>’s components are <GlossaryTerm  term={"rational"}><i>rationals</i></GlossaryTerm> and an exact rational result would have been possible. Thus the result of (abs #c(3 4)) can be either 5 or 5.0, depending on the implementation. 



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



If <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> is a <GlossaryTerm  term={"complex"}><i>complex</i></GlossaryTerm> , the result is equivalent to the following: 



(sqrt (+ (expt (realpart <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm>) 2) (expt (imagpart <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm>) 2))) 



An implementation should not use this formula directly for all *complexes* but should handle very large or very small components specially to avoid intermediate overflow or underflow. 



