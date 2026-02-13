---
title: "hash-table-count"
---

# hash-table-count

import HashTableCountFunction from './_hash-table-count_function.md';

<HashTableCountFunction />

## Expanded Reference: hash-table-count

### Basic Usage

`hash-table-count` returns the number of entries currently in the hash table.

```lisp
(let ((ht (make-hash-table)))
  (hash-table-count ht))
→ 0

(let ((ht (make-hash-table)))
  (setf (gethash 'a ht) 1)
  (setf (gethash 'b ht) 2)
  (hash-table-count ht))
→ 2
```

### Count Reflects Insertions and Removals

```lisp
(let ((ht (make-hash-table)))
  (setf (gethash 'x ht) 10)
  (setf (gethash 'y ht) 20)
  (setf (gethash 'z ht) 30)
  (remhash 'y ht)
  (hash-table-count ht))
→ 2
```

### Updating an Existing Key Does Not Change Count

```lisp
(let ((ht (make-hash-table)))
  (setf (gethash 'a ht) 1)
  (setf (gethash 'a ht) 999)
  (hash-table-count ht))
→ 1
```

### Count After clrhash

```lisp
(let ((ht (make-hash-table)))
  (dotimes (i 50)
    (setf (gethash i ht) (* i i)))
  (let ((before (hash-table-count ht)))
    (clrhash ht)
    (values before (hash-table-count ht))))
→ 50, 0
```

### Count vs. Size

`hash-table-count` returns the number of stored entries, while `hash-table-size` returns the allocated capacity. Count is always less than or equal to size.

```lisp
(let ((ht (make-hash-table :size 100)))
  (dotimes (i 10)
    (setf (gethash i ht) t))
  (values (hash-table-count ht)
          (<= (hash-table-count ht) (hash-table-size ht))))
→ 10, T
```
