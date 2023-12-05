**assoc, assoc-if, assoc-if-not** *Function* 



**Syntax:** 



**assoc** *item alist* &amp;key *key test test-not → entry* 



**assoc-if** *predicate alist* &amp;key *key → entry* 







 



 



**assoc, assoc-if, assoc-if-not** 



**assoc-if-not** *predicate alist* &amp;key *key → entry* 



**Arguments and Values:** 



*item*—an *object*. 



*alist*—an *association list*. 



*predicate*—a *designator* for a *function* of one *argument* that returns a *generalized boolean*. *test*—a *designator* for a *function* of two *arguments* that returns a *generalized boolean*. *test-not*—a *designator* for a *function* of two *arguments* that returns a *generalized boolean*. *key*—a *designator* for a *function* of one argument, or **nil**. 



*entry*—a *cons* that is an *element* of *alist*, or **nil**. 



**Description:** 



**assoc**, **assoc-if**, and **assoc-if-not** return the first *cons* in *alist* whose *car satisfies the test*, or **nil** if no such *cons* is found. 



For **assoc**, **assoc-if**, and **assoc-if-not**, if **nil** appears in *alist* in place of a pair, it is ignored. **Examples:**
```lisp
 



(setq values ’((x . 100) (y . 200) (z . 50))) *→* ((X . 100) (Y . 200) (Z . 50)) (assoc ’y values) *→* (Y . 200) 



(rplacd (assoc ’y values) 201) *→* (Y . 201) 



(assoc ’y values) *→* (Y . 201) 



(setq alist ’((1 . "one")(2 . "two")(3 . "three"))) 



*→* ((1 . "one") (2 . "two") (3 . "three")) 



(assoc 2 alist) *→* (2 . "two") 



(assoc-if #’evenp alist) *→* (2 . "two") 



(assoc-if-not #’(lambda(x) (&lt; x 3)) alist) *→* (3 . "three") 



(setq alist ’(("one" . 1)("two" . 2))) *→* (("one" . 1) ("two" . 2)) 



(assoc "one" alist) *→* NIL 



(assoc "one" alist :test #’equalp) *→* ("one" . 1) 



(assoc "two" alist :key #’(lambda(x) (char x 2))) *→* NIL 



(assoc #\o alist :key #’(lambda(x) (char x 2))) *→* ("two" . 2) 



(assoc ’r ’((a . b) (c . d) (r . x) (s . y) (r . z))) *→* (R . X) 



(assoc ’goo ’((foo . bar) (zoo . goo))) *→* NIL 



(assoc ’2 ’((1 a b c) (2 b c d) (-7 x y z))) *→* (2 B C D) 



(setq alist ’(("one" . 1) ("2" . 2) ("three" . 3))) 



*→* (("one" . 1) ("2" . 2) ("three" . 3)) 



(assoc-if-not #’alpha-char-p alist 



:key #’(lambda (x) (char x 0))) *→* ("2" . 2) 







 



 




```
**Exceptional Situations:** 



Should be prepared to signal an error of *type* **type-error** if *alist* is not an *association list*. 



**See Also:** 



**rassoc**, **find**, **member**, **position**, Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not parameter is deprecated. 



The *function* **assoc-if-not** is deprecated. 



It is possible to **rplacd** the result of **assoc**, provided that it is not **nil**, in order to “update” *alist*. The two expressions 



(assoc item list :test fn) 



and 



(find item list :test fn :key #’car) 



are equivalent in meaning with one exception: if **nil** appears in *alist* in place of a pair, and *item* is **nil**, **find** will compute the *car* of the **nil** in *alist*, find that it is equal to *item*, and return **nil**, whereas **assoc** will ignore the **nil** in *alist* and continue to search for an actual *cons* whose *car* is **nil**. 



