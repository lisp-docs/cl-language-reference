**read-char** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"read-char"}><b>read-char</b></DictionaryLink> &amp;optional *input-stream eof-error-p eof-value recursive-p → char* 



**Arguments and Values:** 



*input-stream*—an *input stream designator* . The default is <GlossaryTerm styled={true} term={"standard input"}><i>standard input</i></GlossaryTerm>. 



*eof-error-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>. 



*eof-value*—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. The default is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



*recursive-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 



*char*—a <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> or the *eof-value*. 



**Description:** 



<DictionaryLink  term={"read-char"}><b>read-char</b></DictionaryLink> returns the next <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> from *input-stream*. 



When *input-stream* is an <GlossaryTerm styled={true} term={"echo stream"}><i>echo stream</i></GlossaryTerm>, the character is echoed on *input-stream* the first time the character is seen. Characters that are not echoed by <DictionaryLink  term={"read-char"}><b>read-char</b></DictionaryLink> are those that were put there by <DictionaryLink  term={"unread-char"}><b>unread-char</b></DictionaryLink> and hence are assumed to have been echoed already by a previous call to <DictionaryLink  term={"read-char"}><b>read-char</b></DictionaryLink>. 



If *recursive-p* is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>, this call is expected to be embedded in a higher-level call to <DictionaryLink  term={"read"}><b>read</b></DictionaryLink> or a similar <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> used by the *Lisp reader* . 



If an <GlossaryTerm styled={true} term={"end of file"}><i>end of file</i></GlossaryTerm><sub>2</sub> occurs and *eof-error-p* is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>, *eof-value* is returned. 







 



 



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



If an <GlossaryTerm styled={true} term={"end of file"}><i>end of file</i></GlossaryTerm><sub>2</sub> occurs before a character can be read, and *eof-error-p* is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>, an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"end-of-file"}><b>end-of-file</b></DictionaryLink> is signaled. 



**See Also:** 



<DictionaryLink  term={"read-byte"}><b>read-byte</b></DictionaryLink>, <DictionaryLink  term={"read-sequence"}><b>read-sequence</b></DictionaryLink>, <DictionaryLink  term={"write-char"}><b>write-char</b></DictionaryLink>, <DictionaryLink  term={"read"}><b>read</b></DictionaryLink> 



**Notes:** 



The corresponding output function is <DictionaryLink  term={"write-char"}><b>write-char</b></DictionaryLink>. 



