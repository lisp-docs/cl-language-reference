---
title: "map-into"
---

# map-into

import MapIntoFunction from './_map-into_function.md';

<MapIntoFunction />

## Expanded Reference: map-into

### Basic usage: storing results in an existing sequence

`map-into` destructively modifies the result sequence, filling it with values produced by applying the function to elements of the source sequences.

```lisp
(let ((result (list 0 0 0 0)))
  (map-into result #'+ '(1 2 3 4) '(10 20 30 40))
  result)
; → (11 22 33 44)
```

### Modifying a sequence in place

`map-into` can use the result sequence as both the destination and a source.

```lisp
(let ((a (list 1 2 3 4)))
  (map-into a #'1+ a)
  a)
; → (2 3 4 5)
```

### Iteration stops at the shortest sequence

If the source sequences are shorter than the result sequence, extra elements in the result are left unchanged.

```lisp
(let ((result (list 0 0 0 0 0)))
  (map-into result #'+ '(1 2 3) '(10 20 30 40 50))
  result)
; → (11 22 33 0 0)
```

### Using map-into with no source sequences

When called with only a result sequence and a zero-argument function, `map-into` fills the result by calling the function repeatedly.

```lisp
(let ((counter 0))
  (map-into (make-list 5) (lambda () (incf counter))))
; → (1 2 3 4 5)
```

### Working with vectors

```lisp
(let ((v (make-array 4 :initial-element 0)))
  (map-into v #'* #(1 2 3 4) #(10 10 10 10))
  v)
; → #(10 20 30 40)
```
