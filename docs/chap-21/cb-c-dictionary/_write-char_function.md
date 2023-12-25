**write-char** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"write-char"}><b>write-char</b></ClLinks> <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> &amp;optional *output-stream → character* 



**Arguments and Values:** 



<ClLinks styled={true} term={"character"}><i>character</i></ClLinks>—a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> . 



*output-stream* – an *output stream designator* . The default is *standard output*. 



**Description:** 



<ClLinks styled={true} term={"write-char"}><b>write-char</b></ClLinks> outputs <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> to *output-stream*. 



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



**\*standard-output\***, <ClLinks styled={true} term={"terminal-io"}><b>\*terminal-io\*</b></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"read-char"}><b>read-char</b></ClLinks>, <ClLinks styled={true} term={"write-byte"}><b>write-byte</b></ClLinks>, <ClLinks styled={true} term={"write-sequence"}><b>write-sequence</b></ClLinks> 







 



 



<ClLinks styled={true} term={"read-line"}><b>read-line</b></ClLinks> 



