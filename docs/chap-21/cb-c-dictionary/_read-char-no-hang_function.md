**read-char-no-hang** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> **Syntax:** 



<ClLinks styled={true} term={"read-char-no-hang"}><b>read-char-no-hang</b></ClLinks> &amp;optional *input-stream eof-error-p eof-value recursive-p* 



**Arguments and Values:** 



→ char 



*input-stream* – an *input stream designator* . The default is *standard input*. 



*eof-error-p*—a *generalized boolean*. The default is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. 



*eof-value*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. The default is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*recursive-p*—a *generalized boolean*. The default is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



*char*—a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> or the *eof-value*. 



**Description:** 



<ClLinks styled={true} term={"read-char-no-hang"}><b>read-char-no-hang</b></ClLinks> returns a character from *input-stream* if such a character is available. If no character is available, <ClLinks styled={true} term={"read-char-no-hang"}><b>read-char-no-hang</b></ClLinks> returns <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 







 



 



If *recursive-p* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, this call is expected to be embedded in a higher-level call to <ClLinks styled={true} term={"read"}><b>read</b></ClLinks> or a similar <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> used by the *Lisp reader* . 



If an *end of file*<sub>2</sub> occurs and *eof-error-p* is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, *eof-value* is returned. 



**Examples:**
```lisp
;; This code assumes an implementation in which a newline is not 
;; required to terminate input from the console. 
(defun test-it () 
  (unread-char (read-char)) 
  (list (read-char-no-hang) 
	(read-char-no-hang) 
	(read-char-no-hang))) 
→ TEST-IT 
;; Implementation A, where a Newline is not required to terminate 
;; interactive input on the console. 
(test-it) 
▷ a 
→ (#\a NIL NIL) 
;; Implementation B, where a Newline is required to terminate 
;; interactive input on the console, and where that Newline remains 
;; on the input stream. 
(test-it) 
▷ a← 
→ (#\a #\Newline NIL) 
```
**Affected By:** 



**\*standard-input\***, <ClLinks styled={true} term={"terminal-io"}><b>\*terminal-io\*</b></ClLinks>. 



**Exceptional Situations:** 



If an *end of file*<sub>2</sub> occurs when *eof-error-p* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"end-of-file"}><b>end-of-file</b></ClLinks> is signaled . **See Also:** 



<ClLinks styled={true} term={"listen"}><b>listen</b></ClLinks> 



**Notes:** 



<ClLinks styled={true} term={"read-char-no-hang"}><b>read-char-no-hang</b></ClLinks> is exactly like <ClLinks styled={true} term={"read-char"}><b>read-char</b></ClLinks>, except that if it would be necessary to wait in order to get a character (as from a keyboard), <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> is immediately returned without waiting. 







 



 



**terpri, fresh-line** 



