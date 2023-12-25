**max, min** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"max"}><b>max</b></DictionaryLink> &amp;rest *reals*<sup>+</sup> *→ max-real* 







 



 



**max, min** 



<DictionaryLink styled={true} term={"min"}><b>min</b></DictionaryLink> &amp;rest *reals*<sup>+</sup> *→ min-real* 



**Arguments and Values:** 



*real*—a *real*. 



*max-real*, *min-real*—a *real*. 



**Description:** 



<DictionaryLink styled={true} term={"max"}><b>max</b></DictionaryLink> returns the *real* that is greatest (closest to positive infinity). <DictionaryLink styled={true} term={"min"}><b>min</b></DictionaryLink> returns the *real* that is least (closest to negative infinity). 



For <DictionaryLink styled={true} term={"max"}><b>max</b></DictionaryLink>, the implementation has the choice of returning the largest argument as is or applying the rules of floating-point <GlossaryTerm styled={true} term={"contagion"}><i>contagion</i></GlossaryTerm>, taking all the arguments into consideration for <GlossaryTerm styled={true} term={"contagion"}><i>contagion</i></GlossaryTerm> purposes. Also, if one or more of the arguments are <DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink>, then any one of them may be chosen as the value to return. For example, if the *reals* are a mixture of <GlossaryTerm styled={true} term={"rational"}><i>rationals</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"float"}><i>floats</i></GlossaryTerm>, and the largest argument is a <GlossaryTerm styled={true} term={"rational"}><i>rational</i></GlossaryTerm>, then the implementation is free to produce either that <GlossaryTerm styled={true} term={"rational"}><i>rational</i></GlossaryTerm> or its <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> approximation; if the largest argument is a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> of a smaller format than the largest format of any <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> argument, then the implementation is free to return the argument in its given format or expanded to the larger format. Similar remarks apply to <DictionaryLink styled={true} term={"min"}><b>min</b></DictionaryLink> (replacing “largest argument” by “smallest argument”). 



**Examples:**
```lisp

(max 3) *→* 3 
(min 3) *→* 3 
(max 6 12) *→* 12 
(min 6 12) *→* 6 
(max -6 -12) *→* -6 
(min -6 -12) *→* -12 
(max 1 3 2 -7) *→* 3 
(min 1 3 2 -7) *→* -7 
(max -2 3 0 7) *→* 7 
(min -2 3 0 7) *→* -2 
(max 5.0 2) *→* 5.0 
(min 5.0 2) 
*→* 2 
<i><sup>or</sup>→</i> 2.0 
(max 3.0 7 1) 
*→* 7 
<i><sup>or</sup>→</i> 7.0 
(min 3.0 7 1) 
*→* 1 
<i><sup>or</sup>→</i> 1.0 
(max 1.0s0 7.0d0) *→* 7.0d0 



(min 1.0s0 7.0d0) 
*→* 1.0s0 
<i><sup>or</sup>→</i> 1.0d0 
(max 3 1 1.0s0 1.0d0) 
*→* 3 
<i><sup>or</sup>→</i> 3.0d0 
(min 3 1 1.0s0 1.0d0) 
*→* 1 
<i><sup>or</sup>→</i> 1.0s0 
<i><sup>or</sup>→</i> 1.0d0 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if any <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> is not a *real*. 



