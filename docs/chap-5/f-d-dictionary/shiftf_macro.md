---
title: "shiftf"
---

# shiftf

import ShiftfMacro from './_shiftf_macro.md';

<ShiftfMacro />

## Expanded Reference: shiftf

### Basic shift: replace and return the old value

`shiftf` stores a new value into a place and returns the old value. With one place, it acts like a "get-and-set" operation.

```lisp
(let ((x 'old))
  (shiftf x 'new))
→ OLD
```

### Shifting through a chain of places

Values shift to the left: each place gets the value of the next place, and the last place gets the new value. The old value of the first place is returned.

```lisp
(let ((a 1) (b 2) (c 3))
  (shiftf a b c 99)
  (list a b c))
→ (2 3 99)
```

### Practical use: dequeue from the front

`shiftf` is useful for extracting a value and replacing it in one step.

```lisp
(let ((x (list 'a 'b 'c)))
  (let ((old (shiftf (cadr x) 'z)))
    (list old x)))
→ (B (A Z C))
```

### Working with list structure

```lisp
(let ((x (list 1 2 3))
      (y 'trash))
  (shiftf y x (cdr x) '(hi there))
  (list :x x :y y))
→ (:X (2 3) :Y (1 HI THERE))
```

### Subforms are evaluated once

Like `rotatef`, `shiftf` evaluates each place's subforms exactly once, even when those subforms have side effects.

```lisp
(let ((n 0)
      (x (list 'a 'b 'c 'd)))
  (shiftf (nth (setq n (+ n 1)) x) 'z)
  (list n x))
→ (1 (A Z C D))
```

### shiftf returns the old value of the first place

The return value is always the original value that was displaced from the first place.

```lisp
(let ((a 10) (b 20))
  (values (shiftf a b 30) a b))
→ 10, 20, 30
```
