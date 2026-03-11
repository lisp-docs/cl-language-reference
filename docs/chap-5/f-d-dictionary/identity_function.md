---
title: "identity"
---

# identity

import IdentityFunction from './_identity_function.md';

<IdentityFunction />

## Expanded Reference: identity

### Basic usage

`identity` simply returns its argument unchanged. It is the identity function.

```lisp
(identity 42) → 42
(identity "hello") → "hello"
(identity nil) → NIL
(identity '(a b c)) → (A B C)
```

### Using identity with mapcan to flatten lists

A classic use of `identity` is with `mapcan` to concatenate a list of lists (flatten one level).

```lisp
(mapcan #'identity (list (list 1 2 3) (list 4 5 6)))
=> (1 2 3 4 5 6)
```

### As a default key function

`identity` is useful as a `:key` argument when you want to operate on elements directly. Many functions default to `identity` for their `:key`.

```lisp
(sort (list 3 1 4 1 5 9) #'< :key #'identity)
=> (1 1 3 4 5 9)
```

### Filtering with remove-if-not

`identity` can serve as a predicate to filter out NIL values, since any non-NIL value is truthy.

```lisp
(remove-if-not #'identity '(1 nil 2 nil 3))
=> (1 2 3)

(remove nil '(a nil b nil c) :key #'identity)
=> (A B C)
```

### As a pass-through in functional composition

When a higher-order function requires a function argument but you do not want any transformation, `identity` is the right choice.

```lisp
(mapcar #'identity '(a b c d))
=> (A B C D)

(reduce #'append '((1 2) (3 4) (5 6))
        :key #'identity)
=> (1 2 3 4 5 6)
```
