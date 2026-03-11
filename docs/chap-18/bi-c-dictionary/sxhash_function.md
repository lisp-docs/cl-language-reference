---
title: "sxhash"
---

# sxhash

import SxhashFunction from './_sxhash_function.md';

<SxhashFunction />

## Expanded Reference: sxhash

### Basic Usage

`sxhash` returns a non-negative fixnum hash code for any object. The hash code is consistent with `equal`: objects that are `equal` always produce the same hash code.

```lisp
(integerp (sxhash "hello"))
=> T

(>= (sxhash "hello") 0)
=> T
```

### Equal Objects Have Equal Hash Codes

```lisp
(= (sxhash "abc") (sxhash "abc"))
=> T

(= (sxhash '(1 2 3)) (sxhash '(1 2 3)))
=> T

(= (sxhash 42) (sxhash 42))
=> T
```

### Consistent Across Equivalent Constructions

```lisp
;; Two separately constructed but equal strings have the same hash
(= (sxhash "test") (sxhash (make-string 4 :initial-element #\t
                                          )))
; Not necessarily T -- "tttt" is not equal to "test"

;; But truly equal constructions always agree
(= (sxhash (list 'a 'b)) (sxhash (list 'a 'b)))
=> T

(= (sxhash (cons 1 2)) (sxhash (cons 1 2)))
=> T
```

### Non-Equal Objects May Collide

Hash codes are not guaranteed to be unique. Different objects can have the same hash code.

```lisp
;; This may or may not be T -- collisions are allowed
(let ((h1 (sxhash "abc"))
      (h2 (sxhash "xyz")))
  (integerp h1))
=> T
```

### Practical Use: Custom Hash-Based Structure

`sxhash` is useful when implementing custom hash-based data structures beyond what `make-hash-table` provides.

```lisp
;; Using sxhash to assign objects to buckets
(defun bucket-index (object num-buckets)
  "Compute a bucket index for OBJECT given NUM-BUCKETS buckets."
  (mod (sxhash object) num-buckets))

(let ((n-buckets 16))
  (values (bucket-index "hello" n-buckets)
          (bucket-index '(1 2 3) n-buckets)
          ;; Same object always maps to same bucket
          (= (bucket-index "hello" n-buckets)
             (bucket-index "hello" n-buckets))))
;; First two values are implementation-dependent
;; Third value:
;; => T
```

### Hash Code Stability Within a Session

The hash code for an unmodified object remains the same throughout a Lisp session.

```lisp
(let* ((obj (list 'x 'y 'z))
       (h1 (sxhash obj))
       (h2 (sxhash obj)))
  (= h1 h2))
=> T
```
