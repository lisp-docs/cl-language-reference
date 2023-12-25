**phase** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"phase"}><b>phase</b></DictionaryLink> *number → phase* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> . 



*phase*—a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> . 



**Description:** 



<DictionaryLink styled={true} term={"phase"}><b>phase</b></DictionaryLink> returns the phase of <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> (the angle part of its polar representation) in radians, in the range *−π* (exclusive) if minus zero is not supported, or *−π* (inclusive) if minus zero is supported, to *π* (inclusive). The phase of a positive *real* number is zero; that of a negative *real* number is *π*. The phase of zero is defined to be zero. 



If <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> is a *complex float*, the result is a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> of the same <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> as the components of <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm>. If <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm>, the result is a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> of the same <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>. If <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"rational"}><i>rational</i></GlossaryTerm> or a *complex rational*, the result is a *single float*. 



The branch cut for <DictionaryLink styled={true} term={"phase"}><b>phase</b></DictionaryLink> lies along the negative real axis, continuous with quadrant II. The range consists of that portion of the real axis between *−π* (exclusive) and *π* (inclusive). 



The mathematical definition of <DictionaryLink styled={true} term={"phase"}><b>phase</b></DictionaryLink> is as follows: 



(phase *x*) = (atan (imagpart *x*) (realpart *x*)) 



**Examples:**
```lisp

(phase 1) *→* 0.0s0 



(phase 0) *→* 0.0s0 
(phase (cis 30)) *→* -1.4159266 
(phase #c(0 1)) *→* 1.5707964 

```
**Exceptional Situations:** 



Should signal <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if its argument is not a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> . Might signal <DictionaryLink styled={true} term={"arithmetic-error"}><b>arithmetic-error</b></DictionaryLink>. 



**See Also:** 



Section 12.1.3.3 (Rule of Float Substitutability) 



