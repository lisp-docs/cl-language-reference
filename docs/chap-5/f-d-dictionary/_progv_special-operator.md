**progv** *Special Operator* 



**Syntax:** 



<DictionaryLink styled={true} term={"progv"}><b>progv</b></DictionaryLink> *symbols values \{form\}*\* *→ \{result\}*\* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm>; evaluated. 



<GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>; evaluated. 



<GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>—an *implicit progn*. 



*results*—the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"progv"}><b>progv</b></DictionaryLink> creates new dynamic variable <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> and executes each <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> using those <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm>. Each <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is evaluated in order. 



<DictionaryLink styled={true} term={"progv"}><b>progv</b></DictionaryLink> allows <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> one or more dynamic variables whose names may be determined at run time. Each <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is evaluated in order with the dynamic variables whose names are in <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> bound to corresponding <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm>. If too few <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> are supplied, the remaining <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> are bound and then made to have no value. If too many <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> are supplied, the excess values are ignored. The <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> of the dynamic variables are undone on exit from <DictionaryLink styled={true} term={"progv"}><b>progv</b></DictionaryLink>. 



**Examples:**
```lisp

(setq \*x\* 1) *→* 1 
(progv ’(\*x\*) ’(2) \*x\*) *→* 2 
\*x\* *→* 1 
Assuming \*x\* is not globally special, 
(let ((\*x\* 3)) 
  (progv ’(\*x\*) ’(4) 
    (list \*x\* (symbol-value ’\*x\*)))) *→* (3 4) 




```
**See Also:** 



<DictionaryLink styled={true} term={"let"}><b>let</b></DictionaryLink>, Section 3.1 (Evaluation) 



**Notes:** 



Among other things, <DictionaryLink styled={true} term={"progv"}><b>progv</b></DictionaryLink> is useful when writing interpreters for languages embedded in Lisp; it provides a handle on the mechanism for *binding dynamic variables*. 



