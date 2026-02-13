---
title: "multiple-value-prog1"
---

# multiple-value-prog1

import MultipleValueProg1SpecialOperator from './_multiple-value-prog1_special-operator.md';

<MultipleValueProg1SpecialOperator />

## Expanded Reference: multiple-value-prog1

### Preserving all values from the first form

`multiple-value-prog1` evaluates all forms but returns all the values from the first form, not just the primary value. This distinguishes it from `prog1`, which only returns the primary value.

```lisp
(multiple-value-prog1
    (values 1 2 3)
  (print "side effect"))
"side effect"
→ 1, 2, 3
```

### Comparison with prog1

`prog1` discards secondary values from its first form. `multiple-value-prog1` preserves them.

```lisp
;; prog1 returns only the primary value
(prog1 (values 'a 'b 'c) (print "done"))
"done"
→ A

;; multiple-value-prog1 preserves all values
(multiple-value-prog1 (values 'a 'b 'c) (print "done"))
"done"
→ A, B, C
```

### Preserving values while performing cleanup

A common use is to save the result of an operation before performing side effects.

```lisp
(let ((temp '(1 2 3)))
  (multiple-value-prog1
      (values-list temp)
    (setq temp nil)
    (values-list temp)))
→ 1, 2, 3
```

### Practical use with floor

```lisp
(let ((x 0))
  (multiple-value-list
    (multiple-value-prog1
        (floor 17 5)
      (setq x 42))))
→ (3 2)
```
