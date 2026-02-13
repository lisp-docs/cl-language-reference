---
title: "fill"
---

# fill

import FillFunction from './_fill_function.md';

<FillFunction />

## Expanded Reference: fill

### Filling an entire sequence

`fill` destructively replaces every element in the sequence with the given item and returns the modified sequence.

```lisp
(fill (list 1 2 3 4 5) 0) ; → (0 0 0 0 0)
(fill (copy-seq "hello") #\*) ; → "*****"
```

### Filling a subrange with :start and :end

Use `:start` and `:end` to fill only a portion of the sequence.

```lisp
(let ((v (vector 'a 'b 'c 'd 'e)))
  (fill v 'z :start 1 :end 3)
  v)
; → #(A Z Z D E)
```

### Filling part of a string

```lisp
(let ((str (copy-seq "abcdef")))
  (fill str #\. :start 3))
; → "abc..."
```

### The item can be any object

The fill item does not need to match the original element types (for general sequences). Every position gets the same identical object.

```lisp
(fill (list nil nil nil) '(x y)) ; → ((X Y) (X Y) (X Y))
```

### fill modifies the sequence in place

`fill` is destructive -- it modifies and returns the original sequence, not a copy.

```lisp
(let ((lst (list 1 2 3)))
  (fill lst 0)
  lst)
; → (0 0 0)
```
