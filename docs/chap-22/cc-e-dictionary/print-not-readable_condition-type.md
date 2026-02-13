---
title: "print-not-readable"
---

# print-not-readable

import PrintNotReadableConditionType from './_print-not-readable_condition-type.md';

<PrintNotReadableConditionType />

## Expanded Reference: print-not-readable

### What Triggers print-not-readable

The `print-not-readable` condition is signaled when `*print-readably*` is true and the printer encounters an object it cannot print in a readable form.

```lisp
(handler-case
    (let ((*print-readably* t))
      (write-to-string *standard-output*))
  (print-not-readable (c)
    (format nil "Caught: ~A" c)))
; => "Caught: ..."  ; implementation-dependent message
```

### Condition Hierarchy

`print-not-readable` is a subtype of `error`, which is a subtype of `serious-condition`.

```lisp
(subtypep 'print-not-readable 'error)
; => T, T

(subtypep 'print-not-readable 'serious-condition)
; => T, T
```

### The Offending Object

The object that could not be printed readably can be retrieved using `print-not-readable-object`.

```lisp
(handler-case
    (let ((*print-readably* t))
      (write-to-string (make-hash-table)))
  (print-not-readable (c)
    (type-of (print-not-readable-object c))))
; => HASH-TABLE  ; or a more specific implementation type
```

### print-unreadable-object Signals This

When `*print-readably*` is true, `print-unreadable-object` signals `print-not-readable` rather than printing the `#<...>` syntax.

```lisp
(defclass opaque-thing () ())

(defmethod print-object ((obj opaque-thing) stream)
  (print-unreadable-object (obj stream :type t)))

(handler-case
    (let ((*print-readably* t))
      (prin1-to-string (make-instance 'opaque-thing)))
  (print-not-readable () "not readable"))
; => "not readable"
```
