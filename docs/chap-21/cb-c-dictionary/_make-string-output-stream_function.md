**make-string-output-stream** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"make-string-output-stream"}><b>make-string-output-stream</b></DictionaryLink> &amp;key *element-type → string-stream* 



**Arguments and Values:** 



*element-type*—a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . The default is <DictionaryLink  term={"character"}><b>character</b></DictionaryLink>. 



*string-stream*—an *output string stream*. 







 



 



**Description:** 



Returns an *output string stream* that accepts <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> and makes available (via <DictionaryLink  term={"get-output-stream-string"}><b>get-output-stream-string</b></DictionaryLink>) a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> that contains the <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> that were actually output. 



The *element-type* names the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> of the <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm> of the <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>; a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> is constructed of the most specialized <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> that can accommodate <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm> of that *element-type*. 



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



