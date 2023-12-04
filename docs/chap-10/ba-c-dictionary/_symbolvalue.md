**symbol-value** *Accessor* 



**Syntax:** 



**symbol-value** *symbol → value* 



**(setf (symbol-value** *symbol***)** *new-value***)** 



**Arguments and Values:** 



*symbol*—a *symbol* that must have a *value*. 



*value*, *new-value*—an *object*. 



**Description:** 



*Accesses* the *symbol*’s *value cell*. 



**Examples:**
```lisp
 



(setf (symbol-value ’a) 1) *→* 1 



(symbol-value ’a) *→* 1 



;; SYMBOL-VALUE cannot see lexical variables. 



(let ((a 2)) (symbol-value ’a)) *→* 1 



(let ((a 2)) (setq a 3) (symbol-value ’a)) *→* 1 



;; SYMBOL-VALUE can see dynamic variables. 



(let ((a 2)) 



(declare (special a)) 



(symbol-value ’a)) *→* 2 



(let ((a 2)) 



(declare (special a)) 



(setq a 3) 



(symbol-value ’a)) *→* 3 



(let ((a 2)) 



(setf (symbol-value ’a) 3) 



a) *→* 2 



a *→* 3 



(symbol-value ’a) *→* 3 



(let ((a 4)) 



(declare (special a)) 



(let ((b (symbol-value ’a))) 



(setf (symbol-value ’a) 5) 



(values a b))) *→* 5, 4 



a *→* 3 



(symbol-value :any-keyword) *→* :ANY-KEYWORD 



(symbol-value ’nil) *→* NIL 



(symbol-value ’()) *→* NIL 







 



 



;; The precision of this next one is *implementation-dependent*. 



(symbol-value ’pi) *→* 3.141592653589793d0 




```
**Affected By:** 



**makunbound**, **set**, **setq** 



**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *symbol* is not a *symbol*. 



Should signal **unbound-variable** if *symbol* is *unbound* and an attempt is made to *read* its *value*. (No such error is signaled on an attempt to *write* its *value*.) 



**See Also:** 



**boundp**, **makunbound**, **set**, **setq** 



**Notes:** 



**symbol-value** can be used to get the value of a *constant variable*. **symbol-value** cannot *access* the value of a *lexical variable*. 



