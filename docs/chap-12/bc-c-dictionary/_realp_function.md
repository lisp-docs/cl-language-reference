**realp** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"realp"}><b>realp</b></DictionaryLink> *object → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> is of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"real"}><b>real</b></DictionaryLink>; otherwise, returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 



**Examples:**
```lisp
(realp 12) → true 

(realp #c(5/3 7.2)) → false 
(realp nil) → false 
(realp (cons 1 2)) → false 
```
**Notes:** 



(realp <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>) *≡* (typep <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> ’real) 



