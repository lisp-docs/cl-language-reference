---
title: "mod, rem"
---

# mod, rem

import ModFunction from './_mod_rem_function.md';

<ModFunction />

## Expanded Reference: mod, rem

### Basic modulus and remainder

`mod` returns the remainder from `floor` division. `rem` returns the remainder from `truncate` division. They agree when both arguments have the same sign.

```lisp
(mod 13 4)
=> 1
(rem 13 4)
=> 1
(mod 10 3)
=> 1
(rem 10 3)
=> 1
```

### Difference with negative arguments

`mod` and `rem` differ when the arguments have different signs. `mod` always returns a result with the same sign as the divisor. `rem` always returns a result with the same sign as the dividend.

```lisp
(mod -1 5)
=> 4
(rem -1 5)
=> -1

(mod -13 4)
=> 3
(rem -13 4)
=> -1

(mod 13 -4)
=> -3
(rem 13 -4)
=> 1

(mod -13 -4)
=> -1
(rem -13 -4)
=> -1
```

### Floating-point arguments

`mod` and `rem` work with floating-point numbers as well.

```lisp
(mod 13.4 1)
=> 0.39999962
(rem 13.4 1)
=> 0.39999962
(mod -13.4 1)
=> 0.6000004
(rem -13.4 1)
=> -0.39999962
```

### Testing divisibility

`mod` (or `rem`) with a result of zero means the dividend is evenly divisible by the divisor.

```lisp
(zerop (mod 12 3))
=> T
(zerop (mod 12 5))
=> NIL
```

### Cyclic indexing

`mod` is commonly used to wrap an index around within a fixed range.

```lisp
(defun cyclic-index (i n)
  (mod i n))

(cyclic-index 7 5)
=> 2
(cyclic-index -1 5)
=> 4
(cyclic-index 5 5)
=> 0
```
