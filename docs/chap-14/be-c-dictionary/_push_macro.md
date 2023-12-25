**push** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"push"}><b>push</b></ClLinks> *item place → new-place-value* 



**Arguments and Values:** 



*item*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



<ClLinks styled={true} term={"place"}><i>place</i></ClLinks>—a <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>, the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of which may be any <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*new-place-value*—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> (the new <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>). 







 



 



**Description:** 



<ClLinks styled={true} term={"push"}><b>push</b></ClLinks> prepends *item* to the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> that is stored in <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>, stores the resulting <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> in <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>, and returns the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 



For information about the <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> of <ClLinks styled={true} term={"subform"}><i>subforms</i></ClLinks> of <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>, see Section 5.1.1.1 (Evaluation of Subforms to Places). 



**Examples:**
```lisp
(setq llst ’(nil)) → (NIL) 
(push 1 (car llst)) → (1) 
llst → ((1)) 
(push 1 (car llst)) → (1 1) 
llst → ((1 1)) 
(setq x ’(a (b c) d)) → (A (B C) D) 
(push 5 (cadr x)) → (5 B C) 
x → (A (5 B C) D) 
```
**Side Effects:** 



The contents of <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> are modified. 



**See Also:** 



<ClLinks styled={true} term={"pop"}><b>pop</b></ClLinks>, <ClLinks styled={true} term={"pushnew"}><b>pushnew</b></ClLinks>, Section 5.1 (Generalized Reference) 



**Notes:** 



The effect of (push *item place*) is equivalent to 



(setf place (cons *item place*)) 



except that the <ClLinks styled={true} term={"subform"}><i>subforms</i></ClLinks> of <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> are evaluated only once, and *item* is evaluated before <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>. 