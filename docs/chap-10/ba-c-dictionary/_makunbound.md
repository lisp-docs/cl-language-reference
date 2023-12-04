**makunbound** *Function* 



**Syntax:** 



**makunbound** *symbol → symbol* 



**Arguments and Values:** 



*symbol*—a *symbol* 



**Description:** 



Makes the *symbol* be *unbound*, regardless of whether it was previously *bound*. 



**Examples:**
```lisp
 



(setf (symbol-value ’a) 1) 



(boundp ’a) *→ true* 



a *→* 1 



(makunbound ’a) *→* A 



(boundp ’a) *→ false* 




```
**Side Effects:** 



The *value cell* of *symbol* is modified. 



**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *symbol* is not a *symbol*. 







 



 



**See Also:** 



**boundp**, **fmakunbound** 



