---
title: "with-hash-table-iterator"
---

# with-hash-table-iterator

import WithHashTableIteratorMacro from './_with-hash-table-iterator_macro.md';

<WithHashTableIteratorMacro />

## Expanded Reference: with-hash-table-iterator

### Basic Usage

`with-hash-table-iterator` establishes a local macro that, when called, returns the next entry from the hash table as three values: a boolean (true if an entry was returned), the key, and the value.

```lisp
(let ((ht (make-hash-table)))
  (setf (gethash 'a ht) 1)
  (setf (gethash 'b ht) 2)
  (let ((entries '()))
    (with-hash-table-iterator (next-entry ht)
      (loop
        (multiple-value-bind (more key value) (next-entry)
          (unless more (return))
          (push (cons key value) entries))))
    (sort entries #'string< :key (lambda (pair) (symbol-name (car pair))))))
=> ((A . 1) (B . 2))
```

### Collecting Keys and Values Separately

```lisp
(let ((ht (make-hash-table :test #'equal)))
  (setf (gethash "x" ht) 10)
  (setf (gethash "y" ht) 20)
  (setf (gethash "z" ht) 30)
  (let ((keys '()))
    (with-hash-table-iterator (next ht)
      (loop
        (multiple-value-bind (more key value) (next)
          (declare (ignore value))
          (unless more (return))
          (push key keys))))
    (sort keys #'string<)))
=> ("x" "y" "z")
```

### Implementing a Custom find-if for Hash Tables

```lisp
(defun hash-table-find-if (predicate hash-table)
  "Find the first entry in HASH-TABLE satisfying PREDICATE (called with key and value).
   Returns the key and value as multiple values, or NIL if not found."
  (with-hash-table-iterator (next-entry hash-table)
    (loop
      (multiple-value-bind (more key value) (next-entry)
        (unless more (return nil))
        (when (funcall predicate key value)
          (return (values key value)))))))

(let ((ht (make-hash-table)))
  (setf (gethash 'a ht) 1)
  (setf (gethash 'b ht) 20)
  (setf (gethash 'c ht) 3)
  (multiple-value-bind (key value)
      (hash-table-find-if (lambda (k v) (declare (ignore k)) (> v 10)) ht)
    (list key value)))
=> (B 20)
```

### Counting Entries That Match a Condition

```lisp
(let ((ht (make-hash-table)))
  (dotimes (i 10) (setf (gethash i ht) (* i i)))
  (let ((count 0))
    (with-hash-table-iterator (next ht)
      (loop
        (multiple-value-bind (more key value) (next)
          (declare (ignore key))
          (unless more (return))
          (when (> value 20) (incf count)))))
    count))
=> 5
```

### Implementing maphash Using with-hash-table-iterator

The spec notes that `maphash` can be implemented in terms of `with-hash-table-iterator`.

```lisp
(defun my-maphash (function hash-table)
  (with-hash-table-iterator (next-entry hash-table)
    (loop
      (multiple-value-bind (more key value) (next-entry)
        (unless more (return nil))
        (funcall function key value)))))

(let ((ht (make-hash-table)))
  (setf (gethash 'a ht) 1)
  (setf (gethash 'b ht) 2)
  (let ((sum 0))
    (my-maphash (lambda (k v) (declare (ignore k)) (incf sum v)) ht)
    sum))
=> 3
```
