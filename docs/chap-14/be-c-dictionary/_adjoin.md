**adjoin** *Function* 



**Syntax:** 



**adjoin** *item list* &amp;key *key test test-not → new-list* 



**Arguments and Values:** 



*item*—an *object*. 



*list*—a *proper list*. 



*test*—a *designator* for a *function* of two *arguments* that returns a *generalized boolean*. *test-not*—a *designator* for a *function* of two *arguments* that returns a *generalized boolean*. *key*—a *designator* for a *function* of one argument, or **nil**. 



*new-list*—a *list*. 



**Description:** 



Tests whether *item* is the same as an existing element of *list*. If the *item* is not an existing element, **adjoin** adds it to *list* (as if by **cons**) and returns the resulting *list*; otherwise, nothing is added and the original *list* is returned. 



The *test*, *test-not*, and *key* affect how it is determined whether *item* is the same as an *element* of *list*. For details, see Section 17.2.1 (Satisfying a Two-Argument Test). 



**Examples:**
```lisp
 

(setq slist ’()) *→* NIL 

(adjoin ’a slist) *→* (A) 

slist *→* NIL 

(setq slist (adjoin ’(test-item 1) slist)) *→* ((TEST-ITEM 1)) 

(adjoin ’(test-item 1) slist) *→* ((TEST-ITEM 1) (TEST-ITEM 1)) 

(adjoin ’(test-item 1) slist :test ’equal) *→* ((TEST-ITEM 1)) 

(adjoin ’(new-test-item 1) slist :key #’cadr) *→* ((TEST-ITEM 1)) 

(adjoin ’(new-test-item 1) slist) *→* ((NEW-TEST-ITEM 1) (TEST-ITEM 1)) 


```
**Exceptional Situations:** 



Should be prepared to signal an error of *type* **type-error** if *list* is not a *proper list*. 



**See Also:** 



**pushnew**, Section 3.6 (Traversal Rules and Side Effects) 







 



 



**Notes:** 



The :test-not parameter is deprecated. 



(adjoin item list :key fn) 



*≡* (if (member (fn item) list :key fn) list (cons item list)) 



