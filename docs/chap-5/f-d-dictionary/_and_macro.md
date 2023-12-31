**and** <GlossaryTerm  term={"macro"}><i>Macro</i></GlossaryTerm>

**Syntax:**

<DictionaryLink  term={"and"}><b>and</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>\{form\}</i></GlossaryTerm>\* → \{result\}\*

**Arguments and Values:**

<GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>.

*results*—the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> resulting from the evaluation of the last <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>, or the symbols <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> or <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>.

**Description:**

The macro <DictionaryLink  term={"and"}><b>and</b></DictionaryLink> evaluates each <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> one at a time from left to right. As soon as any <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> evaluates to <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, <DictionaryLink  term={"and"}><b>and</b></DictionaryLink> returns <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> without evaluating the remaining <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>. If all <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> but the last evaluate to <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> values, <DictionaryLink  term={"and"}><b>and</b></DictionaryLink> returns the results produced by evaluating the last <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>.

If no <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> are supplied, (and) returns <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>.

<DictionaryLink  term={"and"}><b>and</b></DictionaryLink> passes back multiple values from the last <GlossaryTerm  term={"subform"}><i>subform</i></GlossaryTerm> but not from subforms other than the last.

**Examples:**

```lisp
(if (and (>= n 0) 
  (< n (length a-simple-vector)) 
  (eq (elt a-simple-vector n) ’foo)) 
    (princ "Foo!")) 
```

The above expression prints Foo! if element n of a-simple-vector is the symbol foo, provided also that n is indeed a valid index for a-simple-vector. Because <DictionaryLink  term={"and"}><b>and</b></DictionaryLink> guarantees left-to-right testing of its parts, <DictionaryLink  term={"elt"}><b>elt</b></DictionaryLink> is not called if n is out of range.

```lisp
(defparameter temp1 1) → temp1
(defparameter temp2 1) → temp2
(defparameter temp3 1) → temp3
(and (incf temp1) (incf temp2) (incf temp3)) → 2 
(and (eql 2 temp1) (eql 2 temp2) (eql 2 temp3)) → true 
(decf temp3) → 1 
(and (decf temp1) (decf temp2) (eq temp3 ’nil) (decf temp3)) → NIL 
(and (eql temp1 temp2) (eql temp2 temp3)) → true 
(and) → T 
```

**See Also:**

<DictionaryLink  term={"cond"}><b>cond</b></DictionaryLink>, <DictionaryLink  term={"every"}><b>every</b></DictionaryLink>, <DictionaryLink  term={"if"}><b>if</b></DictionaryLink>, <DictionaryLink  term={"or"}><b>or</b></DictionaryLink>, <DictionaryLink  term={"when"}><b>when</b></DictionaryLink>

**Notes:**

```lisp
(and *form*) *≡* (let () *form*)
(and *form1 form2* ...) *≡* (when *form1* (and *form2* ...))
```

:::info

We fixed the examples so that it uses <DictionaryLink  term={"defparameter"}><b>defparameter</b></DictionaryLink> to initialize the variables.  and we added a paragraph explaining why <DictionaryLink  term={"and"}><b>and</b></DictionaryLink> must be defined as a macro, and the consequences of it being defined as a macro.

:::
