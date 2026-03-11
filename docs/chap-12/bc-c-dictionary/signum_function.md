---
title: "signum"
---

# signum

import SignumFunction from './_signum_function.md';

<SignumFunction />

## Expanded Reference: signum

### Sign of integer and rational numbers

For rationals, `signum` returns -1, 0, or 1.

```lisp
(signum 99)
=> 1
(signum -42)
=> -1
(signum 0)
=> 0
(signum 4/5)
=> 1
(signum -99/100)
=> -1
```

### Sign of floating-point numbers

For floats, `signum` returns a float of the same format: -1.0, 0.0, or 1.0.

```lisp
(signum 3.14)
=> 1.0
(signum -2.5)
=> -1.0
(signum 0.0)
=> 0.0
(signum 1.0d0)
=> 1.0d0
```

### Negative zero

`signum` preserves negative zero.

```lisp
(eql (signum -0.0) -0.0)
=> T
```

### Complex numbers

For complex numbers, `signum` returns a complex number with the same phase but unit magnitude. A complex zero returns itself.

```lisp
(signum #c(0 33))
=> #C(0.0 1.0)
(signum #c(0.0 -14.7))
=> #C(0.0 -1.0)
(signum #c(7.5 10.0))
=> #C(0.6 0.8)
(signum #c(3 4))
=> #C(0.6 0.8)
```

### Relationship to abs

`signum` satisfies the identity: `(* (signum x) (abs x))` equals `x` for all numbers.

```lisp
(let ((x -42))
  (= (* (signum x) (abs x)) x))
=> T

(let ((x 3.5))
  (= (* (signum x) (abs x)) x))
=> T
```
