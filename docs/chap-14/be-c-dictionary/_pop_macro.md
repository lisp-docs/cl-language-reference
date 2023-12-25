**pop** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"pop"}><b>pop</b></DictionaryLink> *place → element* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of which is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> (possibly, but necessarily, a *dotted list* or *circular list<GlossaryTerm styled={true} term={"t"}><i>). </i></GlossaryTerm>element<GlossaryTerm styled={true} term={"t"}><i>—an </i></GlossaryTerm>object* (the <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> of the contents of <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>). 



**Description:** 



<DictionaryLink styled={true} term={"pop"}><b>pop</b></DictionaryLink> <GlossaryTerm styled={true} term={"read"}><i>reads</i></GlossaryTerm> the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>, remembers the <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> which was retrieved, <GlossaryTerm styled={true} term={"write"}><i>writes</i></GlossaryTerm> the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> back into the <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>, and finally <GlossaryTerm styled={true} term={"yield"}><i>yields</i></GlossaryTerm> the <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> of the originally retrieved <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 







 



 



For information about the <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"subform"}><i>subforms</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>, see Section 5.1.1.1 (Evaluation of Subforms to Places). 



**Examples:**
```lisp

(setq stack ’(a b c)) *→* (A B C) 
(pop stack) *→* A 
stack *→* (B C) 
(setq llst ’((1 2 3 4))) *→* ((1 2 3 4)) 
(pop (car llst)) *→* 1 
llst *→* ((2 3 4)) 

```
**Side Effects:** 



The contents of <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> are modified. 



**See Also:** 



<DictionaryLink styled={true} term={"push"}><b>push</b></DictionaryLink>, <DictionaryLink styled={true} term={"pushnew"}><b>pushnew</b></DictionaryLink>, Section 5.1 (Generalized Reference) 



**Notes:** 



The effect of (pop <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>) is roughly equivalent to 



(prog1 (car <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>) (setf <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> (cdr <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>))) 



except that the latter would evaluate any <GlossaryTerm styled={true} term={"subform"}><i>subforms</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> three times, while <DictionaryLink styled={true} term={"pop"}><b>pop</b></DictionaryLink> evaluates them only once. 



