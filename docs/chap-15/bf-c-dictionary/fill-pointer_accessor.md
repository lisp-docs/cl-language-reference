---
title: "fill-pointer"
---

# fill-pointer

import FillPointerAccessor from './_fill-pointer_accessor.md';

<FillPointerAccessor />

## Expanded Reference: fill-pointer

### Reading the Fill Pointer

`fill-pointer` returns the current fill pointer of a vector, which represents the "active" length of the vector.

```lisp
(let ((v (make-array 10 :fill-pointer 4 :initial-element 0)))
  (list (fill-pointer v) (length v)))
→ (4 4)
```

### Setting the Fill Pointer with SETF

You can change the fill pointer to expose or hide elements. The new value must be between 0 and the array's total size.

```lisp
(let ((v (make-array 8 :fill-pointer 3 :initial-element 'x)))
  (setf (fill-pointer v) 6)
  (list (fill-pointer v) (length v) v))
→ (6 6 #(X X X X X X))
```

### Shrinking and Growing the Logical Size

Decreasing the fill pointer hides elements; increasing it reveals elements that were previously stored.

```lisp
(let ((v (make-array 5 :fill-pointer 5
                     :initial-contents '(a b c d e))))
  ;; Shrink logical size to 2
  (setf (fill-pointer v) 2)
  (let ((shrunk (copy-seq v)))  ; only copies active elements
    ;; Grow back to 5 -- old elements are still there
    (setf (fill-pointer v) 5)
    (list shrunk v)))
→ (#(A B) #(A B C D E))
```

### Fill Pointer Controls Sequence Operations

Most sequence functions respect the fill pointer. `length`, `map`, `reduce`, and iteration all see only the active portion.

```lisp
(let ((v (make-array 6 :fill-pointer 3
                     :initial-contents '(10 20 30 40 50 60))))
  (list (length v)
        (reduce #'+ v)        ; only sums active elements
        (aref v 5)))          ; aref ignores fill pointer
→ (3 60 60)
```

### Resetting a Vector for Reuse

Setting the fill pointer to 0 effectively clears the vector without deallocating storage -- useful for reusing a buffer.

```lisp
(let ((buf (make-array 100 :fill-pointer 0 :adjustable t)))
  (dotimes (i 5) (vector-push-extend i buf))
  (let ((first-pass (copy-seq buf)))
    (setf (fill-pointer buf) 0)  ; "clear" the buffer
    (dotimes (i 3) (vector-push-extend (* i 10) buf))
    (list first-pass buf)))
→ (#(0 1 2 3 4) #(0 10 20))
```
