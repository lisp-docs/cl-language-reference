**pushnew** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"pushnew"}><b>pushnew</b></ClLinks> *item place* &amp;key *key test test-not* 



→ new-place-value 



**Arguments and Values:** 



*item*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



<ClLinks styled={true} term={"place"}><i>place</i></ClLinks>—a <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>, the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of which is a *proper list*. 



*test*—a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> that returns a *generalized boolean*. *test-not<ClLinks styled={true} term={"t"}><i>—a </i></ClLinks>designator* for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> that returns a *generalized boolean*. *key*—a *designator* for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of one argument, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*new-place-value*—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> (the new <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>). 



**Description:** 



<ClLinks styled={true} term={"pushnew"}><b>pushnew</b></ClLinks> tests whether *item* is the same as any existing element of the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> stored in <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>. If *item* is not, it is prepended to the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, and the new <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> is stored in <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>. 



<ClLinks styled={true} term={"pushnew"}><b>pushnew</b></ClLinks> returns the new <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> that is stored in <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>. 



Whether or not *item* is already a member of the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> that is in <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> is determined by comparisons using :test or :test-not. The first argument to the :test or :test-not function is *item*; the second argument is an element of the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> in <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> as returned by the :key function (if supplied). 



If :key is supplied, it is used to extract the part to be tested from both *item* and the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> element, as for <ClLinks styled={true} term={"adjoin"}><b>adjoin</b></ClLinks>. 



The argument to the :key function is an element of the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> stored in <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>. The :key function typically returns part part of the element of the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. If :key is not supplied or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> element is used. 



For information about the <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> of <ClLinks styled={true} term={"subform"}><i>subforms</i></ClLinks> of <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>, see Section 5.1.1.1 (Evaluation of Subforms to Places). 







 



 



It is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether or not <ClLinks styled={true} term={"pushnew"}><b>pushnew</b></ClLinks> actually executes the storing form for its <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> in the situation where the *item* is already a member of the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> held by <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>. 



**Examples:**
```lisp
(setq x ’(a (b c) d)) → (A (B C) D) 
(pushnew 5 (cadr x)) → (5 B C) 
x → (A (5 B C) D) 
(pushnew ’b (cadr x)) → (5 B C) 
x → (A (5 B C) D) 
(setq lst ’((1) (1 2) (1 2 3))) → ((1) (1 2) (1 2 3)) 
(pushnew ’(2) lst) → ((2) (1) (1 2) (1 2 3)) 
(pushnew ’(1) lst) → ((1) (2) (1) (1 2) (1 2 3)) 
(pushnew ’(1) lst :test ’equal) → ((1) (2) (1) (1 2) (1 2 3)) 
(pushnew ’(1) lst :key #’car) → ((1) (2) (1) (1 2) (1 2 3)) 
```
**Side Effects:** 



The contents of <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> may be modified. 



**See Also:** 



<ClLinks styled={true} term={"push"}><b>push</b></ClLinks>, <ClLinks styled={true} term={"adjoin"}><b>adjoin</b></ClLinks>, Section 5.1 (Generalized Reference) 



**Notes:** 



The effect of (pushnew item place :test p) 



is roughly equivalent to (setf place (adjoin item place :test p)) 



except that the <ClLinks styled={true} term={"subform"}><i>subforms</i></ClLinks> of place are evaluated only once, and item is evaluated before place. 