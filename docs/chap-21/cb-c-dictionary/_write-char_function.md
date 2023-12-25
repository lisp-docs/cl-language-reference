**write-char** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"write-char"}><b>write-char</b></DictionaryLink> <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> &amp;optional *output-stream → character* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> . 



*output-stream* – an *output stream designator* . The default is *standard output*. 



**Description:** 



<DictionaryLink styled={true} term={"write-char"}><b>write-char</b></DictionaryLink> outputs <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> to *output-stream*. 



**Examples:**
```lisp

(write-char #\a) 
▷ a 
*→* #\a 
(with-output-to-string (s) 
  (write-char #\a s) 
  (write-char #\Space s) 
  (write-char #\b s)) 
*→* "a b" 

```
**Side Effects:** 



The *output-stream* is modified. 



**Affected By:** 



**\*standard-output\***, <DictionaryLink styled={true} term={"terminal-io"}><b>\*terminal-io\*</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink styled={true} term={"read-char"}><b>read-char</b></DictionaryLink>, <DictionaryLink styled={true} term={"write-byte"}><b>write-byte</b></DictionaryLink>, <DictionaryLink styled={true} term={"write-sequence"}><b>write-sequence</b></DictionaryLink> 







 



 



<DictionaryLink styled={true} term={"read-line"}><b>read-line</b></DictionaryLink> 



