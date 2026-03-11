---
title: "abs"
---

# abs

import AbsFunction from './_abs_function.md';

<AbsFunction />

## Expanded Reference: abs

### Absolute value of integers

`abs` returns the absolute value of a number. For real numbers, the result has the same type as the input.

```lisp
(abs 0)
=> 0
(abs 42)
=> 42
(abs -42)
=> 42
```

### Absolute value of rationals and floats

The result preserves the type of the argument.

```lisp
(abs -12/13)
=> 12/13
(abs -1.09)
=> 1.09
(abs -3.5d0)
=> 3.5d0
```

### Absolute value of complex numbers

For complex numbers, `abs` returns the magnitude (modulus), which is always a non-negative real.

```lisp
(abs #c(3 4))
=> 5.0
(abs #c(5.0 -5.0))
=> 7.071068
(abs #c(0 1))
=> 1.0
```

### Negative zero

The absolute value of negative zero is negative zero in IEEE floating-point arithmetic.

```lisp
(eql (abs -0.0) -0.0)
=> NIL
(abs 0.0)
=> 0.0
```

### Practical use: computing distance

`abs` is useful when computing the distance between two numbers on the number line.

```lisp
(defun distance (a b)
  (abs (- a b)))

(distance 3 7)
=> 4
(distance -5 5)
=> 10
(distance 2.5 2.5)
=> 0.0
```
