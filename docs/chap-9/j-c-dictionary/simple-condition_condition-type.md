---
title: "simple-condition"
---

# simple-condition

import SimpleConditionConditionType from './_simple-condition_condition-type.md';

<SimpleConditionConditionType />

## Expanded Reference: simple-condition

### The simple-condition Type

`simple-condition` is a condition type that provides a format control string and format arguments for reporting. It is the default type used by `signal` when a string is passed.

```lisp
(let ((c (make-condition 'simple-condition
                         :format-control "Event ~A occurred at ~A"
                         :format-arguments '("X" "12:00"))))
  (format nil "~A" c))
```

```lisp
→ "Event X occurred at 12:00"
```

### Accessing Format Control and Arguments

```lisp
(let ((c (make-condition 'simple-condition
                         :format-control "~D items"
                         :format-arguments '(5))))
  (values (simple-condition-format-control c)
          (simple-condition-format-arguments c)))
```

```lisp
→ "~D items", (5)
```

### simple-condition Is a Mixin

`simple-condition` is often combined with other types. The standard defines `simple-error`, `simple-warning`, and `simple-type-error`.

```lisp
(subtypep 'simple-error 'simple-condition)
```

```lisp
→ T, T
```

```lisp
(subtypep 'simple-warning 'simple-condition)
```

```lisp
→ T, T
```

### Created Implicitly by signal

When `signal` receives a string, it creates a `simple-condition`.

```lisp
(handler-case
    (signal "something happened")
  (simple-condition (c)
    (simple-condition-format-control c)))
```

```lisp
→ "something happened"
```
