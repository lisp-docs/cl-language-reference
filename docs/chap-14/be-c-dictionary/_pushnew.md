**pushnew** *Macro* 



**Syntax:** 



**pushnew** *item place* &key *key test test-not* 



*→ new-place-value* 



**Arguments and Values:** 



*item*—an *object*. 



*place*—a *place*, the *value* of which is a *proper list*. 



*test*—a *designator* for a *function* of two *arguments* that returns a *generalized boolean*. *test-not*—a *designator* for a *function* of two *arguments* that returns a *generalized boolean*. *key*—a *designator* for a *function* of one argument, or **nil**. 



*new-place-value*—a *list* (the new *value* of *place*). 



**Description:** 



**pushnew** tests whether *item* is the same as any existing element of the *list* stored in *place*. If *item* is not, it is prepended to the *list*, and the new *list* is stored in *place*. 



**pushnew** returns the new *list* that is stored in *place*. 



Whether or not *item* is already a member of the *list* that is in *place* is determined by comparisons using :test or :test-not. The first argument to the :test or :test-not function is *item*; the second argument is an element of the *list* in *place* as returned by the :key function (if supplied). 



If :key is supplied, it is used to extract the part to be tested from both *item* and the *list* element, as for **adjoin**. 



The argument to the :key function is an element of the *list* stored in *place*. The :key function typically returns part part of the element of the *list*. If :key is not supplied or **nil**, the *list* element is used. 



For information about the *evaluation* of *subforms* of *place*, see Section 5.1.1.1 (Evaluation of Subforms to Places). 







 



 



It is *implementation-dependent* whether or not **pushnew** actually executes the storing form for its *place* in the situation where the *item* is already a member of the *list* held by *place*. 



**Examples:**
```lisp
 



(setq x ’(a (b c) d)) *→* (A (B C) D) 



(pushnew 5 (cadr x)) *→* (5 B C) 



x *→* (A (5 B C) D) 



(pushnew ’b (cadr x)) *→* (5 B C) 



x *→* (A (5 B C) D) 



(setq lst ’((1) (1 2) (1 2 3))) *→* ((1) (1 2) (1 2 3)) 



(pushnew ’(2) lst) *→* ((2) (1) (1 2) (1 2 3)) 



(pushnew ’(1) lst) *→* ((1) (2) (1) (1 2) (1 2 3)) 



(pushnew ’(1) lst :test ’equal) *→* ((1) (2) (1) (1 2) (1 2 3)) 



(pushnew ’(1) lst :key #’car) *→* ((1) (2) (1) (1 2) (1 2 3)) 




```
**Side Effects:** 



The contents of *place* may be modified. 



**See Also:** 



**push**, **adjoin**, Section 5.1 (Generalized Reference) 



**Notes:** 



The effect of (pushnew item place :test p) 



is roughly equivalent to (setf place (adjoin item place :test p)) 



except that the *subforms* of place are evaluated only once, and item is evaluated before place. 