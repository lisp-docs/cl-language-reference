---
title: "zerop"
---

# zerop

import ZeropFunction from './_zerop_function.md';

<ZeropFunction />

## Expanded Reference: zerop

### Testing for zero

`zerop` returns true if the number is zero, regardless of its numeric type.

```lisp
(zerop 0)
=> T
(zerop 1)
=> NIL
(zerop -1)
=> NIL
```

### With floating-point numbers

`zerop` recognizes both positive and negative floating-point zero.

```lisp
(zerop 0.0)
=> T
(zerop -0.0)
=> T
(zerop 0.0d0)
=> T
(zerop 0.001)
=> NIL
```

### With rationals

Zero ratios are also recognized as zero.

```lisp
(zerop 0/100)
=> T
(zerop 0/1)
=> T
(zerop 1/1000000)
=> NIL
```

### With complex numbers

A complex number is zero only if both its real and imaginary parts are zero.

```lisp
(zerop #c(0 0))
=> T
(zerop #c(0 0.0))
=> T
(zerop #c(0 1))
=> NIL
```

### Practical use: safe division guard

`zerop` is commonly used to guard against division by zero.

```lisp
(defun safe-divide (a b)
  (if (zerop b)
      (values nil "division by zero")
      (/ a b)))

(safe-divide 10 3)
=> 10/3
(safe-divide 10 0)
=> NIL
=> "division by zero"
```
