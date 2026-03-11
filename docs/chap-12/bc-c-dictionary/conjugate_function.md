---
title: "conjugate"
---

# conjugate

import ConjugateFunction from './_conjugate_function.md';

<ConjugateFunction />

## Expanded Reference: conjugate

### Basic complex conjugate

`conjugate` negates the imaginary part of a complex number, leaving the real part unchanged.

```lisp
(conjugate #c(3 4))
=> #C(3 -4)
(conjugate #c(0 -1))
=> #C(0 1)
(conjugate #c(1 1))
=> #C(1 -1)
(conjugate #c(3/5 4/5))
=> #C(3/5 -4/5)
```

### Conjugate of real numbers

The conjugate of a real number is itself.

```lisp
(conjugate 5)
=> 5
(conjugate 1.5)
=> 1.5
(conjugate 3.7)
=> 3.7
(conjugate -2/3)
=> -2/3
```

### Double-float complex conjugate

```lisp
(conjugate #c(0.0d0 -1.0d0))
=> #C(0.0d0 1.0d0)
(conjugate #c(2.5d0 3.5d0))
=> #C(2.5d0 -3.5d0)
```

### Computing magnitude using conjugate

The product of a complex number and its conjugate equals the square of the magnitude.

```lisp
(let ((z #c(3.0 4.0)))
  (* z (conjugate z)))
=> #C(25.0 0.0)

(let ((z #c(3.0 4.0)))
  (sqrt (realpart (* z (conjugate z)))))
=> 5.0
```

### Equivalence definition

`conjugate` is equivalent to constructing a new complex from the same real part and the negated imaginary part.

```lisp
(let ((z #c(7 -3)))
  (eql (conjugate z)
       (complex (realpart z) (- (imagpart z)))))
=> T
```
