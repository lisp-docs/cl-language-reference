---
title: "return-from"
---

# return-from

import ReturnFromSpecialOperator from './_return-from_special-operator.md';

<ReturnFromSpecialOperator />

## Expanded Reference: return-from

### Basic usage

`return-from` immediately exits the named block and returns the given value. If no value is specified, `NIL` is returned.

```lisp
(block alpha
  (return-from alpha 42)
  (print "not reached"))
=> 42

(block alpha
  (return-from alpha)
  (print "not reached"))
=> NIL
```

### Returning from a named function

Functions defined with `defun` establish an implicit block with the function's name, which `return-from` can target.

```lisp
(defun first-negative (list)
  (dolist (x list)
    (when (minusp x)
      (return-from first-negative x)))
  nil)

(first-negative '(3 7 -2 5))
=> -2
(first-negative '(3 7 5))
=> NIL
```

### Returning multiple values

`return-from` can transfer multiple values from a block.

```lisp
(block calc
  (return-from calc (values 1 2 3)))
=> 1
=> 2
=> 3
```

### Exiting through nested blocks

`return-from` targets the innermost lexically enclosing block with the matching name.

```lisp
(block outer
  (+ 1 (block inner
          (return-from outer 10)
          20))
  30)
=> 10
```

### Using return-from inside a flet

Since `return-from` uses lexical scope, a local function defined by `flet` can exit its enclosing block.

```lisp
(block exit-point
  (flet ((maybe-exit (x)
           (when (> x 10)
             (return-from exit-point :too-big))))
    (maybe-exit 5)
    (maybe-exit 15)
    :done))
=> :TOO-BIG
```

### Interaction with unwind-protect

When `return-from` causes a non-local exit, the cleanup forms of any intervening `unwind-protect` are executed.

```lisp
(block outer
  (unwind-protect
      (return-from outer :exiting)
    (format t "cleanup runs~%")))
.. cleanup runs
..
=> :EXITING
```
