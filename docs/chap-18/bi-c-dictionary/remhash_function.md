---
title: "remhash"
---

# remhash

import RemhashFunction from './_remhash_function.md';

<RemhashFunction />

## Expanded Reference: remhash

### Basic Removal

`remhash` removes an entry by key and returns true if the entry existed, false otherwise.

```lisp
(let ((ht (make-hash-table)))
  (setf (gethash 'a ht) 1)
  (remhash 'a ht))
=> T

(let ((ht (make-hash-table)))
  ;; Removing a key that does not exist
  (remhash 'nonexistent ht))
=> NIL
```

### Verifying Removal

```lisp
(let ((ht (make-hash-table)))
  (setf (gethash 'x ht) 42)
  (gethash 'x ht))
=> 42
=> T

(let ((ht (make-hash-table)))
  (setf (gethash 'x ht) 42)
  (remhash 'x ht)
  (gethash 'x ht))
=> NIL
=> NIL
```

### Effect on Count

```lisp
(let ((ht (make-hash-table)))
  (setf (gethash 'a ht) 1)
  (setf (gethash 'b ht) 2)
  (setf (gethash 'c ht) 3)
  (format nil "Before: ~D" (hash-table-count ht)))
=> "Before: 3"

(let ((ht (make-hash-table)))
  (setf (gethash 'a ht) 1)
  (setf (gethash 'b ht) 2)
  (setf (gethash 'c ht) 3)
  (remhash 'b ht)
  (format nil "After: ~D" (hash-table-count ht)))
=> "After: 2"
```

### Idempotent Removal

Calling `remhash` twice on the same key is safe; the second call simply returns `nil`.

```lisp
(let ((ht (make-hash-table)))
  (setf (gethash 'key ht) "value")
  (list (remhash 'key ht)
        (remhash 'key ht)))
=> (T NIL)
```

### Removing During Iteration with maphash

It is permitted to use `remhash` on the current entry during `maphash`.

```lisp
;; Remove all entries with even values
(let ((ht (make-hash-table)))
  (dotimes (i 6)
    (setf (gethash i ht) i))
  (maphash (lambda (key value)
             (when (evenp value)
               (remhash key ht)))
           ht)
  (hash-table-count ht))
=> 3
```
