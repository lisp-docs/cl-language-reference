**list, list***∗ Function* 



**Syntax:** 



**list** &amp;rest *objects → list* 



**list\*** &amp;rest *objects*<sup>+</sup> → result 



**Arguments and Values:** 



*object*—an *object*. 



*list*—a *list*. 



*result*—an *object*. 



**Description:** 



**list** returns a *list* containing the supplied *objects*. 



**list\*** is like **list** except that the last *argument* to **list** becomes the *car* of the last *cons* constructed, while the last *argument* to **list\*** becomes the *cdr* of the last *cons* constructed. Hence, any given call to **list\*** always produces one fewer *conses* than a call to **list** with the same number of arguments. 



If the last *argument* to **list\*** is a *list*, the effect is to construct a new *list* which is similar, but which has additional elements added to the front corresponding to the preceding *arguments* of **list\***. 



If **list\*** receives only one *object*, that *object* is returned, regardless of whether or not it is a *list*. 

**Examples:**
```lisp

(list 1) → (1) 
(list\* 1) → 1 
(setq a 1) → 1 
(list a 2) → (1 2) 
’(a 2) → (A 2) 
(list ’a 2) → (A 2) 
(list\* a 2) → (1 . 2) 
(list) → NIL ;*i.e.*, () 
(setq a ’(1 2)) → (1 2) 
(eq a (list\* a)) → true 
(list 3 4 ’a (car ’(b . c)) (+ 6 -2)) → (3 4 A B 4) 
(list\* ’a ’b ’c ’d) *≡* (cons ’a (cons ’b (cons ’c ’d))) → (A B C . D) 
(list\* ’a ’b ’c ’(d e f)) → (A B C D E F) 

```
**See Also:** 



**cons** 







 



 



**Notes:** 



(list\* *x*) *≡ x* 



