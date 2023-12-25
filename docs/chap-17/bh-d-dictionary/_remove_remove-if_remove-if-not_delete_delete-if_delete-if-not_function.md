**remove, remove-if, remove-if-not, delete, delete-if, delete-if-not** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"remove"}><b>remove</b></DictionaryLink> *item sequence* &amp;key *from-end test test-not start end count key → result-sequence* <DictionaryLink styled={true} term={"remove-if"}><b>remove-if</b></DictionaryLink> *test sequence* &amp;key *from-end start end count key → result-sequence* 



<DictionaryLink styled={true} term={"remove-if-not"}><b>remove-if-not</b></DictionaryLink> *test sequence* &amp;key *from-end start end count key → result-sequence* 



<DictionaryLink styled={true} term={"delete"}><b>delete</b></DictionaryLink> *item sequence* &amp;key *from-end test test-not start end count key → result-sequence* <DictionaryLink styled={true} term={"delete-if"}><b>delete-if</b></DictionaryLink> *test sequence* &amp;key *from-end start end count key → result-sequence* 



<DictionaryLink styled={true} term={"delete-if-not"}><b>delete-if-not</b></DictionaryLink> *test sequence* &amp;key *from-end start end count key → result-sequence* 



**Arguments and Values:** 



*item*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*sequence*—a *proper sequence*. 



*test*—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of one <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> that returns a *generalized boolean*. *from-end*—a *generalized boolean*. The default is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



*test*—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> that returns a *generalized boolean*. 



 



 



**remove, remove-if, remove-if-not, delete, delete-if,** *. . .* 



*test-not*—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> that returns a *generalized boolean*. 



*start*, *end*—*bounding index designators* of *sequence*. The defaults for *start* and *end* are 0 and <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, respectively. 



*count*—an *integer* or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. The default is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



<GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of one argument, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*result-sequence*—a *sequence*. 



**Description:** 



<DictionaryLink styled={true} term={"remove"}><b>remove</b></DictionaryLink>, <DictionaryLink styled={true} term={"remove-if"}><b>remove-if</b></DictionaryLink>, and <DictionaryLink styled={true} term={"remove-if-not"}><b>remove-if-not</b></DictionaryLink> return a *sequence* from which the elements that *satisfy the test* have been removed. 



<DictionaryLink styled={true} term={"delete"}><b>delete</b></DictionaryLink>, <DictionaryLink styled={true} term={"delete-if"}><b>delete-if</b></DictionaryLink>, and <DictionaryLink styled={true} term={"delete-if-not"}><b>delete-if-not</b></DictionaryLink> are like <DictionaryLink styled={true} term={"remove"}><b>remove</b></DictionaryLink>, <DictionaryLink styled={true} term={"remove-if"}><b>remove-if</b></DictionaryLink>, and <DictionaryLink styled={true} term={"remove-if-not"}><b>remove-if-not</b></DictionaryLink> respectively, but they may modify *sequence*. 



If *sequence* is a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> , the result is a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> that has the same *actual array element type* as *sequence*. If *sequence* is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, the result is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



Supplying a *from-end* of <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> matters only when the *count* is provided; in that case only the rightmost *count* elements *satisfying the test* are deleted. 



*Count*, if supplied, limits the number of elements removed or deleted; if more than *count* elements *satisfy the test*, then of these elements only the leftmost or rightmost, depending on *from-end*, are deleted or removed, as many as specified by *count*. If *count* is supplied and negative, the behavior is as if zero had been supplied instead. If *count* is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, all matching items are affected. 



For all these functions, elements not removed or deleted occur in the same order in the result as they did in *sequence*. 



<DictionaryLink styled={true} term={"remove"}><b>remove</b></DictionaryLink>, <DictionaryLink styled={true} term={"remove-if"}><b>remove-if</b></DictionaryLink>, <DictionaryLink styled={true} term={"remove-if-not"}><b>remove-if-not</b></DictionaryLink> return a *sequence* of the same <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> as *sequence* that has the same elements except that those in the subsequence <GlossaryTerm styled={true} term={"bounded"}><i>bounded</i></GlossaryTerm> by *start* and *end* and *satisfying the test* have been removed. This is a non-destructive operation. If any elements need to be removed, the result will be a copy. The result of <DictionaryLink styled={true} term={"remove"}><b>remove</b></DictionaryLink> may share with *sequence*; the result may be <GlossaryTerm styled={true} term={"identical"}><i>identical</i></GlossaryTerm> to the input *sequence* if no elements need to be removed. 



<DictionaryLink styled={true} term={"delete"}><b>delete</b></DictionaryLink>, <DictionaryLink styled={true} term={"delete-if"}><b>delete-if</b></DictionaryLink>, and <DictionaryLink styled={true} term={"delete-if-not"}><b>delete-if-not</b></DictionaryLink> return a *sequence* of the same <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> as *sequence* that has the same elements except that those in the subsequence <GlossaryTerm styled={true} term={"bounded"}><i>bounded</i></GlossaryTerm> by *start* and *end* and *satisfying the test* have been deleted. *Sequence* may be destroyed and used to construct the result; however, the result might or might not be <GlossaryTerm styled={true} term={"identical"}><i>identical</i></GlossaryTerm> to *sequence*. 



<DictionaryLink styled={true} term={"delete"}><b>delete</b></DictionaryLink>, when *sequence* is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, is permitted to <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> any part, <DictionaryLink styled={true} term={"car"}><b>car</b></DictionaryLink> or <DictionaryLink styled={true} term={"cdr"}><b>cdr</b></DictionaryLink>, of the top-level list structure in that *sequence*. When *sequence* is a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> , <DictionaryLink styled={true} term={"delete"}><b>delete</b></DictionaryLink> is permitted to change the dimensions of the <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> and to slide its elements into new positions without permuting them to produce the resulting <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> . 



<DictionaryLink styled={true} term={"delete-if"}><b>delete-if</b></DictionaryLink> is constrained to behave exactly as follows: 







 



 



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
(remove 3 ’(1 2 4 1 3 4 5) :test #’>) *→* (4 3 4 5) 
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
(delete 3 tester :test #’>) *→* (4 3 4 5) 
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



For <DictionaryLink styled={true} term={"delete"}><b>delete</b></DictionaryLink>, <DictionaryLink styled={true} term={"delete-if"}><b>delete-if</b></DictionaryLink>, and <DictionaryLink styled={true} term={"delete-if-not"}><b>delete-if-not</b></DictionaryLink>, *sequence* may be destroyed and used to construct the result. 



**Exceptional Situations:** 



Should be prepared to signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *sequence* is not a *proper sequence*. 



**See Also:** 



Section 3.2.1 (Compiler Terminology), Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



If *sequence* is a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> , the result might or might not be simple, and might or might not be <GlossaryTerm styled={true} term={"identical"}><i>identical</i></GlossaryTerm> to *sequence*. 



The :test-not <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> is deprecated. 



The functions <DictionaryLink styled={true} term={"delete-if-not"}><b>delete-if-not</b></DictionaryLink> and <DictionaryLink styled={true} term={"remove-if-not"}><b>remove-if-not</b></DictionaryLink> are deprecated. 



