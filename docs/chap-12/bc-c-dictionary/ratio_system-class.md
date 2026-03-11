---
title: "ratio"
---

# ratio

import RatioSystemClass from './_ratio_system-class.md';

<RatioSystemClass />

## Expanded Reference: ratio

### Type Checking

A `ratio` is the type of rational numbers that are not integers. A ratio is always stored in reduced form with a positive denominator.

```lisp
(typep 1/2 'ratio)
=> T
(typep 2/3 'ratio)
=> T
(typep 42 'ratio)
=> NIL
(typep 0.5 'ratio)
=> NIL
```

### Automatic Canonicalization

Common Lisp automatically reduces ratios to lowest terms and ensures the denominator is positive. If the result is a whole number, it becomes an integer instead of a ratio.

```lisp
4/6
=> 2/3
;; -3/-4
;; => 3/4
6/3
=> 2
0/5
=> 0

(typep 6/3 'ratio)
=> NIL
(typep 6/3 'integer)
=> T
```

### Accessing Numerator and Denominator

Use `numerator` and `denominator` to extract the parts of a ratio. They always reflect the canonical form.

```lisp
(numerator 2/3)
=> 2
(denominator 2/3)
=> 3
(numerator -2/3)
=> -2
(denominator -2/3)
=> 3
(numerator 4/6)
=> 2
(denominator 4/6)
=> 3
```

### Type Hierarchy

The `ratio` type is a subtype of `rational`, disjoint from `integer`. Together they partition the `rational` type.

```lisp
(subtypep 'ratio 'rational)
=> T
=> T
(subtypep 'ratio 'real)
=> T
=> T
(subtypep 'ratio 'integer)
=> NIL
=> T
```

### Ratio Arithmetic

Arithmetic on ratios produces exact results. A ratio is only produced when the result is not a whole number.

```lisp
(+ 1/3 1/6)
=> 1/2
(* 2/3 3/4)
=> 1/2
(/ 1 3)
=> 1/3
(- 5/3 2/3)
=> 1
(typep (- 5/3 2/3) 'integer)
=> T
```
