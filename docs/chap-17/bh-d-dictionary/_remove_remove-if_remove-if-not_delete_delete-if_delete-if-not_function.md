**remove, remove-if, remove-if-not, delete, delete-if, delete-if-not** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"remove"}><b>remove</b></ClLinks> *item sequence* &amp;key *from-end test test-not start end count key → result-sequence* <ClLinks  term={"remove-if"}><b>remove-if</b></ClLinks> *test sequence* &amp;key *from-end start end count key → result-sequence* 



<ClLinks  term={"remove-if-not"}><b>remove-if-not</b></ClLinks> *test sequence* &amp;key *from-end start end count key → result-sequence* 



<ClLinks  term={"delete"}><b>delete</b></ClLinks> *item sequence* &amp;key *from-end test test-not start end count key → result-sequence* <ClLinks  term={"delete-if"}><b>delete-if</b></ClLinks> *test sequence* &amp;key *from-end start end count key → result-sequence* 



<ClLinks  term={"delete-if-not"}><b>delete-if-not</b></ClLinks> *test sequence* &amp;key *from-end start end count key → result-sequence* 



**Arguments and Values:** 



*item*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*sequence*—a *proper sequence*. 



*test*—a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"function"}><i>function</i></ClLinks> of one <ClLinks  term={"argument"}><i>argument</i></ClLinks> that returns a *generalized boolean*. *from-end*—a *generalized boolean*. The default is <ClLinks  term={"false"}><i>false</i></ClLinks>. 



*test*—a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"function"}><i>function</i></ClLinks> of two <ClLinks  term={"argument"}><i>arguments</i></ClLinks> that returns a *generalized boolean*. 



 



 



**remove, remove-if, remove-if-not, delete, delete-if,** *. . .* 



*test-not*—a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"function"}><i>function</i></ClLinks> of two <ClLinks  term={"argument"}><i>arguments</i></ClLinks> that returns a *generalized boolean*. 



*start*, *end*—*bounding index designators* of *sequence*. The defaults for *start* and *end* are 0 and <ClLinks  term={"nil"}><b>nil</b></ClLinks>, respectively. 



*count*—an *integer* or <ClLinks  term={"nil"}><b>nil</b></ClLinks>. The default is <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



<ClLinks  term={"key"}><i>key</i></ClLinks>—a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"function"}><i>function</i></ClLinks> of one argument, or <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



*result-sequence*—a *sequence*. 



**Description:** 



<ClLinks  term={"remove"}><b>remove</b></ClLinks>, <ClLinks  term={"remove-if"}><b>remove-if</b></ClLinks>, and <ClLinks  term={"remove-if-not"}><b>remove-if-not</b></ClLinks> return a *sequence* from which the elements that *satisfy the test* have been removed. 



<ClLinks  term={"delete"}><b>delete</b></ClLinks>, <ClLinks  term={"delete-if"}><b>delete-if</b></ClLinks>, and <ClLinks  term={"delete-if-not"}><b>delete-if-not</b></ClLinks> are like <ClLinks  term={"remove"}><b>remove</b></ClLinks>, <ClLinks  term={"remove-if"}><b>remove-if</b></ClLinks>, and <ClLinks  term={"remove-if-not"}><b>remove-if-not</b></ClLinks> respectively, but they may modify *sequence*. 



If *sequence* is a <ClLinks  term={"vector"}><i>vector</i></ClLinks> , the result is a <ClLinks  term={"vector"}><i>vector</i></ClLinks> that has the same *actual array element type* as *sequence*. If *sequence* is a <ClLinks  term={"list"}><i>list</i></ClLinks>, the result is a <ClLinks  term={"list"}><i>list</i></ClLinks>. 



Supplying a *from-end* of <ClLinks  term={"true"}><i>true</i></ClLinks> matters only when the *count* is provided; in that case only the rightmost *count* elements *satisfying the test* are deleted. 



*Count*, if supplied, limits the number of elements removed or deleted; if more than *count* elements *satisfy the test*, then of these elements only the leftmost or rightmost, depending on *from-end*, are deleted or removed, as many as specified by *count*. If *count* is supplied and negative, the behavior is as if zero had been supplied instead. If *count* is <ClLinks  term={"nil"}><b>nil</b></ClLinks>, all matching items are affected. 



For all these functions, elements not removed or deleted occur in the same order in the result as they did in *sequence*. 



<ClLinks  term={"remove"}><b>remove</b></ClLinks>, <ClLinks  term={"remove-if"}><b>remove-if</b></ClLinks>, <ClLinks  term={"remove-if-not"}><b>remove-if-not</b></ClLinks> return a *sequence* of the same <ClLinks  term={"type"}><i>type</i></ClLinks> as *sequence* that has the same elements except that those in the subsequence <ClLinks  term={"bounded"}><i>bounded</i></ClLinks> by *start* and *end* and *satisfying the test* have been removed. This is a non-destructive operation. If any elements need to be removed, the result will be a copy. The result of <ClLinks  term={"remove"}><b>remove</b></ClLinks> may share with *sequence*; the result may be <ClLinks  term={"identical"}><i>identical</i></ClLinks> to the input *sequence* if no elements need to be removed. 



<ClLinks  term={"delete"}><b>delete</b></ClLinks>, <ClLinks  term={"delete-if"}><b>delete-if</b></ClLinks>, and <ClLinks  term={"delete-if-not"}><b>delete-if-not</b></ClLinks> return a *sequence* of the same <ClLinks  term={"type"}><i>type</i></ClLinks> as *sequence* that has the same elements except that those in the subsequence <ClLinks  term={"bounded"}><i>bounded</i></ClLinks> by *start* and *end* and *satisfying the test* have been deleted. *Sequence* may be destroyed and used to construct the result; however, the result might or might not be <ClLinks  term={"identical"}><i>identical</i></ClLinks> to *sequence*. 



<ClLinks  term={"delete"}><b>delete</b></ClLinks>, when *sequence* is a <ClLinks  term={"list"}><i>list</i></ClLinks>, is permitted to <ClLinks  term={"setf"}><b>setf</b></ClLinks> any part, <ClLinks  term={"car"}><b>car</b></ClLinks> or <ClLinks  term={"cdr"}><b>cdr</b></ClLinks>, of the top-level list structure in that *sequence*. When *sequence* is a <ClLinks  term={"vector"}><i>vector</i></ClLinks> , <ClLinks  term={"delete"}><b>delete</b></ClLinks> is permitted to change the dimensions of the <ClLinks  term={"vector"}><i>vector</i></ClLinks> and to slide its elements into new positions without permuting them to produce the resulting <ClLinks  term={"vector"}><i>vector</i></ClLinks> . 



<ClLinks  term={"delete-if"}><b>delete-if</b></ClLinks> is constrained to behave exactly as follows: 







 



 



**remove, remove-if, remove-if-not, delete, delete-if,** *. . .* 



(delete nil *sequence* 



:test #’(lambda (ignore *item*) (funcall *test item*)) 



...) 



**Examples:**
```lisp
(remove 4 ’(1 3 4 5 9)) → (1 3 5 9) 
(remove 4 ’(1 2 4 1 3 4 5)) → (1 2 1 3 5) 
(remove 4 ’(1 2 4 1 3 4 5) :count 1) → (1 2 1 3 4 5) 
(remove 4 ’(1 2 4 1 3 4 5) :count 1 :from-end t) → (1 2 4 1 3 5) 
(remove 3 ’(1 2 4 1 3 4 5) :test #’>) → (4 3 4 5) 
(setq lst ’(list of four elements)) → (LIST OF FOUR ELEMENTS) 
(setq lst2 (copy-seq lst)) → (LIST OF FOUR ELEMENTS) 
(setq lst3 (delete ’four lst)) → (LIST OF ELEMENTS) 
(equal lst lst2) → false 
(remove-if #’oddp ’(1 2 4 1 3 4 5)) → (2 4 4) 
(remove-if #’evenp ’(1 2 4 1 3 4 5) :count 1 :from-end t) 
→ (1 2 4 1 3 5) 
(remove-if-not #’evenp ’(1 2 3 4 5 6 7 8 9) :count 2 :from-end t) 
→ (1 2 3 4 5 6 8) 
(setq tester (list 1 2 4 1 3 4 5)) → (1 2 4 1 3 4 5) 
(delete 4 tester) → (1 2 1 3 5) 
(setq tester (list 1 2 4 1 3 4 5)) → (1 2 4 1 3 4 5) 
(delete 4 tester :count 1) → (1 2 1 3 4 5) 
(setq tester (list 1 2 4 1 3 4 5)) → (1 2 4 1 3 4 5) 
(delete 4 tester :count 1 :from-end t) → (1 2 4 1 3 5) 
(setq tester (list 1 2 4 1 3 4 5)) → (1 2 4 1 3 4 5) 
(delete 3 tester :test #’>) → (4 3 4 5) 
(setq tester (list 1 2 4 1 3 4 5)) → (1 2 4 1 3 4 5) 
(delete-if #’oddp tester) → (2 4 4) 
(setq tester (list 1 2 4 1 3 4 5)) → (1 2 4 1 3 4 5) 
(delete-if #’evenp tester :count 1 :from-end t) → (1 2 4 1 3 5) 
(setq tester (list 1 2 3 4 5 6)) → (1 2 3 4 5 6) 
(delete-if #’evenp tester) → (1 3 5) 
tester → implementation-dependent 
(setq foo (list ’a ’b ’c)) → (A B C) 
(setq bar (cdr foo)) → (B C) 
(setq foo (delete ’b foo)) → (A C) 
bar → ((C)) or ... 
(eq (cdr foo) (car bar)) → T or ... 


```
**Side Effects:** 



For <ClLinks  term={"delete"}><b>delete</b></ClLinks>, <ClLinks  term={"delete-if"}><b>delete-if</b></ClLinks>, and <ClLinks  term={"delete-if-not"}><b>delete-if-not</b></ClLinks>, *sequence* may be destroyed and used to construct the result. 



**Exceptional Situations:** 



Should be prepared to signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if *sequence* is not a *proper sequence*. 



**See Also:** 



Section 3.2.1 (Compiler Terminology), Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



If *sequence* is a <ClLinks  term={"vector"}><i>vector</i></ClLinks> , the result might or might not be simple, and might or might not be <ClLinks  term={"identical"}><i>identical</i></ClLinks> to *sequence*. 



The :test-not <ClLinks  term={"argument"}><i>argument</i></ClLinks> is deprecated. 



The functions <ClLinks  term={"delete-if-not"}><b>delete-if-not</b></ClLinks> and <ClLinks  term={"remove-if-not"}><b>remove-if-not</b></ClLinks> are deprecated. 



