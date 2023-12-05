**make-dispatch-macro-character** *Function* 



**Syntax:** 



**make-dispatch-macro-character** *char* &amp;optional *non-terminating-p readtable →* **t** 



**Arguments and Values:** 



*char*—a *character* . 



*non-terminating-p*—a *generalized boolean*. The default is *false*. 



*readtable*—a *readtable*. The default is the *current readtable*. 



**Description:** 



**make-dispatch-macro-character** makes *char* be a *dispatching macro character* in *readtable*. 



Initially, every *character* in the dispatch table associated with the *char* has an associated function that signals an error of *type* **reader-error**. 







 



 



If *non-terminating-p* is *true*, the *dispatching macro character* is made a *non-terminating macro character* ; if *non-terminating-p* is *false*, the *dispatching macro character* is made a *terminating macro character* . 



**Examples:**
```lisp
 



(get-macro-character #\\{) *→* NIL, *false* 



(make-dispatch-macro-character #\\{) *→* T 



(not (get-macro-character #\\{)) *→ false* 



The *readtable* is altered. 




```
**See Also:** 



**\*readtable\***, **set-dispatch-macro-character** 



