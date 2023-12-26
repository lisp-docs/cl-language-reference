**every, some, notevery, notany** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"every"}><b>every</b></ClLinks> <ClLinks  term={"predicate"}><i>predicate</i></ClLinks> &amp;rest *sequences*<sup>+</sup> → generalized-boolean 



<ClLinks  term={"some"}><b>some</b></ClLinks> <ClLinks  term={"predicate"}><i>predicate</i></ClLinks> &amp;rest *sequences*<sup>+</sup> → result 



<ClLinks  term={"notevery"}><b>notevery</b></ClLinks> <ClLinks  term={"predicate"}><i>predicate</i></ClLinks> &amp;rest *sequences*<sup>+</sup> → generalized-boolean 



<ClLinks  term={"notany"}><b>notany</b></ClLinks> <ClLinks  term={"predicate"}><i>predicate</i></ClLinks> &amp;rest *sequences*<sup>+</sup> → generalized-boolean 



**Arguments and Values:** 



<ClLinks  term={"predicate"}><i>predicate</i></ClLinks>—a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"function"}><i>function</i></ClLinks> of as many <ClLinks  term={"argument"}><i>arguments</i></ClLinks> as there are *sequences*. *sequence*—a *sequence*. 



*result*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



<ClLinks  term={"every"}><b>every</b></ClLinks>, <ClLinks  term={"some"}><b>some</b></ClLinks>, <ClLinks  term={"notevery"}><b>notevery</b></ClLinks>, and <ClLinks  term={"notany"}><b>notany</b></ClLinks> test <ClLinks  term={"element"}><i>elements</i></ClLinks> of *sequences* for satisfaction of a given <ClLinks  term={"predicate"}><i>predicate</i></ClLinks>. The first argument to <ClLinks  term={"predicate"}><i>predicate</i></ClLinks> is an <ClLinks  term={"element"}><i>element</i></ClLinks> of the first *sequence*; each succeeding argument is an <ClLinks  term={"element"}><i>element</i></ClLinks> of a succeeding *sequence*. 



<ClLinks  term={"predicate"}><i>Predicate</i></ClLinks> is first applied to the elements with index 0 in each of the *sequences*, and possibly then to the elements with index 1, and so on, until a termination criterion is met or the end of the shortest of the *sequences* is reached. 



<ClLinks  term={"every"}><b>every</b></ClLinks> returns <ClLinks  term={"false"}><i>false</i></ClLinks> as soon as any invocation of <ClLinks  term={"predicate"}><i>predicate</i></ClLinks> returns <ClLinks  term={"false"}><i>false</i></ClLinks>. If the end of a *sequence* is reached, <ClLinks  term={"every"}><b>every</b></ClLinks> returns <ClLinks  term={"true"}><i>true</i></ClLinks>. Thus, <ClLinks  term={"every"}><b>every</b></ClLinks> returns <ClLinks  term={"true"}><i>true</i></ClLinks> if and only if every invocation of <ClLinks  term={"predicate"}><i>predicate</i></ClLinks> returns <ClLinks  term={"true"}><i>true</i></ClLinks>. 



<ClLinks  term={"some"}><b>some</b></ClLinks> returns the first <ClLinks  term={"non-nil"}><i>non-nil</i></ClLinks> value which is returned by an invocation of <ClLinks  term={"predicate"}><i>predicate</i></ClLinks>. If the end of a *sequence* is reached without any invocation of the <ClLinks  term={"predicate"}><i>predicate</i></ClLinks> returning <ClLinks  term={"true"}><i>true</i></ClLinks>, <ClLinks  term={"some"}><b>some</b></ClLinks> returns <ClLinks  term={"false"}><i>false</i></ClLinks>. Thus, <ClLinks  term={"some"}><b>some</b></ClLinks> returns <ClLinks  term={"true"}><i>true</i></ClLinks> if and only if some invocation of <ClLinks  term={"predicate"}><i>predicate</i></ClLinks> returns <ClLinks  term={"true"}><i>true</i></ClLinks>. 



<ClLinks  term={"notany"}><b>notany</b></ClLinks> returns <ClLinks  term={"false"}><i>false</i></ClLinks> as soon as any invocation of <ClLinks  term={"predicate"}><i>predicate</i></ClLinks> returns <ClLinks  term={"true"}><i>true</i></ClLinks>. If the end of a *sequence* is reached, <ClLinks  term={"notany"}><b>notany</b></ClLinks> returns <ClLinks  term={"true"}><i>true</i></ClLinks>. Thus, <ClLinks  term={"notany"}><b>notany</b></ClLinks> returns <ClLinks  term={"true"}><i>true</i></ClLinks> if and only if it is not the case that any invocation of <ClLinks  term={"predicate"}><i>predicate</i></ClLinks> returns <ClLinks  term={"true"}><i>true</i></ClLinks>. 



<ClLinks  term={"notevery"}><b>notevery</b></ClLinks> returns <ClLinks  term={"true"}><i>true</i></ClLinks> as soon as any invocation of <ClLinks  term={"predicate"}><i>predicate</i></ClLinks> returns <ClLinks  term={"false"}><i>false</i></ClLinks>. If the end of a *sequence* is reached, <ClLinks  term={"notevery"}><b>notevery</b></ClLinks> returns <ClLinks  term={"false"}><i>false</i></ClLinks>. Thus, <ClLinks  term={"notevery"}><b>notevery</b></ClLinks> returns <ClLinks  term={"true"}><i>true</i></ClLinks> if and only if it is not the case that every invocation of <ClLinks  term={"predicate"}><i>predicate</i></ClLinks> returns <ClLinks  term={"true"}><i>true</i></ClLinks>. 



Data and Control 











**Examples:**
```lisp
(every #’characterp "abc") → true 
(some #’= ’(1 2 3 4 5) ’(5 4 3 2 1)) → true 
(notevery #’< ’(1 2 3 4) ’(5 6 7 8) ’(9 10 11 12)) → false 
(notany #’> ’(1 2 3 4) ’(5 6 7 8) ’(9 10 11 12)) → true 
```
**Exceptional Situations:** 



Should signal <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if its first argument is neither a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> nor a <ClLinks  term={"function"}><i>function</i></ClLinks> or if any subsequent argument is not a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



Other exceptional situations are possible, depending on the nature of the <ClLinks  term={"predicate"}><i>predicate</i></ClLinks>. 



**See Also:** 



<ClLinks  term={"and"}><b>and</b></ClLinks>, <ClLinks  term={"or"}><b>or</b></ClLinks>, Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



(notany *predicate \{sequence\}*\*) *≡* (not (some *predicate \{sequence\}*\*)) 



(notevery *predicate \{sequence\}*\*) *≡* (not (every *predicate \{sequence\}*\*)) 



