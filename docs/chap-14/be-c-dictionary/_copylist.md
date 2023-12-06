**copy-list** *Function* 



**Syntax:** 



**copy-list** *list → copy* 



**Arguments and Values:** 



*list*—a *proper list* or a *dotted list*. 



*copy*—a *list*. 



**Description:** 



Returns a *copy* of *list*. If *list* is a *dotted list*, the resulting *list* will also be a *dotted list*. 



Only the *list structure* of *list* is copied; the *elements* of the resulting list are the *same* as the corresponding *elements* of the given *list*. 



**Examples:**
```lisp
 

(setq lst (list 1 (list 2 3))) *→* (1 (2 3)) 

(setq slst lst) *→* (1 (2 3)) 

(setq clst (copy-list lst)) *→* (1 (2 3)) 

(eq slst lst) *→ true* 

(eq clst lst) *→ false* 

(equal clst lst) *→ true* 

(rplaca lst "one") *→* ("one" (2 3)) 

slst *→* ("one" (2 3)) 

clst *→* (1 (2 3)) 

(setf (caadr lst) "two") *→* "two" 

lst *→* ("one" ("two" 3)) 

slst *→* ("one" ("two" 3)) 

clst *→* (1 ("two" 3)) 


```
**Exceptional Situations:** 



The consequences are undefined if *list* is a *circular list*. 



**See Also:** 



**copy-alist**, **copy-seq**, **copy-tree** 



**Notes:** 



The copy created is **equal** to *list*, but not **eq**. 







 



 



**list, list***∗* 



**list, list***∗ Function* 



**Syntax:** 



**list** &amp;rest *objects → list* 



**list\*** &amp;rest *objects*<sup>+</sup> *→ result* 



**Arguments and Values:** 



*object*—an *object*. 



*list*—a *list*. 



*result*—an *object*. 



**Description:** 



**list** returns a *list* containing the supplied *objects*. 



**list\*** is like **list** except that the last *argument* to **list** becomes the *car* of the last *cons* constructed, while the last *argument* to **list\*** becomes the *cdr* of the last *cons* constructed. Hence, any given call to **list\*** always produces one fewer *conses* than a call to **list** with the same number of arguments. 



If the last *argument* to **list\*** is a *list*, the effect is to construct a new *list* which is similar, but which has additional elements added to the front corresponding to the preceding *arguments* of **list\***. 



If **list\*** receives only one *object*, that *object* is returned, regardless of whether or not it is a *list*. **Examples:**
```lisp
 

(list 1) *→* (1) 

(list\* 1) *→* 1 

(setq a 1) *→* 1 

(list a 2) *→* (1 2) 

’(a 2) *→* (A 2) 

(list ’a 2) *→* (A 2) 

(list\* a 2) *→* (1 . 2) 

(list) *→* NIL ;*i.e.*, () 

(setq a ’(1 2)) *→* (1 2) 

(eq a (list\* a)) *→ true* 

(list 3 4 ’a (car ’(b . c)) (+ 6 -2)) *→* (3 4 A B 4) 

(list\* ’a ’b ’c ’d) *≡* (cons ’a (cons ’b (cons ’c ’d))) *→* (A B C . D) 

(list\* ’a ’b ’c ’(d e f)) *→* (A B C D E F) 


```
**See Also:** 



**cons** 







 



 



**Notes:** 



(list\* *x*) *≡ x* 



