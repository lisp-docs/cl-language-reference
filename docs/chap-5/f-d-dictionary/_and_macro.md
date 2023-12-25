**and** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks>

**Syntax:**

<ClLinks styled={true} term={"and"}><b>and</b></ClLinks> <ClLinks styled={true} term={"form"}><i>\{form\}</i></ClLinks>\* → \{result\}\*

**Arguments and Values:**

<ClLinks styled={true} term={"form"}><i>form</i></ClLinks>—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>.

*results*—the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> resulting from the evaluation of the last <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>, or the symbols <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> or <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>.

**Description:**

The macro <ClLinks styled={true} term={"and"}><b>and</b></ClLinks> evaluates each <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> one at a time from left to right. As soon as any <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> evaluates to <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, <ClLinks styled={true} term={"and"}><b>and</b></ClLinks> returns <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> without evaluating the remaining <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>. If all <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> but the last evaluate to <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> values, <ClLinks styled={true} term={"and"}><b>and</b></ClLinks> returns the results produced by evaluating the last <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>.

If no <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> are supplied, (and) returns <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>.

<ClLinks styled={true} term={"and"}><b>and</b></ClLinks> passes back multiple values from the last <ClLinks styled={true} term={"subform"}><i>subform</i></ClLinks> but not from subforms other than the last.

**Examples:**

```lisp
(if (and (>= n 0) 
  (< n (length a-simple-vector)) 
  (eq (elt a-simple-vector n) ’foo)) 
    (princ "Foo!")) 
```

The above expression prints Foo! if element n of a-simple-vector is the symbol foo, provided also that n is indeed a valid index for a-simple-vector. Because <ClLinks styled={true} term={"and"}><b>and</b></ClLinks> guarantees left-to-right testing of its parts, <ClLinks styled={true} term={"elt"}><b>elt</b></ClLinks> is not called if n is out of range.

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

<ClLinks styled={true} term={"cond"}><b>cond</b></ClLinks>, <ClLinks styled={true} term={"every"}><b>every</b></ClLinks>, <ClLinks styled={true} term={"if"}><b>if</b></ClLinks>, <ClLinks styled={true} term={"or"}><b>or</b></ClLinks>, <ClLinks styled={true} term={"when"}><b>when</b></ClLinks>

**Notes:**

```lisp
(and *form*) *≡* (let () *form*)
(and *form1 form2* ...) *≡* (when *form1* (and *form2* ...))
```

:::info

We fixed the examples so that it uses <ClLinks styled={true} term={"defparameter"}><b>defparameter</b></ClLinks> to initialize the variables.  and we added a paragraph explaining why <ClLinks styled={true} term={"and"}><b>and</b></ClLinks> must be defined as a macro, and the consequences of it being defined as a macro.

:::
