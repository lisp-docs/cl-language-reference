**minusp, plusp** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"minusp"}><b>minusp</b></DictionaryLink> *real → generalized-boolean* 



<DictionaryLink styled={true} term={"plusp"}><b>plusp</b></DictionaryLink> *real → generalized-boolean* 



**Arguments and Values:** 



*real*—a *real*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



<DictionaryLink styled={true} term={"minusp"}><b>minusp</b></DictionaryLink> returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if *real* is less than zero; otherwise, returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"plusp"}><b>plusp</b></DictionaryLink> returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if *real* is greater than zero; otherwise, returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



Regardless of whether an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> provides distinct representations for positive and negative <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> zeros, (minusp -0.0) always returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



**Examples:**
```lisp

(minusp -1) *→ true* 
(plusp 0) *→ false* 
(plusp least-positive-single-float) *→ true* 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *real* is not a *real*. 







 



 



