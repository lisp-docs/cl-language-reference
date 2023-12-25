**listp** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"listp"}><b>listp</b></DictionaryLink> *object → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"list"}><b>list</b></DictionaryLink>; otherwise, returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



**Examples:**
```lisp

(listp nil) *→ true* 
(listp (cons 1 2)) *→ true* 
(listp (make-array 6)) *→ false* 
(listp t) *→ false* 

```
**See Also:** 



<DictionaryLink styled={true} term={"consp"}><b>consp</b></DictionaryLink> 



**Notes:** 



If <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm>, <DictionaryLink styled={true} term={"listp"}><b>listp</b></DictionaryLink> does not check whether <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is a *proper list*; it returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> for any kind of <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



(listp <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>) *≡* (typep <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> ’list) *≡* (typep <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> ’(or cons null)) 







 



 



