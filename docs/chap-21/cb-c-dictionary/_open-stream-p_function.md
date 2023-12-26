**open-stream-p** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"open-stream-p"}><b>open-stream-p</b></DictionaryLink> *stream → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>—a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> is an *open stream*; otherwise, returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 







 



 



<GlossaryTerm  term={"stream"}><i>Streams</i></GlossaryTerm> are open until they have been explicitly closed with <DictionaryLink  term={"close"}><b>close</b></DictionaryLink>, or until they are implicitly closed due to exit from a <DictionaryLink  term={"with-output-to-string"}><b>with-output-to-string</b></DictionaryLink>, <DictionaryLink  term={"with-open-file"}><b>with-open-file</b></DictionaryLink>, <DictionaryLink  term={"with-input-from-string"}><b>with-input-from-string</b></DictionaryLink>, or <DictionaryLink  term={"with-open-stream"}><b>with-open-stream</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



**Examples:**
```lisp
(open-stream-p \*standard-input\*) → true 
```
**Affected By:** 



<DictionaryLink  term={"close"}><b>close</b></DictionaryLink>. 



**Exceptional Situations:** 



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> is not a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. 



