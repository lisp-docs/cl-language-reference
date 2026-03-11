---
title: "print-radix"
---

# \*print-radix\*

import PrintRadixVariable from './_print-radix_variable.md';

<PrintRadixVariable />

## Expanded Reference: \*print-radix\*

### Default Behavior (false)

When `*print-radix*` is false, no radix specifier is printed. Numbers are printed according to `*print-base*`.

```lisp
(let ((*print-base* 16)
      (*print-radix* nil))
  (write-to-string 255))
=> "FF"
```

### With Radix Indicator

When `*print-radix*` is true, an appropriate radix specifier is printed before rational numbers.

```lisp
;; Base 16 uses #x prefix
(let ((*print-base* 16) (*print-radix* t))
  (write-to-string 255))
=> "#xFF"

;; Base 8 uses #o prefix
(let ((*print-base* 8) (*print-radix* t))
  (write-to-string 255))
=> "#o377"

;; Base 2 uses #b prefix
(let ((*print-base* 2) (*print-radix* t))
  (write-to-string 10))
=> "#b1010"
```

### Decimal Radix Uses Trailing Dot

For integers in base 10, the radix is indicated by a trailing decimal point rather than a leading prefix.

```lisp
(let ((*print-base* 10) (*print-radix* t))
  (write-to-string 42))
=> "42."
```

### Ratios Use #NNr Prefix for Base 10

```lisp
(let ((*print-base* 10) (*print-radix* t))
  (write-to-string 1/3))
=> "#10r1/3"

(let ((*print-base* 16) (*print-radix* t))
  (write-to-string 1/16))
=> "#x1/10"
```

### Other Bases Use #NNr Prefix

```lisp
(let ((*print-base* 24) (*print-radix* t))
  (write-to-string 23))
=> "#24rN"
```
