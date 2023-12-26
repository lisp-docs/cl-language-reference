**progv** <GlossaryTerm styled={true} term={"special operator"}><i>Special Operator</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"progv"}><b>progv</b></DictionaryLink> *symbols values \{form\}*\* → \{result\}\* 



**Arguments and Values:** 



<GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm>—a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm>; evaluated. 



<GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm>—a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm>; evaluated. 



<GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>. 



*results*—the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"progv"}><b>progv</b></DictionaryLink> creates new dynamic variable <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm> and executes each <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> using those <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm>. Each <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> is evaluated in order. 



<DictionaryLink  term={"progv"}><b>progv</b></DictionaryLink> allows <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> one or more dynamic variables whose names may be determined at run time. Each <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> is evaluated in order with the dynamic variables whose names are in <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> bound to corresponding <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm>. If too few <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> are supplied, the remaining <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> are bound and then made to have no value. If too many <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> are supplied, the excess values are ignored. The <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm> of the dynamic variables are undone on exit from <DictionaryLink  term={"progv"}><b>progv</b></DictionaryLink>. 



**Examples:**
```lisp
(setq \*x\* 1) → 1 
(progv ’(\*x\*) ’(2) \*x\*) → 2 
\*x\* → 1 
Assuming \*x\* is not globally special, 
(let ((\*x\* 3)) 
  (progv ’(\*x\*) ’(4) 
    (list \*x\* (symbol-value ’\*x\*)))) → (3 4) 


```
**See Also:** 



<DictionaryLink  term={"let"}><b>let</b></DictionaryLink>, Section 3.1 (Evaluation) 



**Notes:** 



Among other things, <DictionaryLink  term={"progv"}><b>progv</b></DictionaryLink> is useful when writing interpreters for languages embedded in Lisp; it provides a handle on the mechanism for *binding dynamic variables*. 



