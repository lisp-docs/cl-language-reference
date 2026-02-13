---
title: "vector-push, vector-push-extend"
---

# vector-push, vector-push-extend

import VectorPushFunction from './_vector-push_vector-push-extend_function.md';

<VectorPushFunction />

## Expanded Reference: vector-push, vector-push-extend

### Basic vector-push

`vector-push` stores an element at the current fill pointer position and increments the fill pointer by one. It returns the index where the element was stored, or `nil` if the vector is full.

```lisp
(let ((v (make-array 5 :fill-pointer 0)))
  (list (vector-push 'a v)   ; stored at index 0
        (vector-push 'b v)   ; stored at index 1
        (vector-push 'c v)   ; stored at index 2
        (fill-pointer v)
        v))
→ (0 1 2 3 #(A B C))
```

### vector-push Returns NIL When Full

When the fill pointer equals the array dimension, `vector-push` does nothing and returns `nil`.

```lisp
(let ((v (make-array 3 :fill-pointer 0)))
  (vector-push 'a v)
  (vector-push 'b v)
  (vector-push 'c v)
  (list (vector-push 'd v)   ; vector is full
        (fill-pointer v)
        v))
→ (NIL 3 #(A B C))
```

### vector-push-extend Grows the Vector

`vector-push-extend` is like `vector-push` but automatically extends the vector (using `adjust-array`) when it is full. The vector must be adjustable.

```lisp
(let ((v (make-array 3 :fill-pointer 0 :adjustable t)))
  (vector-push-extend 'a v)
  (vector-push-extend 'b v)
  (vector-push-extend 'c v)
  (vector-push-extend 'd v)  ; triggers extension
  (vector-push-extend 'e v)
  (list (fill-pointer v) v))
→ (5 #(A B C D E))
```

### Building a Collection Dynamically

A common pattern is using an adjustable vector with fill pointer as a growable collection.

```lisp
(let ((result (make-array 0 :fill-pointer 0 :adjustable t)))
  (dotimes (i 6)
    (vector-push-extend (* i i) result))
  result)
→ #(0 1 4 9 16 25)
```

### Specifying the Extension Amount

The optional third argument to `vector-push-extend` specifies the minimum number of elements to add when extending.

```lisp
(let ((v (make-array 2 :fill-pointer 0 :adjustable t)))
  (vector-push-extend 'a v)
  (vector-push-extend 'b v)
  ;; Extend by at least 100 elements
  (vector-push-extend 'c v 100)
  (list (fill-pointer v)
        (>= (array-total-size v) 102)))
→ (3 T)
```
