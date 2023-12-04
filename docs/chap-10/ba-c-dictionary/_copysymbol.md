**copy-symbol** *Function* 



**Syntax:** 



**copy-symbol** *symbol* &optional *copy-properties → new-symbol* 



**Arguments and Values:** 



*symbol*—a *symbol*. 



*copy-properties*—a *generalized boolean*. The default is *false*. 



*new-symbol*—a *fresh*, *uninterned symbol*. 



**Description:** 



**copy-symbol** returns a *fresh*, *uninterned symbol*, the *name* of which is **string=** to and possibly the *same* as the *name* of the given *symbol*. 



If *copy-properties* is *false*, the *new-symbol* is neither *bound* nor *fbound* and has a *null property list*. If *copy-properties* is *true*, then the initial *value* of *new-symbol* is the *value* of *symbol*, the initial *function* definition of *new-symbol* is the *functional value* of *symbol*, and the *property list* of *new-symbol* is a *copy*<sub>2</sub> of the *property list* of *symbol*. 



**Examples:**
```lisp
 



(setq fred ’fred-smith) *→* FRED-SMITH 



(setf (symbol-value fred) 3) *→* 3 



(setq fred-clone-1a (copy-symbol fred nil)) *→* #:FRED-SMITH 



(setq fred-clone-1b (copy-symbol fred nil)) *→* #:FRED-SMITH 



(setq fred-clone-2a (copy-symbol fred t)) *→* #:FRED-SMITH 



(setq fred-clone-2b (copy-symbol fred t)) *→* #:FRED-SMITH 



(eq fred fred-clone-1a) *→ false* 



(eq fred-clone-1a fred-clone-1b) *→ false* 



(eq fred-clone-2a fred-clone-2b) *→ false* 



(eq fred-clone-1a fred-clone-2a) *→ false* 



(symbol-value fred) *→* 3 



(boundp fred-clone-1a) *→ false* 



(symbol-value fred-clone-2a) *→* 3 



(setf (symbol-value fred-clone-2a) 4) *→* 4 



(symbol-value fred) *→* 3 



(symbol-value fred-clone-2a) *→* 4 



(symbol-value fred-clone-2b) *→* 3 



(boundp fred-clone-1a) *→ false* 



(setf (symbol-function fred) #’(lambda (x) x)) *→* #<FUNCTION anonymous> 



(fboundp fred) *→ true* 



(fboundp fred-clone-1a) *→ false* 



(fboundp fred-clone-2a) *→ false* 







 



 




```
**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *symbol* is not a *symbol*. 



**See Also:** 



**make-symbol** 



**Notes:** 



Implementors are encouraged not to copy the *string* which is the *symbol*’s *name* unnecessarily. Unless there is a good reason to do so, the normal implementation strategy is for the *new-symbol*’s *name* to be *identical* to the given *symbol*’s *name*. 



