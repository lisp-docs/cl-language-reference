**makunbound** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"makunbound"}><b>makunbound</b></DictionaryLink> *symbol → symbol* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> 



**Description:** 



Makes the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> be <GlossaryTerm styled={true} term={"unbound"}><i>unbound</i></GlossaryTerm>, regardless of whether it was previously <GlossaryTerm styled={true} term={"bound"}><i>bound</i></GlossaryTerm>. 



**Examples:**
```lisp

(setf (symbol-value ’a) 1) 
(boundp ’a) *→ true* 
a *→* 1 
(makunbound ’a) *→* A 
(boundp ’a) *→ false* 

```
**Side Effects:** 



The *value cell* of <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is modified. 



**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 







 



 



**See Also:** 



<DictionaryLink styled={true} term={"boundp"}><b>boundp</b></DictionaryLink>, <DictionaryLink styled={true} term={"fmakunbound"}><b>fmakunbound</b></DictionaryLink> 



