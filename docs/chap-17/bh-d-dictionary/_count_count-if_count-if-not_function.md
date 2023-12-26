**count, count-if, count-if-not** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"count"}><b>count</b></ClLinks> *item sequence* &amp;key *from-end start end key test test-not → n* 



<ClLinks  term={"count-if"}><b>count-if</b></ClLinks> *predicate sequence* &amp;key *from-end start end key → n* 



<ClLinks  term={"count-if-not"}><b>count-if-not</b></ClLinks> *predicate sequence* &amp;key *from-end start end key → n* 



**Arguments and Values:** 



*item*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*sequence*—a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



<ClLinks  term={"predicate"}><i>predicate</i></ClLinks>—a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"function"}><i>function</i></ClLinks> of one <ClLinks  term={"argument"}><i>argument</i></ClLinks> that returns a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. *from-end*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <ClLinks  term={"false"}><i>false</i></ClLinks>. 



*test*—a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"function"}><i>function</i></ClLinks> of two <ClLinks  term={"argument"}><i>arguments</i></ClLinks> that returns a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. *test-not<ClLinks  term={"t"}><i>—a </i></ClLinks>designator* for a <ClLinks  term={"function"}><i>function</i></ClLinks> of two <ClLinks  term={"argument"}><i>arguments</i></ClLinks> that returns a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



*start*, *end*—<GlossaryTerm styled={true} term={"bounding index designator"}><i>bounding index designators</i></GlossaryTerm> of *sequence*. The defaults for *start* and *end* are 0 and <ClLinks  term={"nil"}><b>nil</b></ClLinks>, respectively. 



<ClLinks  term={"key"}><i>key</i></ClLinks>—a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"function"}><i>function</i></ClLinks> of one argument, or <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



*n*—a non-negative *integer* less than or equal to the <ClLinks  term={"length"}><i>length</i></ClLinks> of *sequence*. 



**Description:** 



<ClLinks  term={"count"}><b>count</b></ClLinks>, <ClLinks  term={"count-if"}><b>count-if</b></ClLinks>, and <ClLinks  term={"count-if-not"}><b>count-if-not</b></ClLinks> count and return the number of <ClLinks  term={"element"}><i>elements</i></ClLinks> in the *sequence bounded* by *start* and *end* that <GlossaryTerm styled={true} term={"satisfy the test"}><i>satisfy the test</i></GlossaryTerm>. 



The *from-end* has no direct effect on the result. However, if *from-end* is <ClLinks  term={"true"}><i>true</i></ClLinks>, the <ClLinks  term={"element"}><i>elements</i></ClLinks> of *sequence* will be supplied as <ClLinks  term={"argument"}><i>arguments</i></ClLinks> to the *test*, *test-not*, and <ClLinks  term={"key"}><i>key</i></ClLinks> in reverse order, which may change the side-effects, if any, of those functions. 



**Examples:**
```lisp
(count #\a "how many A’s are there in here?") → 2 
(count-if-not #’oddp ’((1) (2) (3) (4)) :key #’car) → 2 
(count-if #’upper-case-p "The Crying of Lot 49" :start 4) → 2 
```
**Exceptional Situations:** 



Should be prepared to signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if *sequence* is not a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



 



 



**See Also:** 



Section 17.2 (Rules about Test Functions), Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not <ClLinks  term={"argument"}><i>argument</i></ClLinks> is deprecated. 



The <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"count-if-not"}><b>count-if-not</b></ClLinks> is deprecated. 



