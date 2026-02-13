---
title: "apply"
---

# apply

import ApplyFunction from './_apply_function.md';

<ApplyFunction />

## Expanded Reference: apply

### Applying a function to a list of arguments

`apply` calls a function with arguments taken from a list. The last argument to `apply` must be a list.

```lisp
(apply #'+ '(1 2 3 4))
→ 10
```

### Mixing individual arguments with a final list

Arguments before the final list are prepended to it. This is useful when you know some arguments up front and others are in a list.

```lisp
(apply #'+ 1 2 '(3 4 5))
→ 15
```

### Using a function designator (symbol)

A symbol naming a function can be used instead of a function object.

```lisp
(apply 'max '(3 7 2 9 4))
→ 9
```

### Applying to an empty list

When applied to an empty list, the function is called with no arguments.

```lisp
(apply #'+ '())
→ 0

(apply #'list '())
→ NIL
```

### Constructing argument lists dynamically

`apply` is commonly used when the arguments to a function are built up at runtime.

```lisp
(defun sum-squares (&rest numbers)
  (apply #'+ (mapcar (lambda (n) (* n n)) numbers)))
→ SUM-SQUARES

(sum-squares 3 4 5)
→ 50
```

### Passing keyword arguments through apply

`apply` can pass keyword arguments that are stored in a list.

```lisp
(apply #'make-list 3 '(:initial-element :x))
→ (:X :X :X)
```
