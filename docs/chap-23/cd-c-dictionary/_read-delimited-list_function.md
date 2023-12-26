**read-delimited-list** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"read-delimited-list"}><b>read-delimited-list</b></DictionaryLink> *char* &amp;optional *input-stream recursive-p → list* 



**Arguments and Values:** 



*char*—a <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> . 



*input-stream*—an *input stream designator* . The default is <GlossaryTerm styled={true} term={"standard input"}><i>standard input</i></GlossaryTerm>. 



*recursive-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 



<GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm>—a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of the <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> read. 







 



 



<DictionaryLink  term={"read-delimited-list"}><b>read-delimited-list</b></DictionaryLink> 



**Description:** 



<DictionaryLink  term={"read-delimited-list"}><b>read-delimited-list</b></DictionaryLink> reads <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> from *input-stream* until the next character after an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>’s representation (ignoring <GlossaryTerm  term={"whitespace"}><i>whitespace</i></GlossaryTerm><sub>2</sub> characters and comments) is *char*. 



<DictionaryLink  term={"read-delimited-list"}><b>read-delimited-list</b></DictionaryLink> looks ahead at each step for the next non-<GlossaryTerm  term={"whitespace"}><i>whitespace</i></GlossaryTerm><sub>2</sub> <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> and peeks at it as if with <DictionaryLink  term={"peek-char"}><b>peek-char</b></DictionaryLink>. If it is *char*, then the <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> is consumed and the <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> is returned. If it is a <GlossaryTerm  term={"constituent"}><i>constituent</i></GlossaryTerm> or *escape character* , then <DictionaryLink  term={"read"}><b>read</b></DictionaryLink> is used to read an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>, which is added to the end of the <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm>. If it is a <GlossaryTerm styled={true} term={"macro character"}><i>macro character</i></GlossaryTerm> , its <GlossaryTerm styled={true} term={"reader macro function"}><i>reader macro function</i></GlossaryTerm> is called; if the function returns a <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm>, that <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> is added to the <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm>. The peek-ahead process is then repeated. 



If *recursive-p* is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>, this call is expected to be embedded in a higher-level call to <DictionaryLink  term={"read"}><b>read</b></DictionaryLink> or a similar function. 



It is an error to reach end-of-file during the operation of <DictionaryLink  term={"read-delimited-list"}><b>read-delimited-list</b></DictionaryLink>. 



The consequences are undefined if *char* has a <GlossaryTerm styled={true} term={"syntax type"}><i>syntax type</i></GlossaryTerm> of <GlossaryTerm  term={"whitespace"}><i>whitespace</i></GlossaryTerm><sub>2</sub> in the <GlossaryTerm styled={true} term={"current readtable"}><i>current readtable</i></GlossaryTerm>. 

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



**\*standard-input\***, <DictionaryLink  term={"readtable"}><b>\*readtable\*</b></DictionaryLink>, <DictionaryLink  term={"terminal-io"}><b>\*terminal-io\*</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink  term={"read"}><b>read</b></DictionaryLink>, <DictionaryLink  term={"peek-char"}><b>peek-char</b></DictionaryLink>, <DictionaryLink  term={"read-char"}><b>read-char</b></DictionaryLink>, <DictionaryLink  term={"unread-char"}><b>unread-char</b></DictionaryLink>. 



**Notes:** 



<DictionaryLink  term={"read-delimited-list"}><b>read-delimited-list</b></DictionaryLink> is intended for use in implementing <GlossaryTerm styled={true} term={"reader macro"}><i>reader macros</i></GlossaryTerm>. Usually it is desirable for *char* to be a *terminating macro character* so that it can be used to delimit tokens; however, <DictionaryLink  term={"read-delimited-list"}><b>read-delimited-list</b></DictionaryLink> makes no attempt to alter the syntax specified for *char* by the current readtable. The caller must make any necessary changes to the readtable syntax explicitly. 



