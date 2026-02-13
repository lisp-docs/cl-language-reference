---
title: "=, /=, <, >, <=, >="
---

# =, /=, \<, \>, \<=, \>=

import EqualFunction from './_equal_function.md';

<EqualFunction />

## Expanded Reference: =, /=, \<, \>, \<=, \>=

### Numeric Equality with =

The `=` function tests numeric equality, ignoring type differences between number representations. It accepts one or more arguments and returns true if all are numerically equal.

```lisp
(= 1 1)         ; → T
(= 1 1.0)       ; → T  (cross-type comparison)
(= 1 1/1)       ; → T
(= 1 2)         ; → NIL
(= 3 3 3 3)     ; → T  (all equal)
(= 3 3 3 4)     ; → NIL
```

### Numeric Inequality with /=

The `/=` function returns true if all arguments are pairwise different (no two are numerically equal).

```lisp
(/= 1 2)         ; → T
(/= 1 1)         ; → NIL
(/= 1 2 3)       ; → T   (all pairwise different)
(/= 1 2 1)       ; → NIL (first and third are equal)
```

### Ordering Comparisons

The `<`, `>`, `<=`, and `>=` functions test monotonic ordering of real numbers. They accept one or more arguments.

```lisp
(< 1 2 3)     ; → T   (strictly increasing)
(< 1 2 2)     ; → NIL  (not strictly increasing)
(<= 1 2 2)    ; → T   (non-decreasing)
(> 3 2 1)     ; → T   (strictly decreasing)
(>= 3 2 2)    ; → T   (non-increasing)
(>= 3 2 3)    ; → NIL
```

### Cross-Type Comparisons

These functions work across numeric types, comparing rationals, floats, and integers seamlessly.

```lisp
(< 1 3/2 2.0)   ; → T
(= 1/2 0.5)     ; → T
(<= 0 0.0 1/2)  ; → T
```

### Complex Numbers with =

The `=` and `/=` functions work with complex numbers, but the ordering functions (`<`, `>`, `<=`, `>=`) only accept real numbers.

```lisp
(= #C(1 2) #C(1 2))   ; → T
(= #C(1 0) 1)          ; → T  (canonicalized)
(/= #C(1 2) #C(3 4))   ; → T
;; (< #C(1 2) #C(3 4)) would signal an error — not defined for complex
```
