**minusp, plusp** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"minusp"}><b>minusp</b></DictionaryLink> *real → generalized-boolean* 



<DictionaryLink  term={"plusp"}><b>plusp</b></DictionaryLink> *real → generalized-boolean* 



**Arguments and Values:** 



*real*—a *real*. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"minusp"}><b>minusp</b></DictionaryLink> returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if *real* is less than zero; otherwise, returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 



<DictionaryLink  term={"plusp"}><b>plusp</b></DictionaryLink> returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if *real* is greater than zero; otherwise, returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 



Regardless of whether an <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> provides distinct representations for positive and negative <GlossaryTerm  term={"float"}><i>float</i></GlossaryTerm> zeros, (minusp -0.0) always returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 



**Examples:**
```lisp
(minusp -1) → true 
(plusp 0) → false 
(plusp least-positive-single-float) → true 
```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *real* is not a *real*. 







 



 



