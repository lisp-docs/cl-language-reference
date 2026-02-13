---
title: "print-unreadable-object"
---

# print-unreadable-object

import PrintUnreadableObjectMacro from './_print-unreadable-object_macro.md';

<PrintUnreadableObjectMacro />

## Expanded Reference: print-unreadable-object

### Basic Usage

`print-unreadable-object` prints an object using the `#<...>` notation. It is typically used inside `print-object` methods.

```lisp
(defclass widget ()
  ((id :initarg :id :accessor widget-id)))

(defmethod print-object ((w widget) stream)
  (print-unreadable-object (w stream)
    (format stream "WIDGET id=~A" (widget-id w))))

(make-instance 'widget :id 42)
; => #<WIDGET id=42>
```

### Using :type and :identity

The `:type` option prints the object's type, and `:identity` prints an implementation-specific identity (typically memory address).

```lisp
(defclass gadget ()
  ((name :initarg :name :accessor gadget-name)))

;; With :type t -- prints the class name
(defmethod print-object ((g gadget) stream)
  (print-unreadable-object (g stream :type t)
    (princ (gadget-name g) stream)))

(make-instance 'gadget :name "Sprocket")
; => #<GADGET Sprocket>

;; With both :type and :identity
(defmethod print-object ((g gadget) stream)
  (print-unreadable-object (g stream :type t :identity t)
    (princ (gadget-name g) stream)))

(make-instance 'gadget :name "Sprocket")
; => #<GADGET Sprocket {1003AB0123}>
```

### Empty Body with :type and :identity

When no body forms are given, only the type and/or identity are printed.

```lisp
(defclass token () ())

(defmethod print-object ((tok token) stream)
  (print-unreadable-object (tok stream :type t :identity t)))

(make-instance 'token)
; => #<TOKEN {1004CD0003}>
```

### Signals Error Under *print-readably*

If `*print-readably*` is true, `print-unreadable-object` signals a `print-not-readable` error rather than printing unreadable output.

```lisp
(defclass opaque () ())

(defmethod print-object ((o opaque) stream)
  (print-unreadable-object (o stream :type t)))

(handler-case
    (let ((*print-readably* t))
      (prin1-to-string (make-instance 'opaque)))
  (print-not-readable (c)
    (format nil "Cannot print ~S readably"
            (type-of (print-not-readable-object c)))))
; => "Cannot print OPAQUE readably"
```
