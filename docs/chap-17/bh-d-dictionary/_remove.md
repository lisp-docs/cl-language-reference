**remove, remove-if, remove-if-not, delete, delete-if, delete-if-not** *Function* 



**Syntax:** 



**remove** *item sequence* &amp;key *from-end test test-not start end count key → result-sequence* **remove-if** *test sequence* &amp;key *from-end start end count key → result-sequence* 



**remove-if-not** *test sequence* &amp;key *from-end start end count key → result-sequence* 



**delete** *item sequence* &amp;key *from-end test test-not start end count key → result-sequence* **delete-if** *test sequence* &amp;key *from-end start end count key → result-sequence* 



**delete-if-not** *test sequence* &amp;key *from-end start end count key → result-sequence* 



**Arguments and Values:** 



*item*—an *object*. 



*sequence*—a *proper sequence*. 



*test*—a *designator* for a *function* of one *argument* that returns a *generalized boolean*. *from-end*—a *generalized boolean*. The default is *false*. 



*test*—a *designator* for a *function* of two *arguments* that returns a *generalized boolean*. 



 



 



**remove, remove-if, remove-if-not, delete, delete-if,** *. . .* 



*test-not*—a *designator* for a *function* of two *arguments* that returns a *generalized boolean*. 



*start*, *end*—*bounding index designators* of *sequence*. The defaults for *start* and *end* are 0 and **nil**, respectively. 



*count*—an *integer* or **nil**. The default is **nil**. 



*key*—a *designator* for a *function* of one argument, or **nil**. 



*result-sequence*—a *sequence*. 



**Description:** 



**remove**, **remove-if**, and **remove-if-not** return a *sequence* from which the elements that *satisfy the test* have been removed. 



**delete**, **delete-if**, and **delete-if-not** are like **remove**, **remove-if**, and **remove-if-not** respectively, but they may modify *sequence*. 



If *sequence* is a *vector* , the result is a *vector* that has the same *actual array element type* as *sequence*. If *sequence* is a *list*, the result is a *list*. 



Supplying a *from-end* of *true* matters only when the *count* is provided; in that case only the rightmost *count* elements *satisfying the test* are deleted. 



*Count*, if supplied, limits the number of elements removed or deleted; if more than *count* elements *satisfy the test*, then of these elements only the leftmost or rightmost, depending on *from-end*, are deleted or removed, as many as specified by *count*. If *count* is supplied and negative, the behavior is as if zero had been supplied instead. If *count* is **nil**, all matching items are affected. 



For all these functions, elements not removed or deleted occur in the same order in the result as they did in *sequence*. 



**remove**, **remove-if**, **remove-if-not** return a *sequence* of the same *type* as *sequence* that has the same elements except that those in the subsequence *bounded* by *start* and *end* and *satisfying the test* have been removed. This is a non-destructive operation. If any elements need to be removed, the result will be a copy. The result of **remove** may share with *sequence*; the result may be *identical* to the input *sequence* if no elements need to be removed. 



**delete**, **delete-if**, and **delete-if-not** return a *sequence* of the same *type* as *sequence* that has the same elements except that those in the subsequence *bounded* by *start* and *end* and *satisfying the test* have been deleted. *Sequence* may be destroyed and used to construct the result; however, the result might or might not be *identical* to *sequence*. 



**delete**, when *sequence* is a *list*, is permitted to **setf** any part, **car** or **cdr**, of the top-level list structure in that *sequence*. When *sequence* is a *vector* , **delete** is permitted to change the dimensions of the *vector* and to slide its elements into new positions without permuting them to produce the resulting *vector* . 



**delete-if** is constrained to behave exactly as follows: 







 



 



**remove, remove-if, remove-if-not, delete, delete-if,** *. . .* 



(delete nil *sequence* 



:test #’(lambda (ignore *item*) (funcall *test item*)) 



...) 



**Examples:**
```lisp
 



(remove 4 ’(1 3 4 5 9)) *→* (1 3 5 9) 



(remove 4 ’(1 2 4 1 3 4 5)) *→* (1 2 1 3 5) 



(remove 4 ’(1 2 4 1 3 4 5) :count 1) *→* (1 2 1 3 4 5) 



(remove 4 ’(1 2 4 1 3 4 5) :count 1 :from-end t) *→* (1 2 4 1 3 5) 



(remove 3 ’(1 2 4 1 3 4 5) :test #’&gt;) *→* (4 3 4 5) 



(setq lst ’(list of four elements)) *→* (LIST OF FOUR ELEMENTS) 



(setq lst2 (copy-seq lst)) *→* (LIST OF FOUR ELEMENTS) 



(setq lst3 (delete ’four lst)) *→* (LIST OF ELEMENTS) 



(equal lst lst2) *→ false* 



(remove-if #’oddp ’(1 2 4 1 3 4 5)) *→* (2 4 4) 



(remove-if #’evenp ’(1 2 4 1 3 4 5) :count 1 :from-end t) 



*→* (1 2 4 1 3 5) 



(remove-if-not #’evenp ’(1 2 3 4 5 6 7 8 9) :count 2 :from-end t) 



*→* (1 2 3 4 5 6 8) 



(setq tester (list 1 2 4 1 3 4 5)) *→* (1 2 4 1 3 4 5) 



(delete 4 tester) *→* (1 2 1 3 5) 



(setq tester (list 1 2 4 1 3 4 5)) *→* (1 2 4 1 3 4 5) 



(delete 4 tester :count 1) *→* (1 2 1 3 4 5) 



(setq tester (list 1 2 4 1 3 4 5)) *→* (1 2 4 1 3 4 5) 



(delete 4 tester :count 1 :from-end t) *→* (1 2 4 1 3 5) 



(setq tester (list 1 2 4 1 3 4 5)) *→* (1 2 4 1 3 4 5) 



(delete 3 tester :test #’&gt;) *→* (4 3 4 5) 



(setq tester (list 1 2 4 1 3 4 5)) *→* (1 2 4 1 3 4 5) 



(delete-if #’oddp tester) *→* (2 4 4) 



(setq tester (list 1 2 4 1 3 4 5)) *→* (1 2 4 1 3 4 5) 



(delete-if #’evenp tester :count 1 :from-end t) *→* (1 2 4 1 3 5) 



(setq tester (list 1 2 3 4 5 6)) *→* (1 2 3 4 5 6) 



(delete-if #’evenp tester) *→* (1 3 5) 



tester *→ implementation-dependent* 



(setq foo (list ’a ’b ’c)) *→* (A B C) 



(setq bar (cdr foo)) *→* (B C) 



(setq foo (delete ’b foo)) *→* (A C) 



bar *→* ((C)) or ... 



(eq (cdr foo) (car bar)) *→* T or ... 







 



 




```
**Side Effects:** 



For **delete**, **delete-if**, and **delete-if-not**, *sequence* may be destroyed and used to construct the result. 



**Exceptional Situations:** 



Should be prepared to signal an error of *type* **type-error** if *sequence* is not a *proper sequence*. 



**See Also:** 



Section 3.2.1 (Compiler Terminology), Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



If *sequence* is a *vector* , the result might or might not be simple, and might or might not be *identical* to *sequence*. 



The :test-not *argument* is deprecated. 



The functions **delete-if-not** and **remove-if-not** are deprecated. 



