**remove-duplicates, delete-duplicates** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"remove-duplicates"}><b>remove-duplicates</b></ClLinks> *sequence* &amp;key *from-end test test-not* 



*start end key* 



→ result-sequence 



<ClLinks styled={true} term={"delete-duplicates"}><b>delete-duplicates</b></ClLinks> *sequence* &amp;key *from-end test test-not* 



*start end key* 



→ result-sequence 



**Arguments and Values:** 



*sequence*—a *proper sequence*. 



*from-end*—a *generalized boolean*. The default is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



*test*—a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> that returns a *generalized boolean*. *test-not<ClLinks styled={true} term={"t"}><i>—a </i></ClLinks>designator* for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> that returns a *generalized boolean*. 



*start*, *end*—*bounding index designators* of *sequence*. The defaults for *start* and *end* are 0 and <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, respectively. 



<ClLinks styled={true} term={"key"}><i>key</i></ClLinks>—a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of one argument, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 







 



 



**remove-duplicates, delete-duplicates** 



*result-sequence*—a *sequence*. 



**Description:** 



<ClLinks styled={true} term={"remove-duplicates"}><b>remove-duplicates</b></ClLinks> returns a modified copy of *sequence* from which any element that matches another element occurring in *sequence* has been removed. 



If *sequence* is a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> , the result is a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> that has the same *actual array element type* as *sequence*. If *sequence* is a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, the result is a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 



<ClLinks styled={true} term={"delete-duplicates"}><b>delete-duplicates</b></ClLinks> is like <ClLinks styled={true} term={"remove-duplicates"}><b>remove-duplicates</b></ClLinks>, but <ClLinks styled={true} term={"delete-duplicates"}><b>delete-duplicates</b></ClLinks> may modify *sequence*. 



The elements of *sequence* are compared <ClLinks styled={true} term={"pairwise"}><i>pairwise</i></ClLinks>, and if any two match, then the one occurring earlier in *sequence* is discarded, unless *from-end* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, in which case the one later in *sequence* is discarded. 



<ClLinks styled={true} term={"remove-duplicates"}><b>remove-duplicates</b></ClLinks> and <ClLinks styled={true} term={"delete-duplicates"}><b>delete-duplicates</b></ClLinks> return a *sequence* of the same <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> as *sequence* with enough elements removed so that no two of the remaining elements match. The order of the elements remaining in the result is the same as the order in which they appear in *sequence*. 



<ClLinks styled={true} term={"remove-duplicates"}><b>remove-duplicates</b></ClLinks> returns a *sequence* that may share with *sequence* or may be <ClLinks styled={true} term={"identical"}><i>identical</i></ClLinks> to *sequence* if no elements need to be removed. 



<ClLinks styled={true} term={"delete-duplicates"}><b>delete-duplicates</b></ClLinks>, when *sequence* is a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, is permitted to <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> any part, <ClLinks styled={true} term={"car"}><b>car</b></ClLinks> or <ClLinks styled={true} term={"cdr"}><b>cdr</b></ClLinks>, of the top-level list structure in that *sequence*. When *sequence* is a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> , <ClLinks styled={true} term={"delete-duplicates"}><b>delete-duplicates</b></ClLinks> is permitted to change the dimensions of the <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> and to slide its elements into new positions without permuting them to produce the resulting <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> . 



**Examples:**
```lisp
(remove-duplicates "aBcDAbCd" :test #’char-equal :from-end t) → "aBcD" 
(remove-duplicates ’(a b c b d d e)) → (A C B D E) 
(remove-duplicates ’(a b c b d d e) :from-end t) → (A B C D E) 
(remove-duplicates ’((foo #\a) (bar #\%) (baz #\A)) 
		    :test #’char-equal :key #’cadr) → ((BAR #\%) (BAZ #\A)) 
(remove-duplicates ’((foo #\a) (bar #\%) (baz #\A)) 
		    :test #’char-equal :key #’cadr :from-end t) → ((FOO #\a) (BAR #\%)) 
(setq tester (list 0 1 2 3 4 5 6)) 
(delete-duplicates tester :key #’oddp :start 1 :end 6) → (0 4 5 6) 
```
**Side Effects:** 



<ClLinks styled={true} term={"delete-duplicates"}><b>delete-duplicates</b></ClLinks> might destructively modify *sequence*. 



**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *sequence* is not a *proper sequence*. 



**See Also:** 



Section 3.2.1 (Compiler Terminology), Section 3.6 (Traversal Rules and Side Effects) 



 



 



**remove-duplicates, delete-duplicates** 



**Notes:** 



If *sequence* is a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> , the result might or might not be simple, and might or might not be <ClLinks styled={true} term={"identical"}><i>identical</i></ClLinks> to *sequence*. 



The :test-not <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> is deprecated. 



These functions are useful for converting *sequence* into a canonical form suitable for representing a set. 







 



 





