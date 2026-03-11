---
title: "make-hash-table"
---

# make-hash-table

import MakeHashTableFunction from './_make-hash-table_function.md';

<MakeHashTableFunction />

## Expanded Reference: make-hash-table

### Basic Usage

The simplest call creates a hash table with the default `eql` test.

```lisp
(let ((ht (make-hash-table)))
  (setf (gethash 42 ht) "forty-two")
  (gethash 42 ht))
=> "forty-two"
=> T
```

### Choosing a Test Function

The `:test` argument determines how keys are compared. The four standard tests are `eq`, `eql` (default), `equal`, and `equalp`.

```lisp
;; With default eql test, string keys that are not the same object fail to match
(let ((ht (make-hash-table)))
  (setf (gethash "hello" ht) 1)
  (gethash "hello" ht))
=> NIL
=> NIL

;; With equal test, strings with the same characters match
(let ((ht (make-hash-table :test #'equal)))
  (setf (gethash "hello" ht) 1)
  (gethash "hello" ht))
=> 1
=> T

;; With equalp test, case-insensitive string matching works
(let ((ht (make-hash-table :test #'equalp)))
  (setf (gethash "Hello" ht) 1)
  (gethash "HELLO" ht))
=> 1
=> T
```

### Specifying Initial Size

The `:size` argument is a hint about how many entries you expect. The implementation may round up.

```lisp
;; Pre-allocate for expected number of entries
(let ((ht (make-hash-table :size 1000)))
  (hash-table-size ht))
; Implementation-dependent, but >= 1000
```

### Rehash Parameters

`:rehash-size` controls growth rate; `:rehash-threshold` controls when growth occurs.

```lisp
;; Multiplicative growth: table grows by factor of 2.0 when rehashing
(let ((ht (make-hash-table :rehash-size 2.0)))
  (hash-table-rehash-size ht))
=> 2.0

;; Additive growth: add 100 slots when rehashing
(let ((ht (make-hash-table :rehash-size 100)))
  (hash-table-rehash-size ht))
; Implementation-dependent, but reflects additive growth

;; Rehash when table is 70% full
(let ((ht (make-hash-table :rehash-threshold 0.7)))
  (hash-table-rehash-threshold ht))
; Implementation-dependent, but close to 0.7
```

### Building a Frequency Counter

```lisp
;; A practical pattern: counting word frequencies
(let ((freq (make-hash-table :test #'equal)))
  (dolist (word '("the" "cat" "sat" "on" "the" "mat" "the"))
    (incf (gethash word freq 0)))
  (values (gethash "the" freq)
          (gethash "cat" freq)
          (gethash "dog" freq 0)))
=> 3
=> 1
=> 0
```

### Using eq Test for Symbols

```lisp
;; For symbol-only keys, :test #'eq is fastest
(let ((ht (make-hash-table :test #'eq)))
  (setf (gethash 'red ht) "#FF0000")
  (setf (gethash 'green ht) "#00FF00")
  (setf (gethash 'blue ht) "#0000FF")
  (gethash 'red ht))
=> "#FF0000"
=> T
```
