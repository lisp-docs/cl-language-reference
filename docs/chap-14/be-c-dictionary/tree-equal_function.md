---
title: "tree-equal"
---

# tree-equal

import TreeEqualFunction from './_tree-equal_function.md';

<TreeEqualFunction />

## Expanded Reference: tree-equal

### Basic tree comparison

`tree-equal` tests whether two trees have the same shape and the same leaves. By default, leaves are compared with `eql`.

```lisp
(tree-equal '(a (b c) d) '(a (b c) d))
; → T

(tree-equal '(a b) '(a c))
; → NIL
```

### Comparing different structures

Trees with different shapes are never equal, even if they contain the same atoms.

```lisp
(tree-equal '(a b c) '(a (b c)))
; → NIL

(tree-equal '((a) b) '(a b))
; → NIL
```

### Using :test for custom leaf comparison

The `:test` function is applied only to leaves (atoms), not to cons cells. Use `#'equal` or `#'equalp` for comparing string leaves by value.

```lisp
(tree-equal '("hello" ("world")) '("hello" ("world")) :test #'equal)
; → T

(tree-equal '("Hello") '("hello") :test #'equalp)
; → T
```

### Comparison with equal

`tree-equal` with default test is similar to `equal` for cons structures, but `tree-equal` allows customizing the leaf comparison function.

```lisp
;; equal compares strings by value, tree-equal (default) uses eql
(equal '("a") '("a"))
; → T

;; tree-equal with eql may return NIL for separate string objects
;; (implementation-dependent for literal strings)
(tree-equal '(1 2 3) '(1 2 3))
; → T
```

### Nested tree comparison with custom test

```lisp
(tree-equal '((1.0 2.0) (3.0 4.0))
            '((1 2) (3 4))
            :test #'=)
; → T
```
