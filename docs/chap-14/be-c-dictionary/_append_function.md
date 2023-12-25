**append** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"append"}><b>append</b></DictionaryLink> &amp;rest *lists → result* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>—each must be a *proper list* except the last, which may be any <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 







 



 



*result*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. This will be a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> unless the last <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> was not a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> and all preceding <GlossaryTerm styled={true} term={"list"}><i>lists</i></GlossaryTerm> were <GlossaryTerm styled={true} term={"null"}><i>null</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"append"}><b>append</b></DictionaryLink> returns a new <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> that is the concatenation of the copies. <GlossaryTerm styled={true} term={"list"}><i>lists</i></GlossaryTerm> are left unchanged; the *list structure* of each of <GlossaryTerm styled={true} term={"list"}><i>lists</i></GlossaryTerm> except the last is copied. The last argument is not copied; it becomes the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> of the final *dotted pair* of the concatenation of the preceding <GlossaryTerm styled={true} term={"list"}><i>lists</i></GlossaryTerm>, or is returned directly if there are no preceding *non-empty lists*. 



**Examples:**
```lisp

(append ’(a b c) ’(d e f) ’() ’(g)) *→* (A B C D E F G) 
(append ’(a b c) ’d) *→* (A B C . D) 
(setq lst ’(a b c)) *→* (A B C) 
(append lst ’(d)) *→* (A B C D) 
lst *→* (A B C) 
(append) *→* NIL 
(append ’a) *→* A 

```
**See Also:** 



<DictionaryLink styled={true} term={"nconc"}><b>nconc</b></DictionaryLink>, <DictionaryLink styled={true} term={"concatenate"}><b>concatenate</b></DictionaryLink> 



