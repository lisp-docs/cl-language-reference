**get-output-stream-string** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"get-output-stream-string"}><b>get-output-stream-string</b></DictionaryLink> *string-output-stream → string* 



**Arguments and Values:** 



*string-output-stream*—a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>. 



**Description:** 



Returns a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> containing, in order, all the <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> that have been output to *string-output stream*. This operation clears any <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> on *string-output-stream*, so the <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> contains only those <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> which have been output since the last call to <DictionaryLink styled={true} term={"get-output-stream-string"}><b>get-output-stream-string</b></DictionaryLink> or since the creation of the *string-output-stream*, whichever occurred most recently. 



**Examples:**
```lisp

(setq a-stream (make-string-output-stream) 
      a-string "abcdefghijklm") *→* "abcdefghijklm" 
(write-string a-string a-stream) *→* "abcdefghijklm" 
(get-output-stream-string a-stream) *→* "abcdefghijklm" 
(get-output-stream-string a-stream) *→* "" 

```
**Side Effects:** 



The *string-output-stream* is cleared. 



**Exceptional Situations:** 



The consequences are undefined if *stream-output-string* is <GlossaryTerm styled={true} term={"closed"}><i>closed</i></GlossaryTerm>. 



The consequences are undefined if *string-output-stream* is a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> that was not produced by <DictionaryLink styled={true} term={"make-string-output-stream"}><b>make-string-output-stream</b></DictionaryLink>. The consequences are undefined if *string-output-stream* was created implicitly by <DictionaryLink styled={true} term={"with-output-to-string"}><b>with-output-to-string</b></DictionaryLink> or <DictionaryLink styled={true} term={"format"}><b>format</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink styled={true} term={"make-string-output-stream"}><b>make-string-output-stream</b></DictionaryLink> 







 



 



