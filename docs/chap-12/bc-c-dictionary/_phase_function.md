**phase** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"phase"}><b>phase</b></ClLinks> *number → phase* 



**Arguments and Values:** 



<ClLinks  term={"number"}><i>number</i></ClLinks>—a <ClLinks  term={"number"}><i>number</i></ClLinks> . 



*phase*—a <ClLinks  term={"number"}><i>number</i></ClLinks> . 



**Description:** 



<ClLinks  term={"phase"}><b>phase</b></ClLinks> returns the phase of <ClLinks  term={"number"}><i>number</i></ClLinks> (the angle part of its polar representation) in radians, in the range *−π* (exclusive) if minus zero is not supported, or *−π* (inclusive) if minus zero is supported, to *π* (inclusive). The phase of a positive *real* number is zero; that of a negative *real* number is *π*. The phase of zero is defined to be zero. 



If <ClLinks  term={"number"}><i>number</i></ClLinks> is a <GlossaryTerm styled={true} term={"complex float"}><i>complex float</i></GlossaryTerm>, the result is a <ClLinks  term={"float"}><i>float</i></ClLinks> of the same <ClLinks  term={"type"}><i>type</i></ClLinks> as the components of <ClLinks  term={"number"}><i>number</i></ClLinks>. If <ClLinks  term={"number"}><i>number</i></ClLinks> is a <ClLinks  term={"float"}><i>float</i></ClLinks>, the result is a <ClLinks  term={"float"}><i>float</i></ClLinks> of the same <ClLinks  term={"type"}><i>type</i></ClLinks>. If <ClLinks  term={"number"}><i>number</i></ClLinks> is a <ClLinks  term={"rational"}><i>rational</i></ClLinks> or a <GlossaryTerm styled={true} term={"complex rational"}><i>complex rational</i></GlossaryTerm>, the result is a <GlossaryTerm styled={true} term={"single float"}><i>single float</i></GlossaryTerm>. 



The branch cut for <ClLinks  term={"phase"}><b>phase</b></ClLinks> lies along the negative real axis, continuous with quadrant II. The range consists of that portion of the real axis between *−π* (exclusive) and *π* (inclusive). 



The mathematical definition of <ClLinks  term={"phase"}><b>phase</b></ClLinks> is as follows: 



(phase *x*) = (atan (imagpart *x*) (realpart *x*)) 



**Examples:**
```lisp
(phase 1) → 0.0s0 

(phase 0) → 0.0s0 
(phase (cis 30)) → -1.4159266 
(phase #c(0 1)) → 1.5707964 
```
**Exceptional Situations:** 



Should signal <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if its argument is not a <ClLinks  term={"number"}><i>number</i></ClLinks> . Might signal <ClLinks  term={"arithmetic-error"}><b>arithmetic-error</b></ClLinks>. 



**See Also:** 



Section 12.1.3.3 (Rule of Float Substitutability) 



