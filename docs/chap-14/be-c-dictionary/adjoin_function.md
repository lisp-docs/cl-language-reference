---
title: "adjoin"
---

# adjoin

import AdjoinFunction from './_adjoin_function.md';

<AdjoinFunction />

## Expanded Reference: adjoin

### Basic usage

`adjoin` adds an item to a list only if it is not already present. By default, it uses `eql` for comparison.

```lisp
(adjoin 'a '(b c d))
; → (A B C D)

(adjoin 'b '(b c d))
; → (B C D)
```

### Non-destructive behavior

`adjoin` does not modify the original list. It returns a new list when the item is added.

```lisp
(let ((lst '(1 2 3)))
  (adjoin 4 lst)
  lst)
; → (1 2 3)
```

### Using :test for custom comparison

By default, `adjoin` uses `eql`, which does not compare lists by structure. Use `:test #'equal` to compare by value.

```lisp
(adjoin '(a b) '((a b) (c d)))
; → ((A B) (A B) (C D))

(adjoin '(a b) '((a b) (c d)) :test #'equal)
; → ((A B) (C D))
```

### Using :key to compare by a component

The `:key` function extracts the part of each element to compare against the item (after applying `:key` to the item as well).

```lisp
(adjoin '(name "Bob") '((name "Alice") (age 30)) :key #'car)
; → ((NAME "Alice") (AGE 30))

(adjoin '(email "bob@test.com") '((name "Alice") (age 30)) :key #'car)
; → ((EMAIL "bob@test.com") (NAME "Alice") (AGE 30))
```

### Building a set from a sequence

`adjoin` can be used with `reduce` to build a set with no duplicates.

```lisp
(reduce (lambda (lst item) (adjoin item lst))
        '(a b a c b d a)
        :initial-value '())
; → (D C B A)
```
