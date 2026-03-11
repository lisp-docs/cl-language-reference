---
title: "incf, decf"
---

# incf, decf

import IncfMacro from './_incf_decf_macro.md';

<IncfMacro />

## Expanded Reference: incf, decf

### Basic increment and decrement

`incf` adds a delta (default 1) to a place and stores the result back. `decf` subtracts.

```lisp
(let ((n 0))
  (incf n)
  n)
=> 1

(let ((n 10))
  (decf n)
  n)
=> 9
```

### Specifying a delta

Both `incf` and `decf` accept an optional delta form that specifies the amount to add or subtract.

```lisp
(let ((n 0))
  (incf n 10)
  n)
=> 10

(let ((n 100))
  (decf n 30)
  n)
=> 70
```

### Return value

`incf` and `decf` return the new value of the place.

```lisp
(let ((n 5))
  (incf n 3))
=> 8

(let ((n 5))
  (decf n 3))
=> 2
```

### Working with different numeric types

Type conversions happen automatically. The delta can be any number type.

```lisp
(let ((n 0))
  (incf n 0.5)
  n)
=> 0.5

(let ((n 10))
  (decf n 1/3)
  n)
=> 29/3
```

### Incrementing elements of sequences

`incf` and `decf` work with any valid place, including array elements and structure slots.

```lisp
(let ((arr (vector 10 20 30)))
  (incf (aref arr 1) 5)
  arr)
=> #(10 25 30)

(let ((lst (list 1 2 3)))
  (decf (second lst) 10)
  lst)
=> (1 -8 3)
```

### Decrementing with a negative delta

Using a negative delta with `decf` effectively adds to the value.

```lisp
(let ((n 0))
  (decf n -5)
  n)
=> 5
```
