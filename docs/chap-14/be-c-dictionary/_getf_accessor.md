**getf** <GlossaryTerm styled={true} term={"accessor"}><i>Accessor</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"getf"}><b>getf</b></DictionaryLink> *plist indicator* &amp;optional *default → value* 



**(setf (getf** *place indicator* &amp;optional *default<DictionaryLink styled={true} term={"t"}><b>*)</b></DictionaryLink> *new-value***)** 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"plist"}><i>plist</i></GlossaryTerm>—a *property list*. 



<GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of which is a *property list*. 







 



 



<DictionaryLink styled={true} term={"getf"}><b>getf</b></DictionaryLink> 



<GlossaryTerm styled={true} term={"indicator"}><i>indicator</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*default*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. The default is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



<GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*new-value*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"getf"}><b>getf</b></DictionaryLink> finds a <GlossaryTerm styled={true} term={"property"}><i>property</i></GlossaryTerm> on the <GlossaryTerm styled={true} term={"plist"}><i>plist</i></GlossaryTerm> whose *property indicator* is <GlossaryTerm styled={true} term={"identical"}><i>identical</i></GlossaryTerm> to <GlossaryTerm styled={true} term={"indicator"}><i>indicator</i></GlossaryTerm>, and returns its corresponding *property value*. If there are multiple *properties*<sub>1</sub> with that *property indicator* , <DictionaryLink styled={true} term={"getf"}><b>getf</b></DictionaryLink> uses the first such <GlossaryTerm styled={true} term={"property"}><i>property</i></GlossaryTerm>. If there is no <GlossaryTerm styled={true} term={"property"}><i>property</i></GlossaryTerm> with that *property indicator* , *default* is returned. 



<DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink styled={true} term={"getf"}><b>getf</b></DictionaryLink> may be used to associate a new <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> with an existing indicator in the *property list* held by <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>, or to create a new assocation if none exists. If there are multiple *properties*<sub>1</sub> with that *property indicator* , <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink styled={true} term={"getf"}><b>getf</b></DictionaryLink> associates the *new-value* with the first such <GlossaryTerm styled={true} term={"property"}><i>property</i></GlossaryTerm>. When a <DictionaryLink styled={true} term={"getf"}><b>getf</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is used as a <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>, any *default* which is supplied is evaluated according to normal left-to-right evaluation rules, but its <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> is ignored. 



<DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink styled={true} term={"getf"}><b>getf</b></DictionaryLink> is permitted to either <GlossaryTerm styled={true} term={"write"}><i>write</i></GlossaryTerm> the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> itself, or modify of any part, <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> , of the *list structure* held by <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>. 



**Examples:**
```lisp

(setq x ’()) *→* NIL 
(getf x ’prop1) *→* NIL 
(getf x ’prop1 7) *→* 7 
(getf x ’prop1) *→* NIL 
(setf (getf x ’prop1) ’val1) *→* VAL1 
(eq (getf x ’prop1) ’val1) *→ true* 
(getf x ’prop1) *→* VAL1 
(getf x ’prop1 7) *→* VAL1 
x *→* (PROP1 VAL1) 
;; Examples of implementation variation permitted. 
(setq foo (list ’a ’b ’c ’d ’e ’f)) *→* (A B C D E F) 
(setq bar (cddr foo)) *→* (C D E F) 
(remf foo ’c) *→ true* 
foo *→* (A B E F) 
bar 
*→* (C D E F) 
<i><sup>or</sup>→</i> (C) 
<i><sup>or</sup>→</i> (NIL) 
<i><sup>or</sup>→</i> (C NIL) 
<i><sup>or</sup>→</i> (C D) 




```
**See Also:** 



<DictionaryLink styled={true} term={"get"}><b>get</b></DictionaryLink>, <DictionaryLink styled={true} term={"get-properties"}><b>get-properties</b></DictionaryLink>, <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink>, Section 5.1.2.2 (Function Call Forms as Places) 



**Notes:** 



There is no way (using <DictionaryLink styled={true} term={"getf"}><b>getf</b></DictionaryLink>) to distinguish an absent property from one whose value is *default*; but see <DictionaryLink styled={true} term={"get-properties"}><b>get-properties</b></DictionaryLink>. 



Note that while supplying a *default* argument to <DictionaryLink styled={true} term={"getf"}><b>getf</b></DictionaryLink> in a <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> situation is sometimes not very interesting, it is still important because some macros, such as <DictionaryLink styled={true} term={"push"}><b>push</b></DictionaryLink> and <DictionaryLink styled={true} term={"incf"}><b>incf</b></DictionaryLink>, require a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> argument which data is both <GlossaryTerm styled={true} term={"read"}><i>read</i></GlossaryTerm> from and *written* to. In such a context, if a *default* argument is to be supplied for the <GlossaryTerm styled={true} term={"read"}><i>read</i></GlossaryTerm> situation, it must be syntactically valid for the <GlossaryTerm styled={true} term={"write"}><i>write</i></GlossaryTerm> situation as well. For example, 



(let ((plist ’())) 



(incf (getf plist ’count 0)) 



plist) *→* (COUNT 1) 



