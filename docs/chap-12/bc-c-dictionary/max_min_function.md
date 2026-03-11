---
title: "max, min"
---

# max, min

import MaxFunction from './_max_min_function.md';

<MaxFunction />

## Expanded Reference: max, min

### Basic usage

`max` returns the largest of its arguments. `min` returns the smallest. At least one argument is required.

```lisp
(max 3)
=> 3
(min 3)
=> 3
(max 6 12)
=> 12
(min 6 12)
=> 6
```

### Multiple arguments

Both functions accept any number of real arguments.

```lisp
(max 1 3 2 -7)
=> 3
(min 1 3 2 -7)
=> -7
(max -2 3 0 7)
=> 7
(min -2 3 0 7)
=> -2
```

### Negative numbers

`max` and `min` work correctly with negative numbers.

```lisp
(max -6 -12)
=> -6
(min -6 -12)
=> -12
(max -1 -2 -3 -4)
=> -1
(min -1 -2 -3 -4)
=> -4
```

### Floating-point contagion

When arguments include floats, the result may or may not be converted to a float, depending on the implementation.

```lisp
(max 5.0 2)
=> 5.0
(max 1.0s0 7.0d0)
=> 7.0d0
```

### Practical use: clamping a value to a range

`max` and `min` can be combined to clamp a value within a given range.

```lisp
(defun clamp (value low high)
  (max low (min value high)))

(clamp 5 0 10)
=> 5
(clamp -3 0 10)
=> 0
(clamp 15 0 10)
=> 10
```

### Finding extremes in a list

Use `apply` or `reduce` to find the maximum or minimum of a list.

```lisp
(apply #'max '(4 7 2 9 1))
=> 9
(reduce #'min '(4 7 2 9 1))
=> 1
```
