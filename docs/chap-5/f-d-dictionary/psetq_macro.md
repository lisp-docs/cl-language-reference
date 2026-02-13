---
title: "psetq"
---

# psetq

import PsetqMacro from './_psetq_macro.md';

<PsetqMacro />

## Expanded Reference: psetq

### Basic parallel assignment

`psetq` assigns values to variables in parallel. All the value forms are evaluated first, then all assignments happen simultaneously.

```lisp
(let ((a 1) (b 2) (c 3))
  (psetq a 10 b 20 c 30)
  (list a b c))
→ (10 20 30)
```

### Swapping two variables

The parallel nature of `psetq` makes swapping values trivial, with no need for a temporary variable.

```lisp
(let ((a 1) (b 2))
  (psetq a b b a)
  (list a b))
→ (2 1)
```

### Difference from setq

With `setq`, assignments happen sequentially, so later assignments see the effects of earlier ones. With `psetq`, all value forms see the original values.

```lisp
;; With setq: sequential assignment
(let ((a 1) (b 2))
  (setq a (+ b 1) b (+ a 1))  ; a becomes 3, then b becomes 4
  (list a b))
→ (3 4)

;; With psetq: parallel assignment
(let ((a 1) (b 2))
  (psetq a (+ b 1) b (+ a 1))  ; both see original values
  (list a b))
→ (3 2)
```

### Rotating values among three variables

```lisp
(let ((x 'a) (y 'b) (z 'c))
  (psetq x y y z z x)
  (list x y z))
→ (B C A)
```

### psetq always returns NIL

Regardless of the assignments, `psetq` always returns NIL.

```lisp
(let ((a 1) (b 2))
  (psetq a 10 b 20))
→ NIL
```
