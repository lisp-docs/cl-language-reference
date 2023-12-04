**search** *Function* 



**Syntax:** 



**search** *sequence-1 sequence-2* &key *from-end test test-not* 



*key start1 start2* 



*end1 end2* 



*→ position* 



**Arguments and Values:** 



*Sequence-1*—a *sequence*. 



*Sequence-2*—a *sequence*. 



*from-end*—a *generalized boolean*. The default is *false*. 



*test*—a *designator* for a *function* of two *arguments* that returns a *generalized boolean*. *test-not*—a *designator* for a *function* of two *arguments* that returns a *generalized boolean*. *key*—a *designator* for a *function* of one argument, or **nil**. 



*start1*, *end1*—*bounding index designators* of *sequence-1*. The defaults for *start1* and *end1* are 0 and **nil**, respectively. 



*start2*, *end2*—*bounding index designators* of *sequence-2*. The defaults for *start2* and *end2* are 0 and **nil**, respectively. 



*position*—a *bounding index* of *sequence-2*, or **nil**. 



**Description:** 



Searches *sequence-2* for a subsequence that matches *sequence-1*. 



The implementation may choose to search *sequence-2* in any order; there is no guarantee on the number of times the test is made. For example, when *start-end* is *true*, the *sequence* might actually be searched from left to right instead of from right to left (but in either case would return the rightmost matching subsequence). If the search succeeds, **search** returns the offset into *sequence-2* of the first element of the leftmost or rightmost matching subsequence, depending on *from-end*; otherwise **search** returns **nil**. 



If *from-end* is *true*, the index of the leftmost element of the rightmost matching subsequence is returned. 



**Examples:**
```lisp
 



(search "dog" "it’s a dog’s life") *→* 7 



(search ’(0 1) ’(2 4 6 1 3 5) :key #’oddp) *→* 2 







 



 




```
**See Also:** 



Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not *argument* is deprecated. 



