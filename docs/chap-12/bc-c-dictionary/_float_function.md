**float** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"float"}><b>float</b></ClLinks> <ClLinks  term={"number"}><i>number</i></ClLinks> &amp;optional *prototype ! float* 



**Arguments and Values:** 



<ClLinks  term={"number"}><i>number</i></ClLinks>—a *real*. 



*prototype*—a <ClLinks  term={"float"}><i>float</i></ClLinks>. 



<ClLinks  term={"float"}><i>float</i></ClLinks>—a <ClLinks  term={"float"}><i>float</i></ClLinks>. 



**Description:** 



<ClLinks  term={"float"}><b>float</b></ClLinks> converts a *real* number to a <ClLinks  term={"float"}><i>float</i></ClLinks>. 



If a *prototype* is supplied, a <ClLinks  term={"float"}><i>float</i></ClLinks> is returned that is mathematically equal to <ClLinks  term={"number"}><i>number</i></ClLinks> but has the same format as *prototype*. 



If *prototype* is not supplied, then if the <ClLinks  term={"number"}><i>number</i></ClLinks> is already a <ClLinks  term={"float"}><i>float</i></ClLinks>, it is returned; otherwise, a <ClLinks  term={"float"}><i>float</i></ClLinks> is returned that is mathematically equal to <ClLinks  term={"number"}><i>number</i></ClLinks> but is a <GlossaryTerm styled={true} term={"single float"}><i>single float</i></GlossaryTerm>. 



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



<ClLinks  term={"coerce"}><b>coerce</b></ClLinks> 



