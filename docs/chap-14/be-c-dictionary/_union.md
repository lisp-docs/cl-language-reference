**union, nunion** *Function* 



**Syntax:** 



**union** *list-1 list-2* &amp;key *key test test-not → result-list* 



**nunion** *list-1 list-2* &amp;key *key test test-not → result-list* 



**Arguments and Values:** 



*list-1*—a *proper list*. 



*list-2*—a *proper list*. 



*test*—a *designator* for a *function* of two *arguments* that returns a *generalized boolean*. *test-not*—a *designator* for a *function* of two *arguments* that returns a *generalized boolean*. *key*—a *designator* for a *function* of one argument, or **nil**. 



*result-list*—a *list*. 



**Description:** 



**union** and **nunion** return a *list* that contains every element that occurs in either *list-1* or *list-2*. 



For all possible ordered pairs consisting of one element from *list-1* and one element from *list-2*, :test or :test-not is used to determine whether they *satisfy the test*. The first argument to the :test or :test-not function is the part of the element of *list-1* extracted by the :key function (if supplied); the second argument is the part of the element of *list-2* extracted by the :key function (if supplied). 



The argument to the :key function is an element of *list-1* or *list-2*; the return value is part of the supplied element. If :key is not supplied or **nil**, the element of *list-1* or *list-2* itself is supplied to the :test or :test-not function. 



For every matching pair, one of the two elements of the pair will be in the result. Any element from either *list-1* or *list-2* that matches no element of the other will appear in the result. 



If there is a duplication between *list-1* and *list-2*, only one of the duplicate instances will be in the result. If either *list-1* or *list-2* has duplicate entries within it, the redundant entries might or might not appear in the result. 



The order of elements in the result do not have to reflect the ordering of *list-1* or *list-2* in any way. The result *list* may be **eq** to either *list-1* or *list-2* if appropriate. 







 



 



**union, nunion** 



**Examples:**
```lisp
 



(union ’(a b c) ’(f a d)) 



*→* (A B C F D) 



<i><sup>or</sup>→</i> (B C F A D) 



<i><sup>or</sup>→</i> (D F A B C) 



(union ’((x 5) (y 6)) ’((z 2) (x 4)) :key #’car) 



*→* ((X 5) (Y 6) (Z 2)) 



<i><sup>or</sup>→</i> ((X 4) (Y 6) (Z 2)) 



(setq lst1 (list 1 2 ’(1 2) "a" "b") 



lst2 (list 2 3 ’(2 3) "B" "C")) 



*→* (2 3 (2 3) "B" "C") 



(nunion lst1 lst2) 



*→* (1 (1 2) "a" "b" 2 3 (2 3) "B" "C") 



<i><sup>or</sup>→</i> (1 2 (1 2) "a" "b" "C" "B" (2 3) 3) 




```
**Side Effects:** 



**nunion** is permitted to modify any part, *car* or *cdr* , of the *list structure* of *list-1* or *list-2*. 



**Exceptional Situations:** 



Should be prepared to signal an error of *type* **type-error** if *list-1* and *list-2* are not *proper lists*. 



**See Also:** 



**intersection**, Section 3.2.1 (Compiler Terminology), Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not parameter is deprecated. 



Since the **nunion** side effect is not required, it should not be used in for-effect-only positions in portable code. 





