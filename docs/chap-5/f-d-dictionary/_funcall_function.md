**funcall** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm>

**Syntax:**

<DictionaryLink  term={"funcall"}><b>funcall</b></DictionaryLink> <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> &amp;rest *args → \{result\}*\*

**Arguments and Values:**

<GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"function designator"}><i>function designator</i></GlossaryTerm> .

*args*—<GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> to the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>.

*results*—the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>.

**Description:**

<DictionaryLink  term={"funcall"}><b>funcall</b></DictionaryLink> applies <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> to *args*. If <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> is a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>, it is coerced to a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> as if by finding its <GlossaryTerm styled={true} term={"functional value"}><i>functional value</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>.

**Examples:**

```lisp
(funcall #’+ 1 2 3) → 6 
(funcall ’car ’(1 2 3)) → 1 
(funcall ’position 1 ’(1 2 3 2 1) :start 1) → 4 
(defun foo (x y) (cons x y)) → FOO
(foo 1 2) → (1 . 2) 
(flet ((foo (x y) ‘(kons ,x ,y))) 
  (let ((foo (symbol-function ’+))) 
    (funcall #’foo 
               (funcall ’foo 1 2) 
               (funcall foo 1 2)))) 
→ (KONS (1 . 2) 3) 
```

**Exceptional Situations:**

An error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"undefined-function"}><b>undefined-function</b></DictionaryLink> should be signaled if <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> is a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> that does not have a global definition as a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> or that has a global definition as a <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm> or a <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> .

**See Also:**

<DictionaryLink  term={"apply"}><b>apply</b></DictionaryLink>, <DictionaryLink  term={"function"}><b>function</b></DictionaryLink>, Section 3.1 (Evaluation)

**Notes:**

(funcall *function arg1 arg2* ...)

*≡* (apply *function arg1 arg2* ... nil)

*≡* (apply <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> (list *arg1 arg2* ...))

The difference between <DictionaryLink  term={"funcall"}><b>funcall</b></DictionaryLink> and an ordinary function call is that in the former case the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> is obtained by ordinary <GlossaryTerm  term={"evaluation"}><i>evaluation</i></GlossaryTerm> of a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>, and in the latter case it is obtained by the special interpretation of the function position that normally occurs.

:::info

We fixed the examples so that it is conforming, by not shadowing <DictionaryLink  term={"cons"}><b>cons</b></DictionaryLink> in the <DictionaryLink  term={"flet"}><b>flet</b></DictionaryLink> form.

:::
