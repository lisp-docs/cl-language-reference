**zerop** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"zerop"}><b>zerop</b></DictionaryLink> *number → generalized-boolean* 



**Pronunciation:** 



[ **z—e( )r—o( )p—e** ] 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> . 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> is zero (*integer* , <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm>, or <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> ); otherwise, returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



Regardless of whether an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> provides distinct representations for positive and negative floating-point zeros, (zerop -0.0) always returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. 



**Examples:**
```lisp

(zerop 0) *→ true* 
(zerop 1) *→ false* 
(zerop -0.0) *→ true* 
(zerop 0/100) *→ true* 
(zerop #c(0 0.0)) *→ true* 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> . 



**Notes:** 



(zerop <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm>) *≡* (= <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> 0) 



