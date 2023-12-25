**remove-duplicates, delete-duplicates** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"remove-duplicates"}><b>remove-duplicates</b></DictionaryLink> *sequence* &amp;key *from-end test test-not* 



*start end key* 



*→ result-sequence* 



<DictionaryLink styled={true} term={"delete-duplicates"}><b>delete-duplicates</b></DictionaryLink> *sequence* &amp;key *from-end test test-not* 



*start end key* 



*→ result-sequence* 



**Arguments and Values:** 



*sequence*—a *proper sequence*. 



*from-end*—a *generalized boolean*. The default is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



*test*—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> that returns a *generalized boolean*. *test-not<GlossaryTerm styled={true} term={"t"}><i>—a </i></GlossaryTerm>designator* for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> that returns a *generalized boolean*. 



*start*, *end*—*bounding index designators* of *sequence*. The defaults for *start* and *end* are 0 and <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, respectively. 



<GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of one argument, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 







 



 



**remove-duplicates, delete-duplicates** 



*result-sequence*—a *sequence*. 



**Description:** 



<DictionaryLink styled={true} term={"remove-duplicates"}><b>remove-duplicates</b></DictionaryLink> returns a modified copy of *sequence* from which any element that matches another element occurring in *sequence* has been removed. 



If *sequence* is a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> , the result is a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> that has the same *actual array element type* as *sequence*. If *sequence* is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, the result is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"delete-duplicates"}><b>delete-duplicates</b></DictionaryLink> is like <DictionaryLink styled={true} term={"remove-duplicates"}><b>remove-duplicates</b></DictionaryLink>, but <DictionaryLink styled={true} term={"delete-duplicates"}><b>delete-duplicates</b></DictionaryLink> may modify *sequence*. 



The elements of *sequence* are compared <GlossaryTerm styled={true} term={"pairwise"}><i>pairwise</i></GlossaryTerm>, and if any two match, then the one occurring earlier in *sequence* is discarded, unless *from-end* is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, in which case the one later in *sequence* is discarded. 



<DictionaryLink styled={true} term={"remove-duplicates"}><b>remove-duplicates</b></DictionaryLink> and <DictionaryLink styled={true} term={"delete-duplicates"}><b>delete-duplicates</b></DictionaryLink> return a *sequence* of the same <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> as *sequence* with enough elements removed so that no two of the remaining elements match. The order of the elements remaining in the result is the same as the order in which they appear in *sequence*. 



<DictionaryLink styled={true} term={"remove-duplicates"}><b>remove-duplicates</b></DictionaryLink> returns a *sequence* that may share with *sequence* or may be <GlossaryTerm styled={true} term={"identical"}><i>identical</i></GlossaryTerm> to *sequence* if no elements need to be removed. 



<DictionaryLink styled={true} term={"delete-duplicates"}><b>delete-duplicates</b></DictionaryLink>, when *sequence* is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, is permitted to <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> any part, <DictionaryLink styled={true} term={"car"}><b>car</b></DictionaryLink> or <DictionaryLink styled={true} term={"cdr"}><b>cdr</b></DictionaryLink>, of the top-level list structure in that *sequence*. When *sequence* is a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> , <DictionaryLink styled={true} term={"delete-duplicates"}><b>delete-duplicates</b></DictionaryLink> is permitted to change the dimensions of the <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> and to slide its elements into new positions without permuting them to produce the resulting <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> . 



**Examples:**
```lisp

(remove-duplicates "aBcDAbCd" :test #’char-equal :from-end t) *→* "aBcD" 
(remove-duplicates ’(a b c b d d e)) *→* (A C B D E) 
(remove-duplicates ’(a b c b d d e) :from-end t) *→* (A B C D E) 
(remove-duplicates ’((foo #\a) (bar #\%) (baz #\A)) 
		    :test #’char-equal :key #’cadr) *→* ((BAR #\%) (BAZ #\A)) 
(remove-duplicates ’((foo #\a) (bar #\%) (baz #\A)) 
		    :test #’char-equal :key #’cadr :from-end t) *→* ((FOO #\a) (BAR #\%)) 
(setq tester (list 0 1 2 3 4 5 6)) 
(delete-duplicates tester :key #’oddp :start 1 :end 6) *→* (0 4 5 6) 

```
**Side Effects:** 



<DictionaryLink styled={true} term={"delete-duplicates"}><b>delete-duplicates</b></DictionaryLink> might destructively modify *sequence*. 



**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *sequence* is not a *proper sequence*. 



**See Also:** 



Section 3.2.1 (Compiler Terminology), Section 3.6 (Traversal Rules and Side Effects) 



 



 



**remove-duplicates, delete-duplicates** 



**Notes:** 



If *sequence* is a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> , the result might or might not be simple, and might or might not be <GlossaryTerm styled={true} term={"identical"}><i>identical</i></GlossaryTerm> to *sequence*. 



The :test-not <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> is deprecated. 



These functions are useful for converting *sequence* into a canonical form suitable for representing a set. 







 



 





