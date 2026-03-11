---
title: "gensym-counter"
---

# \*gensym-counter\*

import GensymCounterVariable from './_gensym-counter_variable.md';

<GensymCounterVariable />

## Expanded Reference: \*gensym-counter\*

### Basic usage

`*gensym-counter*` holds the next suffix number that `gensym` will use. It is incremented each time `gensym` is called without an explicit integer argument.

```lisp
(let ((*gensym-counter* 0))
  (values (gensym) (gensym) (gensym)))
;; => #:G0
;; => #:G1
;; => #:G2
```

### Reading the current counter value

You can inspect the counter to see what number the next gensym will use.

```lisp
(let ((*gensym-counter* 42))
  (values *gensym-counter*
          (gensym)
          *gensym-counter*))
;; => 42
;; => #:G42
;; => 43
```

### Setting the counter for deterministic names

Binding `*gensym-counter*` is the recommended way to control gensym suffixes, replacing the deprecated integer argument to `gensym`.

```lisp
(let ((*gensym-counter* 1000))
  (list (gensym "VAR") (gensym "VAR") (gensym "VAR")))
;; => (#:VAR1000 #:VAR1001 #:VAR1002)
```

### The counter must be a non-negative integer

`*gensym-counter*` must always hold a non-negative integer. Setting it to a negative value or a non-integer has undefined consequences.

```lisp
(let ((*gensym-counter* 0))
  (dotimes (i 5) (gensym))
  *gensym-counter*)
=> 5
```

### Independent of gentemp counter

`*gensym-counter*` is used only by `gensym`. The deprecated `gentemp` function uses its own internal counter.

```lisp
(let ((*gensym-counter* 500))
  (values (symbol-name (gensym))
          *gensym-counter*))
=> "G500"
=> 501
```
