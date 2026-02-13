---
title: "warning"
---

# warning

import WarningConditionType from './_warning_condition-type.md';

<WarningConditionType />

## Expanded Reference: warning

### The warning Condition Type

`warning` is the base type for all warning conditions. Warnings are conditions that are worth noting but do not require the program to stop. When signaled via `warn` and not handled, they are printed to `*error-output*`.

```lisp
(subtypep 'warning 'condition)
```

```lisp
→ T, T
```

### Warning Is Not a Serious Condition

Warnings are not subtypes of `serious-condition` or `error`.

```lisp
(subtypep 'warning 'serious-condition)
```

```lisp
→ NIL, T
```

### Handling All Warnings

```lisp
(handler-bind ((warning (lambda (c)
                          (declare (ignore c))
                          (muffle-warning))))
  (warn "First")
  (warn "Second")
  :done)
```

```lisp
→ :DONE
```

### Standard Warning Subtypes

```lisp
(subtypep 'simple-warning 'warning)
```

```lisp
→ T, T
```

```lisp
(subtypep 'style-warning 'warning)
```

```lisp
→ T, T
```
