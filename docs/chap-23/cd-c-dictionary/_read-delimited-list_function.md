**read-delimited-list** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"read-delimited-list"}><b>read-delimited-list</b></DictionaryLink> *char* &amp;optional *input-stream recursive-p → list* 



**Arguments and Values:** 



*char*—a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> . 



*input-stream*—an *input stream designator* . The default is *standard input*. 



*recursive-p*—a *generalized boolean*. The default is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> read. 







 



 



<DictionaryLink styled={true} term={"read-delimited-list"}><b>read-delimited-list</b></DictionaryLink> 



**Description:** 



<DictionaryLink styled={true} term={"read-delimited-list"}><b>read-delimited-list</b></DictionaryLink> reads <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> from *input-stream* until the next character after an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>’s representation (ignoring <GlossaryTerm styled={true} term={"whitespace"}><i>whitespace</i></GlossaryTerm><sub>2</sub> characters and comments) is *char*. 



<DictionaryLink styled={true} term={"read-delimited-list"}><b>read-delimited-list</b></DictionaryLink> looks ahead at each step for the next non-<GlossaryTerm styled={true} term={"whitespace"}><i>whitespace</i></GlossaryTerm><sub>2</sub> <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> and peeks at it as if with <DictionaryLink styled={true} term={"peek-char"}><b>peek-char</b></DictionaryLink>. If it is *char*, then the <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> is consumed and the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> is returned. If it is a <GlossaryTerm styled={true} term={"constituent"}><i>constituent</i></GlossaryTerm> or *escape character* , then <DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink> is used to read an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, which is added to the end of the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. If it is a *macro character* , its *reader macro function* is called; if the function returns a <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm>, that <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> is added to the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. The peek-ahead process is then repeated. 



If *recursive-p* is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, this call is expected to be embedded in a higher-level call to <DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink> or a similar function. 



It is an error to reach end-of-file during the operation of <DictionaryLink styled={true} term={"read-delimited-list"}><b>read-delimited-list</b></DictionaryLink>. 



The consequences are undefined if *char* has a *syntax type* of <GlossaryTerm styled={true} term={"whitespace"}><i>whitespace</i></GlossaryTerm><sub>2</sub> in the *current readtable*. **Examples:**
```lisp

(read-delimited-list #\]) 1 2 3 4 5 6 ] 
*→* (1 2 3 4 5 6) 
Suppose you wanted #\&#123;*a b c . . . z*\&#125; to read as a list of all pairs of the elements *a*, *b*, *c*, *. . .*, *z*, for example. 
#\&#123;p q z a\&#125; reads as ((p q) (p z) (p a) (q z) (q a) (z a)) 
This can be done by specifying a macro-character definition for #\&#123; that does two things: reads in all the items up to the \&#125;, and constructs the pairs. **read-delimited-list** performs the first task. 
(defun |#\&#123;-reader| (stream char arg) 
  (declare (ignore char arg)) 
  (mapcon #’(lambda (x) 
	      (mapcar #’(lambda (y) (list (car x) y)) (cdr x))) 
	    (read-delimited-list #\\&#125; stream t))) *→* |#\&#123;-reader| 
				 (set-dispatch-macro-character #\# #\\&#123; #’|#\&#123;-reader|) *→* T 
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



**\*standard-input\***, <DictionaryLink styled={true} term={"readtable"}><b>\*readtable\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"terminal-io"}><b>\*terminal-io\*</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink>, <DictionaryLink styled={true} term={"peek-char"}><b>peek-char</b></DictionaryLink>, <DictionaryLink styled={true} term={"read-char"}><b>read-char</b></DictionaryLink>, <DictionaryLink styled={true} term={"unread-char"}><b>unread-char</b></DictionaryLink>. 



**Notes:** 



<DictionaryLink styled={true} term={"read-delimited-list"}><b>read-delimited-list</b></DictionaryLink> is intended for use in implementing *reader macros*. Usually it is desirable for *char* to be a *terminating macro character* so that it can be used to delimit tokens; however, <DictionaryLink styled={true} term={"read-delimited-list"}><b>read-delimited-list</b></DictionaryLink> makes no attempt to alter the syntax specified for *char* by the current readtable. The caller must make any necessary changes to the readtable syntax explicitly. 



