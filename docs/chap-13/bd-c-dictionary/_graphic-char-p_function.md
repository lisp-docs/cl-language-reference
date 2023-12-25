**graphic-char-p** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"graphic-char-p"}><b>graphic-char-p</b></DictionaryLink> *char → generalized-boolean* 



**Arguments and Values:** 



*char*—a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> . 







 



 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> is a *graphic character* ; otherwise, returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



**Examples:**
```lisp

(graphic-char-p #\G) *→ true* 
(graphic-char-p #\#) *→ true* 
(graphic-char-p #\Space) *→ true* 
(graphic-char-p #\Newline) *→ false* 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> . 



**See Also:** 



<DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink>, Section 2.1 (Character Syntax), Section 13.1.10 (Documentation of Implementation-Defined Scripts) 



