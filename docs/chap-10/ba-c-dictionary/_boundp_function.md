**boundp** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"boundp"}><b>boundp</b></DictionaryLink> *symbol → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is <GlossaryTerm  term={"bound"}><i>bound</i></GlossaryTerm>; otherwise, returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 







 



 



**Examples:**
```lisp
(setq x 1) → 1 
(boundp ’x) → true 
(makunbound ’x) → X 
(boundp ’x) → false 
(let ((x 2)) (boundp ’x)) → false 
(let ((x 2)) (declare (special x)) (boundp ’x)) → true 
```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is not a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"set"}><b>set</b></DictionaryLink>, <DictionaryLink  term={"setq"}><b>setq</b></DictionaryLink>, <DictionaryLink  term={"symbol-value"}><b>symbol-value</b></DictionaryLink>, <DictionaryLink  term={"makunbound"}><b>makunbound</b></DictionaryLink> 



**Notes:** 



The <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> **bound** determines only whether a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> has a value in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>; any <GlossaryTerm styled={true} term={"lexical binding"}><i>lexical bindings</i></GlossaryTerm> are ignored. 



