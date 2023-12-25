**cons** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"cons"}><b>cons</b></DictionaryLink> *object-1 object-2 → cons* 



**Arguments and Values:** 



*object-1*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*object-2*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm>. 



**Description:** 



Creates a *fresh cons*, the <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> of which is *object-1* and the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> of which is *object-2*. 



**Examples:**
```lisp

(cons 1 2) *→* (1 . 2) 
(cons 1 nil) *→* (1) 
(cons nil 2) *→* (NIL . 2) 
(cons nil nil) *→* (NIL) 
(cons 1 (cons 2 (cons 3 (cons 4 nil)))) *→* (1 2 3 4) 
(cons ’a ’b) *→* (A . B) 
(cons ’a (cons ’b (cons ’c ’()))) *→* (A B C) 
(cons ’a ’(b c d)) *→* (A B C D) 

```
**See Also:** 



<DictionaryLink styled={true} term={"list"}><b>list</b></DictionaryLink> 



**Notes:** 



If *object-2* is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, <DictionaryLink styled={true} term={"cons"}><b>cons</b></DictionaryLink> can be thought of as producing a new <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> which is like it but has *object-1* prepended. 



