---
title: "merge"
---

# merge

import MergeFunction from './_merge_function.md';

<MergeFunction />

## Expanded Reference: merge

### Merging two sorted lists

`merge` combines two sequences into a new sequence of the specified result type, interleaving elements according to a predicate. The input sequences should already be sorted for the result to be sorted.

```lisp
(merge 'list '(1 3 5 7) '(2 4 6 8) #'<)
=> (1 2 3 4 5 6 7 8)
```

### Merging into a vector

```lisp
(merge 'vector '(1 3 5) #(2 4 6) #'<)
=> #(1 2 3 4 5 6)
```

### Merging strings

```lisp
(merge 'string "ace" "bdf" #'char<)
=> "abcdef"
```

### Merging with a :key function

The `:key` function extracts the value used for comparison from each element.

```lisp
(merge 'list
       '((:a 1) (:c 3))
       '((:b 2) (:d 4))
       #'< :key #'second)
=> ((:A 1) (:B 2) (:C 3) (:D 4))
```

### Merge is stable

When elements from both sequences are considered equal by the predicate, elements from sequence-1 always come before those from sequence-2.

```lisp
(merge 'list '((1 :a) (2 :a)) '((1 :b) (2 :b)) #'< :key #'first)
=> ((1 :A) (1 :B) (2 :A) (2 :B))
```

### Merge is destructive

`merge` may destroy the input sequences. Copy them first if you need to preserve the originals.

```lisp
(let ((a (list 1 3 5))
      (b (list 2 4 6)))
  (merge 'list (copy-seq a) (copy-seq b) #'<))
=> (1 2 3 4 5 6)
```
