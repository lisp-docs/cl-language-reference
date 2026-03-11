---
title: "ftype"
---

# ftype

import FtypeDeclaration from './_ftype_declaration.md';

<FtypeDeclaration />

## Expanded Reference: ftype

### Declaring Function Types

The `ftype` declaration specifies the function type signature of named functions -- their argument types and return type.

```lisp
(declaim (ftype (function (integer integer) integer) my-add))

(defun my-add (a b)
  (+ a b))
=> MY-ADD
```

### Local ftype Declarations

```lisp
(defun compute (x y)
  (declare (ftype (function (number number) number) my-add))
  (my-add x y))
=> COMPUTE
```

### Declaring Multiple Functions

```lisp
(declaim (ftype (function (string) string) upcase-string)
         (ftype (function (list) integer) list-length))
```

### Function Type with Optional Arguments

```lisp
(declaim (ftype (function (integer &optional integer) integer) add-opt))

(defun add-opt (a &optional (b 0))
  (+ a b))
=> ADD-OPT
```
