---
title: "-"
---

# -

import MinusFunction from './_minus_function.md';

<MinusFunction />

## Expanded Reference: -

### Negation with a single argument

With one argument, `-` returns the negation of the number.

```lisp
(- 5)
=> -5
(- -3)
=> 3
(- 0)
=> 0
(- 55.55)
=> -55.55
```

### Subtraction with multiple arguments

With two or more arguments, `-` subtracts all subsequent arguments from the first.

```lisp
(- 10 3)
=> 7
(- 10 1 2 3 4)
=> 0
(- 100 50 25)
=> 25
```

### Rational subtraction

Subtraction with rationals produces exact results.

```lisp
(- 1 1/3)
=> 2/3
(- 3/4 1/4)
=> 1/2
(- 1/6 1/3)
=> -1/6
```

### Floating-point subtraction

When any argument is a float, the result follows floating-point contagion rules.

```lisp
(- 10 2.5)
=> 7.5
(- 1.0d0 0.5)
=> 0.5d0
```

### Complex number subtraction

`-` handles complex numbers by operating on real and imaginary parts.

```lisp
(- #c(3 -5))
=> #C(-3 5)
(- #c(100 45) #c(0 45))
=> 100
(- #c(5 3) #c(2 1))
=> #C(3 2)
```
