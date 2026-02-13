---
title: "simple-error"
---

# simple-error

import SimpleErrorConditionType from './_simple-error_condition-type.md';

<SimpleErrorConditionType />

## Expanded Reference: simple-error

### The simple-error Type

`simple-error` is the default condition type signaled by `error` when a format string is passed. It inherits from both `simple-condition` and `error`.

```lisp
(subtypep 'simple-error 'error)
```

```lisp
→ T, T
```

```lisp
(subtypep 'simple-error 'simple-condition)
```

```lisp
→ T, T
```

### Created Implicitly by error

```lisp
(handler-case (error "File ~A not found" "test.txt")
  (simple-error (c)
    (format nil "~A" c)))
```

```lisp
→ "File test.txt not found"
```

### Creating Directly with make-condition

```lisp
(let ((c (make-condition 'simple-error
                         :format-control "Expected ~S, got ~S"
                         :format-arguments '(integer "hello"))))
  (simple-condition-format-control c))
```

```lisp
→ "Expected ~S, got ~S"
```
