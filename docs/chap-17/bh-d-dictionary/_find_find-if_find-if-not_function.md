**find, find-if, find-if-not** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"find"}><b>find</b></DictionaryLink> *item sequence* &amp;key *from-end test test-not start end key → element* 



<DictionaryLink  term={"find-if"}><b>find-if</b></DictionaryLink> *predicate sequence* &amp;key *from-end start end key → element* 



<DictionaryLink  term={"find-if-not"}><b>find-if-not</b></DictionaryLink> *predicate sequence* &amp;key *from-end start end key → element* 



**Arguments and Values:** 



*item*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*sequence*—a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



<ClLinks  term={"predicate"}><i>predicate</i></ClLinks>—a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"function"}><i>function</i></ClLinks> of one <ClLinks  term={"argument"}><i>argument</i></ClLinks> that returns a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. *from-end*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <ClLinks  term={"false"}><i>false</i></ClLinks>. 



*test*—a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"function"}><i>function</i></ClLinks> of two <ClLinks  term={"argument"}><i>arguments</i></ClLinks> that returns a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. *test-not<ClLinks  term={"t"}><i>—a </i></ClLinks>designator* for a <ClLinks  term={"function"}><i>function</i></ClLinks> of two <ClLinks  term={"argument"}><i>arguments</i></ClLinks> that returns a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



*start*, *end*—<GlossaryTerm styled={true} term={"bounding index designator"}><i>bounding index designators</i></GlossaryTerm> of *sequence*. The defaults for *start* and *end* are 0 and <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, respectively. 



<ClLinks  term={"key"}><i>key</i></ClLinks>—a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"function"}><i>function</i></ClLinks> of one argument, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



<ClLinks  term={"element"}><i>element</i></ClLinks>—an <ClLinks  term={"element"}><i>element</i></ClLinks> of the *sequence*, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 







 



 



**Description:** 



<DictionaryLink  term={"find"}><b>find</b></DictionaryLink>, <DictionaryLink  term={"find-if"}><b>find-if</b></DictionaryLink>, and <DictionaryLink  term={"find-if-not"}><b>find-if-not</b></DictionaryLink> each search for an <ClLinks  term={"element"}><i>element</i></ClLinks> of the *sequence bounded* by *start* and *end* that *satisfies the predicate predicate* or that *satisfies the test test* or *test-not*, as appropriate. 



If *from-end* is <ClLinks  term={"true"}><i>true</i></ClLinks>, then the result is the rightmost <ClLinks  term={"element"}><i>element</i></ClLinks> that *satisfies the test*. 



If the *sequence* contains an <ClLinks  term={"element"}><i>element</i></ClLinks> that *satisfies the test*, then the leftmost or rightmost *sequence* element, depending on *from-end*, is returned; otherwise <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> is returned. 



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



Should be prepared to signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *sequence* is not a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"position"}><b>position</b></DictionaryLink>, Section 17.2 (Rules about Test Functions), Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not <ClLinks  term={"argument"}><i>argument</i></ClLinks> is deprecated. 



The <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"find-if-not"}><b>find-if-not</b></DictionaryLink> is deprecated. 



