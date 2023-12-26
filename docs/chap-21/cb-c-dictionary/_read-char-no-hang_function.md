**read-char-no-hang** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> **Syntax:** 



<DictionaryLink  term={"read-char-no-hang"}><b>read-char-no-hang</b></DictionaryLink> &amp;optional *input-stream eof-error-p eof-value recursive-p* 



**Arguments and Values:** 



→ char 



*input-stream* – an *input stream designator* . The default is <GlossaryTerm styled={true} term={"standard input"}><i>standard input</i></GlossaryTerm>. 



*eof-error-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>. 



*eof-value*—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. The default is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



*recursive-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 



*char*—a <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> or the *eof-value*. 



**Description:** 



<DictionaryLink  term={"read-char-no-hang"}><b>read-char-no-hang</b></DictionaryLink> returns a character from *input-stream* if such a character is available. If no character is available, <DictionaryLink  term={"read-char-no-hang"}><b>read-char-no-hang</b></DictionaryLink> returns <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 







 



 



If *recursive-p* is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>, this call is expected to be embedded in a higher-level call to <DictionaryLink  term={"read"}><b>read</b></DictionaryLink> or a similar <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> used by the *Lisp reader* . 



If an <GlossaryTerm styled={true} term={"end of file"}><i>end of file</i></GlossaryTerm><sub>2</sub> occurs and *eof-error-p* is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>, *eof-value* is returned. 



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



**\*standard-input\***, <DictionaryLink  term={"terminal-io"}><b>\*terminal-io\*</b></DictionaryLink>. 



**Exceptional Situations:** 



If an <GlossaryTerm styled={true} term={"end of file"}><i>end of file</i></GlossaryTerm><sub>2</sub> occurs when *eof-error-p* is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>, an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"end-of-file"}><b>end-of-file</b></DictionaryLink> is signaled . **See Also:** 



<DictionaryLink  term={"listen"}><b>listen</b></DictionaryLink> 



**Notes:** 



<DictionaryLink  term={"read-char-no-hang"}><b>read-char-no-hang</b></DictionaryLink> is exactly like <DictionaryLink  term={"read-char"}><b>read-char</b></DictionaryLink>, except that if it would be necessary to wait in order to get a character (as from a keyboard), <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> is immediately returned without waiting. 







 



 



<DictionaryLink styled={true} term={"terpri, fresh-line"}><b>terpri, fresh-line</b></DictionaryLink> 



