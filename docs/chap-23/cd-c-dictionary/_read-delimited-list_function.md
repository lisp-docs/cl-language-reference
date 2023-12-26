**read-delimited-list** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"read-delimited-list"}><b>read-delimited-list</b></ClLinks> *char* &amp;optional *input-stream recursive-p → list* 



**Arguments and Values:** 



*char*—a <ClLinks  term={"character"}><i>character</i></ClLinks> . 



*input-stream*—an *input stream designator* . The default is <GlossaryTerm styled={true} term={"standard input"}><i>standard input</i></GlossaryTerm>. 



*recursive-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <ClLinks  term={"false"}><i>false</i></ClLinks>. 



<ClLinks  term={"list"}><i>list</i></ClLinks>—a <ClLinks  term={"list"}><i>list</i></ClLinks> of the <ClLinks  term={"object"}><i>objects</i></ClLinks> read. 







 



 



<ClLinks  term={"read-delimited-list"}><b>read-delimited-list</b></ClLinks> 



**Description:** 



<ClLinks  term={"read-delimited-list"}><b>read-delimited-list</b></ClLinks> reads <ClLinks  term={"object"}><i>objects</i></ClLinks> from *input-stream* until the next character after an <ClLinks  term={"object"}><i>object</i></ClLinks>’s representation (ignoring <ClLinks  term={"whitespace"}><i>whitespace</i></ClLinks><sub>2</sub> characters and comments) is *char*. 



<ClLinks  term={"read-delimited-list"}><b>read-delimited-list</b></ClLinks> looks ahead at each step for the next non-<ClLinks  term={"whitespace"}><i>whitespace</i></ClLinks><sub>2</sub> <ClLinks  term={"character"}><i>character</i></ClLinks> and peeks at it as if with <ClLinks  term={"peek-char"}><b>peek-char</b></ClLinks>. If it is *char*, then the <ClLinks  term={"character"}><i>character</i></ClLinks> is consumed and the <ClLinks  term={"list"}><i>list</i></ClLinks> of <ClLinks  term={"object"}><i>objects</i></ClLinks> is returned. If it is a <ClLinks  term={"constituent"}><i>constituent</i></ClLinks> or *escape character* , then <ClLinks  term={"read"}><b>read</b></ClLinks> is used to read an <ClLinks  term={"object"}><i>object</i></ClLinks>, which is added to the end of the <ClLinks  term={"list"}><i>list</i></ClLinks>. If it is a <GlossaryTerm styled={true} term={"macro character"}><i>macro character</i></GlossaryTerm> , its <GlossaryTerm styled={true} term={"reader macro function"}><i>reader macro function</i></GlossaryTerm> is called; if the function returns a <ClLinks  term={"value"}><i>value</i></ClLinks>, that <ClLinks  term={"value"}><i>value</i></ClLinks> is added to the <ClLinks  term={"list"}><i>list</i></ClLinks>. The peek-ahead process is then repeated. 



If *recursive-p* is <ClLinks  term={"true"}><i>true</i></ClLinks>, this call is expected to be embedded in a higher-level call to <ClLinks  term={"read"}><b>read</b></ClLinks> or a similar function. 



It is an error to reach end-of-file during the operation of <ClLinks  term={"read-delimited-list"}><b>read-delimited-list</b></ClLinks>. 



The consequences are undefined if *char* has a <GlossaryTerm styled={true} term={"syntax type"}><i>syntax type</i></GlossaryTerm> of <ClLinks  term={"whitespace"}><i>whitespace</i></ClLinks><sub>2</sub> in the <GlossaryTerm styled={true} term={"current readtable"}><i>current readtable</i></GlossaryTerm>. 

**Examples:**
```lisp
(read-delimited-list #\]) 1 2 3 4 5 6 ] 
→ (1 2 3 4 5 6) 
Suppose you wanted #\&#123;*a b c . . . z*\&#125; to read as a list of all pairs of the elements *a*, *b*, *c*, *. . .*, *z*, for example. 
#\&#123;p q z a\&#125; reads as ((p q) (p z) (p a) (q z) (q a) (z a)) 
This can be done by specifying a macro-character definition for #\&#123; that does two things: reads in all the items up to the \&#125;, and constructs the pairs. **read-delimited-list** performs the first task. 
(defun |#\&#123;-reader| (stream char arg) 
  (declare (ignore char arg)) 
  (mapcon #’(lambda (x) 
	      (mapcar #’(lambda (y) (list (car x) y)) (cdr x))) 
	    (read-delimited-list #\\&#125; stream t))) → |#\&#123;-reader| 
				 (set-dispatch-macro-character #\# #\\&#123; #’|#\&#123;-reader|) → T 
							       (set-macro-character #\\&#125; (get-macro-character #\) **nil**)) 
										    Note that *true* is supplied for the *recursive-p* argument. 
										    It is necessary here to give a definition to the character \&#125; as well to prevent it from being a constituent. If the line 
										    (set-macro-character #\\&#125; (get-macro-character #\) **nil**)) 
													 shown above were not included, then the \&#125; in 
													 #\&#123; p q z a\&#125; 
													 
													 
													 would be considered a constituent character, part of the symbol named a\&#125;. This could be corrected by putting a space before the \&#125;, but it is better to call **set-macro-character**. 
													 Giving \&#125; the same definition as the standard definition of the character ) has the twin benefit of making it terminate tokens for use with **read-delimited-list** and also making it invalid for use in any other context. Attempting to read a stray \&#125; will signal an error. 
```
**Affected By:** 



**\*standard-input\***, <ClLinks  term={"readtable"}><b>\*readtable\*</b></ClLinks>, <ClLinks  term={"terminal-io"}><b>\*terminal-io\*</b></ClLinks>. 



**See Also:** 



<ClLinks  term={"read"}><b>read</b></ClLinks>, <ClLinks  term={"peek-char"}><b>peek-char</b></ClLinks>, <ClLinks  term={"read-char"}><b>read-char</b></ClLinks>, <ClLinks  term={"unread-char"}><b>unread-char</b></ClLinks>. 



**Notes:** 



<ClLinks  term={"read-delimited-list"}><b>read-delimited-list</b></ClLinks> is intended for use in implementing <GlossaryTerm styled={true} term={"reader macro"}><i>reader macros</i></GlossaryTerm>. Usually it is desirable for *char* to be a *terminating macro character* so that it can be used to delimit tokens; however, <ClLinks  term={"read-delimited-list"}><b>read-delimited-list</b></ClLinks> makes no attempt to alter the syntax specified for *char* by the current readtable. The caller must make any necessary changes to the readtable syntax explicitly. 



