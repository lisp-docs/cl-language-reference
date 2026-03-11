---
title: "describe"
---

# describe

import DescribeFunction from './_describe_function.md';

<DescribeFunction />

## Expanded Reference: describe

### Describing an object

`describe` prints information about an object to a stream. The output format is implementation-dependent.

```lisp
(describe 'car)
; Prints information about the symbol CAR, such as:
; CAR
;   [symbol]
;   CAR names a compiled function:
;     Lambda-list: (LIST)
;     ...
=> ; no useful return value
```

### Describing different types of objects

`describe` works on any Lisp object and provides type-appropriate information.

```lisp
(describe 42)
; 42
;   [fixnum]
=> ; no useful return value

(describe "hello")
; "hello"
;   [simple-base-string]
=> ; no useful return value

(describe #'cons)
; #<FUNCTION CONS>
;   [compiled-function]
=> ; no useful return value
```

### Directing output to a specific stream

The optional second argument specifies the output stream. It defaults to `*standard-output*`.

```lisp
(> (length (with-output-to-string (s)
             (describe 'cons s)))
   0)
=> T
```

### Describing compound objects

Structures, hash tables, arrays, and other compound objects get detailed descriptions.

```lisp
(describe (make-array 5 :initial-element 0))
; #(0 0 0 0 0)
;   [simple-vector]
;   Element-type: T
;   Length: 5
=> ; no useful return value
```
