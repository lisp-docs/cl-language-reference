**or** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks>

**Syntax:**

<ClLinks styled={true} term={"or"}><b>or</b></ClLinks> <ClLinks styled={true} term={"form"}><i>\{form\}</i></ClLinks>\* → \{results\}\*

**Arguments and Values:**

<ClLinks styled={true} term={"form"}><i>form</i></ClLinks>—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>.

*results*—the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> or *primary value* (see below) resulting from the evaluation of the last <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> executed or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>.

**Description:**

<ClLinks styled={true} term={"or"}><b>or</b></ClLinks> evaluates each <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>, one at a time, from left to right. The evaluation of all <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> terminates when a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> evaluates to <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> (*i.e.*, something other than <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>).

If the <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> of any <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> other than the last returns a *primary value* that is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, <ClLinks styled={true} term={"or"}><b>or</b></ClLinks> immediately returns that <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> (but no additional <ClLinks styled={true} term={"value"}><i>values</i></ClLinks>) without evaluating the remaining <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>. If every <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> but the last returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks> as its *primary value*, <ClLinks styled={true} term={"or"}><b>or</b></ClLinks> returns all <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> returned by the last <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. If no <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> are supplied, <ClLinks styled={true} term={"or"}><b>or</b></ClLinks> returns <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>.

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

<ClLinks styled={true} term={"and"}><b>and</b></ClLinks>, <ClLinks styled={true} term={"some"}><b>some</b></ClLinks>, <ClLinks styled={true} term={"unless"}><b>unless</b></ClLinks>

:::info

We fixed the examples so that it uses <ClLinks styled={true} term={"defparameter"}><b>defparameter</b></ClLinks> to initialize the variables.

:::
