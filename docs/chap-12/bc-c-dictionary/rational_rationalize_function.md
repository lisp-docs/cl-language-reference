---
title: "rational, rationalize"
---

# rational, rationalize

import RationalFunction from './_rational_rationalize_function.md';

<RationalFunction />

## Expanded Reference: rational, rationalize

### Converting floats with rational

`rational` converts a float to a rational that is mathematically exactly equal to the float's value. Since floats are stored in binary, the result can have a large denominator.

```lisp
(rational 0)
=> 0
(rational 0.5)
=> 1/2
(rational 0.25)
=> 1/4
(rational .1)
=> 13421773/134217728
```

### Converting floats with rationalize

`rationalize` finds a simpler rational approximation that is within the floating-point precision of the input.

```lisp
(rationalize 0.5)
=> 1/2
(rationalize 0.1)
=> 1/10
(rationalize 0.33)
=> 33/100
```

### Difference between rational and rationalize

The key distinction is that `rational` treats the float as exact, while `rationalize` accounts for float imprecision.

```lisp
;; 0.1 cannot be exactly represented in binary floating point
(rational 0.1)
=> 13421773/134217728
(rationalize 0.1)
=> 1/10

;; Both give the same result when the float is exact
(rational 0.5)
=> 1/2
(rationalize 0.5)
=> 1/2
```

### Identity for rational inputs

If the argument is already rational (integer or ratio), both functions return it unchanged.

```lisp
(rational 5)
=> 5
(rationalize 5)
=> 5
(rational 3/7)
=> 3/7
(rationalize 3/7)
=> 3/7
(rationalize -11/100)
=> -11/100
```

### Round-trip guarantee

Converting to rational and back to float always recovers the original float.

```lisp
(float (rational 3.14) 1.0)
=> 3.14
(float (rationalize 3.14) 1.0)
=> 3.14
```
