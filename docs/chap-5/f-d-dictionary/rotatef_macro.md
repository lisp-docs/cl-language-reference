---
title: "rotatef"
---

# rotatef

import RotatefMacro from './_rotatef_macro.md';

<RotatefMacro />

## Expanded Reference: rotatef

### Swapping two places

The simplest use of `rotatef` is swapping two values.

```lisp
(let ((a 1) (b 2))
  (rotatef a b)
  (list a b))
→ (2 1)
```

### Rotating three or more values to the left

`rotatef` shifts all values one position to the left, with the first value wrapping around to the last position.

```lisp
(let ((a 'x) (b 'y) (c 'z))
  (rotatef a b c)
  (list a b c))
→ (Y Z X)
```

### Working with generalized places

`rotatef` works with any setf-able place, not just variables.

```lisp
(let ((lst (list 'a 'b 'c)))
  (rotatef (first lst) (second lst) (third lst))
  lst)
→ (B C A)
```

### Rotating elements in a vector

```lisp
(let ((v (vector 10 20 30 40)))
  (rotatef (aref v 0) (aref v 1) (aref v 2) (aref v 3))
  v)
→ #(20 30 40 10)
```

### rotatef always returns NIL

```lisp
(let ((a 1) (b 2))
  (rotatef a b))
→ NIL
```

### Subforms are evaluated only once

Each place's subforms are evaluated exactly once, which matters when subforms have side effects.

```lisp
(let ((n 0)
      (x (list 'a 'b 'c 'd 'e 'f 'g)))
  (rotatef (nth (incf n) x)
           (nth (incf n) x)
           (nth (incf n) x))
  x)
→ (A C D B E F G)
```
