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
(typep 1/2 'ratio)   ; → T
(typep 2/3 'ratio)   ; → T
(typep 42 'ratio)    ; → NIL  (integers are not ratios)
(typep 0.5 'ratio)   ; → NIL  (floats are not ratios)
```

### Automatic Canonicalization

Common Lisp automatically reduces ratios to lowest terms and ensures the denominator is positive. If the result is a whole number, it becomes an integer instead of a ratio.

```lisp
4/6    ; → 2/3   (reduced to lowest terms)
-3/-4  ; → 3/4   (denominator made positive)
6/3    ; → 2     (whole number becomes integer)
0/5    ; → 0     (zero is an integer)

(typep 6/3 'ratio)   ; → NIL  (it's the integer 2)
(typep 6/3 'integer) ; → T
```

### Accessing Numerator and Denominator

Use `numerator` and `denominator` to extract the parts of a ratio. They always reflect the canonical form.

```lisp
(numerator 2/3)    ; → 2
(denominator 2/3)  ; → 3
(numerator -2/3)   ; → -2
(denominator -2/3) ; → 3   (always positive)
(numerator 4/6)    ; → 2   (after reduction)
(denominator 4/6)  ; → 3
```

### Type Hierarchy

The `ratio` type is a subtype of `rational`, disjoint from `integer`. Together they partition the `rational` type.

```lisp
(subtypep 'ratio 'rational) ; → T, T
(subtypep 'ratio 'real)     ; → T, T
(subtypep 'ratio 'integer)  ; → NIL, T  (disjoint)
```

### Ratio Arithmetic

Arithmetic on ratios produces exact results. A ratio is only produced when the result is not a whole number.

```lisp
(+ 1/3 1/6)   ; → 1/2
(* 2/3 3/4)   ; → 1/2
(/ 1 3)       ; → 1/3
(- 5/3 2/3)   ; → 1  (integer result)
(typep (- 5/3 2/3) 'integer) ; → T
```
