---
title: "make-array"
---

# make-array

import MakeArrayFunction from './_make-array_function.md';

<MakeArrayFunction />

## Expanded Reference: make-array

### Basic Usage: Creating Simple Arrays

`make-array` is the primary function for creating arrays. The first argument specifies dimensions -- an integer for a one-dimensional array (vector), or a list of integers for multi-dimensional arrays.

```lisp
;; Create a 1D array (vector) of 5 elements
(make-array 5)
→ #(NIL NIL NIL NIL NIL)  ; implementation-dependent initial values

;; Create a 2D array (3 rows, 4 columns)
(make-array '(3 4) :initial-element 0)
→ #2A((0 0 0 0) (0 0 0 0) (0 0 0 0))

;; Create a zero-dimensional array (holds a single value)
(make-array '() :initial-element 42)
→ #0A42
```

### Specifying Initial Contents

Use `:initial-element` to fill every element with the same value, or `:initial-contents` to provide the exact structure.

```lisp
;; All elements set to the same value
(make-array 4 :initial-element 'hello)
→ #(HELLO HELLO HELLO HELLO)

;; Provide exact contents for a 2D array
(make-array '(2 3) :initial-contents '((1 2 3) (4 5 6)))
→ #2A((1 2 3) (4 5 6))

;; Provide contents for a 1D array
(make-array 3 :initial-contents '(a b c))
→ #(A B C)
```

### Element Types

The `:element-type` keyword restricts what an array can hold. The implementation may upgrade the type.

```lisp
;; Array of single-floats
(make-array 3 :element-type 'single-float :initial-element 0.0)
→ #(0.0 0.0 0.0)

;; Array of characters (i.e., a string)
(make-array 5 :element-type 'character :initial-element #\x)
→ "xxxxx"

;; Bit array
(make-array 8 :element-type 'bit :initial-element 0)
→ #*00000000
```

### Fill Pointers and Adjustable Arrays

Fill pointers allow a vector to have a logical size smaller than its actual allocated size. Adjustable arrays can be resized later with `adjust-array`.

```lisp
;; Vector with a fill pointer -- only first 3 elements are "active"
(let ((v (make-array 10 :fill-pointer 3 :initial-element 0)))
  (list (length v)            ; length respects fill pointer
        (array-total-size v)  ; total allocated size
        v))
→ (3 10 #(0 0 0))

;; Adjustable array
(let ((a (make-array 4 :adjustable t :initial-element 'x)))
  (adjust-array a 6 :initial-element 'y)
  a)
→ #(X X X X Y Y)

;; Fill pointer set to T means fill-pointer = total size
(make-array 5 :fill-pointer t :initial-element 0)
→ #(0 0 0 0 0)
```

### Displaced Arrays

A displaced array shares storage with another array, providing a different view into the same data.

```lisp
;; Create a base array and a displaced view into it
(let* ((base (make-array 10 :initial-contents '(0 1 2 3 4 5 6 7 8 9)))
       (view (make-array 5 :displaced-to base :displaced-index-offset 3)))
  (list view (aref view 0) (aref view 4)))
→ (#(3 4 5 6 7) 3 7)

;; Modifying the displaced array modifies the original
(let* ((base (make-array 4 :initial-contents '(a b c d)))
       (view (make-array 2 :displaced-to base :displaced-index-offset 1)))
  (setf (aref view 0) 'X)
  (list base view))
→ (#(A X C D) #(X C))

;; Displaced 2D view into a 1D array
(let* ((data (make-array 6 :initial-contents '(1 2 3 4 5 6)))
       (matrix (make-array '(2 3) :displaced-to data)))
  matrix)
→ #2A((1 2 3) (4 5 6))
```
