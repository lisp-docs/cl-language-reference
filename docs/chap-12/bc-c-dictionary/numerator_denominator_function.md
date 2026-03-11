---
title: "numerator, denominator"
---

# numerator, denominator

import NumeratorFunction from './_numerator_denominator_function.md';

<NumeratorFunction />

## Expanded Reference: numerator, denominator

### Extracting numerator and denominator

`numerator` and `denominator` return the numerator and denominator of a rational number in its canonical (reduced) form.

```lisp
(numerator 1/2)
=> 1
(denominator 1/2)
=> 2
(numerator 3/4)
=> 3
(denominator 3/4)
=> 4
```

### Automatic reduction to lowest terms

The values returned are always in reduced form, even if the original ratio was not.

```lisp
(numerator 6/8)
=> 3
(denominator 6/8)
=> 4
(denominator 12/36)
=> 3
(numerator 12/36)
=> 1
```

### With integers

For integer arguments, `numerator` returns the integer itself and `denominator` returns 1.

```lisp
(numerator 5)
=> 5
(denominator 5)
=> 1
(numerator -1)
=> -1
(denominator -1)
=> 1
```

### Sign handling

The sign is carried by the numerator. The denominator is always positive.

```lisp
(numerator -3/4)
=> -3
(denominator -3/4)
=> 4
(numerator (/ 8 -6))
=> -4
(denominator (/ 8 -6))
=> 3
```

### Canonical form invariant

The numerator and denominator are always coprime (their GCD is 1).

```lisp
(let ((r 12/18))
  (gcd (numerator r) (denominator r)))
=> 1

(let ((r 100/75))
  (values (numerator r) (denominator r)))
=> 4
=> 3
```
