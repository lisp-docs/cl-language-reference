**read-char** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"read-char"}><b>read-char</b></ClLinks> &amp;optional *input-stream eof-error-p eof-value recursive-p → char* 



**Arguments and Values:** 



*input-stream*—an *input stream designator* . The default is *standard input*. 



*eof-error-p*—a *generalized boolean*. The default is <ClLinks  term={"true"}><i>true</i></ClLinks>. 



*eof-value*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. The default is <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



*recursive-p*—a *generalized boolean*. The default is <ClLinks  term={"false"}><i>false</i></ClLinks>. 



*char*—a <ClLinks  term={"character"}><i>character</i></ClLinks> or the *eof-value*. 



**Description:** 



<ClLinks  term={"read-char"}><b>read-char</b></ClLinks> returns the next <ClLinks  term={"character"}><i>character</i></ClLinks> from *input-stream*. 



When *input-stream* is an *echo stream*, the character is echoed on *input-stream* the first time the character is seen. Characters that are not echoed by <ClLinks  term={"read-char"}><b>read-char</b></ClLinks> are those that were put there by <ClLinks  term={"unread-char"}><b>unread-char</b></ClLinks> and hence are assumed to have been echoed already by a previous call to <ClLinks  term={"read-char"}><b>read-char</b></ClLinks>. 



If *recursive-p* is <ClLinks  term={"true"}><i>true</i></ClLinks>, this call is expected to be embedded in a higher-level call to <ClLinks  term={"read"}><b>read</b></ClLinks> or a similar <ClLinks  term={"function"}><i>function</i></ClLinks> used by the *Lisp reader* . 



If an *end of file*<sub>2</sub> occurs and *eof-error-p* is <ClLinks  term={"false"}><i>false</i></ClLinks>, *eof-value* is returned. 







 



 



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



**\*standard-input\***, <ClLinks  term={"terminal-io"}><b>\*terminal-io\*</b></ClLinks>. 



**Exceptional Situations:** 



If an *end of file*<sub>2</sub> occurs before a character can be read, and *eof-error-p* is <ClLinks  term={"true"}><i>true</i></ClLinks>, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"end-of-file"}><b>end-of-file</b></ClLinks> is signaled. 



**See Also:** 



<ClLinks  term={"read-byte"}><b>read-byte</b></ClLinks>, <ClLinks  term={"read-sequence"}><b>read-sequence</b></ClLinks>, <ClLinks  term={"write-char"}><b>write-char</b></ClLinks>, <ClLinks  term={"read"}><b>read</b></ClLinks> 



**Notes:** 



The corresponding output function is <ClLinks  term={"write-char"}><b>write-char</b></ClLinks>. 



