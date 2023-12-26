**zerop** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"zerop"}><b>zerop</b></DictionaryLink> *number → generalized-boolean* 



**Pronunciation:** 



[ **z—e( )r—o( )p—e** ] 



**Arguments and Values:** 



<GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm>—a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> . 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> is zero (*integer* , <GlossaryTerm  term={"float"}><i>float</i></GlossaryTerm>, or <GlossaryTerm  term={"complex"}><i>complex</i></GlossaryTerm> ); otherwise, returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 



Regardless of whether an <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> provides distinct representations for positive and negative floating-point zeros, (zerop -0.0) always returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>. 



**Examples:**
```lisp
(zerop 0) → true 
(zerop 1) → false 
(zerop -0.0) → true 
(zerop 0/100) → true 
(zerop #c(0 0.0)) → true 
```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> is not a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> . 



**Notes:** 



(zerop <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm>) *≡* (= <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> 0) 



