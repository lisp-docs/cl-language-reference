---
title: "t"
---

# t

import TConstantVariable from './_t_constant-variable.md';

<TConstantVariable />

## Expanded Reference: t

### t as Boolean True

`t` is the canonical true value in Common Lisp. Predicates conventionally return `t` for true, though any non-nil value counts as true.

```lisp
(if t "true" "false")
=> "true"

;; Predicate results
(numberp 42)
=> T
(stringp "hello")
=> T
(eq t t)
=> T

;; Not and boolean operations
(not t)
=> NIL
(and t t t)
=> T
(or nil t)
=> T
```

### t as a Type Specifier

As a type specifier, `t` denotes the supertype of all types -- every object is of type `t`.

```lisp
(typep 42 t)
=> T
(typep "hello" t)
=> T
(typep nil t)
=> T
(typep #'car t)
=> T

;; t is the supertype of everything
(subtypep 'integer t)
=> T
=> T
(subtypep 'string t)
=> T
=> T
(subtypep 'null t)
=> T
=> T
```

### t in CLOS as the Superclass

In the object system, the class `t` is the superclass of all classes.

```lisp
;; Every class inherits from t
(find-class t)
==> #<BUILT-IN-CLASS COMMON-LISP:T>

;; Checking class precedence
(not (null (member (find-class t)
                   (sb-mop:class-precedence-list (find-class 'integer)))))
=> T
```

### t Cannot Be Rebound

Like `nil`, `t` is a constant variable and cannot be used as a variable name.

```lisp
;; t is a symbol that evaluates to itself
(symbolp t)
=> T
(symbol-name t)
=> "T"
(eq t 't)
=> T

;; These would signal errors:
;; (setq t 5)       → error
;; (let ((t 5)) t)  → error
```
