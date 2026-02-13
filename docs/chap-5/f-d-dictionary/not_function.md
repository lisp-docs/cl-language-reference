---
title: "not"
---

# not

import NotFunction from './_not_function.md';

<NotFunction />

## Expanded Reference: not

### Basic boolean negation

`not` returns T if its argument is NIL, and NIL otherwise.

```lisp
(not nil) → T
(not t) → NIL
```

### Any non-NIL value is truthy

In Common Lisp, everything except NIL is considered true. `not` reflects this.

```lisp
(not 42) → NIL
(not "hello") → NIL
(not 'apple) → NIL
(not '(1 2 3)) → NIL
```

### Using not with predicates

`not` is commonly used to invert the result of a predicate call.

```lisp
(not (integerp 5)) → NIL
(not (integerp "hello")) → T
(not (> 3 5)) → T
(not (member 'x '(a b c))) → T
```

### not vs null

`not` and `null` compute the same result but express different intent. Use `not` for boolean logic and `null` for testing empty lists.

```lisp
;; Boolean logic intent
(not (evenp 3)) → T

;; Empty list testing intent
(null '()) → T
(null '(a b)) → NIL

;; They are functionally identical
(eq (not '()) (null '())) → T
```

### Chaining with not

`not` can be used to coerce a generalized boolean to a strict boolean (T or NIL).

```lisp
(not (not 42)) → T
(not (not nil)) → NIL
(not (not (member 'b '(a b c)))) → T
```
