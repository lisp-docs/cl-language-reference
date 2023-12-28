**pop** <GlossaryTerm term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink term={"pop"}><b>pop</b></DictionaryLink> *place → element* 



**Arguments and Values:** 



<GlossaryTerm term={"place"}><i>place</i></GlossaryTerm>—a <GlossaryTerm term={"place"}><i>place</i></GlossaryTerm>, the <GlossaryTerm term={"value"}><i>value</i></GlossaryTerm> of which is a <GlossaryTerm term={"list"}><i>list</i></GlossaryTerm> (possibly, but necessarily, a <GlossaryTerm term={"dotted list"}><i>dotted list</i></GlossaryTerm> or *circular list<GlossaryTerm term={"t"}><i>). </i></GlossaryTerm>element<GlossaryTerm term={"t"}><i>—an </i></GlossaryTerm>object* (the <GlossaryTerm term={"car"}><i>car</i></GlossaryTerm> of the contents of <GlossaryTerm term={"place"}><i>place</i></GlossaryTerm>). 



**Description:** 



<DictionaryLink term={"pop"}><b>pop</b></DictionaryLink> <GlossaryTerm term={"read"}><i>reads</i></GlossaryTerm> the <GlossaryTerm term={"value"}><i>value</i></GlossaryTerm> of <GlossaryTerm term={"place"}><i>place</i></GlossaryTerm>, remembers the <GlossaryTerm term={"car"}><i>car</i></GlossaryTerm> of the <GlossaryTerm term={"list"}><i>list</i></GlossaryTerm> which was retrieved, <GlossaryTerm term={"write"}><i>writes</i></GlossaryTerm> the <GlossaryTerm term={"cdr"}><i>cdr</i></GlossaryTerm> of the <GlossaryTerm term={"list"}><i>list</i></GlossaryTerm> back into the <GlossaryTerm term={"place"}><i>place</i></GlossaryTerm>, and finally <GlossaryTerm term={"yield"}><i>yields</i></GlossaryTerm> the <GlossaryTerm term={"car"}><i>car</i></GlossaryTerm> of the originally retrieved <GlossaryTerm term={"list"}><i>list</i></GlossaryTerm>. 







 



 



For information about the <GlossaryTerm term={"evaluation"}><i>evaluation</i></GlossaryTerm> of <GlossaryTerm term={"subform"}><i>subforms</i></GlossaryTerm> of <GlossaryTerm term={"place"}><i>place</i></GlossaryTerm>, see Section 5.1.1.1 (Evaluation of Subforms to Places). 



**Examples:**
```lisp
(setq stack ’(a b c)) → (A B C) 
(pop stack) → A 
stack → (B C) 
(setq llst ’((1 2 3 4))) → ((1 2 3 4)) 
(pop (car llst)) → 1 
llst → ((2 3 4)) 
```
**Side Effects:** 



The contents of <GlossaryTerm term={"place"}><i>place</i></GlossaryTerm> are modified. 



**See Also:** 



<DictionaryLink term={"push"}><b>push</b></DictionaryLink>, <DictionaryLink term={"pushnew"}><b>pushnew</b></DictionaryLink>, Section 5.1 (Generalized Reference) 



**Notes:** 



The effect of (pop <GlossaryTerm term={"place"}><i>place</i></GlossaryTerm>) is roughly equivalent to 



(prog1 (car <GlossaryTerm term={"place"}><i>place</i></GlossaryTerm>) (setf <GlossaryTerm term={"place"}><i>place</i></GlossaryTerm> (cdr <GlossaryTerm term={"place"}><i>place</i></GlossaryTerm>))) 



except that the latter would evaluate any <GlossaryTerm term={"subform"}><i>subforms</i></GlossaryTerm> of <GlossaryTerm term={"place"}><i>place</i></GlossaryTerm> three times, while <DictionaryLink term={"pop"}><b>pop</b></DictionaryLink> evaluates them only once. 



