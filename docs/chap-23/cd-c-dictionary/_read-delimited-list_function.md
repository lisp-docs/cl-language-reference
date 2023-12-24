**read-delimited-list** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"read-delimited-list"}><b>read-delimited-list</b></ClLinks> *char* &amp;optional *input-stream recursive-p → list* 



**Arguments and Values:** 



*char*—a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> . 



*input-stream*—an *input stream designator* . The default is *standard input*. 



*recursive-p*—a *generalized boolean*. The default is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



<ClLinks styled={true} term={"list"}><i>list</i></ClLinks>—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of the <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> read. 







 



 



<ClLinks styled={true} term={"read-delimited-list"}><b>read-delimited-list</b></ClLinks> 



**Description:** 



<ClLinks styled={true} term={"read-delimited-list"}><b>read-delimited-list</b></ClLinks> reads <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> from *input-stream* until the next character after an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>’s representation (ignoring <ClLinks styled={true} term={"whitespace"}><i>whitespace</i></ClLinks><sub>2</sub> characters and comments) is *char*. 



<ClLinks styled={true} term={"read-delimited-list"}><b>read-delimited-list</b></ClLinks> looks ahead at each step for the next non-<ClLinks styled={true} term={"whitespace"}><i>whitespace</i></ClLinks><sub>2</sub> <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> and peeks at it as if with <ClLinks styled={true} term={"peek-char"}><b>peek-char</b></ClLinks>. If it is *char*, then the <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> is consumed and the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> is returned. If it is a <ClLinks styled={true} term={"constituent"}><i>constituent</i></ClLinks> or *escape character* , then <ClLinks styled={true} term={"read"}><b>read</b></ClLinks> is used to read an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, which is added to the end of the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. If it is a *macro character* , its *reader macro function* is called; if the function returns a <ClLinks styled={true} term={"value"}><i>value</i></ClLinks>, that <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> is added to the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. The peek-ahead process is then repeated. 



If *recursive-p* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, this call is expected to be embedded in a higher-level call to <ClLinks styled={true} term={"read"}><b>read</b></ClLinks> or a similar function. 



It is an error to reach end-of-file during the operation of <ClLinks styled={true} term={"read-delimited-list"}><b>read-delimited-list</b></ClLinks>. 



The consequences are undefined if *char* has a *syntax type* of <ClLinks styled={true} term={"whitespace"}><i>whitespace</i></ClLinks><sub>2</sub> in the *current readtable*. 

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



**\*standard-input\***, <ClLinks styled={true} term={"readtable"}><b>\*readtable\*</b></ClLinks>, <ClLinks styled={true} term={"terminal-io"}><b>\*terminal-io\*</b></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"read"}><b>read</b></ClLinks>, <ClLinks styled={true} term={"peek-char"}><b>peek-char</b></ClLinks>, <ClLinks styled={true} term={"read-char"}><b>read-char</b></ClLinks>, <ClLinks styled={true} term={"unread-char"}><b>unread-char</b></ClLinks>. 



**Notes:** 



<ClLinks styled={true} term={"read-delimited-list"}><b>read-delimited-list</b></ClLinks> is intended for use in implementing *reader macros*. Usually it is desirable for *char* to be a *terminating macro character* so that it can be used to delimit tokens; however, <ClLinks styled={true} term={"read-delimited-list"}><b>read-delimited-list</b></ClLinks> makes no attempt to alter the syntax specified for *char* by the current readtable. The caller must make any necessary changes to the readtable syntax explicitly. 



