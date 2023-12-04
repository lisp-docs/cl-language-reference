**read-line** *Function* 



**Syntax:** 



**read-line** &optional *input-stream eof-error-p eof-value recursive-p* 



*→ line, missing-newline-p* 



**Arguments and Values:** 



*input-stream*—an *input stream designator* . The default is *standard input*. 



*eof-error-p*—a *generalized boolean*. The default is *true*. 



*eof-value*—an *object*. The default is **nil**. 



*recursive-p*—a *generalized boolean*. The default is *false*. 



*line*—a *string* or the *eof-value*. 



*missing-newline-p*—a *generalized boolean*. 



**Description:** 



Reads from *input-stream* a line of text that is terminated by a *newline* or *end of file*. 



If *recursive-p* is *true*, this call is expected to be embedded in a higher-level call to **read** or a similar *function* used by the *Lisp reader* . 



The *primary value*, *line*, is the line that is read, represented as a *string* (without the trailing *newline*, if any). If *eof-error-p* is *false* and the *end of file* for *input-stream* is reached before any *characters* are read, *eof-value* is returned as the *line*. 



The *secondary value*, *missing-newline-p*, is a *generalized boolean* that is *false* if the *line* was terminated by a *newline*, or *true* if the *line* was terminated by the *end of file* for *input-stream* (or if the *line* is the *eof-value*). 



**Examples:**
```lisp
 



(setq a "line 1 



line2") 



*→* "line 1 



line2" 



(read-line (setq input-stream (make-string-input-stream a))) 



*→* "line 1", *false* 



(read-line input-stream) 



*→* "line2", *true* 



(read-line input-stream nil nil) 



*→* NIL, *true* 







 



 




```
**Affected By:** 



**\*standard-input\***, **\*terminal-io\***. 



**Exceptional Situations:** 



If an *end of file*<sub>2</sub> occurs before any characters are read in the line, an error is signaled if *eof-error-p* is *true*. 



**See Also:** 



**read** 



**Notes:** 



The corresponding output function is **write-line**. 



