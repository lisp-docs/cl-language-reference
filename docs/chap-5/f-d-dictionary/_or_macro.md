**or** <ClLinks  term={"macro"}><i>Macro</i></ClLinks>

**Syntax:**

<ClLinks  term={"or"}><b>or</b></ClLinks> <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\* → \{results\}\*

**Arguments and Values:**

<ClLinks  term={"form"}><i>form</i></ClLinks>—a <ClLinks  term={"form"}><i>form</i></ClLinks>.

*results*—the <ClLinks  term={"value"}><i>values</i></ClLinks> or <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm> (see below) resulting from the evaluation of the last <ClLinks  term={"form"}><i>form</i></ClLinks> executed or <ClLinks  term={"nil"}><b>nil</b></ClLinks>.

**Description:**

<ClLinks  term={"or"}><b>or</b></ClLinks> evaluates each <ClLinks  term={"form"}><i>form</i></ClLinks>, one at a time, from left to right. The evaluation of all <ClLinks  term={"form"}><i>forms</i></ClLinks> terminates when a <ClLinks  term={"form"}><i>form</i></ClLinks> evaluates to <ClLinks  term={"true"}><i>true</i></ClLinks> (*i.e.*, something other than <ClLinks  term={"nil"}><b>nil</b></ClLinks>).

If the <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> of any <ClLinks  term={"form"}><i>form</i></ClLinks> other than the last returns a <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm> that is <ClLinks  term={"true"}><i>true</i></ClLinks>, <ClLinks  term={"or"}><b>or</b></ClLinks> immediately returns that <ClLinks  term={"value"}><i>value</i></ClLinks> (but no additional <ClLinks  term={"value"}><i>values</i></ClLinks>) without evaluating the remaining <ClLinks  term={"form"}><i>forms</i></ClLinks>. If every <ClLinks  term={"form"}><i>form</i></ClLinks> but the last returns <ClLinks  term={"false"}><i>false</i></ClLinks> as its <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm>, <ClLinks  term={"or"}><b>or</b></ClLinks> returns all <ClLinks  term={"value"}><i>values</i></ClLinks> returned by the last <ClLinks  term={"form"}><i>form</i></ClLinks>. If no <ClLinks  term={"form"}><i>forms</i></ClLinks> are supplied, <ClLinks  term={"or"}><b>or</b></ClLinks> returns <ClLinks  term={"nil"}><b>nil</b></ClLinks>.

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

<ClLinks  term={"and"}><b>and</b></ClLinks>, <ClLinks  term={"some"}><b>some</b></ClLinks>, <ClLinks  term={"unless"}><b>unless</b></ClLinks>

:::info

We fixed the examples so that it uses <ClLinks  term={"defparameter"}><b>defparameter</b></ClLinks> to initialize the variables.

:::
