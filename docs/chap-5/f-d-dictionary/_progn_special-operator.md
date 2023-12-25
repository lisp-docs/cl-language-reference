**progn** *Special Operator*

**Syntax:**

<ClLinks  term={"progn"}><b>progn</b></ClLinks> <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\* *! \{result\}*\*

**Arguments and Values:**

<GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>—an *implicit progn*.

*results*—the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> of the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>.

**Description:**

<ClLinks  term={"progn"}><b>progn</b></ClLinks> evaluates <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>, in the order in which they are given.

The values of each <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> but the last are discarded.

If <ClLinks  term={"progn"}><b>progn</b></ClLinks> appears as a *top level form*, then all <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> within that <ClLinks  term={"progn"}><b>progn</b></ClLinks> are considered by the compiler to be *top level forms*.

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

<ClLinks  term={"prog1"}><b>prog1</b></ClLinks>, <ClLinks  term={"prog2"}><b>prog2</b></ClLinks>, Section 3.1 (Evaluation)

**Notes:**

Many places in Common Lisp involve syntax that uses *implicit progns*. That is, part of their syntax allows many <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> to be written that are to be evaluated sequentially, discarding the results of all <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> but the last and returning the results of the last <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. Such places include, but are not limited to, the following: the body of a *lambda expression*; the bodies of various control and conditional <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> (*e.g.*, <ClLinks  term={"case"}><b>case</b></ClLinks>, <ClLinks  term={"catch"}><b>catch</b></ClLinks>, <ClLinks  term={"progn"}><b>progn</b></ClLinks>, and <ClLinks  term={"when"}><b>when</b></ClLinks>).

:::info

The **example** above was modified replacing `SETQ` with `DEFPARAMETER` or `SETF` according to context. That is because the specification changed yet they did not update the example to fit the specification. This was a mistake in the original ANSI Reference and has been fixed here.

:::
