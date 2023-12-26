**read-char** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"read-char"}><b>read-char</b></DictionaryLink> &amp;optional *input-stream eof-error-p eof-value recursive-p → char* 



**Arguments and Values:** 



*input-stream*—an *input stream designator* . The default is <GlossaryTerm styled={true} term={"standard input"}><i>standard input</i></GlossaryTerm>. 



*eof-error-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <ClLinks  term={"true"}><i>true</i></ClLinks>. 



*eof-value*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. The default is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



*recursive-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <ClLinks  term={"false"}><i>false</i></ClLinks>. 



*char*—a <ClLinks  term={"character"}><i>character</i></ClLinks> or the *eof-value*. 



**Description:** 



<DictionaryLink  term={"read-char"}><b>read-char</b></DictionaryLink> returns the next <ClLinks  term={"character"}><i>character</i></ClLinks> from *input-stream*. 



When *input-stream* is an <GlossaryTerm styled={true} term={"echo stream"}><i>echo stream</i></GlossaryTerm>, the character is echoed on *input-stream* the first time the character is seen. Characters that are not echoed by <DictionaryLink  term={"read-char"}><b>read-char</b></DictionaryLink> are those that were put there by <DictionaryLink  term={"unread-char"}><b>unread-char</b></DictionaryLink> and hence are assumed to have been echoed already by a previous call to <DictionaryLink  term={"read-char"}><b>read-char</b></DictionaryLink>. 



If *recursive-p* is <ClLinks  term={"true"}><i>true</i></ClLinks>, this call is expected to be embedded in a higher-level call to <DictionaryLink  term={"read"}><b>read</b></DictionaryLink> or a similar <ClLinks  term={"function"}><i>function</i></ClLinks> used by the *Lisp reader* . 



If an <GlossaryTerm styled={true} term={"end of file"}><i>end of file</i></GlossaryTerm><sub>2</sub> occurs and *eof-error-p* is <ClLinks  term={"false"}><i>false</i></ClLinks>, *eof-value* is returned. 







 



 



**Examples:**
```lisp
(with-input-from-string (is "0123") 
  (do ((c (read-char is) (read-char is nil ’the-end))) 
      ((not (characterp c))) 
    (format t "~S " c))) 
▷ #\0 #\1 #\2 #\3 
→ NIL 
```
**Affected By:** 



**\*standard-input\***, <DictionaryLink  term={"terminal-io"}><b>\*terminal-io\*</b></DictionaryLink>. 



**Exceptional Situations:** 



If an <GlossaryTerm styled={true} term={"end of file"}><i>end of file</i></GlossaryTerm><sub>2</sub> occurs before a character can be read, and *eof-error-p* is <ClLinks  term={"true"}><i>true</i></ClLinks>, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"end-of-file"}><b>end-of-file</b></DictionaryLink> is signaled. 



**See Also:** 



<DictionaryLink  term={"read-byte"}><b>read-byte</b></DictionaryLink>, <DictionaryLink  term={"read-sequence"}><b>read-sequence</b></DictionaryLink>, <DictionaryLink  term={"write-char"}><b>write-char</b></DictionaryLink>, <DictionaryLink  term={"read"}><b>read</b></DictionaryLink> 



**Notes:** 



The corresponding output function is <DictionaryLink  term={"write-char"}><b>write-char</b></DictionaryLink>. 



