**write-char** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"write-char"}><b>write-char</b></DictionaryLink> <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> &amp;optional *output-stream → character* 



**Arguments and Values:** 



<GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm>—a <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> . 



*output-stream* – an *output stream designator* . The default is <GlossaryTerm styled={true} term={"standard output"}><i>standard output</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"write-char"}><b>write-char</b></DictionaryLink> outputs <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> to *output-stream*. 



**Examples:**
```lisp
(write-char #\a) 
▷ a 
→ #\a 
(with-output-to-string (s) 
  (write-char #\a s) 
  (write-char #\Space s) 
  (write-char #\b s)) 
→ "a b" 
```
**Side Effects:** 



The *output-stream* is modified. 



**Affected By:** 



**\*standard-output\***, <DictionaryLink  term={"terminal-io"}><b>\*terminal-io\*</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink  term={"read-char"}><b>read-char</b></DictionaryLink>, <DictionaryLink  term={"write-byte"}><b>write-byte</b></DictionaryLink>, <DictionaryLink  term={"write-sequence"}><b>write-sequence</b></DictionaryLink> 







 



 



<DictionaryLink  term={"read-line"}><b>read-line</b></DictionaryLink> 



