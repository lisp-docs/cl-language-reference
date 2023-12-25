**read-char-no-hang** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> **Syntax:** 



<DictionaryLink styled={true} term={"read-char-no-hang"}><b>read-char-no-hang</b></DictionaryLink> &amp;optional *input-stream eof-error-p eof-value recursive-p* 



**Arguments and Values:** 



*→ char* 



*input-stream* – an *input stream designator* . The default is *standard input*. 



*eof-error-p*—a *generalized boolean*. The default is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. 



*eof-value*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. The default is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*recursive-p*—a *generalized boolean*. The default is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



*char*—a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> or the *eof-value*. 



**Description:** 



<DictionaryLink styled={true} term={"read-char-no-hang"}><b>read-char-no-hang</b></DictionaryLink> returns a character from *input-stream* if such a character is available. If no character is available, <DictionaryLink styled={true} term={"read-char-no-hang"}><b>read-char-no-hang</b></DictionaryLink> returns <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 







 



 



If *recursive-p* is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, this call is expected to be embedded in a higher-level call to <DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink> or a similar <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> used by the *Lisp reader* . 



If an *end of file*<sub>2</sub> occurs and *eof-error-p* is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, *eof-value* is returned. 



**Examples:**
```lisp

;; This code assumes an implementation in which a newline is not 
;; required to terminate input from the console. 
(defun test-it () 
  (unread-char (read-char)) 
  (list (read-char-no-hang) 
	(read-char-no-hang) 
	(read-char-no-hang))) 
*→* TEST-IT 
;; Implementation A, where a Newline is not required to terminate 
;; interactive input on the console. 
(test-it) 
▷ a 
*→* (#\a NIL NIL) 
;; Implementation B, where a Newline is required to terminate 
;; interactive input on the console, and where that Newline remains 
;; on the input stream. 
(test-it) 
▷ a*←-* 
*→* (#\a #\Newline NIL) 

```
**Affected By:** 



**\*standard-input\***, <DictionaryLink styled={true} term={"terminal-io"}><b>\*terminal-io\*</b></DictionaryLink>. 



**Exceptional Situations:** 



If an *end of file*<sub>2</sub> occurs when *eof-error-p* is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"end-of-file"}><b>end-of-file</b></DictionaryLink> is signaled . **See Also:** 



<DictionaryLink styled={true} term={"listen"}><b>listen</b></DictionaryLink> 



**Notes:** 



<DictionaryLink styled={true} term={"read-char-no-hang"}><b>read-char-no-hang</b></DictionaryLink> is exactly like <DictionaryLink styled={true} term={"read-char"}><b>read-char</b></DictionaryLink>, except that if it would be necessary to wait in order to get a character (as from a keyboard), <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> is immediately returned without waiting. 







 



 



**terpri, fresh-line** 



