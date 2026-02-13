---
title: "error"
---

# error

import ErrorFunction from './_error_function.md';

<ErrorFunction />

## Expanded Reference: error

### Signaling an Error with a Format String

The simplest usage of `error` passes a format control string and optional arguments. This creates a `simple-error` condition and enters the debugger if unhandled.

```lisp
(handler-case
    (error "Expected a number, got: ~S" 'foo)
  (simple-error (c)
    (format nil "Caught: ~A" c)))
```

```lisp
→ "Caught: Expected a number, got: FOO"
```

### Error Never Returns Normally

`error` is guaranteed never to return normally. Control can only leave `error` via a non-local transfer (e.g., a handler or restart).

```lisp
(handler-case
    (progn
      (error "fatal problem")
      :unreachable)
  (error () :handled))
```

```lisp
→ :HANDLED
```

### Signaling a Condition Type by Name

Instead of a string, you can pass a condition type symbol along with initargs. This creates a condition of that type.

```lisp
(handler-case
    (error 'type-error :datum "hello" :expected-type 'integer)
  (type-error (c)
    (format nil "~S is not of type ~S"
            (type-error-datum c)
            (type-error-expected-type c))))
```

```lisp
→ "\"hello\" is not of type INTEGER"
```

### Signaling a Pre-made Condition Object

You can also pass an already-constructed condition object to `error`.

```lisp
(let ((c (make-condition 'simple-error
                         :format-control "Disk ~A is full"
                         :format-arguments '("C"))))
  (handler-case (error c)
    (simple-error (caught)
      (format nil "Caught: ~A" caught))))
```

```lisp
→ "Caught: Disk C is full"
```

### Using Error in a Validation Function

A typical pattern is to signal an error when input validation fails.

```lisp
(defun factorial (n)
  (unless (and (integerp n) (>= n 0))
    (error "~S is not a non-negative integer" n))
  (if (zerop n) 1 (* n (factorial (1- n)))))

(factorial 5)
```

```lisp
→ 120
```

```lisp
(handler-case (factorial -3)
  (simple-error (c)
    (format nil "~A" c)))
```

```lisp
→ "-3 is not a non-negative integer"
```
