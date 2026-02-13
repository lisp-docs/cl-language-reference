---
title: "array-has-fill-pointer-p"
---

# array-has-fill-pointer-p

import ArrayHasFillPointerPFunction from './_array-has-fill-pointer-p_function.md';

<ArrayHasFillPointerPFunction />

## Expanded Reference: array-has-fill-pointer-p

### Basic Usage

`array-has-fill-pointer-p` returns true if the array has a fill pointer, false otherwise.

```lisp
(array-has-fill-pointer-p (make-array 5 :fill-pointer 0))
→ T

(array-has-fill-pointer-p (make-array 5 :fill-pointer 3))
→ T

;; Fill pointer set to T (equals total size)
(array-has-fill-pointer-p (make-array 5 :fill-pointer t))
→ T
```

### Arrays Without Fill Pointers

Simple arrays created without `:fill-pointer` may or may not have a fill pointer, depending on the implementation.

```lisp
;; Multi-dimensional arrays never have fill pointers
(array-has-fill-pointer-p (make-array '(2 3)))
→ NIL

;; Strings and bit vectors as literals typically do not
(array-has-fill-pointer-p "hello")
→ NIL
```

### Guarding fill-pointer Calls

Use `array-has-fill-pointer-p` before calling `fill-pointer` to avoid errors.

```lisp
(defun safe-fill-pointer (array)
  "Return the fill pointer if present, or NIL."
  (when (array-has-fill-pointer-p array)
    (fill-pointer array)))

(safe-fill-pointer (make-array 5 :fill-pointer 3))
→ 3

(safe-fill-pointer (make-array 5))
→ NIL  ; or a valid fill pointer, implementation-dependent
```

### Only Vectors Can Have Fill Pointers

Arrays of rank other than 1 never have fill pointers.

```lisp
(list (array-has-fill-pointer-p (make-array '(3 4)))
      (array-has-fill-pointer-p (make-array '(2 3 4)))
      (array-has-fill-pointer-p (make-array '())))
→ (NIL NIL NIL)
```
