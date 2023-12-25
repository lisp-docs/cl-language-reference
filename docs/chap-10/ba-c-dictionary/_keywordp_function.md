**keywordp** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"keywordp"}><b>keywordp</b></DictionaryLink> *object → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"keyword"}><i>keyword</i></GlossaryTerm> <sub>1</sub>; otherwise, returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



**Examples:**
```lisp

(keywordp ’elephant) *→ false* 
(keywordp 12) *→ false* 
(keywordp :test) *→ true* 
(keywordp ’:test) *→ true* 
(keywordp nil) *→ false* 
(keywordp :nil) *→ true* 
(keywordp ’(:test)) *→ false* 
(keywordp "hello") *→ false* 
(keywordp ":hello") *→ false* 
(keywordp ’&optional) *→ false* 

```
**See Also:** 



<DictionaryLink styled={true} term={"constantp"}><b>constantp</b></DictionaryLink>, <DictionaryLink styled={true} term={"keyword"}><b>keyword</b></DictionaryLink>, <DictionaryLink styled={true} term={"symbolp"}><b>symbolp</b></DictionaryLink>, <DictionaryLink styled={true} term={"symbol-package"}><b>symbol-package</b></DictionaryLink> 







 



 



