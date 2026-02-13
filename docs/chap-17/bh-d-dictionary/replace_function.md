---
title: "replace"
---

# replace

import ReplaceFunction from './_replace_function.md';

<ReplaceFunction />

## Expanded Reference: replace

### Basic replacement

`replace` destructively copies elements from sequence-2 into sequence-1 and returns sequence-1. By default, it copies from the start of both sequences.

```lisp
(let ((a (list 1 2 3 4 5)))
  (replace a '(10 20 30))
  a)
; → (10 20 30 4 5)
```

### Replacing with start and end bounds

Use `:start1`, `:end1`, `:start2`, and `:end2` to control which portions of each sequence participate.

```lisp
(let ((str (copy-seq "abcdefghij")))
  (replace str "0123456789" :start1 4 :end1 7 :start2 4))
; → "abcd456hij"
```

### The shorter subsequence determines the copy length

When the source and destination regions have different lengths, only the shorter length is copied.

```lisp
(let ((a (list 1 2 3 4 5)))
  (replace a '(99 99) :start1 1 :end1 4))
; → (1 99 99 4 5)
```

### Replacing within the same sequence

`replace` correctly handles overlapping regions within the same sequence.

```lisp
(let ((lst (copy-seq "012345678")))
  (replace lst lst :start1 2 :start2 0))
; → "010123456"
```

### Replacing between different sequence types

`replace` can copy between lists and vectors.

```lisp
(let ((v (vector 'a 'b 'c 'd 'e)))
  (replace v '(x y z) :start1 1)
  v)
; → #(A X Y Z E)
```

### Practical example: overwriting part of a string

```lisp
(let ((greeting (copy-seq "Hello, World!")))
  (replace greeting "Lisp" :start1 7 :end1 12)
  greeting)
; → "Hello, Lisp!!"
```
