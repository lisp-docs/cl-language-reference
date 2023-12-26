**complexp** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"complexp"}><b>complexp</b></DictionaryLink> *object → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> is of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"complex"}><b>complex</b></DictionaryLink>; otherwise, returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 



**Examples:**
```lisp
(complexp 1.2d2) → false 
(complexp #c(5/3 7.2)) → true 
```
**See Also:** 



<DictionaryLink  term={"complex"}><b>complex</b></DictionaryLink> (<GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> and <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm>), <DictionaryLink  term={"typep"}><b>typep</b></DictionaryLink> 



**Notes:** 



(complexp <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>) *≡* (typep <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> ’complex) 



