**remove-duplicates, delete-duplicates** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"remove-duplicates"}><b>remove-duplicates</b></DictionaryLink> *sequence* &amp;key *from-end test test-not* 



*start end key* 



→ result-sequence 



<DictionaryLink  term={"delete-duplicates"}><b>delete-duplicates</b></DictionaryLink> *sequence* &amp;key *from-end test test-not* 



*start end key* 



→ result-sequence 



**Arguments and Values:** 



*sequence*—a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



*from-end*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <ClLinks  term={"false"}><i>false</i></ClLinks>. 



*test*—a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"function"}><i>function</i></ClLinks> of two <ClLinks  term={"argument"}><i>arguments</i></ClLinks> that returns a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. *test-not<ClLinks  term={"t"}><i>—a </i></ClLinks>designator* for a <ClLinks  term={"function"}><i>function</i></ClLinks> of two <ClLinks  term={"argument"}><i>arguments</i></ClLinks> that returns a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



*start*, *end*—<GlossaryTerm styled={true} term={"bounding index designator"}><i>bounding index designators</i></GlossaryTerm> of *sequence*. The defaults for *start* and *end* are 0 and <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, respectively. 



<ClLinks  term={"key"}><i>key</i></ClLinks>—a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"function"}><i>function</i></ClLinks> of one argument, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 







 



 



**remove-duplicates, delete-duplicates** 



*result-sequence*—a *sequence*. 



**Description:** 



<DictionaryLink  term={"remove-duplicates"}><b>remove-duplicates</b></DictionaryLink> returns a modified copy of *sequence* from which any element that matches another element occurring in *sequence* has been removed. 



If *sequence* is a <ClLinks  term={"vector"}><i>vector</i></ClLinks> , the result is a <ClLinks  term={"vector"}><i>vector</i></ClLinks> that has the same <GlossaryTerm styled={true} term={"actual array element type"}><i>actual array element type</i></GlossaryTerm> as *sequence*. If *sequence* is a <ClLinks  term={"list"}><i>list</i></ClLinks>, the result is a <ClLinks  term={"list"}><i>list</i></ClLinks>. 



<DictionaryLink  term={"delete-duplicates"}><b>delete-duplicates</b></DictionaryLink> is like <DictionaryLink  term={"remove-duplicates"}><b>remove-duplicates</b></DictionaryLink>, but <DictionaryLink  term={"delete-duplicates"}><b>delete-duplicates</b></DictionaryLink> may modify *sequence*. 



The elements of *sequence* are compared <ClLinks  term={"pairwise"}><i>pairwise</i></ClLinks>, and if any two match, then the one occurring earlier in *sequence* is discarded, unless *from-end* is <ClLinks  term={"true"}><i>true</i></ClLinks>, in which case the one later in *sequence* is discarded. 



<DictionaryLink  term={"remove-duplicates"}><b>remove-duplicates</b></DictionaryLink> and <DictionaryLink  term={"delete-duplicates"}><b>delete-duplicates</b></DictionaryLink> return a *sequence* of the same <ClLinks  term={"type"}><i>type</i></ClLinks> as *sequence* with enough elements removed so that no two of the remaining elements match. The order of the elements remaining in the result is the same as the order in which they appear in *sequence*. 



<DictionaryLink  term={"remove-duplicates"}><b>remove-duplicates</b></DictionaryLink> returns a *sequence* that may share with *sequence* or may be <ClLinks  term={"identical"}><i>identical</i></ClLinks> to *sequence* if no elements need to be removed. 



<DictionaryLink  term={"delete-duplicates"}><b>delete-duplicates</b></DictionaryLink>, when *sequence* is a <ClLinks  term={"list"}><i>list</i></ClLinks>, is permitted to <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> any part, <DictionaryLink  term={"car"}><b>car</b></DictionaryLink> or <DictionaryLink  term={"cdr"}><b>cdr</b></DictionaryLink>, of the top-level list structure in that *sequence*. When *sequence* is a <ClLinks  term={"vector"}><i>vector</i></ClLinks> , <DictionaryLink  term={"delete-duplicates"}><b>delete-duplicates</b></DictionaryLink> is permitted to change the dimensions of the <ClLinks  term={"vector"}><i>vector</i></ClLinks> and to slide its elements into new positions without permuting them to produce the resulting <ClLinks  term={"vector"}><i>vector</i></ClLinks> . 



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



<DictionaryLink  term={"delete-duplicates"}><b>delete-duplicates</b></DictionaryLink> might destructively modify *sequence*. 



**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *sequence* is not a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



**See Also:** 



Section 3.2.1 (Compiler Terminology), Section 3.6 (Traversal Rules and Side Effects) 



 



 



**remove-duplicates, delete-duplicates** 



**Notes:** 



If *sequence* is a <ClLinks  term={"vector"}><i>vector</i></ClLinks> , the result might or might not be simple, and might or might not be <ClLinks  term={"identical"}><i>identical</i></ClLinks> to *sequence*. 



The :test-not <ClLinks  term={"argument"}><i>argument</i></ClLinks> is deprecated. 



These functions are useful for converting *sequence* into a canonical form suitable for representing a set. 







 



 





