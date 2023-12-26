**set-macro-character, get-macro-character** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"get-macro-character"}><b>get-macro-character</b></ClLinks> *char* &amp;optional *readtable → function, non-terminating-p* 



<ClLinks  term={"set-macro-character"}><b>set-macro-character</b></ClLinks> *char new-function* &amp;optional *non-terminating-p readtable →* <ClLinks  term={"t"}><b>t</b></ClLinks> 



**Arguments and Values:** 



*char*—a <ClLinks  term={"character"}><i>character</i></ClLinks> . 



*non-terminating-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <ClLinks  term={"false"}><i>false</i></ClLinks>. 







 



 



**set-macro-character, get-macro-character** 



<ClLinks  term={"readtable"}><i>readtable</i></ClLinks>—a <GlossaryTerm styled={true} term={"readtable designator"}><i>readtable designator</i></GlossaryTerm> . The default is the <GlossaryTerm styled={true} term={"current readtable"}><i>current readtable</i></GlossaryTerm>. 



<ClLinks  term={"function"}><i>function</i></ClLinks>—<ClLinks  term={"nil"}><b>nil</b></ClLinks>, or a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"function"}><i>function</i></ClLinks> of two <ClLinks  term={"argument"}><i>arguments</i></ClLinks>. 



*new-function*—a <GlossaryTerm styled={true} term={"function designator"}><i>function designator</i></GlossaryTerm> . 



**Description:** 



<ClLinks  term={"get-macro-character"}><b>get-macro-character</b></ClLinks> returns as its <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"reader macro function"}><i>reader macro function</i></GlossaryTerm> associated with *char* in <ClLinks  term={"readtable"}><i>readtable</i></ClLinks> (if any), or else <ClLinks  term={"nil"}><b>nil</b></ClLinks> if *char* is not a <GlossaryTerm styled={true} term={"macro character"}><i>macro character</i></GlossaryTerm> in <ClLinks  term={"readtable"}><i>readtable</i></ClLinks>. The <GlossaryTerm styled={true} term={"secondary value"}><i>secondary value</i></GlossaryTerm>, *non-terminating-p*, is <ClLinks  term={"true"}><i>true</i></ClLinks> if *char* is a *non-terminating macro character* ; otherwise, it is <ClLinks  term={"false"}><i>false</i></ClLinks>. 



<ClLinks  term={"set-macro-character"}><b>set-macro-character</b></ClLinks> causes *char* to be a <GlossaryTerm styled={true} term={"macro character"}><i>macro character</i></GlossaryTerm> associated with the *reader macro function new-function* (or the <ClLinks  term={"designator"}><i>designator</i></ClLinks> for *new-function*) in <ClLinks  term={"readtable"}><i>readtable</i></ClLinks>. If *non-terminating-p* is <ClLinks  term={"true"}><i>true</i></ClLinks>, *char* becomes a *non-terminating macro character* ; otherwise it becomes a *terminating macro character* . 



**Examples:**
```lisp
(get-macro-character #\\&#123;) → NIL, *false* 
		     (not (get-macro-character #\;)) → false 
		     The following is a possible definition for the *single-quote reader macro* in *standard syntax* : 
		     (defun single-quote-reader (stream char) 
		       (declare (ignore char)) 
		       (list ’quote (read stream t nil t))) → SINGLE-QUOTE-READER 
		     (set-macro-character #\’ #’single-quote-reader) → T 
		     Here single-quote-reader reads an *object* following the *single-quote* and returns a *list* of **quote** and that *object*. The *char* argument is ignored. 
		     The following is a possible definition for the *semicolon reader macro* in *standard syntax* : 
		     (defun semicolon-reader (stream char) 
		       (declare (ignore char)) 
		       ;; First swallow the rest of the current input line. 
		       ;; End-of-file is acceptable for terminating the comment. 
		       (do () ((char= (read-char stream nil #\Newline t) #\Newline))) 
		       ;; Return zero values. 
		       (values)) → SEMICOLON-READER 
		     (set-macro-character #\; #’semicolon-reader) → T 
```
**Side Effects:** 



The <ClLinks  term={"readtable"}><i>readtable</i></ClLinks> is modified. 



**See Also:** 



<ClLinks  term={"readtable"}><b>\*readtable\*</b></ClLinks> 







 



 



