**rassoc, rassoc-if, rassoc-if-not** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"rassoc"}><b>rassoc</b></ClLinks> *item alist* &amp;key *key test test-not → entry* 



<ClLinks styled={true} term={"rassoc-if"}><b>rassoc-if</b></ClLinks> *predicate alist* &amp;key *key → entry* 



<ClLinks styled={true} term={"rassoc-if-not"}><b>rassoc-if-not</b></ClLinks> *predicate alist* &amp;key *key → entry* 



**Arguments and Values:** 



*item*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



<ClLinks styled={true} term={"alist"}><i>alist</i></ClLinks>—an *association list*. 



<ClLinks styled={true} term={"predicate"}><i>predicate</i></ClLinks>—a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of one <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> that returns a *generalized boolean*. *test<ClLinks styled={true} term={"t"}><i>—a </i></ClLinks>designator* for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> that returns a *generalized boolean*. *test-not<ClLinks styled={true} term={"t"}><i>—a </i></ClLinks>designator* for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> that returns a *generalized boolean*. *key*—a *designator* for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of one argument, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*entry*—a <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> that is an <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of the <ClLinks styled={true} term={"alist"}><i>alist</i></ClLinks>, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 







 



 



**Description:** 



<ClLinks styled={true} term={"rassoc"}><b>rassoc</b></ClLinks>, <ClLinks styled={true} term={"rassoc-if"}><b>rassoc-if</b></ClLinks>, and <ClLinks styled={true} term={"rassoc-if-not"}><b>rassoc-if-not</b></ClLinks> return the first <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> whose *cdr satisfies the test*. If no such <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> is found, <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> is returned. 



If <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> appears in <ClLinks styled={true} term={"alist"}><i>alist</i></ClLinks> in place of a pair, it is ignored. 



**Examples:**
```lisp

(setq alist ’((1 . "one") (2 . "two") (3 . 3))) 
→ ((1 . "one") (2 . "two") (3 . 3)) 
(rassoc 3 alist) → (3 . 3) 
(rassoc "two" alist) → NIL 
(rassoc "two" alist :test ’equal) → (2 . "two") 
(rassoc 1 alist :key #’(lambda (x) (if (numberp x) (/ x 3)))) → (3 . 3) 
(rassoc ’a ’((a . b) (b . c) (c . a) (z . a))) → (C . A) 
(rassoc-if #’stringp alist) → (1 . "one") 
(rassoc-if-not #’vectorp alist) → (3 . 3) 

```
**See Also:** 



<ClLinks styled={true} term={"assoc"}><b>assoc</b></ClLinks>, Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not parameter is deprecated. 



The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"rassoc-if-not"}><b>rassoc-if-not</b></ClLinks> is deprecated. 



It is possible to <ClLinks styled={true} term={"rplaca"}><b>rplaca</b></ClLinks> the result of <ClLinks styled={true} term={"rassoc"}><b>rassoc</b></ClLinks>, provided that it is not <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, in order to “update” <ClLinks styled={true} term={"alist"}><i>alist</i></ClLinks>. The expressions 



(rassoc item list :test fn) 



and 



(find item list :test fn :key #’cdr) 



are equivalent in meaning, except when the item is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> and <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> appears in place of a pair in the <ClLinks styled={true} term={"alist"}><i>alist</i></ClLinks>. See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"assoc"}><b>assoc</b></ClLinks>. 



