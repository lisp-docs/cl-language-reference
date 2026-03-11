---
title: "adjust-array"
---

# adjust-array

import AdjustArrayFunction from './_adjust-array_function.md';

<AdjustArrayFunction />

## Expanded Reference: adjust-array

### Growing an Adjustable Array

`adjust-array` changes the dimensions of an array. When growing, new elements are filled with `:initial-element` if provided.

```lisp
(let ((a (make-array 4 :adjustable t :initial-contents '(a b c d))))
  (adjust-array a 7 :initial-element 'x)
  a)
=> #(A B C D X X X)
```

### Shrinking an Array

When shrinking, elements beyond the new dimensions are discarded.

```lisp
(let ((a (make-array 6 :adjustable t :initial-contents '(1 2 3 4 5 6))))
  (adjust-array a 3)
  a)
=> #(1 2 3)
```

### Adjusting a 2D Array

For multi-dimensional arrays, existing elements that are still in bounds are preserved.

```lisp
(let ((m (make-array '(2 3) :adjustable t
                     :initial-contents '((a b c) (d e f)))))
  (adjust-array m '(3 4) :initial-element '*)
  (list (array-dimensions m)
        (aref m 0 0)    ; preserved
        (aref m 1 2)    ; preserved
        (aref m 2 3)))  ; new element
=> ((3 4) A F *)
```

### Replacing Contents Entirely

Use `:initial-contents` to completely replace all array data.

```lisp
(let ((a (make-array 3 :adjustable t :initial-contents '(old old old))))
  (adjust-array a 4 :initial-contents '(new data goes here))
  a)
=> #(NEW DATA GOES HERE)
```

### Adjusting Fill Pointer

When adjusting a vector with a fill pointer, supply `:fill-pointer` to update it.

```lisp
(let ((v (make-array 5 :adjustable t :fill-pointer 3 :initial-element 0)))
  (adjust-array v 10 :initial-element 1 :fill-pointer 7)
  (list (length v) (array-total-size v)))
=> (7 10)
```

### The Return Value

For actually adjustable arrays, `adjust-array` returns the same (identical) array object. Always use the return value or the original variable to be safe.

```lisp
(let ((a (make-array 3 :adjustable t :initial-element 0)))
  (eq a (adjust-array a 5 :initial-element 1)))
=> T
```
