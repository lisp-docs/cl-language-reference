**standard-char-p** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"standard-char-p"}><b>standard-char-p</b></DictionaryLink> *character → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> . 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> is of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"standard-char"}><b>standard-char</b></DictionaryLink>; otherwise, returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



**Examples:**
```lisp

(standard-char-p #\Space) *→ true* 
(standard-char-p #\~) *→ true* 
;; This next example presupposes an implementation 
;; in which #\Bell is a defined character. 
(standard-char-p #\Bell) *→ false* 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> . 







 



 



**char-upcase, char-downcase** 



