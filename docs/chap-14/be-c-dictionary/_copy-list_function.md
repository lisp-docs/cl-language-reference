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

(setq lst (list 1 (list 2 3))) → (1 (2 3)) 
(setq slst lst) → (1 (2 3)) 
(setq clst (copy-list lst)) → (1 (2 3)) 
(eq slst lst) → true 
(eq clst lst) → false 
(equal clst lst) → true 
(rplaca lst "one") → ("one" (2 3)) 
slst → ("one" (2 3)) 
clst → (1 (2 3)) 
(setf (caadr lst) "two") → "two" 
lst → ("one" ("two" 3)) 
slst → ("one" ("two" 3)) 
clst → (1 ("two" 3)) 
```
**Exceptional Situations:** 



The consequences are undefined if *list* is a *circular list*. 



**See Also:** 



**copy-alist**, **copy-seq**, **copy-tree** 



**Notes:** 



The copy created is **equal** to *list*, but not **eq**. 







 



 



**list, list***∗* 



