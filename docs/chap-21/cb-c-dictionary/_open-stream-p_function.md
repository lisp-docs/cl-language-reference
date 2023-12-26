**open-stream-p** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"open-stream-p"}><b>open-stream-p</b></DictionaryLink> *stream → generalized-boolean* 



**Arguments and Values:** 



<ClLinks  term={"stream"}><i>stream</i></ClLinks>—a <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <ClLinks  term={"true"}><i>true</i></ClLinks> if <ClLinks  term={"stream"}><i>stream</i></ClLinks> is an *open stream*; otherwise, returns <ClLinks  term={"false"}><i>false</i></ClLinks>. 







 



 



<ClLinks  term={"stream"}><i>Streams</i></ClLinks> are open until they have been explicitly closed with <DictionaryLink  term={"close"}><b>close</b></DictionaryLink>, or until they are implicitly closed due to exit from a <DictionaryLink  term={"with-output-to-string"}><b>with-output-to-string</b></DictionaryLink>, <DictionaryLink  term={"with-open-file"}><b>with-open-file</b></DictionaryLink>, <DictionaryLink  term={"with-input-from-string"}><b>with-input-from-string</b></DictionaryLink>, or <DictionaryLink  term={"with-open-stream"}><b>with-open-stream</b></DictionaryLink> <ClLinks  term={"form"}><i>form</i></ClLinks>. 



**Examples:**
```lisp
(open-stream-p \*standard-input\*) → true 
```
**Affected By:** 



<DictionaryLink  term={"close"}><b>close</b></DictionaryLink>. 



**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <ClLinks  term={"stream"}><i>stream</i></ClLinks> is not a <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



