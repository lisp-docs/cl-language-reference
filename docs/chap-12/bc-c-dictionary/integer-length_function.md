---
title: "integer-length"
---

# integer-length

import IntegerLengthFunction from './_integer-length_function.md';

<IntegerLengthFunction />

## Expanded Reference: integer-length

### Bit width of non-negative integers

`integer-length` returns the number of bits needed to represent the integer in binary two's-complement format.

```lisp
(integer-length 0)
=> 0
(integer-length 1)
=> 1
(integer-length 3)
=> 2
(integer-length 4)
=> 3
(integer-length 7)
=> 3
(integer-length 15)
=> 4
```

### Bit width of negative integers

For negative integers, `integer-length` counts the number of bits needed in two's-complement, not counting the infinite leading ones.

```lisp
(integer-length -1)
=> 0
(integer-length -2)
=> 1
(integer-length -4)
=> 2
(integer-length -7)
=> 3
(integer-length -8)
=> 3
```

### Powers of two

For powers of two, `integer-length` returns one more than the exponent.

```lisp
(integer-length (expt 2 9))
=> 10
(integer-length (1- (expt 2 9)))
=> 9
(integer-length (expt 2 100))
=> 101
```

### Practical use: computing required bit width

`integer-length` is useful to determine how many bits are needed to store a value.

```lisp
;; How many bits to represent a color channel value (0-255)?
(integer-length 255)
=> 8

;; How many bits for a Unicode code point (max #x10FFFF)?
(integer-length #x10FFFF)
=> 21
```

### Relationship to log base 2

For positive integers, `integer-length` is equivalent to ceiling of log base 2 of (n+1).

```lisp
(integer-length 100)
=> 7
(ceiling (log 101 2))
=> 7
=> -0.3417883
```
