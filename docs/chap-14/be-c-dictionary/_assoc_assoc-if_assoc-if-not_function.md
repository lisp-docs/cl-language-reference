**assoc, assoc-if, assoc-if-not** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"assoc"}><b>assoc</b></ClLinks> *item alist* &amp;key *key test test-not → entry* 



<ClLinks styled={true} term={"assoc-if"}><b>assoc-if</b></ClLinks> *predicate alist* &amp;key *key → entry* 







 



 



<DictionaryLink styled={true} term={"assoc, assoc-if, assoc-if-not"}><b>assoc, assoc-if, assoc-if-not</b></DictionaryLink> 



<ClLinks styled={true} term={"assoc-if-not"}><b>assoc-if-not</b></ClLinks> *predicate alist* &amp;key *key → entry* 



**Arguments and Values:** 



*item*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



<ClLinks styled={true} term={"alist"}><i>alist</i></ClLinks>—an *association list*. 



<ClLinks styled={true} term={"predicate"}><i>predicate</i></ClLinks>—a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of one <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> that returns a *generalized boolean*. *test<ClLinks styled={true} term={"t"}><i>—a </i></ClLinks>designator* for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> that returns a *generalized boolean*. *test-not<ClLinks styled={true} term={"t"}><i>—a </i></ClLinks>designator* for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> that returns a *generalized boolean*. *key*—a *designator* for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of one argument, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*entry*—a <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> that is an <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of <ClLinks styled={true} term={"alist"}><i>alist</i></ClLinks>, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"assoc"}><b>assoc</b></ClLinks>, <ClLinks styled={true} term={"assoc-if"}><b>assoc-if</b></ClLinks>, and <ClLinks styled={true} term={"assoc-if-not"}><b>assoc-if-not</b></ClLinks> return the first <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> in <ClLinks styled={true} term={"alist"}><i>alist</i></ClLinks> whose *car satisfies the test*, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> if no such <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> is found. 



For <ClLinks styled={true} term={"assoc"}><b>assoc</b></ClLinks>, <ClLinks styled={true} term={"assoc-if"}><b>assoc-if</b></ClLinks>, and <ClLinks styled={true} term={"assoc-if-not"}><b>assoc-if-not</b></ClLinks>, if <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> appears in <ClLinks styled={true} term={"alist"}><i>alist</i></ClLinks> in place of a pair, it is ignored. 

**Examples:**
```lisp
(setq values ’((x . 100) (y . 200) (z . 50))) → ((X . 100) (Y . 200) (Z . 50)) (assoc ’y values) → (Y . 200) 
(rplacd (assoc ’y values) 201) → (Y . 201) 
(assoc ’y values) → (Y . 201) 
(setq alist ’((1 . "one")(2 . "two")(3 . "three"))) 
→ ((1 . "one") (2 . "two") (3 . "three")) 
(assoc 2 alist) → (2 . "two") 
(assoc-if #’evenp alist) → (2 . "two") 
(assoc-if-not #’(lambda(x) (< x 3)) alist) → (3 . "three") 
(setq alist ’(("one" . 1)("two" . 2))) → (("one" . 1) ("two" . 2)) 
(assoc "one" alist) → NIL 
(assoc "one" alist :test #’equalp) → ("one" . 1) 
(assoc "two" alist :key #’(lambda(x) (char x 2))) → NIL 
(assoc #\o alist :key #’(lambda(x) (char x 2))) → ("two" . 2) 
(assoc ’r ’((a . b) (c . d) (r . x) (s . y) (r . z))) → (R . X) 
(assoc ’goo ’((foo . bar) (zoo . goo))) → NIL 
(assoc ’2 ’((1 a b c) (2 b c d) (-7 x y z))) → (2 B C D) 
(setq alist ’(("one" . 1) ("2" . 2) ("three" . 3))) 
→ (("one" . 1) ("2" . 2) ("three" . 3)) 
(assoc-if-not #’alpha-char-p alist 
		:key #’(lambda (x) (char x 0))) → ("2" . 2) 


```
**Exceptional Situations:** 



Should be prepared to signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"alist"}><i>alist</i></ClLinks> is not an *association list*. 



**See Also:** 



<ClLinks styled={true} term={"rassoc"}><b>rassoc</b></ClLinks>, <ClLinks styled={true} term={"find"}><b>find</b></ClLinks>, <ClLinks styled={true} term={"member"}><b>member</b></ClLinks>, <ClLinks styled={true} term={"position"}><b>position</b></ClLinks>, Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not parameter is deprecated. 



The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"assoc-if-not"}><b>assoc-if-not</b></ClLinks> is deprecated. 



It is possible to <ClLinks styled={true} term={"rplacd"}><b>rplacd</b></ClLinks> the result of <ClLinks styled={true} term={"assoc"}><b>assoc</b></ClLinks>, provided that it is not <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, in order to “update” <ClLinks styled={true} term={"alist"}><i>alist</i></ClLinks>. The two expressions 



(assoc item list :test fn) 



and 



(find item list :test fn :key #’car) 



are equivalent in meaning with one exception: if <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> appears in <ClLinks styled={true} term={"alist"}><i>alist</i></ClLinks> in place of a pair, and *item* is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, <ClLinks styled={true} term={"find"}><b>find</b></ClLinks> will compute the <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> of the <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> in <ClLinks styled={true} term={"alist"}><i>alist</i></ClLinks>, find that it is equal to *item*, and return <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, whereas <ClLinks styled={true} term={"assoc"}><b>assoc</b></ClLinks> will ignore the <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> in <ClLinks styled={true} term={"alist"}><i>alist</i></ClLinks> and continue to search for an actual <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> whose <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



