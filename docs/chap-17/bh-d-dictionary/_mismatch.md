**mismatch** *Function* 



**Syntax:** 



**mismatch** *sequence-1 sequence-2* &amp;key *from-end test test-not key start1 start2 end1 end2 → position* 



**Arguments and Values:** 



*Sequence-1*—a *sequence*. 



*Sequence-2*—a *sequence*. 



*from-end*—a *generalized boolean*. The default is *false*. 



*test*—a *designator* for a *function* of two *arguments* that returns a *generalized boolean*. *test-not*—a *designator* for a *function* of two *arguments* that returns a *generalized boolean*. 



*start1*, *end1*—*bounding index designators* of *sequence-1*. The defaults for *start1* and *end1* are 0 and **nil**, respectively. 



*start2*, *end2*—*bounding index designators* of *sequence-2*. The defaults for *start2* and *end2* are 0 and **nil**, respectively. 



*key*—a *designator* for a *function* of one argument, or **nil**. 



*position*—a *bounding index* of *sequence-1*, or **nil**. 



**Description:** 



The specified subsequences of *sequence-1* and *sequence-2* are compared element-wise. The *key* argument is used for both the *sequence-1* and the *sequence-2*. 



If *sequence-1* and *sequence-2* are of equal length and match in every element, the result is *false*. Otherwise, the result is a non-negative *integer* , the index within *sequence-1* of the leftmost or rightmost position, depending on *from-end*, at which the two subsequences fail to match. If one subsequence is shorter than and a matching prefix of the other, the result is the index relative to *sequence-1* beyond the last position tested. 







 



 



If *from-end* is *true*, then one plus the index of the rightmost position in which the *sequences* differ is returned. In effect, the subsequences are aligned at their right-hand ends; then, the last elements are compared, the penultimate elements, and so on. The index returned is an index relative to *sequence-1*. 



**Examples:**
```lisp
 

(mismatch "abcd" "ABCDE" :test #’char-equal) *→* 4 

(mismatch ’(3 2 1 1 2 3) ’(1 2 3) :from-end t) *→* 3 

(mismatch ’(1 2 3) ’(2 3 4) :test-not #’eq :key #’oddp) *→* NIL 

(mismatch ’(1 2 3 4 5 6) ’(3 4 5 6 7) :start1 2 :end2 4) *→* NIL 


```
**See Also:** 



Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not *argument* is deprecated. 



