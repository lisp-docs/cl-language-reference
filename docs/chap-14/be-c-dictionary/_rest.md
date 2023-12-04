**rest** *Accessor* 



**Syntax:** 



**rest** *list → tail* 



**(setf (rest** *list***)** *new-tail***)** 



**Arguments and Values:** 



*list*—a *list*, which might be a *dotted list* or a *circular list*. 



*tail*—an *object*. 



**Description:** 



**rest** performs the same operation as **cdr**, but mnemonically complements **first**. Specifically, 



(rest *list*) *≡* (cdr *list*) 



(setf (rest *list*) *new-tail*) *≡* (setf (cdr *list*) *new-tail*) 



**Examples:**
```lisp
 



(rest ’(1 2)) *→* (2) 







 



 



(rest ’(1 . 2)) *→* 2 



(rest ’(1)) *→* NIL 



(setq \*cons\* ’(1 . 2)) *→* (1 . 2) 



(setf (rest \*cons\*) "two") *→* "two" 



\*cons\* *→* (1 . "two") 




```
**See Also:** 



**cdr**, **nthcdr** 



**Notes:** 



**rest** is often preferred stylistically over **cdr** when the argument is to being subjectively viewed as a *list* rather than as a *cons*. 



