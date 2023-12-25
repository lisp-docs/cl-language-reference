**push** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"push"}><b>push</b></DictionaryLink> *item place → new-place-value* 



**Arguments and Values:** 



*item*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of which may be any <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*new-place-value*—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> (the new <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>). 







 



 



**Description:** 



<DictionaryLink styled={true} term={"push"}><b>push</b></DictionaryLink> prepends *item* to the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> that is stored in <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>, stores the resulting <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> in <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>, and returns the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



For information about the <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"subform"}><i>subforms</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>, see Section 5.1.1.1 (Evaluation of Subforms to Places). 



**Examples:**
```lisp

(setq llst ’(nil)) *→* (NIL) 
(push 1 (car llst)) *→* (1) 
llst *→* ((1)) 
(push 1 (car llst)) *→* (1 1) 
llst *→* ((1 1)) 
(setq x ’(a (b c) d)) *→* (A (B C) D) 
(push 5 (cadr x)) *→* (5 B C) 
x *→* (A (5 B C) D) 

```
**Side Effects:** 



The contents of <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> are modified. 



**See Also:** 



<DictionaryLink styled={true} term={"pop"}><b>pop</b></DictionaryLink>, <DictionaryLink styled={true} term={"pushnew"}><b>pushnew</b></DictionaryLink>, Section 5.1 (Generalized Reference) 



**Notes:** 



The effect of (push *item place*) is equivalent to 



(setf place (cons *item place*)) 



except that the <GlossaryTerm styled={true} term={"subform"}><i>subforms</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> are evaluated only once, and *item* is evaluated before <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>. 