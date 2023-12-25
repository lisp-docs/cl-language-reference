**assoc, assoc-if, assoc-if-not** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"assoc"}><b>assoc</b></DictionaryLink> *item alist* &amp;key *key test test-not → entry* 



<DictionaryLink styled={true} term={"assoc-if"}><b>assoc-if</b></DictionaryLink> *predicate alist* &amp;key *key → entry* 







 



 



**assoc, assoc-if, assoc-if-not** 



<DictionaryLink styled={true} term={"assoc-if-not"}><b>assoc-if-not</b></DictionaryLink> *predicate alist* &amp;key *key → entry* 



**Arguments and Values:** 



*item*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"alist"}><i>alist</i></GlossaryTerm>—an *association list*. 



<GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of one <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> that returns a *generalized boolean*. *test<GlossaryTerm styled={true} term={"t"}><i>—a </i></GlossaryTerm>designator* for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> that returns a *generalized boolean*. *test-not<GlossaryTerm styled={true} term={"t"}><i>—a </i></GlossaryTerm>designator* for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> that returns a *generalized boolean*. *key*—a *designator* for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of one argument, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*entry*—a <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> that is an <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"alist"}><i>alist</i></GlossaryTerm>, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



<DictionaryLink styled={true} term={"assoc"}><b>assoc</b></DictionaryLink>, <DictionaryLink styled={true} term={"assoc-if"}><b>assoc-if</b></DictionaryLink>, and <DictionaryLink styled={true} term={"assoc-if-not"}><b>assoc-if-not</b></DictionaryLink> return the first <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> in <GlossaryTerm styled={true} term={"alist"}><i>alist</i></GlossaryTerm> whose *car satisfies the test*, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if no such <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> is found. 



For <DictionaryLink styled={true} term={"assoc"}><b>assoc</b></DictionaryLink>, <DictionaryLink styled={true} term={"assoc-if"}><b>assoc-if</b></DictionaryLink>, and <DictionaryLink styled={true} term={"assoc-if-not"}><b>assoc-if-not</b></DictionaryLink>, if <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> appears in <GlossaryTerm styled={true} term={"alist"}><i>alist</i></GlossaryTerm> in place of a pair, it is ignored. **Examples:**
```lisp

(setq values ’((x . 100) (y . 200) (z . 50))) *→* ((X . 100) (Y . 200) (Z . 50)) (assoc ’y values) *→* (Y . 200) 
(rplacd (assoc ’y values) 201) *→* (Y . 201) 
(assoc ’y values) *→* (Y . 201) 
(setq alist ’((1 . "one")(2 . "two")(3 . "three"))) 
*→* ((1 . "one") (2 . "two") (3 . "three")) 
(assoc 2 alist) *→* (2 . "two") 
(assoc-if #’evenp alist) *→* (2 . "two") 
(assoc-if-not #’(lambda(x) (< x 3)) alist) *→* (3 . "three") 
(setq alist ’(("one" . 1)("two" . 2))) *→* (("one" . 1) ("two" . 2)) 
(assoc "one" alist) *→* NIL 
(assoc "one" alist :test #’equalp) *→* ("one" . 1) 
(assoc "two" alist :key #’(lambda(x) (char x 2))) *→* NIL 
(assoc #\o alist :key #’(lambda(x) (char x 2))) *→* ("two" . 2) 
(assoc ’r ’((a . b) (c . d) (r . x) (s . y) (r . z))) *→* (R . X) 
(assoc ’goo ’((foo . bar) (zoo . goo))) *→* NIL 
(assoc ’2 ’((1 a b c) (2 b c d) (-7 x y z))) *→* (2 B C D) 
(setq alist ’(("one" . 1) ("2" . 2) ("three" . 3))) 
*→* (("one" . 1) ("2" . 2) ("three" . 3)) 
(assoc-if-not #’alpha-char-p alist 
		:key #’(lambda (x) (char x 0))) *→* ("2" . 2) 




```
**Exceptional Situations:** 



Should be prepared to signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"alist"}><i>alist</i></GlossaryTerm> is not an *association list*. 



**See Also:** 



<DictionaryLink styled={true} term={"rassoc"}><b>rassoc</b></DictionaryLink>, <DictionaryLink styled={true} term={"find"}><b>find</b></DictionaryLink>, <DictionaryLink styled={true} term={"member"}><b>member</b></DictionaryLink>, <DictionaryLink styled={true} term={"position"}><b>position</b></DictionaryLink>, Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not parameter is deprecated. 



The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"assoc-if-not"}><b>assoc-if-not</b></DictionaryLink> is deprecated. 



It is possible to <DictionaryLink styled={true} term={"rplacd"}><b>rplacd</b></DictionaryLink> the result of <DictionaryLink styled={true} term={"assoc"}><b>assoc</b></DictionaryLink>, provided that it is not <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, in order to “update” <GlossaryTerm styled={true} term={"alist"}><i>alist</i></GlossaryTerm>. The two expressions 



(assoc item list :test fn) 



and 



(find item list :test fn :key #’car) 



are equivalent in meaning with one exception: if <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> appears in <GlossaryTerm styled={true} term={"alist"}><i>alist</i></GlossaryTerm> in place of a pair, and *item* is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, <DictionaryLink styled={true} term={"find"}><b>find</b></DictionaryLink> will compute the <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> of the <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> in <GlossaryTerm styled={true} term={"alist"}><i>alist</i></GlossaryTerm>, find that it is equal to *item*, and return <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, whereas <DictionaryLink styled={true} term={"assoc"}><b>assoc</b></DictionaryLink> will ignore the <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> in <GlossaryTerm styled={true} term={"alist"}><i>alist</i></GlossaryTerm> and continue to search for an actual <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> whose <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



