---
title: "serious-condition"
---

# serious-condition

import SeriousConditionConditionType from './_serious-condition_condition-type.md';

<SeriousConditionConditionType />

## Expanded Reference: serious-condition

### The serious-condition Type

`serious-condition` represents conditions serious enough that they should not be ignored if unhandled. `error` is a subtype of `serious-condition`. The `serious-condition` type sits between `condition` and `error` in the hierarchy.

```lisp
(subtypep 'serious-condition 'condition)

=> T
=> T
```

```lisp
(subtypep 'error 'serious-condition)

=> T
=> T
```

### Handling Serious Conditions

You can catch all serious conditions (not just errors) by handling `serious-condition`.

```lisp
(handler-case (error "Something bad")
  (serious-condition (c)
    (format nil "Serious: ~A" c)))

=> "Serious: Something bad"
```

### Type Checking

```lisp
(typep (make-condition 'simple-error :format-control "test") 'serious-condition)

=> T
```

```lisp
;; Warnings are NOT serious conditions
(typep (make-condition 'simple-warning :format-control "test") 'serious-condition)

=> NIL
```
