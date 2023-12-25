**count, count-if, count-if-not** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"count"}><b>count</b></DictionaryLink> *item sequence* &amp;key *from-end start end key test test-not → n* 



<DictionaryLink styled={true} term={"count-if"}><b>count-if</b></DictionaryLink> *predicate sequence* &amp;key *from-end start end key → n* 



<DictionaryLink styled={true} term={"count-if-not"}><b>count-if-not</b></DictionaryLink> *predicate sequence* &amp;key *from-end start end key → n* 



**Arguments and Values:** 



*item*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*sequence*—a *proper sequence*. 



<GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of one <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> that returns a *generalized boolean*. *from-end*—a *generalized boolean*. The default is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



*test*—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> that returns a *generalized boolean*. *test-not<GlossaryTerm styled={true} term={"t"}><i>—a </i></GlossaryTerm>designator* for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> that returns a *generalized boolean*. 



*start*, *end*—*bounding index designators* of *sequence*. The defaults for *start* and *end* are 0 and <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, respectively. 



<GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of one argument, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*n*—a non-negative *integer* less than or equal to the <GlossaryTerm styled={true} term={"length"}><i>length</i></GlossaryTerm> of *sequence*. 



**Description:** 



<DictionaryLink styled={true} term={"count"}><b>count</b></DictionaryLink>, <DictionaryLink styled={true} term={"count-if"}><b>count-if</b></DictionaryLink>, and <DictionaryLink styled={true} term={"count-if-not"}><b>count-if-not</b></DictionaryLink> count and return the number of <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> in the *sequence bounded* by *start* and *end* that *satisfy the test*. 



The *from-end* has no direct effect on the result. However, if *from-end* is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> of *sequence* will be supplied as <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> to the *test*, *test-not*, and <GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm> in reverse order, which may change the side-effects, if any, of those functions. 



**Examples:**
```lisp

(count #\a "how many A’s are there in here?") *→* 2 
(count-if-not #’oddp ’((1) (2) (3) (4)) :key #’car) *→* 2 
(count-if #’upper-case-p "The Crying of Lot 49" :start 4) *→* 2 

```
**Exceptional Situations:** 



Should be prepared to signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *sequence* is not a *proper sequence*. 



 



 



**See Also:** 



Section 17.2 (Rules about Test Functions), Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> is deprecated. 



The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"count-if-not"}><b>count-if-not</b></DictionaryLink> is deprecated. 



