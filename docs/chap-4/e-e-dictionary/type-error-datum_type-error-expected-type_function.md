---
title: "type-error-datum, type-error-expected-type"
---

# type-error-datum, type-error-expected-type

import TypeErrorDatumFunction from './_type-error-datum_type-error-expected-type_function.md';

<TypeErrorDatumFunction />

## Expanded Reference: type-error-datum, type-error-expected-type

### Extracting Information from a type-error

`type-error-datum` returns the offending object, and `type-error-expected-type` returns the type that was expected.

```lisp
(let ((x nil))
  (handler-case
      (check-type x string)
    (type-error (c)
      (values (type-error-datum c)
              (type-error-expected-type c)))))
=> NIL
=> STRING
```

### Using Both Accessors for Error Reporting

```lisp
(defun safe-char (x)
  (handler-case
      (coerce x 'character)
    (type-error (c)
      (format nil "Cannot coerce ~S to ~A"
              (type-error-datum c)
              (type-error-expected-type c)))))
=> SAFE-CHAR

(safe-char "hello")
=> "Cannot coerce \"hello\" to (OR CHARACTER (STRING 1))"
```

### With Manually Signaled Errors

```lisp
(handler-case
    (error 'type-error :datum 42 :expected-type 'string)
  (type-error (c)
    (list :datum (type-error-datum c)
          :expected (type-error-expected-type c))))
=> (:DATUM 42 :EXPECTED STRING)
```
