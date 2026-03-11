---
title: "function"
---

# function

import FunctionSpecialOperator from './_function_special-operator.md';

<FunctionSpecialOperator />

## Expanded Reference: function

The last paragraph of the description implies that if <DictionaryLink  term={"function"}><b>function</b></DictionaryLink> is used on a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm> that does not denote a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> in the lexical environment in which the <DictionaryLink  term={"function"}><b>function</b></DictionaryLink> form appears, then the semantics are not specified, so the consequences of this use are undefined.

### Obtaining a function object from a name

`function` returns the function object associated with a name in the current lexical environment. The shorthand `#'name` is equivalent to `(function name)`.

```lisp
(function car)
==> #<FUNCTION CAR>

#'cdr
==> #<FUNCTION CDR>
```

### Using function with funcall

The function object obtained by `function` can be passed to `funcall` or `apply`.

```lisp
(funcall (function +) 10 20 30)
=> 60

(apply (function list) '(a b c))
=> (A B C)
```

### Creating a closure from a lambda expression

When given a lambda expression, `function` creates a lexical closure that captures the surrounding environment.

```lisp
(defun make-adder (n)
  (function (lambda (x) (+ x n))))
=> MAKE-ADDER

(funcall (make-adder 10) 5)
=> 15
```

### Capturing lexical function bindings

`function` (or `#'`) retrieves the innermost lexically enclosing function definition created by `flet` or `labels`.

```lisp
(defun outer () :outer)
=> OUTER

(flet ((outer () :inner))
  (funcall #'outer))
=> :INNER
```

### Shorthand #' is identical to function

The reader macro `#'` is syntactic sugar for the `function` special operator.

```lisp
(mapcar #'1+ '(1 2 3 4))
=> (2 3 4 5)

;; Equivalent to:
(mapcar (function 1+) '(1 2 3 4))
=> (2 3 4 5)
```
