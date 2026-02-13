---
title: "type-error"
---

# type-error

import TypeErrorConditionType from './_type-error_condition-type.md';

<TypeErrorConditionType />

## Expanded Reference: type-error

### Handling a type-error

A `type-error` is signaled when an object is not of the expected type. You can catch it with `handler-case`.

```lisp
(handler-case
    (check-type nil integer)
  (type-error (c)
    (format nil "Got type-error: datum=~S, expected=~S"
            (type-error-datum c)
            (type-error-expected-type c))))
;; => "Got type-error: datum=NIL, expected=INTEGER"
```

### Signaling a type-error Manually

```lisp
(defun positive-integer-p (x)
  (unless (and (integerp x) (plusp x))
    (error 'type-error :datum x :expected-type '(integer 1))))
;; => POSITIVE-INTEGER-P

(handler-case (positive-integer-p -5)
  (type-error (c)
    (type-error-datum c)))
;; => -5
```

### type-error in the Wild

Many standard functions signal `type-error` when given inappropriate arguments.

```lisp
(handler-case (+ "a" 1)
  (type-error (c)
    (format nil "Expected ~A, got ~S"
            (type-error-expected-type c)
            (type-error-datum c))))
;; => "Expected NUMBER, got \"a\""  (exact message is implementation-dependent)
```
