**position, position-if, position-if-not** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"position"}><b>position</b></ClLinks> *item sequence* &amp;key *from-end test test-not start end key → position* 



<ClLinks  term={"position-if"}><b>position-if</b></ClLinks> *predicate sequence* &amp;key *from-end start end key → position* 



<ClLinks  term={"position-if-not"}><b>position-if-not</b></ClLinks> *predicate sequence* &amp;key *from-end start end key → position* 



**Arguments and Values:** 



*item*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*sequence*—a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



<ClLinks  term={"predicate"}><i>predicate</i></ClLinks>—a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"function"}><i>function</i></ClLinks> of one argument that returns a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



 



 



*from-end*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <ClLinks  term={"false"}><i>false</i></ClLinks>. 



*test*—a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"function"}><i>function</i></ClLinks> of two <ClLinks  term={"argument"}><i>arguments</i></ClLinks> that returns a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. *test-not<ClLinks  term={"t"}><i>—a </i></ClLinks>designator* for a <ClLinks  term={"function"}><i>function</i></ClLinks> of two <ClLinks  term={"argument"}><i>arguments</i></ClLinks> that returns a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



*start*, *end*—<GlossaryTerm styled={true} term={"bounding index designator"}><i>bounding index designators</i></GlossaryTerm> of *sequence*. The defaults for *start* and *end* are 0 and <ClLinks  term={"nil"}><b>nil</b></ClLinks>, respectively. 



<ClLinks  term={"key"}><i>key</i></ClLinks>—a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"function"}><i>function</i></ClLinks> of one argument, or <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



*position*—a <GlossaryTerm styled={true} term={"bounding index"}><i>bounding index</i></GlossaryTerm> of *sequence*, or <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



<ClLinks  term={"position"}><b>position</b></ClLinks>, <ClLinks  term={"position-if"}><b>position-if</b></ClLinks>, and <ClLinks  term={"position-if-not"}><b>position-if-not</b></ClLinks> each search *sequence* for an <ClLinks  term={"element"}><i>element</i></ClLinks> that *satisfies the test*. 



The *position* returned is the index within *sequence* of the leftmost (if *from-end* is <ClLinks  term={"true"}><i>true</i></ClLinks>) or of the rightmost (if *from-end* is <ClLinks  term={"false"}><i>false</i></ClLinks>) <ClLinks  term={"element"}><i>element</i></ClLinks> that *satisfies the test*; otherwise <ClLinks  term={"nil"}><b>nil</b></ClLinks> is returned. The index returned is relative to the left-hand end of the entire *sequence*, regardless of the value of *start*, *end*, or *from-end*. 



**Examples:**
```lisp
(position #\a "baobab" :from-end t) → 4 
(position-if #’oddp ’((1) (2) (3) (4)) :start 1 :key #’car) → 2 
(position 595 ’()) → NIL 
(position-if-not #’integerp ’(1 2 3 4 5.0)) → 4 
```
**Exceptional Situations:** 



Should be prepared to signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if *sequence* is not a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



**See Also:** 



<ClLinks  term={"find"}><b>find</b></ClLinks>, Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not <ClLinks  term={"argument"}><i>argument</i></ClLinks> is deprecated. 



The <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"position-if-not"}><b>position-if-not</b></ClLinks> is deprecated. 







 



 



<ClLinks  term={"search"}><b>search</b></ClLinks> 



