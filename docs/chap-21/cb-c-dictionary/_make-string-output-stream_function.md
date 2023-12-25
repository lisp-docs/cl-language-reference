**make-string-output-stream** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"make-string-output-stream"}><b>make-string-output-stream</b></DictionaryLink> &amp;key *element-type → string-stream* 



**Arguments and Values:** 



*element-type*—a *type specifier* . The default is <DictionaryLink styled={true} term={"character"}><b>character</b></DictionaryLink>. 



*string-stream*—an *output string stream*. 







 



 



**Description:** 



Returns an *output string stream* that accepts <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> and makes available (via <DictionaryLink styled={true} term={"get-output-stream-string"}><b>get-output-stream-string</b></DictionaryLink>) a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> that contains the <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> that were actually output. 



The *element-type* names the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>; a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> is constructed of the most specialized <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> that can accommodate <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> of that *element-type*. 



**Examples:**
```lisp

(let ((s (make-string-output-stream))) 
  (write-string "testing... " s) 
  (prin1 1234 s) 
  (get-output-stream-string s)) 
*→* "testing... 1234" 
None.. 

```
**See Also:** 



<DictionaryLink styled={true} term={"get-output-stream-string"}><b>get-output-stream-string</b></DictionaryLink>, <DictionaryLink styled={true} term={"with-output-to-string"}><b>with-output-to-string</b></DictionaryLink> 



