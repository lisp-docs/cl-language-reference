**and** <ClLinks  term={"macro"}><i>Macro</i></ClLinks>

**Syntax:**

<DictionaryLink  term={"and"}><b>and</b></DictionaryLink> <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\* → \{result\}\*

**Arguments and Values:**

<ClLinks  term={"form"}><i>form</i></ClLinks>—a <ClLinks  term={"form"}><i>form</i></ClLinks>.

*results*—the <ClLinks  term={"value"}><i>values</i></ClLinks> resulting from the evaluation of the last <ClLinks  term={"form"}><i>form</i></ClLinks>, or the symbols <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> or <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>.

**Description:**

The macro <DictionaryLink  term={"and"}><b>and</b></DictionaryLink> evaluates each <ClLinks  term={"form"}><i>form</i></ClLinks> one at a time from left to right. As soon as any <ClLinks  term={"form"}><i>form</i></ClLinks> evaluates to <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, <DictionaryLink  term={"and"}><b>and</b></DictionaryLink> returns <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> without evaluating the remaining <ClLinks  term={"form"}><i>forms</i></ClLinks>. If all <ClLinks  term={"form"}><i>forms</i></ClLinks> but the last evaluate to <ClLinks  term={"true"}><i>true</i></ClLinks> values, <DictionaryLink  term={"and"}><b>and</b></DictionaryLink> returns the results produced by evaluating the last <ClLinks  term={"form"}><i>form</i></ClLinks>.

If no <ClLinks  term={"form"}><i>forms</i></ClLinks> are supplied, (and) returns <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>.

<DictionaryLink  term={"and"}><b>and</b></DictionaryLink> passes back multiple values from the last <ClLinks  term={"subform"}><i>subform</i></ClLinks> but not from subforms other than the last.

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
