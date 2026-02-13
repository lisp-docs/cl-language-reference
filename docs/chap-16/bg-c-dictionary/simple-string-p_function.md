---
title: "simple-string-p"
---

# simple-string-p

import SimpleStringPFunction from './_simple-string-p_function.md';

<SimpleStringPFunction />

## Expanded Reference: simple-string-p

### Testing string literals

String literals are simple strings -- they have no fill pointer and are not displaced or adjustable.

```lisp
(simple-string-p "hello")
→ T

(simple-string-p "")
→ T
```

### Strings from make-string are simple

`make-string` always produces simple strings.

```lisp
(simple-string-p (make-string 10 :initial-element #\x))
→ T
```

### Strings with fill pointers are not simple

A string created with a fill pointer is not a simple string.

```lisp
(simple-string-p
  (make-array 6 :element-type 'character
                :fill-pointer t
                :initial-element #\a))
→ NIL
```

### Adjustable strings are not simple

Adjustable arrays (including adjustable strings) are not simple strings.

```lisp
(simple-string-p
  (make-array 5 :element-type 'character
                :adjustable t
                :initial-element #\z))
→ NIL
```

### Non-string objects return NIL

`simple-string-p` returns NIL for any object that is not a simple string.

```lisp
(simple-string-p #\a)
→ NIL

(simple-string-p 42)
→ NIL

(simple-string-p '(h e l l o))
→ NIL

(simple-string-p #(#\h #\e #\l #\l #\o))
→ NIL
```

### Equivalence with typep

`(simple-string-p x)` is equivalent to `(typep x 'simple-string)`.

```lisp
(let ((s "test"))
  (eql (simple-string-p s) (typep s 'simple-string)))
→ T
```
