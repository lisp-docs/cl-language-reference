**float** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"float"}><b>float</b></DictionaryLink> <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> &amp;optional *prototype ! float* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm>—a *real*. 



*prototype*—a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"float"}><b>float</b></DictionaryLink> converts a *real* number to a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm>. 



If a *prototype* is supplied, a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> is returned that is mathematically equal to <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> but has the same format as *prototype*. 



If *prototype* is not supplied, then if the <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> is already a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm>, it is returned; otherwise, a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> is returned that is mathematically equal to <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> but is a *single float*. 



**Examples:**
```lisp

(float 0) *!* 0.0 
(float 1 .5) *!* 1.0 
(float 1.0) *!* 1.0 
(float 1/2) *!* 0.5 
<i>!</i> 1.0d0 <i><sub>or</sub></i> 
*!* 1.0 
(eql (float 1.0 1.0d0) 1.0d0) *! true* 




```
**See Also:** 



<DictionaryLink styled={true} term={"coerce"}><b>coerce</b></DictionaryLink> 



