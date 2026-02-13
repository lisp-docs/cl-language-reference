---
title: "hash-table"
---

# hash-table

import HashTableSystemClass from './_hash-table_system-class.md';

<HashTableSystemClass />

## Expanded Reference: hash-table

### Overview

`hash-table` is a system class representing hash tables -- data structures that map keys to values using a hashing mechanism. Hash tables provide efficient O(1) average-case lookup, insertion, and deletion.

### Basic Type Checking

```lisp
;; Hash tables are objects of type hash-table
(let ((ht (make-hash-table)))
  (type-of ht))
; Implementation-dependent, but will be a subtype of hash-table
; e.g. → HASH-TABLE

(typep (make-hash-table) 'hash-table)
→ T
```

### Class Precedence

```lisp
;; hash-table's class precedence list is: hash-table, t
(subtypep 'hash-table 't)
→ T, T
```

### Hash Tables Are Not Sequences or Lists

```lisp
;; Hash tables are distinct from other mapping structures
(typep (make-hash-table) 'sequence)
→ NIL

(typep (make-hash-table) 'list)
→ NIL

;; Alists and plists are not hash tables
(hash-table-p '((a . 1) (b . 2)))
→ NIL
```

### Practical Usage

```lisp
;; Hash tables are created with make-hash-table and used via gethash
(let ((ht (make-hash-table :test #'equal)))
  (setf (gethash "name" ht) "Alice")
  (setf (gethash "age" ht) 30)
  (values (gethash "name" ht)
          (gethash "age" ht)))
→ "Alice", 30
```
