**characterp** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"characterp"}><b>characterp</b></DictionaryLink> *object → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"character"}><b>character</b></DictionaryLink>; otherwise, returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



**Examples:**
```lisp

(characterp #\a) *→ true* 
(characterp ’a) *→ false* 
(characterp "a") *→ false* 
(characterp 65.) *→ false* 
(characterp #\Newline) *→ true* 
;; This next example presupposes an implementation 
;; in which #\Rubout is an implementation-defined character. 
(characterp #\Rubout) *→ true* 




```
**See Also:** 



<DictionaryLink styled={true} term={"character"}><b>character</b></DictionaryLink> (<GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>), <DictionaryLink styled={true} term={"typep"}><b>typep</b></DictionaryLink> 



**Notes:** 



(characterp <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>) *≡* (typep <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> ’character) 



