---
title: "rational"
---

# rational

import RationalSystemClass from './_rational_system-class.md';

<RationalSystemClass />

## Expanded Reference: rational

### Type Checking

The `rational` type includes both integers and ratios. It represents exact numeric values (as opposed to the approximate representation of floats).

```lisp
(typep 42 'rational)
=> T
(typep 2/3 'rational)
=> T
(typep 3.14 'rational)
=> NIL
(typep #C(1 2) 'rational)
=> NIL
(rationalp 42)
=> T
(rationalp 1/3)
=> T
```

### Type Hierarchy

The `rational` type has two subtypes: `integer` and `ratio`. It is itself a subtype of `real`.

```lisp
(subtypep 'integer 'rational)
=> T
=> T
(subtypep 'ratio 'rational)
=> T
=> T
(subtypep 'rational 'real)
=> T
=> T
(subtypep 'rational 'number)
=> T
=> T
```

### Converting to Rational

The `rational` and `rationalize` functions convert real numbers to rationals, but they use different strategies for floats.

```lisp
;; rational converts using exact float representation
(rational 0.5)
=> 1/2
(rational 0.1)
=> 13421773/134217728

;; rationalize finds a simpler rational
(rationalize 0.5)
=> 1/2
(rationalize 0.1)
=> 1/10

;; Integers pass through unchanged
(rational 42)
=> 42
```

### Exact Arithmetic

Rationals provide exact arithmetic with no rounding errors, unlike floating-point numbers.

```lisp
;; Float arithmetic has rounding errors
(- 1.0 0.9 0.1)
=> 2.2351742e-8

;; Rational arithmetic is exact
(- 1 9/10 1/10)
=> 0
(+ 1/3 1/3 1/3)
=> 1
```
