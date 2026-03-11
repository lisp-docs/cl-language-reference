---
title: "setf, psetf"
---

# setf, psetf

import SetfMacro from './_setf_psetf_macro.md';

<SetfMacro />

## Expanded Reference: setf, psetf

### Assigning to a variable

At its simplest, `setf` works like `setq` for variable assignment.

```lisp
(let ((x 0))
  (setf x 42)
  x)
=> 42
```

### Setting elements of a list

`setf` can assign to any generalized reference (place), such as `car` and `cdr` of a cons cell.

```lisp
(let ((lst (list 1 2 3)))
  (setf (car lst) :first)
  (setf (caddr lst) :third)
  lst)
=> (:FIRST 2 :THIRD)
```

### Setting elements of an array or vector

```lisp
(let ((v (vector 'a 'b 'c 'd)))
  (setf (aref v 1) :replaced)
  v)
=> #(A :REPLACED C D)
```

### Setting hash table entries

```lisp
(let ((ht (make-hash-table)))
  (setf (gethash :name ht) "Alice"
        (gethash :age ht) 30)
  (list (gethash :name ht)
        (gethash :age ht)))
=> ("Alice" 30)
```

### Multiple sequential assignments with setf

Like `setq`, `setf` can take multiple place/value pairs, processed sequentially.

```lisp
(let ((lst (list 1 2 3)))
  (setf (first lst) 10
        (second lst) (+ (first lst) 5))
  lst)
=> (10 15 3)
```

### Parallel assignment with psetf

`psetf` evaluates all new-value forms before performing any assignments. This allows swapping without a temporary variable.

```lisp
(let ((a 1) (b 2))
  (psetf a b b a)
  (list a b))
=> (2 1)
```
