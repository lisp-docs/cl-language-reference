---
title: "clrhash"
---

# clrhash

import ClrhashFunction from './_clrhash_function.md';

<ClrhashFunction />

## Expanded Reference: clrhash

### Basic Usage

`clrhash` removes all entries from a hash table and returns the now-empty hash table.

```lisp
(let ((ht (make-hash-table)))
  (setf (gethash 'a ht) 1)
  (setf (gethash 'b ht) 2)
  (hash-table-count ht))
=> 2

(let ((ht (make-hash-table)))
  (setf (gethash 'a ht) 1)
  (setf (gethash 'b ht) 2)
  (clrhash ht)
  (hash-table-count ht))
=> 0
```

### Returns the Same Hash Table

`clrhash` returns the hash table itself, allowing chained operations.

```lisp
(let ((ht (make-hash-table)))
  (setf (gethash 'x ht) 99)
  (eq ht (clrhash ht)))
=> T
```

### All Entries Become Inaccessible

```lisp
(let ((ht (make-hash-table)))
  (setf (gethash 'key ht) "value")
  (clrhash ht)
  (gethash 'key ht))
=> NIL
=> NIL
```

### Resetting a Cache

A practical pattern: clearing a hash table used as a cache to free memory or reset state.

```lisp
(let ((cache (make-hash-table :test #'equal)))
  ;; Fill cache
  (dotimes (i 100) (setf (gethash i cache) (* i i)))
  (format t "Entries before clear: ~D~%" (hash-table-count cache))
  (clrhash cache)
  (format t "Entries after clear: ~D~%" (hash-table-count cache))
  ;; Table is ready for reuse
  (setf (gethash 0 cache) "fresh")
  (gethash 0 cache))
.. Entries before clear: 100
.. Entries after clear: 0
..
=> "fresh"
=> T
```
