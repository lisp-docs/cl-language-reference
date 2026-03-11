---
title: "cell-error-name"
---

# cell-error-name

import CellErrorNameFunction from './_cell-error-name_function.md';

<CellErrorNameFunction />

## Expanded Reference: cell-error-name

### Retrieving the Name from a Cell Error

`cell-error-name` returns the name of the cell (variable, function, slot) that caused the error.

```lisp
(handler-case
    (symbol-value 'some-unbound-var-xyz)
  (unbound-variable (c)
    (cell-error-name c)))

=> SOME-UNBOUND-VAR-XYZ
```

### With Undefined Functions

```lisp
(handler-case
    (fdefinition 'no-such-function-xyz)
  (undefined-function (c)
    (cell-error-name c)))

=> NO-SUCH-FUNCTION-XYZ
```

### Using cell-error-name in a Handler

A practical pattern: reporting which name caused the error.

```lisp
(handler-case
    (progn
      (makunbound 'my-temp-var)
      (symbol-value 'my-temp-var))
  (cell-error (c)
    (format nil "The cell ~S is not accessible" (cell-error-name c))))

=> "The cell MY-TEMP-VAR is not accessible"
```
