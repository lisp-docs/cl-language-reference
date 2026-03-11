---
title: "svref"
---

# svref

import SvrefAccessor from './_svref_accessor.md';

<SvrefAccessor />

## Expanded Reference: svref

### Basic Element Access

`svref` accesses elements of a simple vector by index. It is identical to `aref` but requires its first argument to be a simple vector, which may allow optimized access.

```lisp
(let ((v (vector 'a 'b 'c 'd)))
  (list (svref v 0) (svref v 2)))
=> (A C)
```

### Setting Elements with SETF

`svref` works with `setf` to modify elements in place.

```lisp
(let ((v (vector 1 2 3 4 5)))
  (setf (svref v 2) 99)
  v)
=> #(1 2 99 4 5)
```

### Only Works on Simple Vectors

`svref` requires a simple vector -- a one-dimensional array with element-type `t`, no fill pointer, not adjustable, and not displaced. Strings, bit vectors, and vectors with fill pointers are not valid arguments.

```lisp
;; This works: vector creates a simple vector
(svref (vector 'x 'y 'z) 1)
=> Y

;; simple-vector-p can verify the argument type
(let ((v (make-array 3 :initial-element 0)))
  (list (simple-vector-p v)
        (svref v 0)))
=> (T 0)
```

### Performance Consideration

When you know your array is a simple vector, using `svref` communicates this to both the reader and the compiler, potentially enabling faster element access.

```lisp
(let ((v (vector 10 20 30 40 50)))
  ;; svref and aref return the same value
  (= (svref v 3) (aref v 3)))
=> T
```
