---
title: "hash-table-rehash-threshold"
---

# hash-table-rehash-threshold

import HashTableRehashThresholdFunction from './_hash-table-rehash-threshold_function.md';

<HashTableRehashThresholdFunction />

## Expanded Reference: hash-table-rehash-threshold

### Basic Usage

`hash-table-rehash-threshold` returns the current rehash threshold, a value between 0 and 1 indicating how full the table can get before it grows.

```lisp
(let ((ht (make-hash-table :rehash-threshold 0.7)))
  (hash-table-rehash-threshold ht))
; Implementation-dependent, but close to 0.7
```

### Default Threshold

```lisp
;; Default rehash threshold is implementation-dependent
(let ((ht (make-hash-table)))
  (let ((threshold (hash-table-rehash-threshold ht)))
    (and (<= 0 threshold) (<= threshold 1))))
→ T
```

### Effect of Different Thresholds

A lower threshold means the table rehashes sooner (more memory, potentially fewer collisions). A higher threshold means the table fills more before growing.

```lisp
;; Low threshold: eager rehashing
(let ((ht (make-hash-table :rehash-threshold 0.3)))
  (realp (hash-table-rehash-threshold ht)))
→ T

;; High threshold: compact storage, later rehashing
(let ((ht (make-hash-table :rehash-threshold 0.9)))
  (realp (hash-table-rehash-threshold ht)))
→ T
```

### Preserving Configuration When Copying

```lisp
(let* ((ht1 (make-hash-table :rehash-threshold 0.5 :test #'equal))
       (ht2 (make-hash-table
               :rehash-threshold (hash-table-rehash-threshold ht1)
               :test (hash-table-test ht1))))
  (maphash (lambda (k v) (setf (gethash k ht2) v)) ht1)
  (hash-table-test ht2))
→ EQUAL
```
