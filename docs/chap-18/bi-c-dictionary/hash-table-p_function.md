---
title: "hash-table-p"
---

# hash-table-p

import HashTablePFunction from './_hash-table-p_function.md';

<HashTablePFunction />

## Expanded Reference: hash-table-p

### Basic Type Predicate

`hash-table-p` returns true if its argument is a hash table, false otherwise.

```lisp
(hash-table-p (make-hash-table))
=> T

(hash-table-p 42)
=> NIL

(hash-table-p "hello")
=> NIL
```

### Not Confused by Similar Structures

Association lists and property lists are not hash tables.

```lisp
(hash-table-p '((a . 1) (b . 2) (c . 3)))
=> NIL

(hash-table-p '(a 1 b 2 c 3))
=> NIL

(hash-table-p nil)
=> NIL
```

### Works with All Hash Table Variants

```lisp
(hash-table-p (make-hash-table :test #'eq))
=> T

(hash-table-p (make-hash-table :test #'equal))
=> T

(hash-table-p (make-hash-table :test #'equalp))
=> T
```

### Equivalent to typep

```lisp
;; hash-table-p is equivalent to (typep object 'hash-table)
(let ((ht (make-hash-table)))
  (eq (hash-table-p ht)
      (typep ht 'hash-table)))
=> T
```

### Useful in Defensive Programming

```lisp
(defun safe-lookup (key table)
  "Look up KEY in TABLE, signaling an error if TABLE is not a hash table."
  (unless (hash-table-p table)
    (error "Expected a hash table, got ~S" table))
  (gethash key table))

(safe-lookup 'x (make-hash-table))
=> NIL
=> NIL
```
