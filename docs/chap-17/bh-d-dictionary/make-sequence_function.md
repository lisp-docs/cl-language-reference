---
title: "make-sequence"
---

# make-sequence

import MakeSequenceFunction from './_make-sequence_function.md';

<MakeSequenceFunction />

## Expanded Reference: make-sequence

### Creating a list of a given size

`make-sequence` creates a new sequence of the specified type and length. All elements are initialized to the `:initial-element` value.

```lisp
(make-sequence 'list 5 :initial-element 0)
=> (0 0 0 0 0)
(make-sequence 'list 0)
=> NIL
```

### Creating a string

```lisp
(make-sequence 'string 10 :initial-element #\.)
=> ".........."
(make-sequence 'string 3 :initial-element #\x)
=> "xxx"
```

### Creating a vector

```lisp
(make-sequence 'vector 4 :initial-element nil)
=> #(NIL NIL NIL NIL)
(make-sequence '(vector integer) 3 :initial-element 42)
=> #(42 42 42)
```

### Without :initial-element

If `:initial-element` is not provided, the initial values of elements are implementation-dependent. It is good practice to always supply an initial element.

```lisp
(length (make-sequence 'list 3))
=> 3
```

### Practical example: creating a sequence template

```lisp
(make-sequence 'string 26
  :initial-element #\-)
=> "--------------------------"
```
