**progv** <GlossaryTerm styled={true} term={"special operator"}><i>Special Operator</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"progv"}><b>progv</b></DictionaryLink> *symbols values \{form\}*\* → \{result\}\* 



**Arguments and Values:** 



<ClLinks  term={"symbol"}><i>symbols</i></ClLinks>—a <ClLinks  term={"list"}><i>list</i></ClLinks> of <ClLinks  term={"symbol"}><i>symbols</i></ClLinks>; evaluated. 



<ClLinks  term={"value"}><i>values</i></ClLinks>—a <ClLinks  term={"list"}><i>list</i></ClLinks> of <ClLinks  term={"object"}><i>objects</i></ClLinks>; evaluated. 



<ClLinks  term={"form"}><i>forms</i></ClLinks>—an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>. 



*results*—the <ClLinks  term={"value"}><i>values</i></ClLinks> returned by the <ClLinks  term={"form"}><i>forms</i></ClLinks>. 



**Description:** 



<DictionaryLink  term={"progv"}><b>progv</b></DictionaryLink> creates new dynamic variable <ClLinks  term={"binding"}><i>bindings</i></ClLinks> and executes each <ClLinks  term={"form"}><i>form</i></ClLinks> using those <ClLinks  term={"binding"}><i>bindings</i></ClLinks>. Each <ClLinks  term={"form"}><i>form</i></ClLinks> is evaluated in order. 



<DictionaryLink  term={"progv"}><b>progv</b></DictionaryLink> allows <ClLinks  term={"binding"}><i>binding</i></ClLinks> one or more dynamic variables whose names may be determined at run time. Each <ClLinks  term={"form"}><i>form</i></ClLinks> is evaluated in order with the dynamic variables whose names are in <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> bound to corresponding <ClLinks  term={"value"}><i>values</i></ClLinks>. If too few <ClLinks  term={"value"}><i>values</i></ClLinks> are supplied, the remaining <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> are bound and then made to have no value. If too many <ClLinks  term={"value"}><i>values</i></ClLinks> are supplied, the excess values are ignored. The <ClLinks  term={"binding"}><i>bindings</i></ClLinks> of the dynamic variables are undone on exit from <DictionaryLink  term={"progv"}><b>progv</b></DictionaryLink>. 



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



