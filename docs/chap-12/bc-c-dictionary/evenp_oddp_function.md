---
title: "evenp, oddp"
---

# evenp, oddp

import EvenpFunction from './_evenp_oddp_function.md';

<EvenpFunction />

## Expanded Reference: evenp, oddp

### Basic even and odd testing

`evenp` returns true if the integer is divisible by two. `oddp` returns true if it is not.

```lisp
(evenp 0)
=> T
(evenp 2)
=> T
(evenp 3)
=> NIL

(oddp 1)
=> T
(oddp 4)
=> NIL
(oddp -1)
=> T
```

### With negative integers

`evenp` and `oddp` work with negative integers as expected.

```lisp
(evenp -4)
=> T
(oddp -4)
=> NIL
(evenp -7)
=> NIL
(oddp -7)
=> T
```

### With large integers (bignums)

These predicates handle arbitrarily large integers.

```lisp
(evenp 10000000000000000000000)
=> T
(oddp 10000000000000000000000)
=> NIL
(oddp 10000000000000000000001)
=> T
```

### Complementary relationship

`evenp` and `oddp` are always complementary for any integer.

```lisp
(let ((n 42))
  (eq (evenp n) (not (oddp n))))
=> T

(let ((n 43))
  (eq (oddp n) (not (evenp n))))
=> T
```

### Filtering lists by parity

These predicates are useful with higher-order functions to filter sequences.

```lisp
(remove-if-not #'evenp '(1 2 3 4 5 6 7 8 9 10))
=> (2 4 6 8 10)

(remove-if-not #'oddp '(1 2 3 4 5 6 7 8 9 10))
=> (1 3 5 7 9)
```
