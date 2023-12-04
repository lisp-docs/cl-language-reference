**rassoc, rassoc-if, rassoc-if-not** *Function* 



**Syntax:** 



**rassoc** *item alist* &key *key test test-not → entry* 



**rassoc-if** *predicate alist* &key *key → entry* 



**rassoc-if-not** *predicate alist* &key *key → entry* 



**Arguments and Values:** 



*item*—an *object*. 



*alist*—an *association list*. 



*predicate*—a *designator* for a *function* of one *argument* that returns a *generalized boolean*. *test*—a *designator* for a *function* of two *arguments* that returns a *generalized boolean*. *test-not*—a *designator* for a *function* of two *arguments* that returns a *generalized boolean*. *key*—a *designator* for a *function* of one argument, or **nil**. 



*entry*—a *cons* that is an *element* of the *alist*, or **nil**. 







 



 



**Description:** 



**rassoc**, **rassoc-if**, and **rassoc-if-not** return the first *cons* whose *cdr satisfies the test*. If no such *cons* is found, **nil** is returned. 



If **nil** appears in *alist* in place of a pair, it is ignored. 



**Examples:**
```lisp
 



(setq alist ’((1 . "one") (2 . "two") (3 . 3))) 



*→* ((1 . "one") (2 . "two") (3 . 3)) 



(rassoc 3 alist) *→* (3 . 3) 



(rassoc "two" alist) *→* NIL 



(rassoc "two" alist :test ’equal) *→* (2 . "two") 



(rassoc 1 alist :key #’(lambda (x) (if (numberp x) (/ x 3)))) *→* (3 . 3) 



(rassoc ’a ’((a . b) (b . c) (c . a) (z . a))) *→* (C . A) 



(rassoc-if #’stringp alist) *→* (1 . "one") 



(rassoc-if-not #’vectorp alist) *→* (3 . 3) 




```
**See Also:** 



**assoc**, Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not parameter is deprecated. 



The *function* **rassoc-if-not** is deprecated. 



It is possible to **rplaca** the result of **rassoc**, provided that it is not **nil**, in order to “update” *alist*. The expressions 



(rassoc item list :test fn) 



and 



(find item list :test fn :key #’cdr) 



are equivalent in meaning, except when the item is **nil** and **nil** appears in place of a pair in the *alist*. See the *function* **assoc**. 



