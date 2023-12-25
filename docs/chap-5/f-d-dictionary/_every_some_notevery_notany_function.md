**every, some, notevery, notany** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"every"}><b>every</b></DictionaryLink> <GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm> &amp;rest *sequences*<sup>+</sup> *→ generalized-boolean* 



<DictionaryLink styled={true} term={"some"}><b>some</b></DictionaryLink> <GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm> &amp;rest *sequences*<sup>+</sup> *→ result* 



<DictionaryLink styled={true} term={"notevery"}><b>notevery</b></DictionaryLink> <GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm> &amp;rest *sequences*<sup>+</sup> *→ generalized-boolean* 



<DictionaryLink styled={true} term={"notany"}><b>notany</b></DictionaryLink> <GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm> &amp;rest *sequences*<sup>+</sup> *→ generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of as many <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> as there are *sequences*. *sequence*—a *sequence*. 



*result*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



<DictionaryLink styled={true} term={"every"}><b>every</b></DictionaryLink>, <DictionaryLink styled={true} term={"some"}><b>some</b></DictionaryLink>, <DictionaryLink styled={true} term={"notevery"}><b>notevery</b></DictionaryLink>, and <DictionaryLink styled={true} term={"notany"}><b>notany</b></DictionaryLink> test <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> of *sequences* for satisfaction of a given <GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm>. The first argument to <GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm> is an <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of the first *sequence*; each succeeding argument is an <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of a succeeding *sequence*. 



<GlossaryTerm styled={true} term={"predicate"}><i>Predicate</i></GlossaryTerm> is first applied to the elements with index 0 in each of the *sequences*, and possibly then to the elements with index 1, and so on, until a termination criterion is met or the end of the shortest of the *sequences* is reached. 



<DictionaryLink styled={true} term={"every"}><b>every</b></DictionaryLink> returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm> as soon as any invocation of <GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm> returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. If the end of a *sequence* is reached, <DictionaryLink styled={true} term={"every"}><b>every</b></DictionaryLink> returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. Thus, <DictionaryLink styled={true} term={"every"}><b>every</b></DictionaryLink> returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if and only if every invocation of <GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm> returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"some"}><b>some</b></DictionaryLink> returns the first <GlossaryTerm styled={true} term={"non-nil"}><i>non-nil</i></GlossaryTerm> value which is returned by an invocation of <GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm>. If the end of a *sequence* is reached without any invocation of the <GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm> returning <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, <DictionaryLink styled={true} term={"some"}><b>some</b></DictionaryLink> returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. Thus, <DictionaryLink styled={true} term={"some"}><b>some</b></DictionaryLink> returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if and only if some invocation of <GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm> returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"notany"}><b>notany</b></DictionaryLink> returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm> as soon as any invocation of <GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm> returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. If the end of a *sequence* is reached, <DictionaryLink styled={true} term={"notany"}><b>notany</b></DictionaryLink> returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. Thus, <DictionaryLink styled={true} term={"notany"}><b>notany</b></DictionaryLink> returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if and only if it is not the case that any invocation of <GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm> returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"notevery"}><b>notevery</b></DictionaryLink> returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> as soon as any invocation of <GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm> returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. If the end of a *sequence* is reached, <DictionaryLink styled={true} term={"notevery"}><b>notevery</b></DictionaryLink> returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. Thus, <DictionaryLink styled={true} term={"notevery"}><b>notevery</b></DictionaryLink> returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if and only if it is not the case that every invocation of <GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm> returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. 



Data and Control 











**Examples:**
```lisp

(every #’characterp "abc") *→ true* 
(some #’= ’(1 2 3 4 5) ’(5 4 3 2 1)) *→ true* 
(notevery #’< ’(1 2 3 4) ’(5 6 7 8) ’(9 10 11 12)) *→ false* 
(notany #’> ’(1 2 3 4) ’(5 6 7 8) ’(9 10 11 12)) *→ true* 

```
**Exceptional Situations:** 



Should signal <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if its first argument is neither a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> nor a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> or if any subsequent argument is not a *proper sequence*. 



Other exceptional situations are possible, depending on the nature of the <GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink styled={true} term={"and"}><b>and</b></DictionaryLink>, <DictionaryLink styled={true} term={"or"}><b>or</b></DictionaryLink>, Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



(notany *predicate \{sequence\}*\*) *≡* (not (some *predicate \{sequence\}*\*)) 



(notevery *predicate \{sequence\}*\*) *≡* (not (every *predicate \{sequence\}*\*)) 



