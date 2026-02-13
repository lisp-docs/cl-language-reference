---
title: "null"
---

# null

import NullSystemClass from './_null_system-class.md';

<NullSystemClass />

## Expanded Reference: null (System Class)

### The null type

The type `null` has exactly one object: NIL. NIL is simultaneously the empty list, the boolean false, and a symbol.

```lisp
(typep nil 'null)
; → T

(typep '() 'null)
; → T

(typep t 'null)
; → NIL
```

### Class precedence list

The class precedence list for `null` is: `null`, `symbol`, `list`, `sequence`, `t`. NIL is both a symbol and a list.

```lisp
(typep nil 'symbol)
; → T

(typep nil 'list)
; → T

(typep nil 'sequence)
; → T
```

### NIL as empty list and false value

NIL plays dual roles in Common Lisp: it is the empty list and the canonical false value.

```lisp
;; As the empty list
(length nil)
; → 0

(append nil '(a b))
; → (A B)

;; As false
(if nil "true" "false")
; → "false"

(not nil)
; → T
```

### Null is the only type with a single member

```lisp
;; Only NIL is of type null
(remove-if-not (lambda (x) (typep x 'null))
               '(0 nil "" () t))
; → (NIL NIL)
```

### Relationship to cons and list

The types `cons` and `null` form an exhaustive partition of the type `list`. Every list is either a cons or null.

```lisp
(subtypep 'null 'list)
; → T, T

(subtypep 'null 'cons)
; → NIL, T
```
