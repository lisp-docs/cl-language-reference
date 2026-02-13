---
title: "pprint-dispatch"
---

# pprint-dispatch

import PprintDispatchFunction from './_pprint-dispatch_function.md';

<PprintDispatchFunction />

## Expanded Reference: pprint-dispatch

### Looking Up a Dispatch Function

`pprint-dispatch` retrieves the highest-priority pretty-printing function for a given object from a dispatch table. It returns two values: the function and a boolean indicating whether a matching entry was found.

```lisp
;; Look up the dispatch function for an integer
(multiple-value-bind (fn found-p)
    (pprint-dispatch 42)
  (list (functionp fn) found-p))
; => (T T)
```

### Checking for Custom Entries

The second return value indicates whether a matching type specifier was found in the table.

```lisp
(let ((*print-pprint-dispatch* (copy-pprint-dispatch)))
  (set-pprint-dispatch 'string
    (lambda (s obj) (format s "~A" obj)))
  (multiple-value-bind (fn found-p)
      (pprint-dispatch "hello")
    found-p))
; => T
```

### Using the Initial Table

Passing nil as the table argument looks up in the initial (standard) pprint dispatch table.

```lisp
(multiple-value-bind (fn found-p)
    (pprint-dispatch '(defun foo () nil) nil)
  found-p)
; => T
```

### Equivalence to Pretty Printing

Calling the returned function on a stream and object is equivalent to pretty-printing the object.

```lisp
;; These are conceptually equivalent:
;; (let ((*print-pretty* t)) (write object :stream s))
;; (funcall (pprint-dispatch object) s object)
(let ((obj '(+ 1 2)))
  (multiple-value-bind (fn found-p)
      (pprint-dispatch obj)
    (with-output-to-string (s)
      (funcall fn s obj))))
; => "(+ 1 2)"
```
