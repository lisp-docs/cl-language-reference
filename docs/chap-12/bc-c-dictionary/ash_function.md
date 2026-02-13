---
title: "ash"
---

# ash

import AshFunction from './_ash_function.md';

<AshFunction />

## Expanded Reference: ash

### Shifting left (positive count)

`ash` performs arithmetic shift. A positive count shifts bits to the left, which is equivalent to multiplying by a power of 2.

```lisp
(ash 1 4) ; → 16     ; 1 * 2^4 = 16
(ash 16 1) ; → 32    ; 16 * 2 = 32
(ash 3 8) ; → 768    ; 3 * 256 = 768
```

### Shifting right (negative count)

A negative count shifts bits to the right, which is equivalent to dividing by a power of 2 and taking the floor.

```lisp
(ash 16 -1) ; → 8    ; 16 / 2 = 8
(ash 255 -4) ; → 15  ; 255 / 16 = 15 (floor)
(ash 1 -1) ; → 0     ; 1 / 2 = 0 (floor)
```

### Zero shift

A count of zero returns the integer unchanged.

```lisp
(ash 16 0) ; → 16
(ash -5 0) ; → -5
(ash 0 100) ; → 0
```

### Negative integers

`ash` treats integers as if in two's complement form. Shifting a negative integer right preserves the sign (arithmetic shift, not logical shift).

```lisp
(ash -1 -1) ; → -1
(ash -2 -1) ; → -1
(ash -16 -2) ; → -4
(ash -100000000000000000000000000000000 -100) ; → -79
```

### Practical use: powers of two

`ash` is an efficient way to compute powers of two.

```lisp
(ash 1 0) ; → 1     ; 2^0
(ash 1 10) ; → 1024  ; 2^10
(ash 1 20) ; → 1048576 ; 2^20
```

### Relationship to multiplication and division

`ash` is equivalent to `floor(integer * 2^count)`.

```lisp
(= (ash 5 3) (* 5 (expt 2 3))) ; → T
(= (ash 100 -3) (floor 100 (expt 2 3))) ; → T
```
