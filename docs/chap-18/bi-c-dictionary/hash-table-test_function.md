---
title: "hash-table-test"
---

# hash-table-test

import HashTableTestFunction from './_hash-table-test_function.md';

<HashTableTestFunction />

## Expanded Reference: hash-table-test

### Basic Usage

`hash-table-test` returns the test function used for comparing keys in a hash table. For the four standard tests, it returns a symbol.

```lisp
(hash-table-test (make-hash-table))
=> EQL

(hash-table-test (make-hash-table :test #'equal))
=> EQUAL

(hash-table-test (make-hash-table :test #'equalp))
=> EQUALP

(hash-table-test (make-hash-table :test #'eq))
=> EQ
```

### Using the Test for Comparison

The returned test can be used to compare keys in user code.

```lisp
(let* ((ht (make-hash-table :test #'equal))
       (test (hash-table-test ht)))
  (funcall test "hello" "hello"))
=> T
```

### Cloning a Hash Table with the Same Test

```lisp
(let* ((original (make-hash-table :test #'equalp)))
  (setf (gethash "Key" original) "value")
  (let ((clone (make-hash-table :test (hash-table-test original))))
    ;; Clone uses the same test
    (setf (gethash "KEY" clone) "cloned-value")
    (gethash "key" clone)))
=> "cloned-value"
=> T
```

### Conditional Logic Based on Test

```lisp
(defun describe-hash-table (ht)
  "Return a string describing the hash table's test."
  (format nil "Hash table uses ~A test with ~D entries"
          (hash-table-test ht)
          (hash-table-count ht)))

(describe-hash-table (make-hash-table :test #'equal))
=> "Hash table uses EQUAL test with 0 entries"
```

### Verifying Test After Creation

```lisp
;; Whether you pass a symbol or function designator, the result is a symbol
(eq (hash-table-test (make-hash-table :test 'equal))
    (hash-table-test (make-hash-table :test #'equal)))
=> T
```
