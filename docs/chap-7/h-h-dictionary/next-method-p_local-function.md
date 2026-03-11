---
title: "next-method-p"
---

# next-method-p

import NextMethodPLocalFunction from './_next-method-p_local-function.md';

<NextMethodPLocalFunction />

## Expanded Reference: next-method-p

### Checking for a Next Method

`next-method-p` returns true if there is a next method to call via `call-next-method`, and false otherwise. It takes no arguments.

```lisp
(defclass base () ())
(defclass derived (base) ())

(defgeneric greet (obj))

(defmethod greet ((obj base))
  (if (next-method-p)
      (format nil "Base (more methods exist)")
      (format nil "Base (no more methods)")))

(defmethod greet ((obj derived))
  (if (next-method-p)
      (format nil "Derived -> ~A" (call-next-method))
      (format nil "Derived (no more methods)")))

(greet (make-instance 'derived))
=> "Derived -> Base (no more methods)"

(greet (make-instance 'base))
=> "Base (no more methods)"
```

### Safely Avoiding no-next-method Errors

Without `next-method-p`, calling `call-next-method` when there is no next method results in `no-next-method` being invoked (which signals an error by default).

```lisp
(defgeneric safe-process (obj))

(defmethod safe-process ((obj t))
  (if (next-method-p)
      (call-next-method)
      :default-result))

(safe-process 42)
=> :DEFAULT-RESULT
```

### Using next-method-p in :around Methods

In `:around` methods, `next-method-p` indicates whether the standard method chain (`:before`, primary, `:after`) can proceed.

```lisp
(defgeneric handle (thing))

(defmethod handle :around ((thing number))
  (if (next-method-p)
      (progn
        (format t "Proceeding with number handling~%")
        (call-next-method))
      (format t "No primary method for numbers~%")))

(defmethod handle ((thing integer))
  (format nil "Handling integer: ~A" thing))

(handle 42)
.. Proceeding with number handling
..
=> "Handling integer: 42"
```
