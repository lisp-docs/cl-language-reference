---
title: "simple-type-error"
---

# simple-type-error

import SimpleTypeErrorConditionType from './_simple-type-error_condition-type.md';

<SimpleTypeErrorConditionType />

## Expanded Reference: simple-type-error

### Signaling a simple-type-error

`simple-type-error` is a condition type that combines `type-error` and `simple-condition`. It supports both type-error slots (`:datum`, `:expected-type`) and a format control string.

```lisp
(handler-case
    (error 'simple-type-error
           :datum "hello"
           :expected-type 'integer
           :format-control "Expected ~A but got ~S"
           :format-arguments '(integer "hello"))
  (simple-type-error (c)
    (format nil "~A" c)))
;; => "Expected INTEGER but got \"hello\""
```

### Accessing Both Sets of Slots

```lisp
(handler-case
    (error 'simple-type-error
           :datum 3.14
           :expected-type 'integer
           :format-control "~S is not an integer"
           :format-arguments '(3.14))
  (simple-type-error (c)
    (list :datum (type-error-datum c)
          :expected (type-error-expected-type c)
          :message (simple-condition-format-control c))))
;; => (:DATUM 3.14 :EXPECTED INTEGER :MESSAGE "~S is not an integer")
```
