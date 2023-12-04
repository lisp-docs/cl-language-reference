**set-macro-character, get-macro-character** *Function* 



**Syntax:** 



**get-macro-character** *char* &optional *readtable → function, non-terminating-p* 



**set-macro-character** *char new-function* &optional *non-terminating-p readtable →* **t** 



**Arguments and Values:** 



*char*—a *character* . 



*non-terminating-p*—a *generalized boolean*. The default is *false*. 







 



 



**set-macro-character, get-macro-character** 



*readtable*—a *readtable designator* . The default is the *current readtable*. 



*function*—**nil**, or a *designator* for a *function* of two *arguments*. 



*new-function*—a *function designator* . 



**Description:** 



**get-macro-character** returns as its *primary value*, *function*, the *reader macro function* associated with *char* in *readtable* (if any), or else **nil** if *char* is not a *macro character* in *readtable*. The *secondary value*, *non-terminating-p*, is *true* if *char* is a *non-terminating macro character* ; otherwise, it is *false*. 



**set-macro-character** causes *char* to be a *macro character* associated with the *reader macro function new-function* (or the *designator* for *new-function*) in *readtable*. If *non-terminating-p* is *true*, *char* becomes a *non-terminating macro character* ; otherwise it becomes a *terminating macro character* . 



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



The *readtable* is modified. 



**See Also:** 



**\*readtable\*** 







 



 



