---
title: "subseq"
---

# subseq

import SubseqAccessor from './_subseq_accessor.md';

<SubseqAccessor />

## Expanded Reference: subseq

### Extracting a subsequence

`subseq` creates a fresh copy of a portion of a sequence. The `start` index is inclusive, and the optional `end` index is exclusive.

```lisp
(subseq "Hello, World!" 7)
=> "World!"
(subseq "Hello, World!" 0 5)
=> "Hello"
(subseq '(a b c d e) 1 3)
=> (B C)
```

### Omitting the end argument

When `end` is omitted or `nil`, `subseq` extracts from `start` to the end of the sequence.

```lisp
(subseq #(10 20 30 40 50) 2)
=> #(30 40 50)
(subseq '(1 2 3 4) 0)
=> (1 2 3 4)
```

### The result is always a fresh copy

`subseq` always allocates a new sequence, even when extracting the entire sequence. The result is never `eq` to the original.

```lisp
(let ((original '(a b c)))
  (eq original (subseq original 0)))
=> NIL
```

### Using setf with subseq

You can use `setf` with `subseq` to destructively replace a portion of a sequence. The shorter of the two subsequences determines how many elements are copied.

```lisp
(let ((str (copy-seq "Hello, World!")))
  (setf (subseq str 7 12) "Lisp!")
  str)
=> "Hello, Lisp!!"
```

### Partial replacement when lengths differ

When the replacement is shorter than the target region, only that many elements are replaced. The rest of the original remains unchanged.

```lisp
(let ((str (copy-seq "abcdef")))
  (setf (subseq str 0 4) "XY")
  str)
=> "XYcdef"
```

### Extracting from vectors

`subseq` returns a fresh simple vector when applied to a vector.

```lisp
(subseq #(a b c d e f) 2 5)
=> #(C D E)
```
