---
title: "block"
---

# block

import BlockSpecialOperator from './_block_special-operator.md';

<BlockSpecialOperator />

## Expanded Reference: block

### An empty block returns NIL

A block with no body forms returns `NIL`.

```lisp
(block done)
; => NIL
```

### Normal return from a block

When no `return-from` is used, the block returns the values of its last form, like an implicit `progn`.

```lisp
(block compute
  (+ 1 2)
  (+ 3 4)
  (+ 5 6))
; => 11
```

### Early exit with return-from

`return-from` transfers control out of the named block immediately and returns the specified value.

```lisp
(block search
  (dolist (x '(1 2 3 4 5))
    (when (= x 3)
      (return-from search x)))
  nil)
; => 3
```

### Blocks established by defun

Every function defined with `defun` has an implicit block named after the function. You can use `return-from` with the function name to exit early.

```lisp
(defun find-even (list)
  (dolist (x list)
    (when (evenp x)
      (return-from find-even x)))
  nil)

(find-even '(1 3 5 4 7)) ; => 4
(find-even '(1 3 5 7))   ; => NIL
```

### Blocks have lexical scope

A `return-from` must be lexically contained within the block it refers to. Inner blocks with the same name shadow outer ones. Here, the `return-from` targets the inner block named `twin`, so the outer block continues to evaluate and returns 2.

```lisp
(block twin
  (block twin
    (return-from twin 1))
  2)
; => 2
```

### Returning multiple values from a block

`return-from` can pass multiple values out of a block.

```lisp
(block multi
  (return-from multi (values 10 20 30))
  (print "not reached"))
; => 10, 20, 30
```
