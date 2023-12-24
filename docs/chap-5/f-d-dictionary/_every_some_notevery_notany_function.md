**every, some, notevery, notany** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"every"}><b>every</b></ClLinks> <ClLinks styled={true} term={"predicate"}><i>predicate</i></ClLinks> &amp;rest *sequences*<sup>+</sup> → generalized-boolean 



<ClLinks styled={true} term={"some"}><b>some</b></ClLinks> <ClLinks styled={true} term={"predicate"}><i>predicate</i></ClLinks> &amp;rest *sequences*<sup>+</sup> → result 



<ClLinks styled={true} term={"notevery"}><b>notevery</b></ClLinks> <ClLinks styled={true} term={"predicate"}><i>predicate</i></ClLinks> &amp;rest *sequences*<sup>+</sup> → generalized-boolean 



<ClLinks styled={true} term={"notany"}><b>notany</b></ClLinks> <ClLinks styled={true} term={"predicate"}><i>predicate</i></ClLinks> &amp;rest *sequences*<sup>+</sup> → generalized-boolean 



**Arguments and Values:** 



<ClLinks styled={true} term={"predicate"}><i>predicate</i></ClLinks>—a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of as many <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> as there are *sequences*. *sequence*—a *sequence*. 



*result*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



<ClLinks styled={true} term={"every"}><b>every</b></ClLinks>, <ClLinks styled={true} term={"some"}><b>some</b></ClLinks>, <ClLinks styled={true} term={"notevery"}><b>notevery</b></ClLinks>, and <ClLinks styled={true} term={"notany"}><b>notany</b></ClLinks> test <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> of *sequences* for satisfaction of a given <ClLinks styled={true} term={"predicate"}><i>predicate</i></ClLinks>. The first argument to <ClLinks styled={true} term={"predicate"}><i>predicate</i></ClLinks> is an <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of the first *sequence*; each succeeding argument is an <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of a succeeding *sequence*. 



<ClLinks styled={true} term={"predicate"}><i>Predicate</i></ClLinks> is first applied to the elements with index 0 in each of the *sequences*, and possibly then to the elements with index 1, and so on, until a termination criterion is met or the end of the shortest of the *sequences* is reached. 



<ClLinks styled={true} term={"every"}><b>every</b></ClLinks> returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks> as soon as any invocation of <ClLinks styled={true} term={"predicate"}><i>predicate</i></ClLinks> returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. If the end of a *sequence* is reached, <ClLinks styled={true} term={"every"}><b>every</b></ClLinks> returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. Thus, <ClLinks styled={true} term={"every"}><b>every</b></ClLinks> returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if and only if every invocation of <ClLinks styled={true} term={"predicate"}><i>predicate</i></ClLinks> returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. 



<ClLinks styled={true} term={"some"}><b>some</b></ClLinks> returns the first <ClLinks styled={true} term={"non-nil"}><i>non-nil</i></ClLinks> value which is returned by an invocation of <ClLinks styled={true} term={"predicate"}><i>predicate</i></ClLinks>. If the end of a *sequence* is reached without any invocation of the <ClLinks styled={true} term={"predicate"}><i>predicate</i></ClLinks> returning <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, <ClLinks styled={true} term={"some"}><b>some</b></ClLinks> returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. Thus, <ClLinks styled={true} term={"some"}><b>some</b></ClLinks> returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if and only if some invocation of <ClLinks styled={true} term={"predicate"}><i>predicate</i></ClLinks> returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. 



<ClLinks styled={true} term={"notany"}><b>notany</b></ClLinks> returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks> as soon as any invocation of <ClLinks styled={true} term={"predicate"}><i>predicate</i></ClLinks> returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. If the end of a *sequence* is reached, <ClLinks styled={true} term={"notany"}><b>notany</b></ClLinks> returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. Thus, <ClLinks styled={true} term={"notany"}><b>notany</b></ClLinks> returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if and only if it is not the case that any invocation of <ClLinks styled={true} term={"predicate"}><i>predicate</i></ClLinks> returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. 



<ClLinks styled={true} term={"notevery"}><b>notevery</b></ClLinks> returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> as soon as any invocation of <ClLinks styled={true} term={"predicate"}><i>predicate</i></ClLinks> returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. If the end of a *sequence* is reached, <ClLinks styled={true} term={"notevery"}><b>notevery</b></ClLinks> returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. Thus, <ClLinks styled={true} term={"notevery"}><b>notevery</b></ClLinks> returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if and only if it is not the case that every invocation of <ClLinks styled={true} term={"predicate"}><i>predicate</i></ClLinks> returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. 



Data and Control 











**Examples:**
```lisp

(every #’characterp "abc") → true 
(some #’= ’(1 2 3 4 5) ’(5 4 3 2 1)) → true 
(notevery #’< ’(1 2 3 4) ’(5 6 7 8) ’(9 10 11 12)) → false 
(notany #’> ’(1 2 3 4) ’(5 6 7 8) ’(9 10 11 12)) → true 

```
**Exceptional Situations:** 



Should signal <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if its first argument is neither a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> nor a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> or if any subsequent argument is not a *proper sequence*. 



Other exceptional situations are possible, depending on the nature of the <ClLinks styled={true} term={"predicate"}><i>predicate</i></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"and"}><b>and</b></ClLinks>, <ClLinks styled={true} term={"or"}><b>or</b></ClLinks>, Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



(notany *predicate \{sequence\}*\*) *≡* (not (some *predicate \{sequence\}*\*)) 



(notevery *predicate \{sequence\}*\*) *≡* (not (every *predicate \{sequence\}*\*)) 



