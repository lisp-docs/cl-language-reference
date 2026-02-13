---
title: "print-pprint-dispatch"
---

# \*print-pprint-dispatch\*

import PrintPprintDispatchVariable from './_print-pprint-dispatch_variable.md';

<PrintPprintDispatchVariable />

## Expanded Reference: \*print-pprint-dispatch\*

### What It Holds

`*print-pprint-dispatch*` holds the current pprint dispatch table, which controls how objects are pretty-printed. The initial value contains entries for standard Lisp forms.

```lisp
(type-of *print-pprint-dispatch*)
; => ; implementation-dependent, but it is a pprint dispatch table
```

### Using a Custom Dispatch Table

You can bind `*print-pprint-dispatch*` to a custom table to change pretty-printing behavior locally.

```lisp
;; Create a copy and add a custom printer for integers
(let ((*print-pprint-dispatch* (copy-pprint-dispatch))
      (*print-pretty* t))
  (set-pprint-dispatch 'integer
    (lambda (stream obj)
      (format stream "[~D]" obj)))
  (write-to-string '(+ 1 2 3)))
; => "(+ [1] [2] [3])"
```

### Restoring Default Behavior

Passing nil to `copy-pprint-dispatch` returns a copy of the initial (standard) dispatch table.

```lisp
;; Reset to default pretty-printing
(let ((*print-pprint-dispatch* (copy-pprint-dispatch nil))
      (*print-pretty* t))
  (write-to-string '(defun foo (x) (+ x 1))))
; => "(DEFUN FOO (X) (+ X 1))"  ; or with standard pretty-printing
```

### The Dispatch Table and *print-pretty*

The dispatch table is only consulted when `*print-pretty*` is true. When false, the standard `print-object` methods are used directly.

```lisp
(let ((*print-pretty* nil))
  ;; dispatch table entries are ignored
  (write-to-string '(a b c)))
; => "(A B C)"
```
