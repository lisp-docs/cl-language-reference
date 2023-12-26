**find, find-if, find-if-not** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"find"}><b>find</b></DictionaryLink> *item sequence* &amp;key *from-end test test-not start end key → element* 



<DictionaryLink  term={"find-if"}><b>find-if</b></DictionaryLink> *predicate sequence* &amp;key *from-end start end key → element* 



<DictionaryLink  term={"find-if-not"}><b>find-if-not</b></DictionaryLink> *predicate sequence* &amp;key *from-end start end key → element* 



**Arguments and Values:** 



*item*—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



*sequence*—a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



<GlossaryTerm  term={"predicate"}><i>predicate</i></GlossaryTerm>—a <GlossaryTerm  term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> of one <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm> that returns a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. *from-end*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 



*test*—a <GlossaryTerm  term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> that returns a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. *test-not<ClLinks  term={"t"}><i>—a </i></ClLinks>designator* for a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> that returns a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



*start*, *end*—<GlossaryTerm styled={true} term={"bounding index designator"}><i>bounding index designators</i></GlossaryTerm> of *sequence*. The defaults for *start* and *end* are 0 and <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, respectively. 



<GlossaryTerm  term={"key"}><i>key</i></GlossaryTerm>—a <GlossaryTerm  term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> of one argument, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



<GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm>—an <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm> of the *sequence*, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 







 



 



**Description:** 



<DictionaryLink  term={"find"}><b>find</b></DictionaryLink>, <DictionaryLink  term={"find-if"}><b>find-if</b></DictionaryLink>, and <DictionaryLink  term={"find-if-not"}><b>find-if-not</b></DictionaryLink> each search for an <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm> of the *sequence bounded* by *start* and *end* that *satisfies the predicate predicate* or that *satisfies the test test* or *test-not*, as appropriate. 



If *from-end* is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>, then the result is the rightmost <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm> that *satisfies the test*. 



If the *sequence* contains an <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm> that *satisfies the test*, then the leftmost or rightmost *sequence* element, depending on *from-end*, is returned; otherwise <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> is returned. 



**Examples:**
```lisp
(find #\d "here are some letters that can be looked at" :test #’char>) 
→ #\Space 
(find-if #’oddp ’(1 2 3 4 5) :end 3 :from-end t) → 3 
(find-if-not #’complexp 
	       ’#(3.5 2 #C(1.0 0.0) #C(0.0 1.0)) 
	       :start 2) → NIL 
```
**Exceptional Situations:** 



Should be prepared to signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *sequence* is not a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"position"}><b>position</b></DictionaryLink>, Section 17.2 (Rules about Test Functions), Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm> is deprecated. 



The <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"find-if-not"}><b>find-if-not</b></DictionaryLink> is deprecated. 



