---
title: "intersection, nintersection"
---

# intersection, nintersection

import IntersectionFunction from './_intersection_nintersection_function.md';

<IntersectionFunction />

## Expanded Reference: intersection, nintersection

### Basic set intersection

`intersection` returns a list of elements that appear in both lists. The default test is `eql`.

```lisp
(intersection '(1 2 3 4 5) '(3 4 5 6 7))
; → (3 4 5)  ; order may vary

(intersection '(a b c) '(x y z))
; → NIL
```

### Using :test for string comparison

By default, separate string objects are not `eql`. Use `:test #'equal` or `:test #'equalp` for value-based comparison.

```lisp
(intersection '("apple" "banana" "cherry")
              '("banana" "date" "cherry")
              :test #'equal)
; → ("banana" "cherry")  ; order may vary

(intersection '("Hello" "World")
              '("hello" "world")
              :test #'equalp)
; → ("Hello" "World")  ; order may vary
```

### Using :key to compare by a component

The `:key` function extracts the part of each element to be compared.

```lisp
(intersection '((name "Alice") (name "Bob"))
              '((name "Bob") (name "Carol"))
              :key #'cadr
              :test #'equal)
; → ((NAME "Bob"))  ; order may vary
```

### nintersection is destructive

`nintersection` may modify list-1 to produce the result. Always use the return value.

```lisp
(let ((a (list 1 2 3 4 5))
      (b (list 2 4 6)))
  (nintersection a b))
; → (2 4)  ; order may vary
```

### Finding common elements in association lists

```lisp
(intersection '((a . 1) (b . 2) (c . 3))
              '((b . 5) (c . 6) (d . 7))
              :key #'car)
; → ((B . 2) (C . 3))  ; order may vary
```
