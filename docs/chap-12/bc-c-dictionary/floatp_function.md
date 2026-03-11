---
title: "floatp"
---

# floatp

import FloatpFunction from './_floatp_function.md';

<FloatpFunction />

## Expanded Reference: floatp

### Testing if an object is a float

`floatp` returns true if the object is a floating-point number.

```lisp
(floatp 3.14)
=> T
(floatp 1.0)
=> T
(floatp 1.2d2)
=> T
(floatp 1.2s2)
=> T
```

### Non-float numbers

Integers, ratios, and complex numbers are not floats.

```lisp
(floatp 42)
=> NIL
(floatp 1/3)
=> NIL
(floatp #c(1.0 2.0))
=> NIL
(floatp (expt 2 130))
=> NIL
```

### Non-numeric objects

`floatp` returns false for all non-numeric types.

```lisp
(floatp nil)
=> NIL
(floatp "3.14")
=> NIL
(floatp 'pi)
=> NIL
```

### Different float formats

Common Lisp supports short, single, double, and long floats. `floatp` returns true for all of them.

```lisp
(floatp 1.0s0)
=> T
(floatp 1.0f0)
=> T
(floatp 1.0d0)
=> T
(floatp 1.0l0)
=> T
```

### Equivalence to typep

`floatp` is equivalent to `(typep object 'float)`.

```lisp
(eql (floatp 3.14) (typep 3.14 'float))
=> T
(eql (floatp 42) (typep 42 'float))
=> T
```
