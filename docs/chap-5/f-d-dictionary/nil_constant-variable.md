---
title: "nil"
---

# nil

import NilConstantVariable from './_nil_constant-variable.md';

<NilConstantVariable />

## Expanded Reference: nil

### nil as the Empty List

`nil` is the sole representation of the empty list in Common Lisp. It is both a symbol and a list.

```lisp
;; nil is the empty list
nil
=> NIL
'()
=> NIL
(eq nil '())
=> T

;; List operations on nil
(length nil)
=> 0
(car nil)
=> NIL
(cdr nil)
=> NIL
(endp nil)
=> T
```

### nil as Boolean False

`nil` is the only false value in Common Lisp. Every other object is considered true.

```lisp
;; nil is false
(if nil "true" "false")
=> "false"
(if '() "true" "false")
=> "false"

;; Everything else is true
(if 0 "true" "false")
=> "true"
(if "" "true" "false")
=> "true"

;; Boolean operations
(not nil)
=> T
(not t)
=> NIL
(and 1 nil 3)
=> NIL
(or nil nil 42)
=> 42
```

### nil as a Symbol

`nil` is a symbol in the `COMMON-LISP` package. It is simultaneously of type `symbol`, `list`, and `null`.

```lisp
(symbolp nil)
=> T
(listp nil)
=> T
(null nil)
=> T

;; Type checks
(typep nil 'symbol)
=> T
(typep nil 'list)
=> T
(typep nil 'null)
=> T
(typep nil 'atom)
=> T

;; Symbol properties
(symbol-name nil)
=> "NIL"
(symbol-package nil)
==> #<PACKAGE "COMMON-LISP">
```

### nil Cannot Be Rebound

`nil` is a constant variable and cannot be used as a variable name or assigned a new value.

```lisp
;; These would signal errors:
;; (setq nil 5)       → error
;; (let ((nil 5)) nil) → error
```
