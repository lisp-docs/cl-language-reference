**read-char** *Function* 



**Syntax:** 



**read-char** &amp;optional *input-stream eof-error-p eof-value recursive-p → char* 



**Arguments and Values:** 



*input-stream*—an *input stream designator* . The default is *standard input*. 



*eof-error-p*—a *generalized boolean*. The default is *true*. 



*eof-value*—an *object*. The default is **nil**. 



*recursive-p*—a *generalized boolean*. The default is *false*. 



*char*—a *character* or the *eof-value*. 



**Description:** 



**read-char** returns the next *character* from *input-stream*. 



When *input-stream* is an *echo stream*, the character is echoed on *input-stream* the first time the character is seen. Characters that are not echoed by **read-char** are those that were put there by **unread-char** and hence are assumed to have been echoed already by a previous call to **read-char**. 



If *recursive-p* is *true*, this call is expected to be embedded in a higher-level call to **read** or a similar *function* used by the *Lisp reader* . 



If an *end of file*<sub>2</sub> occurs and *eof-error-p* is *false*, *eof-value* is returned. 







 



 



**Examples:**
```lisp

(with-input-from-string (is "0123") 
  (do ((c (read-char is) (read-char is nil ’the-end))) 
      ((not (characterp c))) 
    (format t "~S " c))) 
▷ #\0 #\1 #\2 #\3 
→ NIL 

```
**Affected By:** 



**\*standard-input\***, **\*terminal-io\***. 



**Exceptional Situations:** 



If an *end of file*<sub>2</sub> occurs before a character can be read, and *eof-error-p* is *true*, an error of *type* **end-of-file** is signaled. 



**See Also:** 



**read-byte**, **read-sequence**, **write-char**, **read** 



**Notes:** 



The corresponding output function is **write-char**. 



