---
title: "simple-warning"
---

# simple-warning

import SimpleWarningConditionType from './_simple-warning_condition-type.md';

<SimpleWarningConditionType />

## Expanded Reference: simple-warning

### The simple-warning Type

`simple-warning` is the default condition type signaled by `warn` when a format string is passed. It inherits from both `simple-condition` and `warning`.

```lisp
(subtypep 'simple-warning 'warning)

=> T
=> T
```

```lisp
(subtypep 'simple-warning 'simple-condition)

=> T
=> T
```

### Created Implicitly by warn

```lisp
(handler-bind ((simple-warning (lambda (c)
                                 (declare (ignore c))
                                 (muffle-warning))))
  (warn "Low disk space")
  :warned)

=> :WARNED
```

### Accessing Format Information

```lisp
(handler-case
    (warn "~D files remaining" 3)
  (simple-warning (c)
    (simple-condition-format-arguments c)))

=> (3)
```
