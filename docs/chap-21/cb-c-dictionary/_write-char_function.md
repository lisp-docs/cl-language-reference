**write-char** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"write-char"}><b>write-char</b></ClLinks> <ClLinks  term={"character"}><i>character</i></ClLinks> &amp;optional *output-stream → character* 



**Arguments and Values:** 



<ClLinks  term={"character"}><i>character</i></ClLinks>—a <ClLinks  term={"character"}><i>character</i></ClLinks> . 



*output-stream* – an *output stream designator* . The default is <GlossaryTerm styled={true} term={"standard output"}><i>standard output</i></GlossaryTerm>. 



**Description:** 



<ClLinks  term={"write-char"}><b>write-char</b></ClLinks> outputs <ClLinks  term={"character"}><i>character</i></ClLinks> to *output-stream*. 



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



**\*standard-output\***, <ClLinks  term={"terminal-io"}><b>\*terminal-io\*</b></ClLinks>. 



**See Also:** 



<ClLinks  term={"read-char"}><b>read-char</b></ClLinks>, <ClLinks  term={"write-byte"}><b>write-byte</b></ClLinks>, <ClLinks  term={"write-sequence"}><b>write-sequence</b></ClLinks> 







 



 



<ClLinks  term={"read-line"}><b>read-line</b></ClLinks> 



