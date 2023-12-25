**rassoc, rassoc-if, rassoc-if-not** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"rassoc"}><b>rassoc</b></DictionaryLink> *item alist* &amp;key *key test test-not → entry* 



<DictionaryLink styled={true} term={"rassoc-if"}><b>rassoc-if</b></DictionaryLink> *predicate alist* &amp;key *key → entry* 



<DictionaryLink styled={true} term={"rassoc-if-not"}><b>rassoc-if-not</b></DictionaryLink> *predicate alist* &amp;key *key → entry* 



**Arguments and Values:** 



*item*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"alist"}><i>alist</i></GlossaryTerm>—an *association list*. 



<GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of one <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> that returns a *generalized boolean*. *test<GlossaryTerm styled={true} term={"t"}><i>—a </i></GlossaryTerm>designator* for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> that returns a *generalized boolean*. *test-not<GlossaryTerm styled={true} term={"t"}><i>—a </i></GlossaryTerm>designator* for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> that returns a *generalized boolean*. *key*—a *designator* for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of one argument, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*entry*—a <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> that is an <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"alist"}><i>alist</i></GlossaryTerm>, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 







 



 



**Description:** 



<DictionaryLink styled={true} term={"rassoc"}><b>rassoc</b></DictionaryLink>, <DictionaryLink styled={true} term={"rassoc-if"}><b>rassoc-if</b></DictionaryLink>, and <DictionaryLink styled={true} term={"rassoc-if-not"}><b>rassoc-if-not</b></DictionaryLink> return the first <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> whose *cdr satisfies the test*. If no such <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> is found, <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> is returned. 



If <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> appears in <GlossaryTerm styled={true} term={"alist"}><i>alist</i></GlossaryTerm> in place of a pair, it is ignored. 



**Examples:**
```lisp

(setq alist ’((1 . "one") (2 . "two") (3 . 3))) 
*→* ((1 . "one") (2 . "two") (3 . 3)) 
(rassoc 3 alist) *→* (3 . 3) 
(rassoc "two" alist) *→* NIL 
(rassoc "two" alist :test ’equal) *→* (2 . "two") 
(rassoc 1 alist :key #’(lambda (x) (if (numberp x) (/ x 3)))) *→* (3 . 3) 
(rassoc ’a ’((a . b) (b . c) (c . a) (z . a))) *→* (C . A) 
(rassoc-if #’stringp alist) *→* (1 . "one") 
(rassoc-if-not #’vectorp alist) *→* (3 . 3) 

```
**See Also:** 



<DictionaryLink styled={true} term={"assoc"}><b>assoc</b></DictionaryLink>, Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not parameter is deprecated. 



The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"rassoc-if-not"}><b>rassoc-if-not</b></DictionaryLink> is deprecated. 



It is possible to <DictionaryLink styled={true} term={"rplaca"}><b>rplaca</b></DictionaryLink> the result of <DictionaryLink styled={true} term={"rassoc"}><b>rassoc</b></DictionaryLink>, provided that it is not <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, in order to “update” <GlossaryTerm styled={true} term={"alist"}><i>alist</i></GlossaryTerm>. The expressions 



(rassoc item list :test fn) 



and 



(find item list :test fn :key #’cdr) 



are equivalent in meaning, except when the item is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> and <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> appears in place of a pair in the <GlossaryTerm styled={true} term={"alist"}><i>alist</i></GlossaryTerm>. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"assoc"}><b>assoc</b></DictionaryLink>. 



