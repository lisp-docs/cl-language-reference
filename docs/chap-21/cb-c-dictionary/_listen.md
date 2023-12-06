**listen** *Function* 



**Syntax:** 



**listen** &amp;optional *input-stream → generalized-boolean* 



**Arguments and Values:** 



*input-stream*—an *input stream designator* . The default is *standard input*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if there is a character immediately available from *input-stream*; otherwise, returns *false*. On a non-interactive *input-stream*, **listen** returns *true* except when at *end of file*<sub>1</sub>. If an *end of file* is encountered, **listen** returns *false*. **listen** is intended to be used when *input-stream* obtains characters from an interactive device such as a keyboard. 



**Examples:**
```lisp
 



(progn (unread-char (read-char)) (list (listen) (read-char))) 



▷ 1 



*→* (T #\1) 



(progn (clear-input) (listen)) 



*→* NIL ;Unless you’re a very fast typist! 




```
**Affected By:** 



**\*standard-input\*** 



**See Also:** 



**interactive-stream-p**, **read-char-no-hang** 







 



 



**clear-input** 



