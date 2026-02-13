---
title: "values"
---

# values

import ValuesAccessor from './_values_accessor.md';

<ValuesAccessor />

## Expanded Reference: values

### Returning multiple values from a function

`values` returns its arguments as multiple values. This is the standard way to return more than one value.

```lisp
(values 1 2 3)
→ 1, 2, 3
```

### Returning no values

Called with no arguments, `values` returns zero values.

```lisp
(values)
→ ; no values
```

### Defining a function that returns multiple values

```lisp
(defun divide (dividend divisor)
  (values (floor dividend divisor)
          (mod dividend divisor)))
→ DIVIDE

(divide 17 5)
→ 3, 2
```

### Suppressing extra return values

Wrapping a form in `values` truncates its results to a single value. This is useful when a function returns multiple values but you only want the primary value.

```lisp
(floor 17 5)
→ 3, 2

(values (floor 17 5))
→ 3
```

### Using setf with values to assign to multiple places

`setf` of `values` assigns multiple values to multiple places simultaneously.

```lisp
(let (a b c)
  (setf (values a b c) (values 1 2 3))
  (list a b c))
→ (1 2 3)
```

### Only primary values are passed as function arguments

Since `values` is a function, it receives only the primary values of its argument forms.

```lisp
(values (values 1 2 3) 4 5)
→ 1, 4, 5
```
