**alpha-char-p** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"alpha-char-p"}><b>alpha-char-p</b></DictionaryLink> *character → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> . 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> is an <GlossaryTerm styled={true} term={"alphabetic"}><i>alphabetic</i></GlossaryTerm><sub>1</sub> <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> ; otherwise, returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



**Examples:**
```lisp

(alpha-char-p #\a) *→ true* 
(alpha-char-p #\5) *→ false* 
(alpha-char-p #\Newline) *→ false* 
;; This next example presupposes an implementation 
;; in which #\*α* is a defined character. 
(alpha-char-p #\*α*) *→ implementation-dependent* 

```
**Affected By:** 



None. (In particular, the results of this predicate are independent of any special syntax which might have been enabled in the *current readtable*.) 



**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> . 



**See Also:** 



<DictionaryLink styled={true} term={"alphanumericp"}><b>alphanumericp</b></DictionaryLink>, Section 13.1.10 (Documentation of Implementation-Defined Scripts) 



 



 



