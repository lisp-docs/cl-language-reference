---
title: "gethash"
---

# gethash

import GethashAccessor from './_gethash_accessor.md';

<GethashAccessor />

## Expanded Reference: gethash

### Basic Lookup and Storage

`gethash` retrieves values by key, returning two values: the value (or default) and a boolean indicating whether the key was found.

```lisp
(let ((ht (make-hash-table)))
  (setf (gethash 'color ht) "blue")
  (gethash 'color ht))
→ "blue", T
```

### Missing Keys and Defaults

When a key is not found, `gethash` returns `nil` and `nil`. An optional third argument provides a custom default.

```lisp
(let ((ht (make-hash-table)))
  ;; Key not present: returns NIL, NIL
  (gethash 'missing ht))
→ NIL, NIL

(let ((ht (make-hash-table)))
  ;; Custom default value
  (gethash 'missing ht :not-found))
→ :NOT-FOUND, NIL
```

### Distinguishing NIL Values from Missing Keys

The second return value is essential when `nil` is a valid stored value.

```lisp
(let ((ht (make-hash-table)))
  (setf (gethash 'flag ht) nil)
  ;; The value is NIL, but the key IS present
  (multiple-value-bind (value present-p)
      (gethash 'flag ht)
    (list value present-p)))
→ (NIL T)

(let ((ht (make-hash-table)))
  ;; The key is NOT present at all
  (multiple-value-bind (value present-p)
      (gethash 'flag ht)
    (list value present-p)))
→ (NIL NIL)
```

### Using setf with gethash

`setf` of `gethash` inserts or updates an entry.

```lisp
(let ((ht (make-hash-table :test #'equal)))
  ;; Insert
  (setf (gethash "x" ht) 10)
  ;; Update
  (setf (gethash "x" ht) 20)
  (gethash "x" ht))
→ 20, T
```

### Counting Pattern with incf

```lisp
;; incf works with gethash when a default of 0 is provided
(let ((counts (make-hash-table)))
  (dolist (item '(a b a c a b))
    (incf (gethash item counts 0)))
  (values (gethash 'a counts)
          (gethash 'b counts)
          (gethash 'c counts)))
→ 3, 2, 1
```

### Building a Lookup Table

```lisp
;; Creating a simple lookup table for HTTP status codes
(let ((status (make-hash-table)))
  (setf (gethash 200 status) "OK"
        (gethash 404 status) "Not Found"
        (gethash 500 status) "Internal Server Error")
  (values (gethash 200 status)
          (gethash 404 status)
          (gethash 999 status "Unknown")))
→ "OK", "Not Found", "Unknown"
```
