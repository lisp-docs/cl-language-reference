**pop** *Macro* 



**Syntax:** 



**pop** *place → element* 



**Arguments and Values:** 



*place*—a *place*, the *value* of which is a *list* (possibly, but necessarily, a *dotted list* or *circular list*). *element*—an *object* (the *car* of the contents of *place*). 



**Description:** 



**pop** *reads* the *value* of *place*, remembers the *car* of the *list* which was retrieved, *writes* the *cdr* of the *list* back into the *place*, and finally *yields* the *car* of the originally retrieved *list*. 







 



 



For information about the *evaluation* of *subforms* of *place*, see Section 5.1.1.1 (Evaluation of Subforms to Places). 



**Examples:**
```lisp
 



(setq stack ’(a b c)) *→* (A B C) 



(pop stack) *→* A 



stack *→* (B C) 



(setq llst ’((1 2 3 4))) *→* ((1 2 3 4)) 



(pop (car llst)) *→* 1 



llst *→* ((2 3 4)) 




```
**Side Effects:** 



The contents of *place* are modified. 



**See Also:** 



**push**, **pushnew**, Section 5.1 (Generalized Reference) 



**Notes:** 



The effect of (pop *place*) is roughly equivalent to 



(prog1 (car *place*) (setf *place* (cdr *place*))) 



except that the latter would evaluate any *subforms* of *place* three times, while **pop** evaluates them only once. 



