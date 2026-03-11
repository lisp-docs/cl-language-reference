---
title: "copy-pprint-dispatch"
---

# copy-pprint-dispatch

import CopyPprintDispatchFunction from './_copy-pprint-dispatch_function.md';

<CopyPprintDispatchFunction />

## Expanded Reference: copy-pprint-dispatch

### Copying the Current Dispatch Table

With no arguments, `copy-pprint-dispatch` copies the current value of `*print-pprint-dispatch*`.

```lisp
(let ((my-table (copy-pprint-dispatch)))
  (not (eq my-table *print-pprint-dispatch*)))
=> T
```

### Getting the Initial (Standard) Dispatch Table

Passing nil returns a copy of the initial dispatch table, which contains the standard pretty-printing rules.

```lisp
;; Reset to standard pretty-printing by copying the initial table
(let ((*print-pprint-dispatch* (copy-pprint-dispatch nil))
      (*print-pretty* t))
  (write-to-string '(defun foo (x) (+ x 1))))
=> "(DEFUN FOO (X) (+ X 1))"
```

### Safe Modification Without Affecting Global State

Copying ensures that modifications to the new table do not affect the original.

```lisp
(let ((*print-pprint-dispatch* (copy-pprint-dispatch))
      (*print-pretty* t))
  (set-pprint-dispatch 'string
    (lambda (stream obj)
      (format stream "STR(~A)" obj)))
  ;; Only affects the local copy
  (write-to-string "hello"))
;; => "STR(hello)"

;; The global table is unmodified
(let ((*print-pretty* t))
  (write-to-string "hello"))
;; => "\"hello\""
```

### Copying a Specific Table

You can pass an existing dispatch table to copy it.

```lisp
(let* ((table-a (copy-pprint-dispatch))
       (table-b (copy-pprint-dispatch table-a)))
  (not (eq table-a table-b)))
=> T
```
