---
title: "vector"
---

# vector

import VectorFunction from './_vector_function.md';

<VectorFunction />

## Expanded Reference: vector

### Basic Usage

`vector` creates a fresh simple general vector containing the given objects. It is analogous to `list` but produces a vector instead of a list.

```lisp
(vector 1 2 3)
→ #(1 2 3)

(vector 'a 'b 'c 'd)
→ #(A B C D)

;; No arguments produces an empty vector
(vector)
→ #()
```

### Mixed Element Types

Since `vector` creates a general vector (element-type `t`), it can hold any mix of objects.

```lisp
(vector 1 "hello" 'foo #\a 3.14)
→ #(1 "hello" FOO #\a 3.14)

(vector '(1 2) #(3 4) "five")
→ #((1 2) #(3 4) "five")
```

### The Result Is Always a Simple Vector

The vector returned by `vector` is always a simple-vector (no fill pointer, not adjustable, not displaced).

```lisp
(simple-vector-p (vector 1 2 3))
→ T

(arrayp (vector 1 2 3))
→ T

(vectorp (vector 1 2 3))
→ T
```

### Equivalence to make-array

`(vector a b c)` is equivalent to `(make-array 3 :initial-contents (list a b c))`.

```lisp
(let ((v1 (vector 10 20 30))
      (v2 (make-array 3 :initial-contents '(10 20 30))))
  (equalp v1 v2))
→ T
```
