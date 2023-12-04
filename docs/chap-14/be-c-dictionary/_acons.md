**acons** *Function* 



**Syntax:** 



**acons** *key datum alist → new-alist* 



**Arguments and Values:** 



*key*—an *object*. 



*datum*—an *object*. 



*alist*—an *association list*. 



*new-alist*—an *association list*. 



**Description:** 



Creates a *fresh cons*, the *cdr* of which is *alist* and the *car* of which is another *fresh cons*, the *car* of which is *key* and the *cdr* of which is *datum*. 



**Examples:**
```lisp
 



(setq alist ’()) *→* NIL 



(acons 1 "one" alist) *→* ((1 . "one")) 



alist *→* NIL 



(setq alist (acons 1 "one" (acons 2 "two" alist))) *→* ((1 . "one") (2 . "two")) (assoc 1 alist) *→* (1 . "one") 



(setq alist (acons 1 "uno" alist)) *→* ((1 . "uno") (1 . "one") (2 . "two")) 



(assoc 1 alist) *→* (1 . "uno") 




```
**See Also:** 



**assoc**, **pairlis** 



**Notes:** 



(acons *key datum alist*) *≡* (cons (cons *key datum*) *alist*) 



