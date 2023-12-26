**make-string-output-stream** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"make-string-output-stream"}><b>make-string-output-stream</b></DictionaryLink> &amp;key *element-type → string-stream* 



**Arguments and Values:** 



*element-type*—a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . The default is <DictionaryLink  term={"character"}><b>character</b></DictionaryLink>. 



*string-stream*—an *output string stream*. 







 



 



**Description:** 



Returns an *output string stream* that accepts <ClLinks  term={"character"}><i>characters</i></ClLinks> and makes available (via <DictionaryLink  term={"get-output-stream-string"}><b>get-output-stream-string</b></DictionaryLink>) a <ClLinks  term={"string"}><i>string</i></ClLinks> that contains the <ClLinks  term={"character"}><i>characters</i></ClLinks> that were actually output. 



The *element-type* names the <ClLinks  term={"type"}><i>type</i></ClLinks> of the <ClLinks  term={"element"}><i>elements</i></ClLinks> of the <ClLinks  term={"string"}><i>string</i></ClLinks>; a <ClLinks  term={"string"}><i>string</i></ClLinks> is constructed of the most specialized <ClLinks  term={"type"}><i>type</i></ClLinks> that can accommodate <ClLinks  term={"element"}><i>elements</i></ClLinks> of that *element-type*. 



**Examples:**
```lisp
(let ((s (make-string-output-stream))) 
  (write-string "testing... " s) 
  (prin1 1234 s) 
  (get-output-stream-string s)) 
→ "testing... 1234" 
None.. 
```
**See Also:** 



<DictionaryLink  term={"get-output-stream-string"}><b>get-output-stream-string</b></DictionaryLink>, <DictionaryLink  term={"with-output-to-string"}><b>with-output-to-string</b></DictionaryLink> 



