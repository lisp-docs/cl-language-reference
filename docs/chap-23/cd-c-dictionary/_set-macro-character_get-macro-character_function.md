**set-macro-character, get-macro-character** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"get-macro-character"}><b>get-macro-character</b></ClLinks> *char* &amp;optional *readtable → function, non-terminating-p* 



<ClLinks styled={true} term={"set-macro-character"}><b>set-macro-character</b></ClLinks> *char new-function* &amp;optional *non-terminating-p readtable →* <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Arguments and Values:** 



*char*—a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> . 



*non-terminating-p*—a *generalized boolean*. The default is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 







 



 



**set-macro-character, get-macro-character** 



<ClLinks styled={true} term={"readtable"}><i>readtable</i></ClLinks>—a *readtable designator* . The default is the *current readtable*. 



<ClLinks styled={true} term={"function"}><i>function</i></ClLinks>—<ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, or a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks>. 



*new-function*—a *function designator* . 



**Description:** 



<ClLinks styled={true} term={"get-macro-character"}><b>get-macro-character</b></ClLinks> returns as its *primary value*, *function*, the *reader macro function* associated with *char* in <ClLinks styled={true} term={"readtable"}><i>readtable</i></ClLinks> (if any), or else <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> if *char* is not a *macro character* in <ClLinks styled={true} term={"readtable"}><i>readtable</i></ClLinks>. The *secondary value*, *non-terminating-p*, is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if *char* is a *non-terminating macro character* ; otherwise, it is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



<ClLinks styled={true} term={"set-macro-character"}><b>set-macro-character</b></ClLinks> causes *char* to be a *macro character* associated with the *reader macro function new-function* (or the <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for *new-function*) in <ClLinks styled={true} term={"readtable"}><i>readtable</i></ClLinks>. If *non-terminating-p* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, *char* becomes a *non-terminating macro character* ; otherwise it becomes a *terminating macro character* . 



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



The <ClLinks styled={true} term={"readtable"}><i>readtable</i></ClLinks> is modified. 



**See Also:** 



<ClLinks styled={true} term={"readtable"}><b>\*readtable\*</b></ClLinks> 







 



 



