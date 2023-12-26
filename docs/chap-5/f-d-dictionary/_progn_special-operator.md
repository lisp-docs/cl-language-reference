**progn** <GlossaryTerm styled={true} term={"special operator"}><i>Special Operator</i></GlossaryTerm>

**Syntax:**

<DictionaryLink  term={"progn"}><b>progn</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>\{form\}</i></GlossaryTerm>\* *! \{result\}*\*

**Arguments and Values:**

<GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>.

*results*—the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> of the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>.

**Description:**

<DictionaryLink  term={"progn"}><b>progn</b></DictionaryLink> evaluates <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>, in the order in which they are given.

The values of each <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> but the last are discarded.

If <DictionaryLink  term={"progn"}><b>progn</b></DictionaryLink> appears as a <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm>, then all <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> within that <DictionaryLink  term={"progn"}><b>progn</b></DictionaryLink> are considered by the compiler to be <GlossaryTerm styled={true} term={"top level form"}><i>top level forms</i></GlossaryTerm>.

**Examples:**

```lisp
(progn) *!* NIL 
(progn 1 2 3) *!* 3 
(progn (values 1 2 3)) *!* 1, 2, 3 
(setf a 1) *!* 1 
(if a 
    (progn (setf a nil) ’here) 
    (progn (setf a t) ’there)) *!* HERE 
a *!* NIL 
```

**See Also:**

<DictionaryLink  term={"prog1"}><b>prog1</b></DictionaryLink>, <DictionaryLink  term={"prog2"}><b>prog2</b></DictionaryLink>, Section 3.1 (Evaluation)

**Notes:**

Many places in Common Lisp involve syntax that uses <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progns</i></GlossaryTerm>. That is, part of their syntax allows many <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> to be written that are to be evaluated sequentially, discarding the results of all <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> but the last and returning the results of the last <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. Such places include, but are not limited to, the following: the body of a <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm>; the bodies of various control and conditional <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> (*e.g.*, <DictionaryLink  term={"case"}><b>case</b></DictionaryLink>, <DictionaryLink  term={"catch"}><b>catch</b></DictionaryLink>, <DictionaryLink  term={"progn"}><b>progn</b></DictionaryLink>, and <DictionaryLink  term={"when"}><b>when</b></DictionaryLink>).

:::info

The **example** above was modified replacing `SETQ` with `DEFPARAMETER` or `SETF` according to context. That is because the specification changed yet they did not update the example to fit the specification. This was a mistake in the original ANSI Reference and has been fixed here.

:::
