**rassoc, rassoc-if, rassoc-if-not** <GlossaryTerm term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink term={"rassoc"}><b>rassoc</b></DictionaryLink> *item alist* &amp;key *key test test-not → entry* 



<DictionaryLink term={"rassoc-if"}><b>rassoc-if</b></DictionaryLink> *predicate alist* &amp;key *key → entry* 



<DictionaryLink term={"rassoc-if-not"}><b>rassoc-if-not</b></DictionaryLink> *predicate alist* &amp;key *key → entry* 



**Arguments and Values:** 



*item*—an <GlossaryTerm term={"object"}><i>object</i></GlossaryTerm>. 



<GlossaryTerm term={"alist"}><i>alist</i></GlossaryTerm>—an <GlossaryTerm term={"association list"}><i>association list</i></GlossaryTerm>. 



<GlossaryTerm term={"predicate"}><i>predicate</i></GlossaryTerm>—a <GlossaryTerm term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm term={"function"}><i>function</i></GlossaryTerm> of one <GlossaryTerm term={"argument"}><i>argument</i></GlossaryTerm> that returns a <GlossaryTerm term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. *test<GlossaryTerm term={"t"}><i>—a </i></GlossaryTerm>designator* for a <GlossaryTerm term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm term={"argument"}><i>arguments</i></GlossaryTerm> that returns a <GlossaryTerm term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. *test-not<GlossaryTerm term={"t"}><i>—a </i></GlossaryTerm>designator* for a <GlossaryTerm term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm term={"argument"}><i>arguments</i></GlossaryTerm> that returns a <GlossaryTerm term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. <GlossaryTerm term={"key"}><i>key</i></GlossaryTerm>—a <GlossaryTerm term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm term={"function"}><i>function</i></GlossaryTerm> of one argument, or <DictionaryLink term={"nil"}><b>nil</b></DictionaryLink>. 



*entry*—a <GlossaryTerm term={"cons"}><i>cons</i></GlossaryTerm> that is an <GlossaryTerm term={"element"}><i>element</i></GlossaryTerm> of the <GlossaryTerm term={"alist"}><i>alist</i></GlossaryTerm>, or <DictionaryLink term={"nil"}><b>nil</b></DictionaryLink>. 







 



 



**Description:** 



<DictionaryLink term={"rassoc"}><b>rassoc</b></DictionaryLink>, <DictionaryLink term={"rassoc-if"}><b>rassoc-if</b></DictionaryLink>, and <DictionaryLink term={"rassoc-if-not"}><b>rassoc-if-not</b></DictionaryLink> return the first <GlossaryTerm term={"cons"}><i>cons</i></GlossaryTerm> whose *cdr satisfies the test*. If no such <GlossaryTerm term={"cons"}><i>cons</i></GlossaryTerm> is found, <DictionaryLink term={"nil"}><b>nil</b></DictionaryLink> is returned. 



If <DictionaryLink term={"nil"}><b>nil</b></DictionaryLink> appears in <GlossaryTerm term={"alist"}><i>alist</i></GlossaryTerm> in place of a pair, it is ignored. 



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



<DictionaryLink term={"assoc"}><b>assoc</b></DictionaryLink>, Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not parameter is deprecated. 



The <GlossaryTerm term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink term={"rassoc-if-not"}><b>rassoc-if-not</b></DictionaryLink> is deprecated. 



It is possible to <DictionaryLink term={"rplaca"}><b>rplaca</b></DictionaryLink> the result of <DictionaryLink term={"rassoc"}><b>rassoc</b></DictionaryLink>, provided that it is not <DictionaryLink term={"nil"}><b>nil</b></DictionaryLink>, in order to “update” <GlossaryTerm term={"alist"}><i>alist</i></GlossaryTerm>. The expressions 



(rassoc item list :test fn) 



and 



(find item list :test fn :key #’cdr) 



are equivalent in meaning, except when the item is <DictionaryLink term={"nil"}><b>nil</b></DictionaryLink> and <DictionaryLink term={"nil"}><b>nil</b></DictionaryLink> appears in place of a pair in the <GlossaryTerm term={"alist"}><i>alist</i></GlossaryTerm>. See the <GlossaryTerm term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink term={"assoc"}><b>assoc</b></DictionaryLink>. 



