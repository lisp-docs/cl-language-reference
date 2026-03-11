---
title: "package-error"
---

# package-error

import PackageErrorConditionType from './_package-error_condition-type.md';

<PackageErrorConditionType />

## Expanded Reference: package-error

### The package-error Condition Type

`package-error` is the condition type for errors related to package operations. It is a subtype of `error`.

```lisp
(subtypep 'package-error 'error)
=> T
=> T
```

### Creating a package-error Condition

You can create a `package-error` condition with `make-condition`, providing the `:package` initarg.

```lisp
(let ((c (make-condition 'package-error
                         :package (find-package "COMMON-LISP"))))
  (typep c 'package-error))
=> T
```

### Catching package-error with handler-case

Package errors can be caught and handled programmatically.

```lisp
(handler-case
    (find-package (make-package "DUP-ERR-DEMO" :use '()))
  ;; make-package with a duplicate name may signal package-error
  (package-error (c)
    (format nil "Package error involving: ~A"
            (package-error-package c))))
```

### Class Precedence List

```lisp
;; package-error inherits from error, serious-condition, condition, and t
(subtypep 'package-error 'serious-condition)
=> T
=> T

(subtypep 'package-error 'condition)
=> T
=> T
```
