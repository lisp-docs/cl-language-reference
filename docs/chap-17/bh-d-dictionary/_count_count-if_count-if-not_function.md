**count, count-if, count-if-not** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"count"}><b>count</b></DictionaryLink> *item sequence* &amp;key *from-end start end key test test-not → n* 



<DictionaryLink  term={"count-if"}><b>count-if</b></DictionaryLink> *predicate sequence* &amp;key *from-end start end key → n* 



<DictionaryLink  term={"count-if-not"}><b>count-if-not</b></DictionaryLink> *predicate sequence* &amp;key *from-end start end key → n* 



**Arguments and Values:** 



*item*—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



*sequence*—a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



<GlossaryTerm  term={"predicate"}><i>predicate</i></GlossaryTerm>—a <GlossaryTerm  term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> of one <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm> that returns a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. *from-end*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 



*test*—a <GlossaryTerm  term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> that returns a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. *test-not<GlossaryTerm  term={"t"}><i>—a </i></GlossaryTerm>designator* for a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> that returns a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



*start*, *end*—<GlossaryTerm styled={true} term={"bounding index designator"}><i>bounding index designators</i></GlossaryTerm> of *sequence*. The defaults for *start* and *end* are 0 and <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, respectively. 



<GlossaryTerm  term={"key"}><i>key</i></GlossaryTerm>—a <GlossaryTerm  term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> of one argument, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



*n*—a non-negative *integer* less than or equal to the <GlossaryTerm  term={"length"}><i>length</i></GlossaryTerm> of *sequence*. 



**Description:** 



<DictionaryLink  term={"count"}><b>count</b></DictionaryLink>, <DictionaryLink  term={"count-if"}><b>count-if</b></DictionaryLink>, and <DictionaryLink  term={"count-if-not"}><b>count-if-not</b></DictionaryLink> count and return the number of <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm> in the *sequence bounded* by *start* and *end* that <GlossaryTerm styled={true} term={"satisfy the test"}><i>satisfy the test</i></GlossaryTerm>. 



The *from-end* has no direct effect on the result. However, if *from-end* is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>, the <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm> of *sequence* will be supplied as <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> to the *test*, *test-not*, and <GlossaryTerm  term={"key"}><i>key</i></GlossaryTerm> in reverse order, which may change the side-effects, if any, of those functions. 



**Examples:**
```lisp
(count #\a "how many A’s are there in here?") → 2 
(count-if-not #’oddp ’((1) (2) (3) (4)) :key #’car) → 2 
(count-if #’upper-case-p "The Crying of Lot 49" :start 4) → 2 
```
**Exceptional Situations:** 



Should be prepared to signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *sequence* is not a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



 



 



**See Also:** 



Section 17.2 (Rules about Test Functions), Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm> is deprecated. 



The <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"count-if-not"}><b>count-if-not</b></DictionaryLink> is deprecated. 



