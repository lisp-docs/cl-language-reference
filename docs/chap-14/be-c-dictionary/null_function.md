---
title: "null"
---

# null

import NullFunction from './_null_function.md';

<NullFunction />

## Expanded Reference: null

### Testing for the empty list

`null` returns T if its argument is NIL (the empty list), and NIL otherwise.

```lisp
(null nil)
→ T

(null '())
→ T

(null '(1 2 3))
→ NIL
```

### Non-NIL values return NIL

Any object that is not NIL causes `null` to return NIL.

```lisp
(null t)
→ NIL

(null 0)
→ NIL

(null "")
→ NIL
```

### null vs. not

`null` and `not` compute the same result. The convention is to use `null` when testing for the empty list and `not` when inverting a boolean.

```lisp
;; Use null when checking list emptiness
(null (cdr '(only-one)))
→ T

;; Use not when inverting a boolean condition
(not (> 3 5))
→ T
```

### Common pattern: checking if a list is empty

`null` is the standard idiom for testing end-of-list in recursive functions.

```lisp
(defun my-length (lst)
  (if (null lst)
      0
      (+ 1 (my-length (cdr lst)))))

(my-length '(a b c d))
→ 4

(my-length nil)
→ 0
```

### Using null with conditional expressions

`null` integrates naturally with `when`, `unless`, and `cond`.

```lisp
(let ((items '()))
  (when (null items)
    "The list is empty"))
→ "The list is empty"
```
