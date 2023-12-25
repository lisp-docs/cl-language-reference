**set-macro-character, get-macro-character** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"get-macro-character"}><b>get-macro-character</b></DictionaryLink> *char* &amp;optional *readtable → function, non-terminating-p* 



<DictionaryLink styled={true} term={"set-macro-character"}><b>set-macro-character</b></DictionaryLink> *char new-function* &amp;optional *non-terminating-p readtable →* <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Arguments and Values:** 



*char*—a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> . 



*non-terminating-p*—a *generalized boolean*. The default is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 







 



 



**set-macro-character, get-macro-character** 



<GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm>—a *readtable designator* . The default is the *current readtable*. 



<GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>—<DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, or a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>. 



*new-function*—a *function designator* . 



**Description:** 



<DictionaryLink styled={true} term={"get-macro-character"}><b>get-macro-character</b></DictionaryLink> returns as its *primary value*, *function*, the *reader macro function* associated with *char* in <GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm> (if any), or else <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if *char* is not a *macro character* in <GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm>. The *secondary value*, *non-terminating-p*, is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if *char* is a *non-terminating macro character* ; otherwise, it is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"set-macro-character"}><b>set-macro-character</b></DictionaryLink> causes *char* to be a *macro character* associated with the *reader macro function new-function* (or the <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for *new-function*) in <GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm>. If *non-terminating-p* is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, *char* becomes a *non-terminating macro character* ; otherwise it becomes a *terminating macro character* . 



**Examples:**
```lisp

(get-macro-character #\\&#123;) *→* NIL, *false* 
		     (not (get-macro-character #\;)) *→ false* 
		     The following is a possible definition for the *single-quote reader macro* in *standard syntax* : 
		     (defun single-quote-reader (stream char) 
		       (declare (ignore char)) 
		       (list ’quote (read stream t nil t))) *→* SINGLE-QUOTE-READER 
		     (set-macro-character #\’ #’single-quote-reader) *→* T 
		     Here single-quote-reader reads an *object* following the *single-quote* and returns a *list* of **quote** and that *object*. The *char* argument is ignored. 
		     The following is a possible definition for the *semicolon reader macro* in *standard syntax* : 
		     (defun semicolon-reader (stream char) 
		       (declare (ignore char)) 
		       ;; First swallow the rest of the current input line. 
		       ;; End-of-file is acceptable for terminating the comment. 
		       (do () ((char= (read-char stream nil #\Newline t) #\Newline))) 
		       ;; Return zero values. 
		       (values)) *→* SEMICOLON-READER 
		     (set-macro-character #\; #’semicolon-reader) *→* T 

```
**Side Effects:** 



The <GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm> is modified. 



**See Also:** 



<DictionaryLink styled={true} term={"readtable"}><b>\*readtable\*</b></DictionaryLink> 







 



 



