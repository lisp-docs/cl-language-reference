**open-stream-p** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"open-stream-p"}><b>open-stream-p</b></DictionaryLink> *stream → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> is an *open stream*; otherwise, returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 







 



 



<GlossaryTerm styled={true} term={"stream"}><i>Streams</i></GlossaryTerm> are open until they have been explicitly closed with <DictionaryLink styled={true} term={"close"}><b>close</b></DictionaryLink>, or until they are implicitly closed due to exit from a <DictionaryLink styled={true} term={"with-output-to-string"}><b>with-output-to-string</b></DictionaryLink>, <DictionaryLink styled={true} term={"with-open-file"}><b>with-open-file</b></DictionaryLink>, <DictionaryLink styled={true} term={"with-input-from-string"}><b>with-input-from-string</b></DictionaryLink>, or <DictionaryLink styled={true} term={"with-open-stream"}><b>with-open-stream</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



**Examples:**
```lisp

(open-stream-p \*standard-input\*) *→ true* 

```
**Affected By:** 



<DictionaryLink styled={true} term={"close"}><b>close</b></DictionaryLink>. 



**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



