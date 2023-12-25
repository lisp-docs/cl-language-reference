**phase** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"phase"}><b>phase</b></ClLinks> *number → phase* 



**Arguments and Values:** 



<ClLinks styled={true} term={"number"}><i>number</i></ClLinks>—a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> . 



*phase*—a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> . 



**Description:** 



<ClLinks styled={true} term={"phase"}><b>phase</b></ClLinks> returns the phase of <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> (the angle part of its polar representation) in radians, in the range *−π* (exclusive) if minus zero is not supported, or *−π* (inclusive) if minus zero is supported, to *π* (inclusive). The phase of a positive *real* number is zero; that of a negative *real* number is *π*. The phase of zero is defined to be zero. 



If <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> is a *complex float*, the result is a <ClLinks styled={true} term={"float"}><i>float</i></ClLinks> of the same <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> as the components of <ClLinks styled={true} term={"number"}><i>number</i></ClLinks>. If <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> is a <ClLinks styled={true} term={"float"}><i>float</i></ClLinks>, the result is a <ClLinks styled={true} term={"float"}><i>float</i></ClLinks> of the same <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>. If <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> is a <ClLinks styled={true} term={"rational"}><i>rational</i></ClLinks> or a *complex rational*, the result is a *single float*. 



The branch cut for <ClLinks styled={true} term={"phase"}><b>phase</b></ClLinks> lies along the negative real axis, continuous with quadrant II. The range consists of that portion of the real axis between *−π* (exclusive) and *π* (inclusive). 



The mathematical definition of <ClLinks styled={true} term={"phase"}><b>phase</b></ClLinks> is as follows: 



(phase *x*) = (atan (imagpart *x*) (realpart *x*)) 



**Examples:**
```lisp
(phase 1) → 0.0s0 

(phase 0) → 0.0s0 
(phase (cis 30)) → -1.4159266 
(phase #c(0 1)) → 1.5707964 
```
**Exceptional Situations:** 



Should signal <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if its argument is not a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> . Might signal <ClLinks styled={true} term={"arithmetic-error"}><b>arithmetic-error</b></ClLinks>. 



**See Also:** 



Section 12.1.3.3 (Rule of Float Substitutability) 



