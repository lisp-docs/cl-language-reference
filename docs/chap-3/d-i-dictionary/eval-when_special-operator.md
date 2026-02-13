---
title: "eval-when"
---

# eval-when

import EvalWhenSpecialOperator from './_eval-when_special-operator.md';

<EvalWhenSpecialOperator />

## Expanded Reference: eval-when

### Basic Usage: Controlling When Code Executes

`eval-when` controls whether its body forms are evaluated at compile time, load time, and/or execution time.

```lisp
;; This form is executed at execution time (in the REPL, for example):
(eval-when (:execute)
  (print "Executed!"))
;; prints: "Executed!"
;; => "Executed!"
```

### Defining Macros Available at Compile Time

A common use is to ensure that definitions are available to the compiler when processing the rest of a file.

```lisp
(eval-when (:compile-toplevel :load-toplevel :execute)
  (defun helper () 42))
;; => HELPER
;; helper is available at compile time, load time, and execution time.
```

### The :execute Situation

When `eval-when` is not at the top level, only the `:execute` situation matters. The `:compile-toplevel` and `:load-toplevel` situations have no effect in non-top-level positions.

```lisp
(let ((x 1))
  (eval-when (:execute :load-toplevel :compile-toplevel)
    (+ x 1)))
;; => 2
;; Only :execute matters here because the let makes this non-top-level.
```

### Empty Situation List

If no situations apply, the body is not evaluated and `nil` is returned.

```lisp
(eval-when ()
  (print "This will never print"))
;; => NIL
```
