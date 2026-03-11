---
title: "floor, ffloor, ceiling, fceiling, truncate, ftruncate, round, fround"
---

# floor, ffloor, ceiling, fceiling, truncate, ftruncate, round, fround

import FloorFunction from './_floor_ffloor_ceiling_fceiling_truncate_ftruncate_round_fround_function.md';

<FloorFunction />

## Expanded Reference: floor, ffloor, ceiling, fceiling, truncate, ftruncate, round, fround

### floor -- truncate toward negative infinity

`floor` returns the largest integer not greater than the argument. It returns two values: the quotient and the remainder.

```lisp
(floor 2.7)
=> 2
=> 0.70000005
(floor -2.7)
=> -3
=> 0.29999995
(floor 7 2)
=> 3
=> 1
(floor 3/2)
=> 1
=> 1/2
```

### ceiling -- truncate toward positive infinity

`ceiling` returns the smallest integer not less than the argument.

```lisp
(ceiling 2.3)
=> 3
=> -0.70000005
(ceiling -2.3)
=> -2
=> -0.29999995
(ceiling 7 2)
=> 4
=> -1
(ceiling 3 2)
=> 2
=> -1
```

### truncate -- truncate toward zero

`truncate` drops the fractional part, rounding toward zero.

```lisp
(truncate 2.7)
=> 2
=> 0.70000005
(truncate -2.7)
=> -2
=> -0.70000005
(truncate 7 2)
=> 3
=> 1
(truncate -7 2)
=> -3
=> -1
```

### round -- round to nearest even

`round` rounds to the nearest integer. When the argument is exactly halfway, it rounds to the nearest even integer.

```lisp
(round 2.5)
=> 2
=> 0.5
(round 3.5)
=> 4
=> -0.5
(round 2.3)
=> 2
=> 0.29999995
(round -2.5)
=> -2
=> -0.5
(round 7 2)
=> 4
=> -1
```

### ffloor, fceiling, ftruncate, fround -- float versions

The `f`-prefixed variants return the quotient as a float instead of an integer.

```lisp
(ffloor 3 2)
=> 1.0
=> 1
(ffloor -4.7)
=> -5.0
=> 0.3000002
(fceiling 3/2)
=> 2.0
=> -1/2
(ftruncate -7 2)
=> -3.0
=> -1
(fround -7 2)
=> -4.0
=> 1
(ffloor 3.5d0)
=> 3.0d0
=> 0.5d0
```

### Comparing the rounding modes

The four functions differ in how they handle the direction of rounding.

```lisp
;; Positive value
(floor 2.6)
=> 2
=> 0.5999999
(ceiling 2.6)
=> 3
=> -0.4000001
(truncate 2.6)
=> 2
=> 0.5999999
(round 2.6)
=> 3
=> -0.4000001

;; Negative value
(floor -2.6)
=> -3
=> 0.4000001
(ceiling -2.6)
=> -2
=> -0.5999999
(truncate -2.6)
=> -2
=> -0.5999999
(round -2.6)
=> -3
=> 0.4000001
```
