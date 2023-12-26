**pop** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"pop"}><b>pop</b></ClLinks> *place → element* 



**Arguments and Values:** 



<ClLinks styled={true} term={"place"}><i>place</i></ClLinks>—a <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>, the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of which is a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> (possibly, but necessarily, a <GlossaryTerm styled={true} term={"dotted list"}><i>dotted list</i></GlossaryTerm> or *circular list<ClLinks styled={true} term={"t"}><i>). </i></ClLinks>element<ClLinks styled={true} term={"t"}><i>—an </i></ClLinks>object* (the <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> of the contents of <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>). 



**Description:** 



<ClLinks styled={true} term={"pop"}><b>pop</b></ClLinks> <ClLinks styled={true} term={"read"}><i>reads</i></ClLinks> the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>, remembers the <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> of the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> which was retrieved, <ClLinks styled={true} term={"write"}><i>writes</i></ClLinks> the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> of the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> back into the <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>, and finally <ClLinks styled={true} term={"yield"}><i>yields</i></ClLinks> the <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> of the originally retrieved <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 







 



 



For information about the <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> of <ClLinks styled={true} term={"subform"}><i>subforms</i></ClLinks> of <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>, see Section 5.1.1.1 (Evaluation of Subforms to Places). 



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



The contents of <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> are modified. 



**See Also:** 



<ClLinks styled={true} term={"push"}><b>push</b></ClLinks>, <ClLinks styled={true} term={"pushnew"}><b>pushnew</b></ClLinks>, Section 5.1 (Generalized Reference) 



**Notes:** 



The effect of (pop <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>) is roughly equivalent to 



(prog1 (car <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>) (setf <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> (cdr <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>))) 



except that the latter would evaluate any <ClLinks styled={true} term={"subform"}><i>subforms</i></ClLinks> of <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> three times, while <ClLinks styled={true} term={"pop"}><b>pop</b></ClLinks> evaluates them only once. 



