---
title: "complex"
---

# complex

import ComplexFunction from './_complex_function.md';

<ComplexFunction />

## Expanded Reference: complex

### Creating complex numbers

`complex` creates a number from real and imaginary parts. If the imaginary part is a rational zero, the result is simply the real part as a rational.

```lisp
(complex 3 4)
=> #C(3 4)
(complex 1 0)
=> 1
(complex 1 1/2)
=> #C(1 1/2)
```

### Behavior with floating-point parts

If either part is a float, the non-float part is converted to a float. Even with a zero imaginary part, a float input yields a complex.

```lisp
(complex 0.0)
=> #C(0.0 0.0)
(complex 1.0 0.0)
=> #C(1.0 0.0)
(complex 1 .99)
=> #C(1.0 0.99)
(complex 3/2 0.0)
=> #C(1.5 0.0)
```

### Omitting the imaginary part

When `imagpart` is not supplied, it defaults to zero of the same type as the real part.

```lisp
(complex 5)
=> 5
(complex 5.0)
=> #C(5.0 0.0)
(complex 1/3)
=> 1/3
```

### Round-tripping with realpart and imagpart

You can decompose and reconstruct complex numbers.

```lisp
(let ((z #c(3 4)))
  (complex (realpart z) (imagpart z)))
=> #C(3 4)

(let ((z #c(1.5 -2.5)))
  (complex (realpart z) (imagpart z)))
=> #C(1.5 -2.5)
```

### Double-float complex numbers

Using double-float components produces double-float complex numbers.

```lisp
(complex 1.0d0 2.0d0)
=> #C(1.0d0 2.0d0)
(complex 1 2.0d0)
=> #C(1.0d0 2.0d0)
```
