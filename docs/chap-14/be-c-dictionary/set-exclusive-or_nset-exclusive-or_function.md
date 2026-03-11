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
=> (6 5 2 1)

(set-exclusive-or '(a b c) '(a b c))
=> NIL
```

### Symmetric operation

Unlike `set-difference`, the result includes unmatched elements from both lists.

```lisp
(set-exclusive-or '(1 2 3) '(2 3 4 5))
=> (5 4 1)
```

### Using :test for value comparison

```lisp
(set-exclusive-or '("apple" "banana") '("banana" "cherry") :test #'equal)
=> ("cherry" "apple")

(set-exclusive-or '("Hello") '("hello") :test #'equalp)
=> NIL
```

### Using :key to compare by a component

```lisp
(set-exclusive-or '((a . 1) (b . 2) (c . 3))
                  '((b . 9) (c . 8) (d . 4))
                  :key #'car)
=> ((D . 4) (A . 1))
```

### nset-exclusive-or is destructive

`nset-exclusive-or` may modify either or both input lists. Always use the return value.

```lisp
(let ((a (list 1 2 3))
      (b (list 2 3 4)))
  (nset-exclusive-or a b))
=> (1 4)
```

### Practical example: detecting changes

```lisp
(let ((old-features '(:logging :auth :cache))
      (new-features '(:auth :cache :metrics)))
  (set-exclusive-or old-features new-features))
=> (:METRICS :LOGGING)
```
