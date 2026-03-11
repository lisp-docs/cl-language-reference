---
title: "1+, 1"
---

# 1+, 1

import OnePlusFunction from './_oneplus_one_function.md';

<OnePlusFunction />

## Expanded Reference: 1+, 1-

### Basic increment and decrement

`1+` returns the number plus one. `1-` returns the number minus one.

```lisp
(1+ 0)
=> 1
(1+ 99)
=> 100
(1- 100)
=> 99
(1- 1)
=> 0
```

### With rationals

`1+` and `1-` preserve the rational type when given a rational argument.

```lisp
(1+ 1/2)
=> 3/2
(1- 5/3)
=> 2/3
(1+ -1/4)
=> 3/4
```

### With floating-point numbers

When given a float, the result is a float of the same format.

```lisp
(1+ 0.0)
=> 1.0
(1- 1.0d0)
=> 0.0d0
(1+ -1.5)
=> -0.5
```

### With complex numbers

`1+` and `1-` also work with complex numbers.

```lisp
(1+ #c(0 1))
=> #C(1 1)
(1- #c(3 4))
=> #C(2 4)
(1+ (complex 0.0))
=> #C(1.0 0.0)
```

### Equivalence to + and -

`1+` and `1-` are equivalent to adding or subtracting 1 with `+` and `-`.

```lisp
(= (1+ 42) (+ 42 1))
=> T
(= (1- 42) (- 42 1))
=> T
```
