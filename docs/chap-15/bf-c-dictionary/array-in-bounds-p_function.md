---
title: "array-in-bounds-p"
---

# array-in-bounds-p

import ArrayInBoundsPFunction from './_array-in-bounds-p_function.md';

<ArrayInBoundsPFunction />

## Expanded Reference: array-in-bounds-p

### Basic Usage

`array-in-bounds-p` checks whether the given subscripts are valid indices for the array. It returns true if all subscripts are in bounds, false otherwise.

```lisp
(let ((v (make-array 5)))
  (list (array-in-bounds-p v 0)     ; first element
        (array-in-bounds-p v 4)     ; last element
        (array-in-bounds-p v 5)     ; out of bounds
        (array-in-bounds-p v -1)))  ; negative index
→ (T T NIL NIL)
```

### Multi-Dimensional Arrays

For multi-dimensional arrays, provide one subscript per dimension.

```lisp
(let ((m (make-array '(3 4))))
  (list (array-in-bounds-p m 0 0)     ; top-left corner
        (array-in-bounds-p m 2 3)     ; bottom-right corner
        (array-in-bounds-p m 3 0)     ; row out of bounds
        (array-in-bounds-p m 0 4)))   ; column out of bounds
→ (T T NIL NIL)
```

### Fill Pointer Is Ignored

`array-in-bounds-p` checks against the actual array dimensions, not the fill pointer.

```lisp
(let ((v (make-array 10 :fill-pointer 3)))
  (list (array-in-bounds-p v 5)  ; beyond fill pointer, but in bounds
        (array-in-bounds-p v 9)  ; last actual element
        (array-in-bounds-p v 10)))  ; truly out of bounds
→ (T T NIL)
```

### Safe Array Access Pattern

Use `array-in-bounds-p` to guard against out-of-bounds errors.

```lisp
(defun safe-aref (array &rest subscripts)
  "Access an array element safely, returning NIL if out of bounds."
  (when (apply #'array-in-bounds-p array subscripts)
    (apply #'aref array subscripts)))

(let ((v (vector 10 20 30)))
  (list (safe-aref v 1)
        (safe-aref v 5)))
→ (20 NIL)
```
