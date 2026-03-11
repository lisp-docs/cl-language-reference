---
title: "check-type"
---

# check-type

import CheckTypeMacro from './_check-type_macro.md';

<CheckTypeMacro />

## Expanded Reference: check-type

### Basic Type Checking

`check-type` signals a correctable `type-error` if the value in the place is not of the specified type. If the value passes the type check, it returns `nil`.

```lisp
(let ((x 42))
  (check-type x integer)
  x)

=> 42
```

### Type Check Failure

When the check fails, a correctable error is signaled with a `store-value` restart that allows providing a new value.

```lisp
(let ((x "hello"))
  (handler-bind
      ((type-error (lambda (c)
                     (invoke-restart 'store-value 99))))
    (check-type x integer)
    x))

=> 99
```

### Custom Type Description String

An optional third argument provides a human-readable description of the expected type, which appears in the error message.

```lisp
(let ((port -1))
  (handler-case
      (check-type port (integer 0 65535) "a valid port number")
    (type-error (c)
      (format nil "~A" c))))
```

This produces an error message like: `The value of PORT, -1, is not a valid port number.`

### Compound Type Specifiers

`check-type` works with any valid type specifier, including compound ones.

```lisp
(let ((name "Alice"))
  (check-type name (or string symbol))
  name)

=> "Alice"
```

```lisp
(let ((scores '(90 85 92)))
  (check-type scores list)
  (length scores))

=> 3
```

### Practical Example: Validating Slot Values

A common use of `check-type` is in functions that need to validate their arguments.

```lisp
(defun set-age (person age)
  (check-type age (integer 0 150))
  (list :person person :age age))

(set-age "Alice" 30)

=> (:PERSON "Alice" :AGE 30)
```

```lisp
;; Programmatically correcting a bad value
(handler-bind
    ((type-error (lambda (c)
                   (invoke-restart 'store-value 0))))
  (set-age "Bob" -5))

=> (:PERSON "Bob" :AGE 0)
```
