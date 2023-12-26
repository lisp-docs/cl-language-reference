**position, position-if, position-if-not** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"position"}><b>position</b></DictionaryLink> *item sequence* &amp;key *from-end test test-not start end key → position* 



<DictionaryLink  term={"position-if"}><b>position-if</b></DictionaryLink> *predicate sequence* &amp;key *from-end start end key → position* 



<DictionaryLink  term={"position-if-not"}><b>position-if-not</b></DictionaryLink> *predicate sequence* &amp;key *from-end start end key → position* 



**Arguments and Values:** 



*item*—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



*sequence*—a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



<GlossaryTerm  term={"predicate"}><i>predicate</i></GlossaryTerm>—a <GlossaryTerm  term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> of one argument that returns a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



 



 



*from-end*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 



*test*—a <GlossaryTerm  term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> that returns a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. *test-not<ClLinks  term={"t"}><i>—a </i></ClLinks>designator* for a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> that returns a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



*start*, *end*—<GlossaryTerm styled={true} term={"bounding index designator"}><i>bounding index designators</i></GlossaryTerm> of *sequence*. The defaults for *start* and *end* are 0 and <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, respectively. 



<GlossaryTerm  term={"key"}><i>key</i></GlossaryTerm>—a <GlossaryTerm  term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> of one argument, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



*position*—a <GlossaryTerm styled={true} term={"bounding index"}><i>bounding index</i></GlossaryTerm> of *sequence*, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



<DictionaryLink  term={"position"}><b>position</b></DictionaryLink>, <DictionaryLink  term={"position-if"}><b>position-if</b></DictionaryLink>, and <DictionaryLink  term={"position-if-not"}><b>position-if-not</b></DictionaryLink> each search *sequence* for an <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm> that *satisfies the test*. 



The *position* returned is the index within *sequence* of the leftmost (if *from-end* is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>) or of the rightmost (if *from-end* is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>) <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm> that *satisfies the test*; otherwise <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> is returned. The index returned is relative to the left-hand end of the entire *sequence*, regardless of the value of *start*, *end*, or *from-end*. 



**Examples:**
```lisp
(position #\a "baobab" :from-end t) → 4 
(position-if #’oddp ’((1) (2) (3) (4)) :start 1 :key #’car) → 2 
(position 595 ’()) → NIL 
(position-if-not #’integerp ’(1 2 3 4 5.0)) → 4 
```
**Exceptional Situations:** 



Should be prepared to signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *sequence* is not a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"find"}><b>find</b></DictionaryLink>, Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm> is deprecated. 



The <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"position-if-not"}><b>position-if-not</b></DictionaryLink> is deprecated. 







 



 



<DictionaryLink  term={"search"}><b>search</b></DictionaryLink> 



