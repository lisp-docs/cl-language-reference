---
title: "union, nunion"
---

# union, nunion

import UnionFunction from './_union_nunion_function.md';

<UnionFunction />

## Expanded Reference: union, nunion

### Basic set union

`union` returns a list containing every element that appears in either list. Duplicates between the two lists are removed (one copy is kept).

```lisp
(union '(1 2 3) '(3 4 5))
=> (2 1 3 4 5)

(union '(a b c) '(a b c))
=> (A B C)
```

### Using :test for value comparison

Use `:test` to control how elements are compared.

```lisp
(union '("apple" "banana") '("banana" "cherry") :test #'equal)
=> ("apple" "banana" "cherry")

(union '("Hello") '("hello") :test #'equalp)
=> ("hello")
```

### Using :key to compare by a component

The `:key` function extracts the comparison part from each element.

```lisp
(union '((id 1 name "Alice") (id 2 name "Bob"))
       '((id 2 name "Robert") (id 3 name "Carol"))
       :key #'cadr)
=> ((ID 1 NAME "Alice") (ID 2 NAME "Robert") (ID 3 NAME "Carol"))
```

### nunion is destructive

`nunion` may modify either list to construct the result. Always use the return value.

```lisp
(let ((a (list 1 2 3))
      (b (list 3 4 5)))
  (nunion a b))
=> (2 1 3 4 5)
```

### Merging keyword sets

```lisp
(union '(:bold :italic) '(:italic :underline))
=> (:BOLD :ITALIC :UNDERLINE)
```
