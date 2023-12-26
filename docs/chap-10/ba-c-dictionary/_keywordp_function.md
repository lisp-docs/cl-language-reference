**keywordp** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"keywordp"}><b>keywordp</b></DictionaryLink> *object → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> is a <GlossaryTerm  term={"keyword"}><i>keyword</i></GlossaryTerm> <sub>1</sub>; otherwise, returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 



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







 



 



