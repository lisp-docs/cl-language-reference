---
title: "error"
---

# error

import ErrorConditionType from './_error_condition-type.md';

<ErrorConditionType />

## Expanded Reference: error (Condition Type)

### The Error Condition Type

`error` is a condition type representing serious conditions that generally require intervention. It is a subtype of `serious-condition`. When an `error` condition is signaled and not handled, the debugger is entered.

```lisp
(subtypep 'error 'serious-condition)

=> T
=> T
```

### Type Checking with error

All error conditions are of type `error`.

```lisp
(typep (make-condition 'simple-error :format-control "oops") 'error)

=> T
```

```lisp
(typep (make-condition 'type-error :datum 1 :expected-type 'string) 'error)

=> T
```

### Catching All Errors

`handler-case` with an `error` clause catches any condition of type `error`, including all subtypes.

```lisp
(handler-case (error 'division-by-zero)
  (error (c)
    (format nil "Caught an error of type ~S" (type-of c))))

=> "Caught an error of type DIVISION-BY-ZERO"
```

### Standard Error Subtypes

The standard defines many subtypes of `error`, including `type-error`, `cell-error`, `arithmetic-error`, `stream-error`, `parse-error`, and others.

```lisp
(subtypep 'type-error 'error)

=> T
=> T
```

```lisp
(subtypep 'arithmetic-error 'error)

=> T
=> T
```
