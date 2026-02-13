---
title: "makunbound"
---

# makunbound

import MakunboundFunction from './_makunbound_function.md';

<MakunboundFunction />

## Expanded Reference: makunbound

### Basic usage

`makunbound` removes the value from a symbol's value cell, making it unbound. It returns the symbol.

```lisp
(setf (symbol-value 'temp) 42)
(boundp 'temp) ; → T

(makunbound 'temp) ; → TEMP
(boundp 'temp) ; → NIL
```

### Accessing an unbound symbol signals an error

After `makunbound`, attempting to read the symbol's value signals an `unbound-variable` error.

```lisp
(setf (symbol-value 'doomed) 99)
(makunbound 'doomed)

(handler-case (symbol-value 'doomed)
  (unbound-variable () :caught))
; → :CAUGHT
```

### makunbound on an already unbound symbol

Calling `makunbound` on a symbol that is already unbound is harmless.

```lisp
(let ((sym (gensym)))
  (boundp sym)       ; → NIL
  (makunbound sym)   ; no error
  (boundp sym))
; → NIL
```

### makunbound does not affect lexical bindings

`makunbound` only affects the global dynamic binding, not any lexical bindings in scope.

```lisp
(setf (symbol-value 'outer) :global)

(let ((outer :lexical))
  (makunbound 'outer)
  outer)
; → :LEXICAL  (the lexical binding is unaffected)
```

### Round-trip with boundp

`makunbound` and `setf`/`symbol-value` form a complementary pair for managing symbol bindings.

```lisp
(let ((sym (gensym)))
  (values
    (boundp sym)                          ; → NIL
    (progn (setf (symbol-value sym) 1)
           (boundp sym))                  ; → T
    (progn (makunbound sym)
           (boundp sym))))                ; → NIL
; → NIL
;   T
;   NIL
```
