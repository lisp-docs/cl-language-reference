**subsetp** *Function* 



**Syntax:** 



**subsetp** *list-1 list-2* &key *key test test-not → generalized-boolean* 







 



 



**Arguments and Values:** 



*list-1*—a *proper list*. 



*list-2*—a *proper list*. 



*test*—a *designator* for a *function* of two *arguments* that returns a *generalized boolean*. *test-not*—a *designator* for a *function* of two *arguments* that returns a *generalized boolean*. *key*—a *designator* for a *function* of one argument, or **nil**. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



**subsetp** returns *true* if every element of *list-1* matches some element of *list-2*, and *false* otherwise. 



Whether a list element is the same as another list element is determined by the functions specified by the keyword arguments. The first argument to the :test or :test-not function is typically part of an element of *list-1* extracted by the :key function; the second argument is typically part of an element of *list-2* extracted by the :key function. 



The argument to the :key function is an element of either *list-1* or *list-2*; the return value is part of the element of the supplied list element. If :key is not supplied or **nil**, the *list-1* or *list-2* element itself is supplied to the :test or :test-not function. 



**Examples:**
```lisp
 



(setq cosmos ’(1 "a" (1 2))) *→* (1 "a" (1 2)) 



(subsetp ’(1) cosmos) *→ true* 



(subsetp ’((1 2)) cosmos) *→ false* 



(subsetp ’((1 2)) cosmos :test ’equal) *→ true* 



(subsetp ’(1 "A") cosmos :test #’equalp) *→ true* 



(subsetp ’((1) (2)) ’((1) (2))) *→ false* 



(subsetp ’((1) (2)) ’((1) (2)) :key #’car) *→ true* 




```
**Exceptional Situations:** 



Should be prepared to signal an error of *type* **type-error** if *list-1* and *list-2* are not *proper lists*. 



**See Also:** 



Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not parameter is deprecated. 







 



 



**union, nunion** 



