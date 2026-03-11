---
title: "float"
---

# float

import FloatFunction from './_float_function.md';

<FloatFunction />

## Expanded Reference: float

### Converting integers and ratios to floats

`float` converts a real number to a single float when no prototype is supplied.

```lisp
(float 0)
=> 0.0
(float 1)
=> 1.0
(float 1/2)
=> 0.5
(float 1/3)
=> 0.33333334
```

### Float is identity for float inputs

If the argument is already a float and no prototype is given, the same float is returned.

```lisp
(float 1.0)
=> 1.0
(float 3.14)
=> 3.14
```

### Using a prototype to control float format

The optional second argument specifies the desired float format by example. The result will have the same float format as the prototype.

```lisp
(float 1 1.0)
=> 1.0
(float 1 1.0d0)
=> 1.0d0
(float 1/3 1.0d0)
=> 0.3333333333333333d0

;; Verify the format matches the prototype
(eql (float 1.0 1.0d0) 1.0d0)
=> T
```

### Converting pi to different precisions

`float` is useful for converting constants to a specific float format.

```lisp
(float pi 1.0)
=> 3.1415927
(float pi 1.0d0)
=> 3.141592653589793d0
```

### Practical use: ensuring float arithmetic

When you need floating-point division rather than rational division, convert one operand.

```lisp
;; Rational division
(/ 1 3)
=> 1/3

;; Floating-point division
(/ (float 1) 3)
=> 0.33333334
```
