**read-delimited-list** *Function* 



**Syntax:** 



**read-delimited-list** *char* &optional *input-stream recursive-p → list* 



**Arguments and Values:** 



*char*—a *character* . 



*input-stream*—an *input stream designator* . The default is *standard input*. 



*recursive-p*—a *generalized boolean*. The default is *false*. 



*list*—a *list* of the *objects* read. 







 



 



**read-delimited-list** 



**Description:** 



**read-delimited-list** reads *objects* from *input-stream* until the next character after an *object*’s representation (ignoring *whitespace*<sub>2</sub> characters and comments) is *char*. 



**read-delimited-list** looks ahead at each step for the next non-*whitespace*<sub>2</sub> *character* and peeks at it as if with **peek-char**. If it is *char*, then the *character* is consumed and the *list* of *objects* is returned. If it is a *constituent* or *escape character* , then **read** is used to read an *object*, which is added to the end of the *list*. If it is a *macro character* , its *reader macro function* is called; if the function returns a *value*, that *value* is added to the *list*. The peek-ahead process is then repeated. 



If *recursive-p* is *true*, this call is expected to be embedded in a higher-level call to **read** or a similar function. 



It is an error to reach end-of-file during the operation of **read-delimited-list**. 



The consequences are undefined if *char* has a *syntax type* of *whitespace*<sub>2</sub> in the *current readtable*. **Examples:**
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



**\*standard-input\***, **\*readtable\***, **\*terminal-io\***. 



**See Also:** 



**read**, **peek-char**, **read-char**, **unread-char**. 



**Notes:** 



**read-delimited-list** is intended for use in implementing *reader macros*. Usually it is desirable for *char* to be a *terminating macro character* so that it can be used to delimit tokens; however, **read-delimited-list** makes no attempt to alter the syntax specified for *char* by the current readtable. The caller must make any necessary changes to the readtable syntax explicitly. 



