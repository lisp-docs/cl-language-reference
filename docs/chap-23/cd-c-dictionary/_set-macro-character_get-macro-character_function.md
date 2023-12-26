**set-macro-character, get-macro-character** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"get-macro-character"}><b>get-macro-character</b></DictionaryLink> *char* &amp;optional *readtable → function, non-terminating-p* 



<DictionaryLink  term={"set-macro-character"}><b>set-macro-character</b></DictionaryLink> *char new-function* &amp;optional *non-terminating-p readtable →* <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Arguments and Values:** 



*char*—a <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> . 



*non-terminating-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 







 



 



**set-macro-character, get-macro-character** 



<GlossaryTerm  term={"readtable"}><i>readtable</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"readtable designator"}><i>readtable designator</i></GlossaryTerm> . The default is the <GlossaryTerm styled={true} term={"current readtable"}><i>current readtable</i></GlossaryTerm>. 



<GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>—<DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, or a <GlossaryTerm  term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm>. 



*new-function*—a <GlossaryTerm styled={true} term={"function designator"}><i>function designator</i></GlossaryTerm> . 



**Description:** 



<DictionaryLink  term={"get-macro-character"}><b>get-macro-character</b></DictionaryLink> returns as its <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"reader macro function"}><i>reader macro function</i></GlossaryTerm> associated with *char* in <GlossaryTerm  term={"readtable"}><i>readtable</i></GlossaryTerm> (if any), or else <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> if *char* is not a <GlossaryTerm styled={true} term={"macro character"}><i>macro character</i></GlossaryTerm> in <GlossaryTerm  term={"readtable"}><i>readtable</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"secondary value"}><i>secondary value</i></GlossaryTerm>, *non-terminating-p*, is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if *char* is a *non-terminating macro character* ; otherwise, it is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 



<DictionaryLink  term={"set-macro-character"}><b>set-macro-character</b></DictionaryLink> causes *char* to be a <GlossaryTerm styled={true} term={"macro character"}><i>macro character</i></GlossaryTerm> associated with the *reader macro function new-function* (or the <GlossaryTerm  term={"designator"}><i>designator</i></GlossaryTerm> for *new-function*) in <GlossaryTerm  term={"readtable"}><i>readtable</i></GlossaryTerm>. If *non-terminating-p* is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>, *char* becomes a *non-terminating macro character* ; otherwise it becomes a *terminating macro character* . 



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



The <GlossaryTerm  term={"readtable"}><i>readtable</i></GlossaryTerm> is modified. 



**See Also:** 



<DictionaryLink  term={"readtable"}><b>\*readtable\*</b></DictionaryLink> 







 



 



