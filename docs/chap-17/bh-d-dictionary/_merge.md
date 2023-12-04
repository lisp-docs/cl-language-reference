**merge** *Function* 



**Syntax:** 



**merge** *result-type sequence-1 sequence-2 predicate* &key *key → result-sequence* 



**Arguments and Values:** 



*result-type*—a **sequence** *type specifier* . 



*sequence-1*—a *sequence*. 



*sequence-2*—a *sequence*. 



*predicate*—a *designator* for a *function* of two arguments that returns a *generalized boolean*. *key*—a *designator* for a *function* of one argument, or **nil**. 



*result-sequence*—a *proper sequence* of *type result-type*. 







 



 



**merge** 



**Description:** 



Destructively merges *sequence-1* with *sequence-2* according to an order determined by the *predicate*. **merge** determines the relationship between two elements by giving keys extracted from the sequence elements to the *predicate*. 



The first argument to the *predicate* function is an element of *sequence-1* as returned by the *key* (if supplied); the second argument is an element of *sequence-2* as returned by the *key* (if supplied). *Predicate* should return *true* if and only if its first argument is strictly less than the second (in some appropriate sense). If the first argument is greater than or equal to the second (in the appropriate sense), then *predicate* should return *false*. **merge** considers two elements x and y to be equal if (funcall predicate x y) and (funcall predicate y x) both *yield false*. 



The argument to the *key* is the *sequence* element. Typically, the return value of the *key* becomes the argument to *predicate*. If *key* is not supplied or **nil**, the sequence element itself is used. The *key* may be executed more than once for each *sequence element*, and its side effects may occur in any order. 



If *key* and *predicate* return, then the merging operation will terminate. The result of merging two *sequences* x and y is a new *sequence* of type *result-type* z, such that the length of z is the sum of the lengths of x and y, and z contains all the elements of x and y. If x1 and x2 are two elements of x, and x1 precedes x2 in x, then x1 precedes x2 in z, and similarly for elements of y. In short, z is an interleaving of x and y. 



If x and y were correctly sorted according to the *predicate*, then z will also be correctly sorted. If x or y is not so sorted, then z will not be sorted, but will nevertheless be an interleaving of x and y. 



The merging operation is guaranteed stable; if two or more elements are considered equal by the *predicate*, then the elements from *sequence-1* will precede those from *sequence-2* in the result. 



*sequence-1* and/or *sequence-2* may be destroyed. 



If the *result-type* is a *subtype* of **list**, the result will be a *list*. 



If the *result-type* is a *subtype* of **vector**, then if the implementation can determine the element type specified for the *result-type*, the element type of the resulting array is the result of *upgrading* that element type; or, if the implementation can determine that the element type is unspecified (or \*), the element type of the resulting array is **t**; otherwise, an error is signaled. 



**Examples:**
```lisp
 



(setq test1 (list 1 3 4 6 7)) 



(setq test2 (list 2 5 8)) 



(merge ’list test1 test2 #’<) *→* (1 2 3 4 5 6 7 8) 



(setq test1 (copy-seq "BOY")) 



(setq test2 (copy-seq :nosy")) 



(merge ’string test1 test2 #’char-lessp) *→* "BnOosYy" 



(setq test1 (vector ((red . 1) (blue . 4)))) 







 



 



(setq test2 (vector ((yellow . 2) (green . 7)))) 



(merge ’vector test1 test2 #’< :key #’cdr) 



*→* #((RED . 1) (YELLOW . 2) (BLUE . 4) (GREEN . 7)) 



(merge ’(vector \* 4) ’(1 5) ’(2 4 6) #’<) should signal an error 




```
**Exceptional Situations:** 



An error must be signaled if the *result-type* is neither a *recognizable subtype* of **list**, nor a *recognizable subtype* of **vector**. 



An error of *type* **type-error** should be signaled if *result-type* specifies the number of elements and the sum of the lengths of *sequence-1* and *sequence-2* is different from that number. 



**See Also:** 



**sort**, **stable-sort**, Section 3.2.1 (Compiler Terminology), Section 3.6 (Traversal Rules and Side Effects) 



