**position, position-if, position-if-not** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"position"}><b>position</b></DictionaryLink> *item sequence* &amp;key *from-end test test-not start end key → position* 



<DictionaryLink styled={true} term={"position-if"}><b>position-if</b></DictionaryLink> *predicate sequence* &amp;key *from-end start end key → position* 



<DictionaryLink styled={true} term={"position-if-not"}><b>position-if-not</b></DictionaryLink> *predicate sequence* &amp;key *from-end start end key → position* 



**Arguments and Values:** 



*item*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*sequence*—a *proper sequence*. 



<GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of one argument that returns a *generalized boolean*. 



 



 



*from-end*—a *generalized boolean*. The default is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



*test*—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> that returns a *generalized boolean*. *test-not<GlossaryTerm styled={true} term={"t"}><i>—a </i></GlossaryTerm>designator* for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> that returns a *generalized boolean*. 



*start*, *end*—*bounding index designators* of *sequence*. The defaults for *start* and *end* are 0 and <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, respectively. 



<GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of one argument, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*position*—a *bounding index* of *sequence*, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



<DictionaryLink styled={true} term={"position"}><b>position</b></DictionaryLink>, <DictionaryLink styled={true} term={"position-if"}><b>position-if</b></DictionaryLink>, and <DictionaryLink styled={true} term={"position-if-not"}><b>position-if-not</b></DictionaryLink> each search *sequence* for an <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> that *satisfies the test*. 



The *position* returned is the index within *sequence* of the leftmost (if *from-end* is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>) or of the rightmost (if *from-end* is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>) <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> that *satisfies the test*; otherwise <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> is returned. The index returned is relative to the left-hand end of the entire *sequence*, regardless of the value of *start*, *end*, or *from-end*. 



**Examples:**
```lisp

(position #\a "baobab" :from-end t) *→* 4 
(position-if #’oddp ’((1) (2) (3) (4)) :start 1 :key #’car) *→* 2 
(position 595 ’()) *→* NIL 
(position-if-not #’integerp ’(1 2 3 4 5.0)) *→* 4 

```
**Exceptional Situations:** 



Should be prepared to signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *sequence* is not a *proper sequence*. 



**See Also:** 



<DictionaryLink styled={true} term={"find"}><b>find</b></DictionaryLink>, Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> is deprecated. 



The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"position-if-not"}><b>position-if-not</b></DictionaryLink> is deprecated. 







 



 



<DictionaryLink styled={true} term={"search"}><b>search</b></DictionaryLink> 



