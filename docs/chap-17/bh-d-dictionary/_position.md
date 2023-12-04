**position, position-if, position-if-not** *Function* 



**Syntax:** 



**position** *item sequence* &key *from-end test test-not start end key → position* 



**position-if** *predicate sequence* &key *from-end start end key → position* 



**position-if-not** *predicate sequence* &key *from-end start end key → position* 



**Arguments and Values:** 



*item*—an *object*. 



*sequence*—a *proper sequence*. 



*predicate*—a *designator* for a *function* of one argument that returns a *generalized boolean*. 



 



 



*from-end*—a *generalized boolean*. The default is *false*. 



*test*—a *designator* for a *function* of two *arguments* that returns a *generalized boolean*. *test-not*—a *designator* for a *function* of two *arguments* that returns a *generalized boolean*. 



*start*, *end*—*bounding index designators* of *sequence*. The defaults for *start* and *end* are 0 and **nil**, respectively. 



*key*—a *designator* for a *function* of one argument, or **nil**. 



*position*—a *bounding index* of *sequence*, or **nil**. 



**Description:** 



**position**, **position-if**, and **position-if-not** each search *sequence* for an *element* that *satisfies the test*. 



The *position* returned is the index within *sequence* of the leftmost (if *from-end* is *true*) or of the rightmost (if *from-end* is *false*) *element* that *satisfies the test*; otherwise **nil** is returned. The index returned is relative to the left-hand end of the entire *sequence*, regardless of the value of *start*, *end*, or *from-end*. 



**Examples:**
```lisp
 



(position #\a "baobab" :from-end t) *→* 4 



(position-if #’oddp ’((1) (2) (3) (4)) :start 1 :key #’car) *→* 2 



(position 595 ’()) *→* NIL 



(position-if-not #’integerp ’(1 2 3 4 5.0)) *→* 4 




```
**Exceptional Situations:** 



Should be prepared to signal an error of *type* **type-error** if *sequence* is not a *proper sequence*. 



**See Also:** 



**find**, Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not *argument* is deprecated. 



The *function* **position-if-not** is deprecated. 







 



 



**search** 



