---
title: "maphash"
---

# maphash

import MaphashFunction from './_maphash_function.md';

<MaphashFunction />

## Expanded Reference: maphash

### Basic Iteration

`maphash` calls a two-argument function on every key-value pair in a hash table and returns `nil`.

```lisp
(let ((ht (make-hash-table)))
  (setf (gethash 'a ht) 1)
  (setf (gethash 'b ht) 2)
  (setf (gethash 'c ht) 3)
  (maphash (lambda (key value)
             (format t "~A => ~A~%" key value))
           ht))
;; Prints (order may vary):
;; A => 1
;; B => 2
;; C => 3
;; => NIL
```

### Collecting Entries into a List

```lisp
(let ((ht (make-hash-table :test #'equal)))
  (setf (gethash "x" ht) 10)
  (setf (gethash "y" ht) 20)
  (setf (gethash "z" ht) 30)
  (let ((pairs '()))
    (maphash (lambda (k v) (push (cons k v) pairs)) ht)
    ;; Sort for deterministic output
    (sort pairs #'string< :key #'car)))
=> (("x" . 10) ("y" . 20) ("z" . 30))
```

### Modifying Values During Iteration

Within `maphash`, you may use `setf` of `gethash` to change the current entry's value.

```lisp
;; Square all values in the hash table
(let ((ht (make-hash-table)))
  (dotimes (i 5) (setf (gethash i ht) (1+ i)))
  (maphash (lambda (key value)
             (setf (gethash key ht) (* value value)))
           ht)
  (list (gethash 0 ht) (gethash 1 ht) (gethash 2 ht)
        (gethash 3 ht) (gethash 4 ht)))
=> (1 4 9 16 25)
```

### Removing Entries During Iteration

You may call `remhash` on the current entry during `maphash`.

```lisp
;; Remove all entries where the value is less than 3
(let ((ht (make-hash-table)))
  (setf (gethash 'a ht) 1)
  (setf (gethash 'b ht) 5)
  (setf (gethash 'c ht) 2)
  (setf (gethash 'd ht) 4)
  (maphash (lambda (key value)
             (when (< value 3) (remhash key ht)))
           ht)
  (hash-table-count ht))
=> 2
```

### Summing Values

```lisp
(let ((ht (make-hash-table)))
  (setf (gethash 'apples ht) 3)
  (setf (gethash 'bananas ht) 7)
  (setf (gethash 'cherries ht) 15)
  (let ((total 0))
    (maphash (lambda (key value)
               (declare (ignore key))
               (incf total value))
             ht)
    total))
=> 25
```
