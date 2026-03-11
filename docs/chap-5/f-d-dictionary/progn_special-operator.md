---
title: "progn"
---

# progn

import PrognSpecialOperator from './_progn_special-operator.md';

<PrognSpecialOperator />

## Expanded Reference: progn

### Basic sequential evaluation

`progn` evaluates its forms in order from left to right and returns the values of the last form.

```lisp
(progn
  (+ 1 2)
  (+ 3 4)
  (+ 5 6))
=> 11
```

### An empty progn returns NIL

```lisp
(progn)
=> NIL
```

### Side effects in sequence

`progn` is commonly used when you need to evaluate multiple forms for their side effects but only one form is expected syntactically (such as in a branch of `if`).

```lisp
(if (> 3 1)
    (progn
      (format t "condition is true~%")
      :yes)
    :no)
.. condition is true
..
=> :YES
```

### Returning multiple values

`progn` passes through the multiple values returned by its last form.

```lisp
(progn
  (+ 1 2)
  (values :a :b :c))
=> :A
=> :B
=> :C
```

### Only the last form's value matters

All forms except the last are evaluated purely for their side effects. Their return values are discarded.

```lisp
(let ((x 0))
  (progn
    (incf x)
    (incf x)
    (incf x)
    x))
=> 3
```

### Top-level progn

When `progn` appears as a top-level form in a file being compiled, each of its body forms is treated as a top-level form. This means `defun`, `defvar`, and other defining forms inside a top-level `progn` are processed as if they appeared at the top level themselves.

```lisp
(progn
  (defvar *counter* 0)
  (defun increment-counter ()
    (incf *counter*)))

(increment-counter)
=> 1
(increment-counter)
=> 2
*counter*
=> 2
```
