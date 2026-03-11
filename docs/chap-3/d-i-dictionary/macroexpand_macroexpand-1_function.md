---
title: "macroexpand, macroexpand-1"
---

# macroexpand, macroexpand-1

import MacroexpandFunction from './_macroexpand_macroexpand-1_function.md';

<MacroexpandFunction />

## Expanded Reference: macroexpand, macroexpand-1

### Basic Usage: Single Expansion with macroexpand-1

`macroexpand-1` expands a macro form exactly once and returns the expansion plus a boolean indicating whether expansion occurred.

```lisp
(defmacro my-when (test &body body)
  `(if ,test (progn ,@body)))
=> MY-WHEN

(macroexpand-1 '(my-when (> x 0) (print x) x))
=> (IF (> X 0) (PROGN (PRINT X) X))
=> T
```

### Full Expansion with macroexpand

`macroexpand` repeatedly calls `macroexpand-1` until the form is no longer a macro form.

```lisp
(defmacro my-unless (test &body body)
  `(my-when (not ,test) ,@body))
=> MY-UNLESS

;; macroexpand-1 only expands one layer:
(macroexpand-1 '(my-unless flag (print "nope")))
=> (MY-WHEN (NOT FLAG) (PRINT "nope"))
=> T

;; macroexpand expands all the way through:
(macroexpand '(my-unless flag (print "nope")))
;; => (IF (NOT FLAG) (PROGN (PRINT "nope")))
;; => T
```

### Non-Macro Forms Return Unchanged

When the form is not a macro form, both functions return the form unchanged with `nil` as the second value.

```lisp
(macroexpand-1 '(+ 1 2))
=> (+ 1 2)
=> NIL

(macroexpand 'some-variable)
=> SOME-VARIABLE
=> NIL
```

### Expanding Standard Macros

```lisp
;; push is a standard macro:
(macroexpand-1 '(push item my-list))
;; Expansion is implementation-dependent, but might be something like:
=> (SETQ MY-LIST (CONS ITEM MY-LIST))
```

### Note on Subforms

Neither `macroexpand` nor `macroexpand-1` expands macro calls nested inside the form. They only expand the outermost macro form.

```lisp
(defmacro double (x) `(+ ,x ,x))
=> DOUBLE

(macroexpand '(double (double 3)))
;; => (+ (DOUBLE 3) (DOUBLE 3))
;; => T
;; Note: the inner (double 3) is NOT expanded
```
