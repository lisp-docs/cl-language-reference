---
title: "+"
---

# +

import PlusFunction from './_plus_function.md';

<PlusFunction />

## Expanded Reference: +

### Basic addition

`+` returns the sum of its arguments. With no arguments, it returns the additive identity `0`.

```lisp
(+) ; → 0
(+ 5) ; → 5
(+ 2 3) ; → 5
(+ 1 2 3 4 5) ; → 15
```

### Rational arithmetic

When all arguments are rationals (integers or ratios), the result is exact.

```lisp
(+ 1/3 1/3 1/3) ; → 1
(+ 31/100 69/100) ; → 1
(+ 1/6 1/3) ; → 1/2
```

### Floating-point contagion

If any argument is a float, the result is a float due to floating-point contagion rules.

```lisp
(+ 1 2.0) ; → 3.0
(+ 1/5 0.8) ; → 1.0
(+ 1 2.0d0) ; → 3.0d0
```

### Complex number addition

`+` works with complex numbers, performing component-wise addition.

```lisp
(+ #c(1 2) #c(3 4)) ; → #C(5 6)
(+ #c(3 -5) 7) ; → #C(10 -5)
(+ #c(1.0 2.0) #c(0.0 -2.0)) ; → #C(1.0 0.0)
```

### Accumulating a sum with reduce

`+` is commonly used with `reduce` to sum the elements of a sequence.

```lisp
(reduce #'+ '(10 20 30 40)) ; → 100
(reduce #'+ '() :initial-value 0) ; → 0
```
