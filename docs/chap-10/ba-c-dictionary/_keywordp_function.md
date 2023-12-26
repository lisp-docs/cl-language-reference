**keywordp** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"keywordp"}><b>keywordp</b></DictionaryLink> *object → generalized-boolean* 



**Arguments and Values:** 



<ClLinks  term={"object"}><i>object</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <ClLinks  term={"true"}><i>true</i></ClLinks> if <ClLinks  term={"object"}><i>object</i></ClLinks> is a <ClLinks  term={"keyword"}><i>keyword</i></ClLinks> <sub>1</sub>; otherwise, returns <ClLinks  term={"false"}><i>false</i></ClLinks>. 



**Examples:**
```lisp
(keywordp ’elephant) → false 
(keywordp 12) → false 
(keywordp :test) → true 
(keywordp ’:test) → true 
(keywordp nil) → false 
(keywordp :nil) → true 
(keywordp ’(:test)) → false 
(keywordp "hello") → false 
(keywordp ":hello") → false 
(keywordp ’&optional) → false 
```
**See Also:** 



<DictionaryLink  term={"constantp"}><b>constantp</b></DictionaryLink>, <DictionaryLink  term={"keyword"}><b>keyword</b></DictionaryLink>, <DictionaryLink  term={"symbolp"}><b>symbolp</b></DictionaryLink>, <DictionaryLink  term={"symbol-package"}><b>symbol-package</b></DictionaryLink> 







 



 



