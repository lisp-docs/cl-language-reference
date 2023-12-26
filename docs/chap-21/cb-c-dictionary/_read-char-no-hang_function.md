**read-char-no-hang** <ClLinks  term={"function"}><i>Function</i></ClLinks> **Syntax:** 



<ClLinks  term={"read-char-no-hang"}><b>read-char-no-hang</b></ClLinks> &amp;optional *input-stream eof-error-p eof-value recursive-p* 



**Arguments and Values:** 



→ char 



*input-stream* – an *input stream designator* . The default is <GlossaryTerm styled={true} term={"standard input"}><i>standard input</i></GlossaryTerm>. 



*eof-error-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <ClLinks  term={"true"}><i>true</i></ClLinks>. 



*eof-value*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. The default is <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



*recursive-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <ClLinks  term={"false"}><i>false</i></ClLinks>. 



*char*—a <ClLinks  term={"character"}><i>character</i></ClLinks> or <ClLinks  term={"nil"}><b>nil</b></ClLinks> or the *eof-value*. 



**Description:** 



<ClLinks  term={"read-char-no-hang"}><b>read-char-no-hang</b></ClLinks> returns a character from *input-stream* if such a character is available. If no character is available, <ClLinks  term={"read-char-no-hang"}><b>read-char-no-hang</b></ClLinks> returns <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 







 



 



If *recursive-p* is <ClLinks  term={"true"}><i>true</i></ClLinks>, this call is expected to be embedded in a higher-level call to <ClLinks  term={"read"}><b>read</b></ClLinks> or a similar <ClLinks  term={"function"}><i>function</i></ClLinks> used by the *Lisp reader* . 



If an <GlossaryTerm styled={true} term={"end of file"}><i>end of file</i></GlossaryTerm><sub>2</sub> occurs and *eof-error-p* is <ClLinks  term={"false"}><i>false</i></ClLinks>, *eof-value* is returned. 



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



**\*standard-input\***, <ClLinks  term={"terminal-io"}><b>\*terminal-io\*</b></ClLinks>. 



**Exceptional Situations:** 



If an <GlossaryTerm styled={true} term={"end of file"}><i>end of file</i></GlossaryTerm><sub>2</sub> occurs when *eof-error-p* is <ClLinks  term={"true"}><i>true</i></ClLinks>, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"end-of-file"}><b>end-of-file</b></ClLinks> is signaled . **See Also:** 



<ClLinks  term={"listen"}><b>listen</b></ClLinks> 



**Notes:** 



<ClLinks  term={"read-char-no-hang"}><b>read-char-no-hang</b></ClLinks> is exactly like <ClLinks  term={"read-char"}><b>read-char</b></ClLinks>, except that if it would be necessary to wait in order to get a character (as from a keyboard), <ClLinks  term={"nil"}><b>nil</b></ClLinks> is immediately returned without waiting. 







 



 



<DictionaryLink styled={true} term={"terpri, fresh-line"}><b>terpri, fresh-line</b></DictionaryLink> 



