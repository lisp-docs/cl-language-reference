**makunbound** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"makunbound"}><b>makunbound</b></DictionaryLink> *symbol → symbol* 



**Arguments and Values:** 



<GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> 



**Description:** 



Makes the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> be <GlossaryTerm  term={"unbound"}><i>unbound</i></GlossaryTerm>, regardless of whether it was previously <GlossaryTerm  term={"bound"}><i>bound</i></GlossaryTerm>. 



**Examples:**
```lisp
(setf (symbol-value ’a) 1) 
(boundp ’a) → true 
a → 1 
(makunbound ’a) → A 
(boundp ’a) → false 
```
**Side Effects:** 



The <GlossaryTerm styled={true} term={"value cell"}><i>value cell</i></GlossaryTerm> of <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is modified. 



**Exceptional Situations:** 



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is not a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 







 



 



**See Also:** 



<DictionaryLink  term={"boundp"}><b>boundp</b></DictionaryLink>, <DictionaryLink  term={"fmakunbound"}><b>fmakunbound</b></DictionaryLink> 



