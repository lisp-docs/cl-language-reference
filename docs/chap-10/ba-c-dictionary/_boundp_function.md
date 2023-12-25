**boundp** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"boundp"}><b>boundp</b></DictionaryLink> *symbol → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"bound"}><i>bound</i></GlossaryTerm>; otherwise, returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 







 



 



**Examples:**
```lisp

(setq x 1) *→* 1 
(boundp ’x) *→ true* 
(makunbound ’x) *→* X 
(boundp ’x) *→ false* 
(let ((x 2)) (boundp ’x)) *→ false* 
(let ((x 2)) (declare (special x)) (boundp ’x)) *→ true* 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink styled={true} term={"set"}><b>set</b></DictionaryLink>, <DictionaryLink styled={true} term={"setq"}><b>setq</b></DictionaryLink>, <DictionaryLink styled={true} term={"symbol-value"}><b>symbol-value</b></DictionaryLink>, <DictionaryLink styled={true} term={"makunbound"}><b>makunbound</b></DictionaryLink> 



**Notes:** 



The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> **bound** determines only whether a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> has a value in the *global environment*; any *lexical bindings* are ignored. 



