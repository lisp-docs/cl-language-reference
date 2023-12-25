**make-list** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"make-list"}><b>make-list</b></DictionaryLink> *size* &amp;key *initial-element → list* 



**Arguments and Values:** 



*size*—a non-negative *integer* . 



*initial-element*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. The default is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



<GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



**Description:** 



Returns a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"length"}><i>length</i></GlossaryTerm> given by *size*, each of the <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> of which is *initial-element*. **Examples:**
```lisp

(make-list 5) *→* (NIL NIL NIL NIL NIL) 
(make-list 3 :initial-element ’rah) *→* (RAH RAH RAH) 
(make-list 2 :initial-element ’(1 2 3)) *→* ((1 2 3) (1 2 3)) 
(make-list 0) *→* NIL ;*i.e.*, () 
(make-list 0 :initial-element ’new-element) *→* NIL 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *size* is not a non-negative *integer* . 



**See Also:** 



<DictionaryLink styled={true} term={"cons"}><b>cons</b></DictionaryLink>, <DictionaryLink styled={true} term={"list"}><b>list</b></DictionaryLink> 



