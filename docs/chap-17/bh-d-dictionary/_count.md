**count, count-if, count-if-not** *Function* 



**Syntax:** 



**count** *item sequence* &amp;key *from-end start end key test test-not → n* 



**count-if** *predicate sequence* &amp;key *from-end start end key → n* 



**count-if-not** *predicate sequence* &amp;key *from-end start end key → n* 



**Arguments and Values:** 



*item*—an *object*. 



*sequence*—a *proper sequence*. 



*predicate*—a *designator* for a *function* of one *argument* that returns a *generalized boolean*. *from-end*—a *generalized boolean*. The default is *false*. 



*test*—a *designator* for a *function* of two *arguments* that returns a *generalized boolean*. *test-not*—a *designator* for a *function* of two *arguments* that returns a *generalized boolean*. 



*start*, *end*—*bounding index designators* of *sequence*. The defaults for *start* and *end* are 0 and **nil**, respectively. 



*key*—a *designator* for a *function* of one argument, or **nil**. 



*n*—a non-negative *integer* less than or equal to the *length* of *sequence*. 



**Description:** 



**count**, **count-if**, and **count-if-not** count and return the number of *elements* in the *sequence bounded* by *start* and *end* that *satisfy the test*. 



The *from-end* has no direct effect on the result. However, if *from-end* is *true*, the *elements* of *sequence* will be supplied as *arguments* to the *test*, *test-not*, and *key* in reverse order, which may change the side-effects, if any, of those functions. 



**Examples:**
```lisp
 



(count #\a "how many A’s are there in here?") *→* 2 



(count-if-not #’oddp ’((1) (2) (3) (4)) :key #’car) *→* 2 



(count-if #’upper-case-p "The Crying of Lot 49" :start 4) *→* 2 




```
**Exceptional Situations:** 



Should be prepared to signal an error of *type* **type-error** if *sequence* is not a *proper sequence*. 



 



 



**See Also:** 



Section 17.2 (Rules about Test Functions), Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not *argument* is deprecated. 



The *function* **count-if-not** is deprecated. 



