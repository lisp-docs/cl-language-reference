**stringp** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"stringp"}><b>stringp</b></DictionaryLink> *object → generalized-boolean* 



**Arguments and Values:** 



<ClLinks  term={"object"}><i>object</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <ClLinks  term={"true"}><i>true</i></ClLinks> if <ClLinks  term={"object"}><i>object</i></ClLinks> is of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"string"}><b>string</b></DictionaryLink>; otherwise, returns <ClLinks  term={"false"}><i>false</i></ClLinks>. 







 



 



**Examples:**
```lisp
(stringp "aaaaaa") → true 
(stringp #\a) → false 
```
**See Also:** 



<DictionaryLink  term={"typep"}><b>typep</b></DictionaryLink>, <DictionaryLink  term={"string"}><b>string</b></DictionaryLink> (<ClLinks  term={"type"}><i>type</i></ClLinks>) 



**Notes:** 



(stringp <ClLinks  term={"object"}><i>object</i></ClLinks>) *≡* (typep <ClLinks  term={"object"}><i>object</i></ClLinks> ’string) 



