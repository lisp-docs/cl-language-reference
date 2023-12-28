**character** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"character"}><b>character</b></DictionaryLink> *character → denoted-character* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"character designator"}><i>character designator</i></GlossaryTerm> . 



*denoted-character*—a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> . 



**Description:** 



Returns the <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> denoted by the <GlossaryTerm styled={true} term={"character designator"}><i>character designator</i></GlossaryTerm> . 







 



 



**Examples:**
```lisp
(character #\a) → #\a 
(character "a") → #\a 
(character ’a) → #\A 
(character ’\a) → #\a 
(character 65.) is an error. 
(character ’apple) is an error. 
```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"character designator"}><i>character designator</i></GlossaryTerm> . 



**See Also:** 



<DictionaryLink styled={true} term={"coerce"}><b>coerce</b></DictionaryLink> 



**Notes:** 



(character <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>) *≡* (coerce <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> ’character) 



