---
title: "no-applicable-method"
---

# no-applicable-method

import NoApplicableMethodStandardGenericFunction from './_no-applicable-method_standard-generic-function.md';

<NoApplicableMethodStandardGenericFunction />

## Expanded Reference: no-applicable-method

### Default Behavior

When a generic function is called and no methods are applicable, `no-applicable-method` is invoked. The default method signals an error.

```lisp
(defgeneric process-item (item))

;; Only a method for strings
(defmethod process-item ((item string))
  (string-upcase item))

;; Calling with an integer has no applicable method:
(handler-case (process-item 42)
  (error () :caught-error))
=> :CAUGHT-ERROR
```

### Defining a Custom no-applicable-method Handler

You can define a method on `no-applicable-method` to provide a fallback or custom behavior instead of signaling an error.

```lisp
(defgeneric safe-lookup (key))

(defmethod safe-lookup ((key symbol))
  (format nil "Found symbol: ~A" key))

(defmethod no-applicable-method ((gf (eql #'safe-lookup)) &rest args)
  (format nil "No handler for ~A" (first args)))

(safe-lookup :hello)
=> "Found symbol: HELLO"

(safe-lookup 42)
=> "No handler for 42"
```

### Providing Default Return Values

A custom `no-applicable-method` can return a sensible default instead of failing.

```lisp
(defgeneric convert-to-string (obj))

(defmethod convert-to-string ((obj number))
  (format nil "~A" obj))

(defmethod no-applicable-method ((gf (eql #'convert-to-string)) &rest args)
  (format nil "~S" (first args)))

(convert-to-string 42)
=> "42"
(convert-to-string '(1 2 3))
=> "(1 2 3)"
```
