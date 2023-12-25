**streamp** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"streamp"}><b>streamp</b></DictionaryLink> *object → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"stream"}><b>stream</b></DictionaryLink>; otherwise, returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"streamp"}><b>streamp</b></DictionaryLink> is unaffected by whether <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, if it is a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>, is <GlossaryTerm styled={true} term={"open"}><i>open</i></GlossaryTerm> or closed. 



**Examples:**
```lisp

(streamp \*terminal-io\*) *→ true* 
(streamp 1) *→ false* 

```
**Notes:** 



(streamp <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>) *≡* (typep <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> ’stream) 







 



 



