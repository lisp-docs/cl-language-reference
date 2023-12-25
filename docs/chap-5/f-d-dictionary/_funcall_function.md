**funcall** <ClLinks  term={"function"}><i>Function</i></ClLinks>

**Syntax:**

<ClLinks  term={"funcall"}><b>funcall</b></ClLinks> <ClLinks  term={"function"}><i>function</i></ClLinks> &amp;rest *args → \{result\}*\*

**Arguments and Values:**

<ClLinks  term={"function"}><i>function</i></ClLinks>—a *function designator* .

*args*—<ClLinks  term={"argument"}><i>arguments</i></ClLinks> to the <ClLinks  term={"function"}><i>function</i></ClLinks>.

*results*—the <ClLinks  term={"value"}><i>values</i></ClLinks> returned by the <ClLinks  term={"function"}><i>function</i></ClLinks>.

**Description:**

<ClLinks  term={"funcall"}><b>funcall</b></ClLinks> applies <ClLinks  term={"function"}><i>function</i></ClLinks> to *args*. If <ClLinks  term={"function"}><i>function</i></ClLinks> is a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>, it is coerced to a <ClLinks  term={"function"}><i>function</i></ClLinks> as if by finding its *functional value* in the *global environment*.

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

An error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"undefined-function"}><b>undefined-function</b></ClLinks> should be signaled if <ClLinks  term={"function"}><i>function</i></ClLinks> is a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> that does not have a global definition as a <ClLinks  term={"function"}><i>function</i></ClLinks> or that has a global definition as a <ClLinks  term={"macro"}><i>macro</i></ClLinks> or a *special operator* .

**See Also:**

<ClLinks  term={"apply"}><b>apply</b></ClLinks>, <ClLinks  term={"function"}><b>function</b></ClLinks>, Section 3.1 (Evaluation)

**Notes:**

(funcall *function arg1 arg2* ...)

*≡* (apply *function arg1 arg2* ... nil)

*≡* (apply <ClLinks  term={"function"}><i>function</i></ClLinks> (list *arg1 arg2* ...))

The difference between <ClLinks  term={"funcall"}><b>funcall</b></ClLinks> and an ordinary function call is that in the former case the <ClLinks  term={"function"}><i>function</i></ClLinks> is obtained by ordinary <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> of a <ClLinks  term={"form"}><i>form</i></ClLinks>, and in the latter case it is obtained by the special interpretation of the function position that normally occurs.

:::info

We fixed the examples so that it is conforming, by not shadowing <ClLinks  term={"cons"}><b>cons</b></ClLinks> in the <ClLinks  term={"flet"}><b>flet</b></ClLinks> form.

:::
