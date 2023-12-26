**or** <GlossaryTerm  term={"macro"}><i>Macro</i></GlossaryTerm>

**Syntax:**

<DictionaryLink  term={"or"}><b>or</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>\{form\}</i></GlossaryTerm>\* → \{results\}\*

**Arguments and Values:**

<GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>.

*results*—the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm> (see below) resulting from the evaluation of the last <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> executed or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>.

**Description:**

<DictionaryLink  term={"or"}><b>or</b></DictionaryLink> evaluates each <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>, one at a time, from left to right. The evaluation of all <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> terminates when a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> evaluates to <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> (*i.e.*, something other than <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>).

If the <GlossaryTerm  term={"evaluation"}><i>evaluation</i></GlossaryTerm> of any <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> other than the last returns a <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm> that is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>, <DictionaryLink  term={"or"}><b>or</b></DictionaryLink> immediately returns that <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> (but no additional <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm>) without evaluating the remaining <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>. If every <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> but the last returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm> as its <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm>, <DictionaryLink  term={"or"}><b>or</b></DictionaryLink> returns all <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> returned by the last <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. If no <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> are supplied, <DictionaryLink  term={"or"}><b>or</b></DictionaryLink> returns <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>.

**Examples:**

```lisp
(or) → NIL 
(defparameter temp0 nil) → temp0
(defparameter temp1 10) → temp1
(defparameter temp2 20) → temp2
(defparameter temp1 30) → temp3
(or temp0 temp1 (setf temp2 37)) → 10
temp2 → 20 
(or (incf temp1) (incf temp2) (incf temp3)) → 11 
temp1 → 11 
temp2 → 20 
temp3 → 30 
(or (values) temp1) → 11 
(or (values temp1 temp2) temp3) → 11 
(or temp0 (values temp1 temp2)) → 11, 20 
(or (values temp0 temp1) (values temp2 temp3)) → 20, 30 
```

**See Also:**

<DictionaryLink  term={"and"}><b>and</b></DictionaryLink>, <DictionaryLink  term={"some"}><b>some</b></DictionaryLink>, <DictionaryLink  term={"unless"}><b>unless</b></DictionaryLink>

:::info

We fixed the examples so that it uses <DictionaryLink  term={"defparameter"}><b>defparameter</b></DictionaryLink> to initialize the variables.

:::
