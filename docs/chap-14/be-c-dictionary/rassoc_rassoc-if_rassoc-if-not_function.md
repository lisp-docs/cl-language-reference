---
title: "rassoc, rassoc-if, rassoc-if-not"
---

# rassoc, rassoc-if, rassoc-if-not

import RassocFunction from './_rassoc_rassoc-if_rassoc-if-not_function.md';

<RassocFunction />

## Expanded Reference: rassoc, rassoc-if, rassoc-if-not

### Reverse association list lookup

`rassoc` searches an alist by matching against the cdr (value) of each pair, rather than the car (key). It returns the entire pair, or NIL if not found.

```lisp
(rassoc 2 '((a . 1) (b . 2) (c . 3)))
→ (B . 2)

(rassoc 99 '((a . 1) (b . 2) (c . 3)))
→ NIL
```

### Finding a key by its value

`rassoc` is the reverse of `assoc`: use `car` on the result to get the key associated with a value.

```lisp
(car (rassoc 'green '((apple . green) (banana . yellow) (cherry . red))))
→ APPLE
```

### String values require a :test argument

Like `assoc`, the default test is `eql`, which does not work for string comparison.

```lisp
(rassoc "two" '((2 . "two") (3 . "three")) :test #'equal)
→ (2 . "two")

(rassoc "two" '((2 . "two") (3 . "three")))
→ NIL
```

### rassoc-if: search by predicate on the value

`rassoc-if` applies a predicate to the cdr of each pair.

```lisp
(rassoc-if #'stringp '((1 . 100) (2 . "hello") (3 . "world")))
→ (2 . "hello")

(rassoc-if #'zerop '((a . 5) (b . 0) (c . 3)))
→ (B . 0)
```

### Using :key for custom extraction

The `:key` function is applied to the cdr of each pair before testing.

```lisp
(rassoc 3 '((a . (1 2 3)) (b . (4 5 6))) :key #'length)
→ (A 1 2 3)
```

### Practical use: reverse lookup in a bidirectional mapping

`rassoc` enables reverse lookups in an alist used as a bidirectional map.

```lisp
(let ((codes '((:us . "United States")
               (:uk . "United Kingdom")
               (:fr . "France"))))
  ;; Forward lookup
  (cdr (assoc :uk codes))
  ;; Reverse lookup
  (car (rassoc "France" codes :test #'equal)))
→ :FR
```
