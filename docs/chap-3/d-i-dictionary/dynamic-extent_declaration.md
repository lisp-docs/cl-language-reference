---
title: "dynamic-extent"
---

# dynamic-extent

import DynamicExtentDeclaration from './_dynamic-extent_declaration.md';

<DynamicExtentDeclaration />

## Expanded Reference: dynamic-extent

### Basic Usage

The `dynamic-extent` declaration asserts that the value of a variable has dynamic extent -- meaning the object is only needed while the declaring form is executing. This allows the compiler to allocate the object on the stack rather than the heap.

```lisp
(defun sum-list (numbers)
  (let ((fn (lambda (x) (* x x))))
    (declare (dynamic-extent fn))
    (reduce #'+ numbers :key fn)))
=> SUM-LIST

(sum-list '(1 2 3 4))
=> 30
```

### With &rest Arguments

A common use is declaring `&rest` list arguments as having dynamic extent, allowing stack allocation of the rest list.

```lisp
(defun my-format (stream control &rest args)
  (declare (dynamic-extent args))
  (apply #'format stream control args))
=> MY-FORMAT
```

### With Closures Passed to Higher-Order Functions

```lisp
(defun count-matching (predicate list)
  (declare (dynamic-extent predicate))
  (count-if predicate list))
=> COUNT-MATCHING

(count-matching #'evenp '(1 2 3 4 5 6))
=> 3
```

### Important Constraint

The object must not escape the dynamic extent of the form. Storing it in a global variable or returning it from the function would violate this contract and lead to undefined behavior.
