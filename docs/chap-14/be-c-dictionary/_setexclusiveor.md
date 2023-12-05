**set-exclusive-or, nset-exclusive-or** *Function* 



**Syntax:** 



**set-exclusive-or** *list-1 list-2* &amp;key *key test test-not → result-list* 



**nset-exclusive-or** *list-1 list-2* &amp;key *key test test-not → result-list* 



**Arguments and Values:** 



*list-1*—a *proper list*. 



*list-2*—a *proper list*. 



*test*—a *designator* for a *function* of two *arguments* that returns a *generalized boolean*. *test-not*—a *designator* for a *function* of two *arguments* that returns a *generalized boolean*. *key*—a *designator* for a *function* of one argument, or **nil**. 



*result-list*—a *list*. 



**Description:** 



**set-exclusive-or** returns a *list* of elements that appear in exactly one of *list-1* and *list-2*. **nset-exclusive-or** is the *destructive* version of **set-exclusive-or**. 



For all possible ordered pairs consisting of one element from *list-1* and one element from *list-2*, the :test or :test-not function is used to determine whether they *satisfy the test*. 



If :key is supplied, it is used to extract the part to be tested from the *list-1* or *list-2* element. The first argument to the :test or :test-not function is the part of an element of *list-1* extracted by the :key function (if supplied); the second argument is the part of an element of *list-2* extracted by the :key function (if supplied). If :key is not supplied or **nil**, the *list-1* or *list-2* element is used. 







 



 



The result contains precisely those elements of *list-1* and *list-2* that appear in no matching pair. The result *list* of **set-exclusive-or** might share storage with one of *list-1* or *list-2*. 



**Examples:**
```lisp
 



(setq lst1 (list 1 "a" "b") 



lst2 (list 1 "A" "b")) *→* (1 "A" "b") 



(set-exclusive-or lst1 lst2) *→* ("b" "A" "b" "a") 



(set-exclusive-or lst1 lst2 :test #’equal) *→* ("A" "a") 



(set-exclusive-or lst1 lst2 :test ’equalp) *→* NIL 



(nset-exclusive-or lst1 lst2) *→* ("a" "b" "A" "b") 



(setq lst1 (list (("a" . "b") ("c" . "d") ("e" . "f")))) 



*→* (("a" . "b") ("c" . "d") ("e" . "f")) 



(setq lst2 (list (("c" . "a") ("e" . "b") ("d" . "a")))) 



*→* (("c" . "a") ("e" . "b") ("d" . "a")) 



(nset-exclusive-or lst1 lst2 :test #’string= :key #’cdr) 



*→* (("c" . "d") ("e" . "f") ("c" . "a") ("d" . "a")) 



lst1 *→* (("a" . "b") ("c" . "d") ("e" . "f")) 



lst2 *→* (("c" . "a") ("d" . "a")) 




```
**Side Effects:** 



**nset-exclusive-or** is permitted to modify any part, *car* or *cdr* , of the *list structure* of *list-1* or *list-2*. 



**Exceptional Situations:** 



Should be prepared to signal an error of *type* **type-error** if *list-1* and *list-2* are not *proper lists*. 



**See Also:** 



Section 3.2.1 (Compiler Terminology), Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not parameter is deprecated. 



Since the **nset-exclusive-or** side effect is not required, it should not be used in for-effect-only positions in portable code. 



