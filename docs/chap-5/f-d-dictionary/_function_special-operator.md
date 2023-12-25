**function** *Special Operator*

**Syntax:**

<DictionaryLink  term={"function"}><b>function</b></DictionaryLink> *name → function*

**Arguments and Values:**

<GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>—a *function name* or *lambda expression*.

<GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>—a *function object*.

**Description:**

The <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink  term={"function"}><b>function</b></DictionaryLink> is the *functional value* of <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> in the current *lexical environment*.

If <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is a *function name*, the functional definition of that name is that established by the innermost lexically enclosing <DictionaryLink  term={"flet"}><b>flet</b></DictionaryLink>, <DictionaryLink  term={"labels"}><b>labels</b></DictionaryLink>, or <DictionaryLink  term={"macrolet"}><b>macrolet</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>, if there is one. Otherwise the global functional definition of the *function name* is returned.

If <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is a *lambda expression*, then a *lexical closure* is returned. In situations where a <GlossaryTerm  term={"closure"}><i>closure</i></GlossaryTerm> over the same set of <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm> might be produced more than once, the various resulting <GlossaryTerm  term={"closure"}><i>closures</i></GlossaryTerm> might or might not be <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink>.

It is an error to use <DictionaryLink  term={"function"}><b>function</b></DictionaryLink> on a *function name* that does not denote a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> in the lexical environment in which the <DictionaryLink  term={"function"}><b>function</b></DictionaryLink> form appears. Specifically, it is an error to use <DictionaryLink  term={"function"}><b>function</b></DictionaryLink> on a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> that denotes a <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm> or *special form*. An implementation may choose not to signal this error for performance reasons, but implementations are forbidden from defining the failure to signal an error as a useful behavior.

**Examples:**

```lisp
(defun adder (x) (function (lambda (y) (+ x y)))) 
```

The result of `(adder 3)` is a function that adds 3 to its argument:

```lisp
(defparameter add3 (adder 3)) → add3
(funcall add3 5) → 8 
```

This works because <DictionaryLink  term={"function"}><b>function</b></DictionaryLink> creates a <GlossaryTerm  term={"closure"}><i>closure</i></GlossaryTerm> of the *lambda expression* that is able to refer to the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> 3 of the variable x even after control has returned from the function adder.

**See Also:**

<DictionaryLink  term={"defun"}><b>defun</b></DictionaryLink>, <DictionaryLink  term={"fdefinition"}><b>fdefinition</b></DictionaryLink>, <DictionaryLink  term={"flet"}><b>flet</b></DictionaryLink>, <DictionaryLink  term={"labels"}><b>labels</b></DictionaryLink>, <DictionaryLink  term={"symbol-function"}><b>symbol-function</b></DictionaryLink>, Section 3.1.2.1.1 (Symbols as Forms), Section 2.4.8.2 (Sharpsign Single-Quote), Section 22.1.3.13 (Printing Other Objects)

**Notes:**

The notation #’<GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> may be used as an abbreviation for (function <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>).

:::info

We fixed the examples so that it uses <DictionaryLink  term={"defparameter"}><b>defparameter</b></DictionaryLink> to initialize
the variables.

:::
