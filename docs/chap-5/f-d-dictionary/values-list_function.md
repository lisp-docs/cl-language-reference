---
title: "values-list"
---

# values-list

import ValuesListFunction from './_values-list_function.md';

<ValuesListFunction />

## Expanded Reference: values-list

### Converting a list to multiple values

`values-list` returns the elements of a list as multiple values. It is equivalent to `(apply #'values list)`.

```lisp
(values-list '(1 2 3))
=> 1
=> 2
=> 3
```

### Empty list returns no values

```lisp
(values-list '())
;; => (no values returned)
```

### Single-element list returns one value

```lisp
(values-list '(42))
=> 42
```

### Using with multiple-value-bind

`values-list` is useful when you have a list of values that you want to bind to separate variables.

```lisp
(multiple-value-bind (x y z)
    (values-list '(10 20 30))
  (+ x y z))
=> 60
```

### Round-tripping with multiple-value-list

`values-list` and `multiple-value-list` are inverses of each other.

```lisp
(multiple-value-list (values-list '(a b c)))
=> (A B C)

(values-list (multiple-value-list (floor 17 5)))
=> 3
=> 2
```
