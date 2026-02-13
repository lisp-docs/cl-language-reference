---
title: "/"
---

# /

import SlashFunction from './_slash_function.md';

<SlashFunction />

## Expanded Reference: /

### Reciprocal with a single argument

With one argument, `/` returns the reciprocal of the number.

```lisp
(/ 2) ; → 1/2
(/ -8) ; → -1/8
(/ 0.5) ; → 2.0
```

### Basic division

With two or more arguments, `/` divides the first argument by all subsequent arguments.

```lisp
(/ 12 4) ; → 3
(/ 20 5) ; → 4
(/ 3 4 5) ; → 3/20
(/ 60 -2 3 5.0) ; → -2.0
```

### Rational division

When dividing integers that do not divide evenly, the result is a ratio, not a truncated integer.

```lisp
(/ 13 4) ; → 13/4
(/ 5 20) ; → 1/4
(/ 1 3) ; → 1/3
```

### Floating-point division

When any argument is a float, the result is a float.

```lisp
(/ 10.0 3) ; → 3.3333333
(/ 1 3.0) ; → 0.33333334
(/ 7.0d0 2) ; → 3.5d0
```

### Complex division

`/` handles complex numbers as well.

```lisp
(/ #c(10 0) 2) ; → 5
(/ 2 #c(2 2)) ; → #C(1/2 -1/2)
(/ #c(4.0 2.0) #c(1.0 1.0)) ; → #C(3.0 -1.0)
```
