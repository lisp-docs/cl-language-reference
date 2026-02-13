---
title: "print-not-readable-object"
---

# print-not-readable-object

import PrintNotReadableObjectFunction from './_print-not-readable-object_function.md';

<PrintNotReadableObjectFunction />

## Expanded Reference: print-not-readable-object

### Retrieving the Unprintable Object

`print-not-readable-object` takes a condition of type `print-not-readable` and returns the object that could not be printed readably.

```lisp
(handler-case
    (let ((*print-readably* t))
      (write-to-string *standard-output*))
  (print-not-readable (c)
    (let ((obj (print-not-readable-object c)))
      (format nil "Cannot print ~A readably" (type-of obj)))))
; => "Cannot print ..."  ; implementation-dependent stream type name
```

### Using in Error Handling

```lisp
(handler-case
    (let ((*print-readably* t))
      (write-to-string (make-hash-table)))
  (print-not-readable (c)
    (let ((obj (print-not-readable-object c)))
      (format nil "Object of type ~S is not printable readably"
              (type-of obj)))))
; => "Object of type HASH-TABLE is not printable readably"
```

### The Object Is the Same Identity

The returned object is the same (by `eq`) as the object that was being printed when the error was signaled.

```lisp
(let ((ht (make-hash-table)))
  (handler-case
      (let ((*print-readably* t))
        (write-to-string ht))
    (print-not-readable (c)
      (eq ht (print-not-readable-object c)))))
; => T
```
