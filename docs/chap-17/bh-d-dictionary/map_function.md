---
title: "map"
---

# map

import MapFunction from './_map_function.md';

<MapFunction />

## Expanded Reference: map

### Mapping a function over a sequence

`map` applies a function to successive elements of one or more sequences and collects the results into a new sequence of the specified type.

```lisp
(map 'list #'1+ '(1 2 3 4)) ; → (2 3 4 5)
(map 'vector #'char-upcase "hello") ; → #(#\H #\E #\L #\L #\O)
```

### Mapping with nil result type (for side effects only)

When the result type is `nil`, `map` calls the function for side effects and returns `NIL`.

```lisp
(map nil #'print '(1 2 3))
; 1
; 2
; 3
; → NIL
```

### Mapping over multiple sequences

When multiple sequences are given, the function receives one argument from each sequence. Iteration stops at the shortest sequence.

```lisp
(map 'list #'+ '(1 2 3) '(10 20 30)) ; → (11 22 33)
(map 'list #'list '(a b c) '(1 2 3)) ; → ((A 1) (B 2) (C 3))
(map 'list #'+ '(1 2 3 4) '(10 20)) ; → (11 22)
```

### Mapping to a string result

```lisp
(map 'string #'char-upcase "hello world") ; → "HELLO WORLD"
(map 'string (lambda (x) (if (oddp x) #\1 #\0)) '(1 2 3 4))
; → "1010"
```

### Practical example: zipping two lists

```lisp
(map 'list #'cons '(a b c) '(1 2 3))
; → ((A . 1) (B . 2) (C . 3))
```
