**function** *Special Operator*

**Syntax:**

<ClLinks styled={true} term={"function"}><b>function</b></ClLinks> *name → function*

**Arguments and Values:**

<ClLinks styled={true} term={"name"}><i>name</i></ClLinks>—a *function name* or *lambda expression*.

<ClLinks styled={true} term={"function"}><i>function</i></ClLinks>—a *function object*.

**Description:**

The <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"function"}><b>function</b></ClLinks> is the *functional value* of <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> in the current *lexical environment*.

If <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is a *function name*, the functional definition of that name is that established by the innermost lexically enclosing <ClLinks styled={true} term={"flet"}><b>flet</b></ClLinks>, <ClLinks styled={true} term={"labels"}><b>labels</b></ClLinks>, or <ClLinks styled={true} term={"macrolet"}><b>macrolet</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>, if there is one. Otherwise the global functional definition of the *function name* is returned.

If <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is a *lambda expression*, then a *lexical closure* is returned. In situations where a <ClLinks styled={true} term={"closure"}><i>closure</i></ClLinks> over the same set of <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> might be produced more than once, the various resulting <ClLinks styled={true} term={"closure"}><i>closures</i></ClLinks> might or might not be <ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks>.

It is an error to use <ClLinks styled={true} term={"function"}><b>function</b></ClLinks> on a *function name* that does not denote a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> in the lexical environment in which the <ClLinks styled={true} term={"function"}><b>function</b></ClLinks> form appears. Specifically, it is an error to use <ClLinks styled={true} term={"function"}><b>function</b></ClLinks> on a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that denotes a <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> or *special form*. An implementation may choose not to signal this error for performance reasons, but implementations are forbidden from defining the failure to signal an error as a useful behavior.

**Examples:**

```lisp

(defun adder (x) (function (lambda (y) (+ x y)))) 
```

The result of `(adder 3)` is a function that adds 3 to its argument:

```lisp
(defparameter add3 (adder 3)) → add3
(funcall add3 5) → 8 
```

This works because <ClLinks styled={true} term={"function"}><b>function</b></ClLinks> creates a <ClLinks styled={true} term={"closure"}><i>closure</i></ClLinks> of the *lambda expression* that is able to refer to the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> 3 of the variable x even after control has returned from the function adder.

**See Also:**

<ClLinks styled={true} term={"defun"}><b>defun</b></ClLinks>, <ClLinks styled={true} term={"fdefinition"}><b>fdefinition</b></ClLinks>, <ClLinks styled={true} term={"flet"}><b>flet</b></ClLinks>, <ClLinks styled={true} term={"labels"}><b>labels</b></ClLinks>, <ClLinks styled={true} term={"symbol-function"}><b>symbol-function</b></ClLinks>, Section 3.1.2.1.1 (Symbols as Forms), Section 2.4.8.2 (Sharpsign Single-Quote), Section 22.1.3.13 (Printing Other Objects)

**Notes:**

The notation #’<ClLinks styled={true} term={"name"}><i>name</i></ClLinks> may be used as an abbreviation for (function <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>).

:::info

We fixed the examples so that it uses <ClLinks styled={true} term={"defparameter"}><b>defparameter</b></ClLinks> to initialize
the variables.

:::
