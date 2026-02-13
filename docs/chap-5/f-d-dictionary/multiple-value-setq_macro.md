---
title: "multiple-value-setq"
---

# multiple-value-setq

import MultipleValueSetqMacro from './_multiple-value-setq_macro.md';

<MultipleValueSetqMacro />

## Expanded Reference: multiple-value-setq

### Basic usage: capturing multiple return values

`multiple-value-setq` assigns multiple return values to existing variables. It returns only the primary value.

```lisp
(let (quotient remainder)
  (multiple-value-setq (quotient remainder) (floor 17 5))
  (list quotient remainder))
→ (3 2)
```

### More variables than values

If there are more variables than values returned, the extra variables are set to NIL.

```lisp
(let (a b c)
  (multiple-value-setq (a b c) (values 1 2))
  (list a b c))
→ (1 2 NIL)
```

### Fewer variables than values

If there are more values than variables, the extra values are discarded.

```lisp
(let (a b)
  (multiple-value-setq (a b) (values 1 2 3 4))
  (list a b))
→ (1 2)
```

### Return value is the primary value

`multiple-value-setq` itself returns only the primary value of the form.

```lisp
(let (a b)
  (multiple-value-setq (a b) (truncate 3.7)))
→ 3
```

### Using with gethash

A practical use case is capturing both the value and the found-p flag from `gethash`.

```lisp
(let ((ht (make-hash-table))
      value found-p)
  (setf (gethash 'x ht) 42)
  (multiple-value-setq (value found-p) (gethash 'x ht))
  (list value found-p))
→ (42 T)
```

### Assigning to special variables

`multiple-value-setq` works with previously declared variables, including special variables.

```lisp
(defvar *q*)
(defvar *r*)
(multiple-value-setq (*q* *r*) (floor 100 7))
→ 14
*q* → 14
*r* → 2
```
