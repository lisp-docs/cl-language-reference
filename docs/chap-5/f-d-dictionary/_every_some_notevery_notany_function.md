**every, some, notevery, notany** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"every"}><b>every</b></DictionaryLink> <GlossaryTerm  term={"predicate"}><i>predicate</i></GlossaryTerm> &amp;rest *sequences*<sup>+</sup> → generalized-boolean 



<DictionaryLink  term={"some"}><b>some</b></DictionaryLink> <GlossaryTerm  term={"predicate"}><i>predicate</i></GlossaryTerm> &amp;rest *sequences*<sup>+</sup> → result 



<DictionaryLink  term={"notevery"}><b>notevery</b></DictionaryLink> <GlossaryTerm  term={"predicate"}><i>predicate</i></GlossaryTerm> &amp;rest *sequences*<sup>+</sup> → generalized-boolean 



<DictionaryLink  term={"notany"}><b>notany</b></DictionaryLink> <GlossaryTerm  term={"predicate"}><i>predicate</i></GlossaryTerm> &amp;rest *sequences*<sup>+</sup> → generalized-boolean 



**Arguments and Values:** 



<GlossaryTerm  term={"predicate"}><i>predicate</i></GlossaryTerm>—a <GlossaryTerm  term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> of as many <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> as there are *sequences*. *sequence*—a *sequence*. 



*result*—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"every"}><b>every</b></DictionaryLink>, <DictionaryLink  term={"some"}><b>some</b></DictionaryLink>, <DictionaryLink  term={"notevery"}><b>notevery</b></DictionaryLink>, and <DictionaryLink  term={"notany"}><b>notany</b></DictionaryLink> test <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm> of *sequences* for satisfaction of a given <GlossaryTerm  term={"predicate"}><i>predicate</i></GlossaryTerm>. The first argument to <GlossaryTerm  term={"predicate"}><i>predicate</i></GlossaryTerm> is an <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm> of the first *sequence*; each succeeding argument is an <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm> of a succeeding *sequence*. 



<GlossaryTerm  term={"predicate"}><i>Predicate</i></GlossaryTerm> is first applied to the elements with index 0 in each of the *sequences*, and possibly then to the elements with index 1, and so on, until a termination criterion is met or the end of the shortest of the *sequences* is reached. 



<DictionaryLink  term={"every"}><b>every</b></DictionaryLink> returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm> as soon as any invocation of <GlossaryTerm  term={"predicate"}><i>predicate</i></GlossaryTerm> returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. If the end of a *sequence* is reached, <DictionaryLink  term={"every"}><b>every</b></DictionaryLink> returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>. Thus, <DictionaryLink  term={"every"}><b>every</b></DictionaryLink> returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if and only if every invocation of <GlossaryTerm  term={"predicate"}><i>predicate</i></GlossaryTerm> returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>. 



<DictionaryLink  term={"some"}><b>some</b></DictionaryLink> returns the first <GlossaryTerm  term={"non-nil"}><i>non-nil</i></GlossaryTerm> value which is returned by an invocation of <GlossaryTerm  term={"predicate"}><i>predicate</i></GlossaryTerm>. If the end of a *sequence* is reached without any invocation of the <GlossaryTerm  term={"predicate"}><i>predicate</i></GlossaryTerm> returning <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>, <DictionaryLink  term={"some"}><b>some</b></DictionaryLink> returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. Thus, <DictionaryLink  term={"some"}><b>some</b></DictionaryLink> returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if and only if some invocation of <GlossaryTerm  term={"predicate"}><i>predicate</i></GlossaryTerm> returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>. 



<DictionaryLink  term={"notany"}><b>notany</b></DictionaryLink> returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm> as soon as any invocation of <GlossaryTerm  term={"predicate"}><i>predicate</i></GlossaryTerm> returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>. If the end of a *sequence* is reached, <DictionaryLink  term={"notany"}><b>notany</b></DictionaryLink> returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>. Thus, <DictionaryLink  term={"notany"}><b>notany</b></DictionaryLink> returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if and only if it is not the case that any invocation of <GlossaryTerm  term={"predicate"}><i>predicate</i></GlossaryTerm> returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>. 



<DictionaryLink  term={"notevery"}><b>notevery</b></DictionaryLink> returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> as soon as any invocation of <GlossaryTerm  term={"predicate"}><i>predicate</i></GlossaryTerm> returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. If the end of a *sequence* is reached, <DictionaryLink  term={"notevery"}><b>notevery</b></DictionaryLink> returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. Thus, <DictionaryLink  term={"notevery"}><b>notevery</b></DictionaryLink> returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if and only if it is not the case that every invocation of <GlossaryTerm  term={"predicate"}><i>predicate</i></GlossaryTerm> returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>. 



Data and Control 











**Examples:**
```lisp
(every #’characterp "abc") → true 
(some #’= ’(1 2 3 4 5) ’(5 4 3 2 1)) → true 
(notevery #’< ’(1 2 3 4) ’(5 6 7 8) ’(9 10 11 12)) → false 
(notany #’> ’(1 2 3 4) ’(5 6 7 8) ’(9 10 11 12)) → true 
```
**Exceptional Situations:** 



Should signal <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if its first argument is neither a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> nor a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> or if any subsequent argument is not a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



Other exceptional situations are possible, depending on the nature of the <GlossaryTerm  term={"predicate"}><i>predicate</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"and"}><b>and</b></DictionaryLink>, <DictionaryLink  term={"or"}><b>or</b></DictionaryLink>, Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



(notany *predicate \{sequence\}*\*) *≡* (not (some *predicate \{sequence\}*\*)) 



(notevery *predicate \{sequence\}*\*) *≡* (not (every *predicate \{sequence\}*\*)) 



