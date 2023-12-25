**find, find-if, find-if-not** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"find"}><b>find</b></DictionaryLink> *item sequence* &amp;key *from-end test test-not start end key → element* 



<DictionaryLink styled={true} term={"find-if"}><b>find-if</b></DictionaryLink> *predicate sequence* &amp;key *from-end start end key → element* 



<DictionaryLink styled={true} term={"find-if-not"}><b>find-if-not</b></DictionaryLink> *predicate sequence* &amp;key *from-end start end key → element* 



**Arguments and Values:** 



*item*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*sequence*—a *proper sequence*. 



<GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of one <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> that returns a *generalized boolean*. *from-end*—a *generalized boolean*. The default is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



*test*—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> that returns a *generalized boolean*. *test-not<GlossaryTerm styled={true} term={"t"}><i>—a </i></GlossaryTerm>designator* for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> that returns a *generalized boolean*. 



*start*, *end*—*bounding index designators* of *sequence*. The defaults for *start* and *end* are 0 and <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, respectively. 



<GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of one argument, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



<GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of the *sequence*, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 







 



 



**Description:** 



<DictionaryLink styled={true} term={"find"}><b>find</b></DictionaryLink>, <DictionaryLink styled={true} term={"find-if"}><b>find-if</b></DictionaryLink>, and <DictionaryLink styled={true} term={"find-if-not"}><b>find-if-not</b></DictionaryLink> each search for an <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of the *sequence bounded* by *start* and *end* that *satisfies the predicate predicate* or that *satisfies the test test* or *test-not*, as appropriate. 



If *from-end* is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, then the result is the rightmost <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> that *satisfies the test*. 



If the *sequence* contains an <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> that *satisfies the test*, then the leftmost or rightmost *sequence* element, depending on *from-end*, is returned; otherwise <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> is returned. 



**Examples:**
```lisp

(find #\d "here are some letters that can be looked at" :test #’char>) 
*→* #\Space 
(find-if #’oddp ’(1 2 3 4 5) :end 3 :from-end t) *→* 3 
(find-if-not #’complexp 
	       ’#(3.5 2 #C(1.0 0.0) #C(0.0 1.0)) 
	       :start 2) *→* NIL 

```
**Exceptional Situations:** 



Should be prepared to signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *sequence* is not a *proper sequence*. 



**See Also:** 



<DictionaryLink styled={true} term={"position"}><b>position</b></DictionaryLink>, Section 17.2 (Rules about Test Functions), Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> is deprecated. 



The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"find-if-not"}><b>find-if-not</b></DictionaryLink> is deprecated. 



