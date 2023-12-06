**push** *Macro* 



**Syntax:** 



**push** *item place → new-place-value* 



**Arguments and Values:** 



*item*—an *object*. 



*place*—a *place*, the *value* of which may be any *object*. 



*new-place-value*—a *list* (the new *value* of *place*). 







 



 



**Description:** 



**push** prepends *item* to the *list* that is stored in *place*, stores the resulting *list* in *place*, and returns the *list*. 



For information about the *evaluation* of *subforms* of *place*, see Section 5.1.1.1 (Evaluation of Subforms to Places). 



**Examples:**
```lisp
 

(setq llst ’(nil)) *→* (NIL) 

(push 1 (car llst)) *→* (1) 

llst *→* ((1)) 

(push 1 (car llst)) *→* (1 1) 

llst *→* ((1 1)) 

(setq x ’(a (b c) d)) *→* (A (B C) D) 

(push 5 (cadr x)) *→* (5 B C) 

x *→* (A (5 B C) D) 


```
**Side Effects:** 



The contents of *place* are modified. 



**See Also:** 



**pop**, **pushnew**, Section 5.1 (Generalized Reference) 



**Notes:** 



The effect of (push *item place*) is equivalent to 



(setf place (cons *item place*)) 



except that the *subforms* of *place* are evaluated only once, and *item* is evaluated before *place*. 