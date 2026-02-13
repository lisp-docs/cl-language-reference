---
title: "cell-error"
---

# cell-error

import CellErrorConditionType from './_cell-error_condition-type.md';

<CellErrorConditionType />

## Expanded Reference: cell-error

### The cell-error Type

`cell-error` is the base type for errors that occur when accessing a "cell" (a named location such as a variable binding, function definition, or slot). Its subtypes include `unbound-variable`, `undefined-function`, and `unbound-slot`.

```lisp
(subtypep 'cell-error 'error)
```

```lisp
→ T, T
```

### Subtypes of cell-error

```lisp
(subtypep 'unbound-variable 'cell-error)
```

```lisp
→ T, T
```

```lisp
(subtypep 'undefined-function 'cell-error)
```

```lisp
→ T, T
```

### Catching Cell Errors

```lisp
(handler-case
    (symbol-value (gensym))
  (cell-error (c)
    (format nil "Cell error on: ~S" (cell-error-name c))))
```

```lisp
→ "Cell error on: #:Gxxxx"  ; gensym name varies
```
