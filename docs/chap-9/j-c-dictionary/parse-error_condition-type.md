---
title: "parse-error"
---

# parse-error

import ParseErrorConditionType from './_parse-error_condition-type.md';

<ParseErrorConditionType />

## Expanded Reference: parse-error

### The parse-error Type

`parse-error` is a condition type for errors encountered during parsing. It is a subtype of `error`.

```lisp
(subtypep 'parse-error 'error)

=> T
=> T
```

### Catching Parse Errors

Parse errors are typically signaled by functions like `parse-integer` when they encounter invalid input.

```lisp
(handler-case
    (parse-integer "abc")
  (parse-error ()
    :parse-failed))

=> :PARSE-FAILED
```

### Reader Errors Are Parse Errors

Errors during `read` that involve malformed input may also be of type `parse-error` (specifically `reader-error`, which is a subtype of `parse-error`).

```lisp
(subtypep 'reader-error 'parse-error)

=> T
=> T
```
