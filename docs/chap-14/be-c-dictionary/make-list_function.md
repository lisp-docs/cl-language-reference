---
title: "make-list"
---

# make-list

import MakeListFunction from './_make-list_function.md';

<MakeListFunction />

## Expanded Reference: make-list

### Basic usage

`make-list` creates a list of the given size. Each element defaults to NIL.

```lisp
(make-list 5)
=> (NIL NIL NIL NIL NIL)

(make-list 0)
=> NIL
```

### Specifying an initial element

The `:initial-element` keyword sets the value for every element of the new list.

```lisp
(make-list 3 :initial-element 'x)
=> (X X X)

(make-list 4 :initial-element 0)
=> (0 0 0 0)

(make-list 2 :initial-element "hello")
=> (#1="hello" #1#)
```

### Elements share the same object

All elements in the list are the same object (eq to each other). This matters for mutable initial elements.

```lisp
(let ((lst (make-list 3 :initial-element (list 1 2))))
  (eq (first lst) (second lst)))
=> T
```

### Practical use: initializing a grid row

```lisp
(make-list 8 :initial-element '-)
=> (- - - - - - - -)
```

### Combining with mapcar for unique elements

If you need distinct mutable objects, use `mapcar` or `loop` instead.

```lisp
(mapcar (lambda (x) (declare (ignore x)) (list 0))
        (make-list 3))
=> ((0) (0) (0))
```
