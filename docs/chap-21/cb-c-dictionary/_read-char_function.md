**read-char** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"read-char"}><b>read-char</b></ClLinks> &amp;optional *input-stream eof-error-p eof-value recursive-p → char* 



**Arguments and Values:** 



*input-stream*—an *input stream designator* . The default is *standard input*. 



*eof-error-p*—a *generalized boolean*. The default is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. 



*eof-value*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. The default is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*recursive-p*—a *generalized boolean*. The default is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



*char*—a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> or the *eof-value*. 



**Description:** 



<ClLinks styled={true} term={"read-char"}><b>read-char</b></ClLinks> returns the next <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> from *input-stream*. 



When *input-stream* is an *echo stream*, the character is echoed on *input-stream* the first time the character is seen. Characters that are not echoed by <ClLinks styled={true} term={"read-char"}><b>read-char</b></ClLinks> are those that were put there by <ClLinks styled={true} term={"unread-char"}><b>unread-char</b></ClLinks> and hence are assumed to have been echoed already by a previous call to <ClLinks styled={true} term={"read-char"}><b>read-char</b></ClLinks>. 



If *recursive-p* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, this call is expected to be embedded in a higher-level call to <ClLinks styled={true} term={"read"}><b>read</b></ClLinks> or a similar <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> used by the *Lisp reader* . 



If an *end of file*<sub>2</sub> occurs and *eof-error-p* is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, *eof-value* is returned. 







 



 



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



**\*standard-input\***, <ClLinks styled={true} term={"terminal-io"}><b>\*terminal-io\*</b></ClLinks>. 



**Exceptional Situations:** 



If an *end of file*<sub>2</sub> occurs before a character can be read, and *eof-error-p* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"end-of-file"}><b>end-of-file</b></ClLinks> is signaled. 



**See Also:** 



<ClLinks styled={true} term={"read-byte"}><b>read-byte</b></ClLinks>, <ClLinks styled={true} term={"read-sequence"}><b>read-sequence</b></ClLinks>, <ClLinks styled={true} term={"write-char"}><b>write-char</b></ClLinks>, <ClLinks styled={true} term={"read"}><b>read</b></ClLinks> 



**Notes:** 



The corresponding output function is <ClLinks styled={true} term={"write-char"}><b>write-char</b></ClLinks>. 



