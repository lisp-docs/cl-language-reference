**max, min** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"max"}><b>max</b></DictionaryLink> &amp;rest *reals*<sup>+</sup> → max-real 







 



 



<DictionaryLink styled={true} term={"max, min"}><b>max, min</b></DictionaryLink> 



<DictionaryLink  term={"min"}><b>min</b></DictionaryLink> &amp;rest *reals*<sup>+</sup> → min-real 



**Arguments and Values:** 



*real*—a *real*. 



*max-real*, *min-real*—a *real*. 



**Description:** 



<DictionaryLink  term={"max"}><b>max</b></DictionaryLink> returns the *real* that is greatest (closest to positive infinity). <DictionaryLink  term={"min"}><b>min</b></DictionaryLink> returns the *real* that is least (closest to negative infinity). 



For <DictionaryLink  term={"max"}><b>max</b></DictionaryLink>, the implementation has the choice of returning the largest argument as is or applying the rules of floating-point <ClLinks  term={"contagion"}><i>contagion</i></ClLinks>, taking all the arguments into consideration for <ClLinks  term={"contagion"}><i>contagion</i></ClLinks> purposes. Also, if one or more of the arguments are <ClLinks  term={"="}><b>=</b></ClLinks>, then any one of them may be chosen as the value to return. For example, if the *reals* are a mixture of <ClLinks  term={"rational"}><i>rationals</i></ClLinks> and <ClLinks  term={"float"}><i>floats</i></ClLinks>, and the largest argument is a <ClLinks  term={"rational"}><i>rational</i></ClLinks>, then the implementation is free to produce either that <ClLinks  term={"rational"}><i>rational</i></ClLinks> or its <ClLinks  term={"float"}><i>float</i></ClLinks> approximation; if the largest argument is a <ClLinks  term={"float"}><i>float</i></ClLinks> of a smaller format than the largest format of any <ClLinks  term={"float"}><i>float</i></ClLinks> argument, then the implementation is free to return the argument in its given format or expanded to the larger format. Similar remarks apply to <DictionaryLink  term={"min"}><b>min</b></DictionaryLink> (replacing “largest argument” by “smallest argument”). 



**Examples:**
```lisp
(max 3) → 3 
(min 3) → 3 
(max 6 12) → 12 
(min 6 12) → 6 
(max -6 -12) → -6 
(min -6 -12) → -12 
(max 1 3 2 -7) → 3 
(min 1 3 2 -7) → -7 
(max -2 3 0 7) → 7 
(min -2 3 0 7) → -2 
(max 5.0 2) → 5.0 
(min 5.0 2) 
→ 2 
<i><sup>or</sup>→</i> 2.0 
(max 3.0 7 1) 
→ 7 
<i><sup>or</sup>→</i> 7.0 
(min 3.0 7 1) 
→ 1 
<i><sup>or</sup>→</i> 1.0 
(max 1.0s0 7.0d0) → 7.0d0 

(min 1.0s0 7.0d0) 
→ 1.0s0 
<i><sup>or</sup>→</i> 1.0d0 
(max 3 1 1.0s0 1.0d0) 
→ 3 
<i><sup>or</sup>→</i> 3.0d0 
(min 3 1 1.0s0 1.0d0) 
→ 1 
<i><sup>or</sup>→</i> 1.0s0 
<i><sup>or</sup>→</i> 1.0d0 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if any <ClLinks  term={"number"}><i>number</i></ClLinks> is not a *real*. 



