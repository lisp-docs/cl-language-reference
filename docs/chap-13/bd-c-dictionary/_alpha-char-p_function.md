**alpha-char-p** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"alpha-char-p"}><b>alpha-char-p</b></ClLinks> *character → generalized-boolean* 



**Arguments and Values:** 



<ClLinks styled={true} term={"character"}><i>character</i></ClLinks>—a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> . 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> is an <ClLinks styled={true} term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>1</sub> <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> ; otherwise, returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



**Examples:**
```lisp
(alpha-char-p #\a) → true 
(alpha-char-p #\5) → false 
(alpha-char-p #\Newline) → false 
;; This next example presupposes an implementation 
;; in which #\*α* is a defined character. 
(alpha-char-p #\*α*) → implementation-dependent 
```
**Affected By:** 



None. (In particular, the results of this predicate are independent of any special syntax which might have been enabled in the *current readtable*.) 



**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> is not a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> . 



**See Also:** 



<ClLinks styled={true} term={"alphanumericp"}><b>alphanumericp</b></ClLinks>, Section 13.1.10 (Documentation of Implementation-Defined Scripts) 



 



 



