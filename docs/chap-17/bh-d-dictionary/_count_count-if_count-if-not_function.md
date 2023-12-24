**count, count-if, count-if-not** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"count"}><b>count</b></ClLinks> *item sequence* &amp;key *from-end start end key test test-not → n* 



<ClLinks styled={true} term={"count-if"}><b>count-if</b></ClLinks> *predicate sequence* &amp;key *from-end start end key → n* 



<ClLinks styled={true} term={"count-if-not"}><b>count-if-not</b></ClLinks> *predicate sequence* &amp;key *from-end start end key → n* 



**Arguments and Values:** 



*item*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*sequence*—a *proper sequence*. 



<ClLinks styled={true} term={"predicate"}><i>predicate</i></ClLinks>—a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of one <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> that returns a *generalized boolean*. *from-end*—a *generalized boolean*. The default is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



*test*—a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> that returns a *generalized boolean*. *test-not<ClLinks styled={true} term={"t"}><i>—a </i></ClLinks>designator* for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> that returns a *generalized boolean*. 



*start*, *end*—*bounding index designators* of *sequence*. The defaults for *start* and *end* are 0 and <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, respectively. 



<ClLinks styled={true} term={"key"}><i>key</i></ClLinks>—a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of one argument, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*n*—a non-negative *integer* less than or equal to the <ClLinks styled={true} term={"length"}><i>length</i></ClLinks> of *sequence*. 



**Description:** 



<ClLinks styled={true} term={"count"}><b>count</b></ClLinks>, <ClLinks styled={true} term={"count-if"}><b>count-if</b></ClLinks>, and <ClLinks styled={true} term={"count-if-not"}><b>count-if-not</b></ClLinks> count and return the number of <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> in the *sequence bounded* by *start* and *end* that *satisfy the test*. 



The *from-end* has no direct effect on the result. However, if *from-end* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, the <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> of *sequence* will be supplied as <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> to the *test*, *test-not*, and <ClLinks styled={true} term={"key"}><i>key</i></ClLinks> in reverse order, which may change the side-effects, if any, of those functions. 



**Examples:**
```lisp

(count #\a "how many A’s are there in here?") → 2 
(count-if-not #’oddp ’((1) (2) (3) (4)) :key #’car) → 2 
(count-if #’upper-case-p "The Crying of Lot 49" :start 4) → 2 

```
**Exceptional Situations:** 



Should be prepared to signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *sequence* is not a *proper sequence*. 



 



 



**See Also:** 



Section 17.2 (Rules about Test Functions), Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> is deprecated. 



The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"count-if-not"}><b>count-if-not</b></ClLinks> is deprecated. 



