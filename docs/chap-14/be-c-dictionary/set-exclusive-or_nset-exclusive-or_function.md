---
title: "set-exclusive-or, nset-exclusive-or"
---

# set-exclusive-or, nset-exclusive-or

import SetExclusiveOrFunction from './_set-exclusive-or_nset-exclusive-or_function.md';

<SetExclusiveOrFunction />

## Expanded Reference: set-exclusive-or, nset-exclusive-or

### Basic symmetric difference

`set-exclusive-or` returns elements that appear in exactly one of the two lists (but not both).

```lisp
(set-exclusive-or '(1 2 3 4) '(3 4 5 6))
; → (1 2 5 6)  ; order may vary

(set-exclusive-or '(a b c) '(a b c))
; → NIL
```

### Symmetric operation

Unlike `set-difference`, the result includes unmatched elements from both lists.

```lisp
(set-exclusive-or '(1 2 3) '(2 3 4 5))
; → (1 4 5)  ; order may vary
```

### Using :test for value comparison

```lisp
(set-exclusive-or '("apple" "banana") '("banana" "cherry") :test #'equal)
; → ("apple" "cherry")  ; order may vary

(set-exclusive-or '("Hello") '("hello") :test #'equalp)
; → NIL
```

### Using :key to compare by a component

```lisp
(set-exclusive-or '((a . 1) (b . 2) (c . 3))
                  '((b . 9) (c . 8) (d . 4))
                  :key #'car)
; → ((A . 1) (D . 4))  ; order may vary
```

### nset-exclusive-or is destructive

`nset-exclusive-or` may modify either or both input lists. Always use the return value.

```lisp
(let ((a (list 1 2 3))
      (b (list 2 3 4)))
  (nset-exclusive-or a b))
; → (1 4)  ; order may vary
```

### Practical example: detecting changes

```lisp
(let ((old-features '(:logging :auth :cache))
      (new-features '(:auth :cache :metrics)))
  (set-exclusive-or old-features new-features))
; → (:LOGGING :METRICS)  ; order may vary
```
