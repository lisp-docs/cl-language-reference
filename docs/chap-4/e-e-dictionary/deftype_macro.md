---
title: "deftype"
---

# deftype

import DeftypeMacro from './_deftype_macro.md';

<DeftypeMacro />

## Expanded Reference: deftype

### Defining a Simple Type Alias

`deftype` defines a derived type specifier. At its simplest, it creates a named alias for an existing type.

```lisp
(deftype non-negative-integer ()
  '(integer 0 *))
;; => NON-NEGATIVE-INTEGER

(typep 5 'non-negative-integer)
;; => T

(typep -1 'non-negative-integer)
;; => NIL
```

### Parameterized Type Definitions

`deftype` accepts a lambda list, allowing parameterized types. Unsupplied arguments default to `*` (wildcard).

```lisp
(deftype string-of-length (&optional (length '*))
  `(string ,length))
;; => STRING-OF-LENGTH

(typep "hello" '(string-of-length 5))
;; => T

(typep "hi" '(string-of-length 5))
;; => NIL

(typep "anything" 'string-of-length)
;; => T  (length defaults to *)
```

### Defining a Type Using satisfies

```lisp
(defun non-empty-list-p (x)
  (and (listp x) (not (null x))))
;; => NON-EMPTY-LIST-P

(deftype non-empty-list ()
  '(and list (satisfies non-empty-list-p)))
;; => NON-EMPTY-LIST

(typep '(1 2) 'non-empty-list)
;; => T

(typep nil 'non-empty-list)
;; => NIL
```

### Compound Types with deftype

```lisp
(deftype unsigned-byte-8 ()
  '(unsigned-byte 8))
;; => UNSIGNED-BYTE-8

(typep 255 'unsigned-byte-8)
;; => T

(typep 256 'unsigned-byte-8)
;; => NIL
```

### Using the Type in Declarations

```lisp
(deftype probability ()
  '(float 0.0 1.0))
;; => PROBABILITY

(let ((p 0.5))
  (declare (type probability p))
  p)
;; => 0.5
```
