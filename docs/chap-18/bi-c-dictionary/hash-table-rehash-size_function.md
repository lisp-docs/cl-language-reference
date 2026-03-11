---
title: "hash-table-rehash-size"
---

# hash-table-rehash-size

import HashTableRehashSizeFunction from './_hash-table-rehash-size_function.md';

<HashTableRehashSizeFunction />

## Expanded Reference: hash-table-rehash-size

### Basic Usage

`hash-table-rehash-size` returns the rehash size of a hash table, indicating how the table grows when it needs to be expanded.

```lisp
;; Default rehash size is implementation-dependent
(let ((ht (make-hash-table)))
  (numberp (hash-table-rehash-size ht)))
=> T
```

### Multiplicative Growth (Float)

When a float is specified, it represents a multiplicative growth factor. For example, 1.5 means the table grows to 1.5 times its current size.

```lisp
(let ((ht (make-hash-table :rehash-size 1.5)))
  (hash-table-rehash-size ht))
=> 1.5
```

### Additive Growth (Integer)

When an integer is specified, it represents the number of entries to add during rehashing.

```lisp
(let ((ht (make-hash-table :rehash-size 200)))
  (integerp (hash-table-rehash-size ht)))
=> T
```

### Querying for Table Duplication

The rehash size can be used alongside other parameters to create a copy of a hash table with the same configuration.

```lisp
(let* ((original (make-hash-table :rehash-size 2.0
                                   :rehash-threshold 0.8
                                   :test #'equal))
       (clone (make-hash-table
                :rehash-size (hash-table-rehash-size original)
                :rehash-threshold (hash-table-rehash-threshold original)
                :test (hash-table-test original))))
  (hash-table-rehash-size clone))
=> 2.0
```

### Float vs. Integer Rehash Size

```lisp
;; Float rehash size indicates multiplicative growth
(let ((ht (make-hash-table :rehash-size 1.7)))
  (floatp (hash-table-rehash-size ht)))
=> T

;; Integer rehash size indicates additive growth
(let ((ht (make-hash-table :rehash-size 50)))
  (integerp (hash-table-rehash-size ht)))
=> T
```
