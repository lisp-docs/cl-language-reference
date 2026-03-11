---
title: "hash-table-size"
---

# hash-table-size

import HashTableSizeFunction from './_hash-table-size_function.md';

<HashTableSizeFunction />

## Expanded Reference: hash-table-size

### Basic Usage

`hash-table-size` returns the current allocated capacity of the hash table. This is not the number of entries (use `hash-table-count` for that), but rather how many entries the table can currently hold before needing to grow.

```lisp
(let ((ht (make-hash-table :size 100)))
  (hash-table-size ht))
; Implementation-dependent, but >= 100
```

### Size vs. Count

```lisp
(let ((ht (make-hash-table :size 50)))
  (dotimes (i 10)
    (setf (gethash i ht) t))
  (values (hash-table-count ht)
          (>= (hash-table-size ht) (hash-table-count ht))))
=> 10
=> T
```

### Size May Differ from Requested

Implementations are free to round up the requested size.

```lisp
;; The actual size may be larger than requested
(let ((ht (make-hash-table :size 7)))
  (>= (hash-table-size ht) 7))
=> T
```

### Size Can Grow After Insertions

When enough entries are added, the hash table rehashes and grows.

```lisp
(let* ((ht (make-hash-table :size 10))
       (initial-size (hash-table-size ht)))
  ;; Add many entries to force rehashing
  (dotimes (i 1000)
    (setf (gethash i ht) i))
  (> (hash-table-size ht) initial-size))
=> T
```

### Using Size to Copy a Hash Table

The size returned is suitable for passing to `make-hash-table` to create a similarly-sized table.

```lisp
(let* ((original (make-hash-table :test #'equal))
       (_ (dotimes (i 20) (setf (gethash i original) i)))
       (copy (make-hash-table :test (hash-table-test original)
                               :size (hash-table-size original))))
  (declare (ignore _))
  (maphash (lambda (k v) (setf (gethash k copy) v)) original)
  (values (hash-table-count copy)
          (gethash 15 copy)))
=> 20
=> 15
```
