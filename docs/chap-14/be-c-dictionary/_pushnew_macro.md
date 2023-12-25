**pushnew** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"pushnew"}><b>pushnew</b></DictionaryLink> *item place* &amp;key *key test test-not* 



*→ new-place-value* 



**Arguments and Values:** 



*item*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of which is a *proper list*. 



*test*—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> that returns a *generalized boolean*. *test-not<GlossaryTerm styled={true} term={"t"}><i>—a </i></GlossaryTerm>designator* for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> that returns a *generalized boolean*. *key*—a *designator* for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of one argument, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*new-place-value*—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> (the new <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>). 



**Description:** 



<DictionaryLink styled={true} term={"pushnew"}><b>pushnew</b></DictionaryLink> tests whether *item* is the same as any existing element of the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> stored in <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>. If *item* is not, it is prepended to the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, and the new <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> is stored in <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"pushnew"}><b>pushnew</b></DictionaryLink> returns the new <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> that is stored in <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>. 



Whether or not *item* is already a member of the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> that is in <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> is determined by comparisons using :test or :test-not. The first argument to the :test or :test-not function is *item*; the second argument is an element of the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> in <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> as returned by the :key function (if supplied). 



If :key is supplied, it is used to extract the part to be tested from both *item* and the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> element, as for <DictionaryLink styled={true} term={"adjoin"}><b>adjoin</b></DictionaryLink>. 



The argument to the :key function is an element of the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> stored in <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>. The :key function typically returns part part of the element of the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. If :key is not supplied or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> element is used. 



For information about the <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"subform"}><i>subforms</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>, see Section 5.1.1.1 (Evaluation of Subforms to Places). 







 



 



It is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether or not <DictionaryLink styled={true} term={"pushnew"}><b>pushnew</b></DictionaryLink> actually executes the storing form for its <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> in the situation where the *item* is already a member of the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> held by <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>. 



**Examples:**
```lisp

(setq x ’(a (b c) d)) *→* (A (B C) D) 
(pushnew 5 (cadr x)) *→* (5 B C) 
x *→* (A (5 B C) D) 
(pushnew ’b (cadr x)) *→* (5 B C) 
x *→* (A (5 B C) D) 
(setq lst ’((1) (1 2) (1 2 3))) *→* ((1) (1 2) (1 2 3)) 
(pushnew ’(2) lst) *→* ((2) (1) (1 2) (1 2 3)) 
(pushnew ’(1) lst) *→* ((1) (2) (1) (1 2) (1 2 3)) 
(pushnew ’(1) lst :test ’equal) *→* ((1) (2) (1) (1 2) (1 2 3)) 
(pushnew ’(1) lst :key #’car) *→* ((1) (2) (1) (1 2) (1 2 3)) 

```
**Side Effects:** 



The contents of <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> may be modified. 



**See Also:** 



<DictionaryLink styled={true} term={"push"}><b>push</b></DictionaryLink>, <DictionaryLink styled={true} term={"adjoin"}><b>adjoin</b></DictionaryLink>, Section 5.1 (Generalized Reference) 



**Notes:** 



The effect of (pushnew item place :test p) 



is roughly equivalent to (setf place (adjoin item place :test p)) 



except that the <GlossaryTerm styled={true} term={"subform"}><i>subforms</i></GlossaryTerm> of place are evaluated only once, and item is evaluated before place. 