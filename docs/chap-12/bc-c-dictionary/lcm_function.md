---
title: "lcm"
---

# lcm

import LcmFunction from './_lcm_function.md';

<LcmFunction />

## Expanded Reference: lcm

### Basic least common multiple

`lcm` returns the least common multiple of its integer arguments. With no arguments it returns 1 (the identity element).

```lisp
(lcm)
=> 1
(lcm 10)
=> 10
(lcm 4 6)
=> 12
(lcm 25 30)
=> 150
```

### Multiple arguments

`lcm` accepts any number of integer arguments.

```lisp
(lcm 1 2 3 4 5 6)
=> 60
(lcm -24 18 10)
=> 360
(lcm 14 35)
=> 70
```

### With zero

If any argument is zero, the result is zero.

```lisp
(lcm 0 5)
=> 0
(lcm 10 0)
=> 0
(lcm 0 0)
=> 0
```

### Negative arguments

`lcm` always returns a non-negative integer, regardless of the signs of the arguments.

```lisp
(lcm -4 6)
=> 12
(lcm -3 -5)
=> 15
(lcm -7)
=> 7
```

### Relationship with gcd

For two non-zero integers, `lcm` and `gcd` are related by the identity: `lcm(a,b) * gcd(a,b) = |a * b|`.

```lisp
(let ((a 12) (b 8))
  (= (* (lcm a b) (gcd a b))
     (abs (* a b))))
=> T
```
