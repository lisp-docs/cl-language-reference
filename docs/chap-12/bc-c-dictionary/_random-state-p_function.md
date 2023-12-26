**random-state-p** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"random-state-p"}><b>random-state-p</b></DictionaryLink> *object → generalized-boolean* 



**Arguments and Values:** 



<ClLinks  term={"object"}><i>object</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <ClLinks  term={"true"}><i>true</i></ClLinks> if <ClLinks  term={"object"}><i>object</i></ClLinks> is of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"random-state"}><b>random-state</b></DictionaryLink>; otherwise, returns <ClLinks  term={"false"}><i>false</i></ClLinks>. 



**Examples:**
```lisp
(random-state-p \*random-state\*) → true 
(random-state-p (make-random-state)) → true 
(random-state-p ’test-function) → false 
```
**See Also:** 



<DictionaryLink  term={"make-random-state"}><b>make-random-state</b></DictionaryLink>, <DictionaryLink  term={"random-state"}><b>\*random-state\*</b></DictionaryLink> 



**Notes:** 



(random-state-p <ClLinks  term={"object"}><i>object</i></ClLinks>) *≡* (typep <ClLinks  term={"object"}><i>object</i></ClLinks> ’random-state) 



