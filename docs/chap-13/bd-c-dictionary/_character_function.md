**character** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"character"}><b>character</b></ClLinks> *character → denoted-character* 



**Arguments and Values:** 



<ClLinks styled={true} term={"character"}><i>character</i></ClLinks>—a <GlossaryTerm styled={true} term={"character designator"}><i>character designator</i></GlossaryTerm> . 



*denoted-character*—a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> . 



**Description:** 



Returns the <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> denoted by the <GlossaryTerm styled={true} term={"character designator"}><i>character designator</i></GlossaryTerm> . 







 



 



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



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is not a <GlossaryTerm styled={true} term={"character designator"}><i>character designator</i></GlossaryTerm> . 



**See Also:** 



<ClLinks styled={true} term={"coerce"}><b>coerce</b></ClLinks> 



**Notes:** 



(character <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>) *≡* (coerce <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> ’character) 



