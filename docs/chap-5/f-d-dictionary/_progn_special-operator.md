**progn** *Special Operator* 



**Syntax:** 



<DictionaryLink styled={true} term={"progn"}><b>progn</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm>\* *! \{result\}*\* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>—an *implicit progn*. 



*results*—the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"progn"}><b>progn</b></DictionaryLink> evaluates <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>, in the order in which they are given. 



The values of each <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> but the last are discarded. 



If <DictionaryLink styled={true} term={"progn"}><b>progn</b></DictionaryLink> appears as a *top level form*, then all <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> within that <DictionaryLink styled={true} term={"progn"}><b>progn</b></DictionaryLink> are considered by the compiler to be *top level forms*. 



**Examples:**
```lisp

(progn) *!* NIL 
(progn 1 2 3) *!* 3 
(progn (values 1 2 3)) *!* 1, 2, 3 
(setq a 1) *!* 1 
(if a 
    (progn (setq a nil) ’here) 
    (progn (setq a t) ’there)) *!* HERE 
a *!* NIL 

```
**See Also:** 



<DictionaryLink styled={true} term={"prog1"}><b>prog1</b></DictionaryLink>, <DictionaryLink styled={true} term={"prog2"}><b>prog2</b></DictionaryLink>, Section 3.1 (Evaluation) 



**Notes:** 



Many places in Common Lisp involve syntax that uses *implicit progns*. That is, part of their syntax allows many <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> to be written that are to be evaluated sequentially, discarding the results of all <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> but the last and returning the results of the last <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. Such places include, but are not limited to, the following: the body of a *lambda expression*; the bodies of various control and conditional <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> (*e.g.*, <DictionaryLink styled={true} term={"case"}><b>case</b></DictionaryLink>, <DictionaryLink styled={true} term={"catch"}><b>catch</b></DictionaryLink>, <DictionaryLink styled={true} term={"progn"}><b>progn</b></DictionaryLink>, and <DictionaryLink styled={true} term={"when"}><b>when</b></DictionaryLink>). 



Data and Control 



 



 



<DictionaryLink styled={true} term={"define-modify-macro"}><b>define-modify-macro</b></DictionaryLink> 



