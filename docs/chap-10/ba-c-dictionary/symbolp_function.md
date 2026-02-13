---
title: "symbolp"
---

# symbolp

import SymbolpFunction from './_symbolp_function.md';

<SymbolpFunction />

## Expanded Reference: symbolp

### Basic type checking

`symbolp` returns true if the object is a symbol, and false otherwise.

```lisp
(symbolp 'hello) ; → T
(symbolp 'car) ; → T
(symbolp 42) ; → NIL
(symbolp "hello") ; → NIL
(symbolp #\A) ; → NIL
```

### NIL and T are symbols

Both `nil` and `t` are symbols, even though they also serve as boolean values.

```lisp
(symbolp nil) ; → T
(symbolp t) ; → T
(symbolp '()) ; → T  (same as nil)
```

### Keywords are symbols

Keywords are a subtype of symbol, so `symbolp` returns true for them.

```lisp
(symbolp :test) ; → T
(symbolp :key) ; → T
```

### Non-symbol types

`symbolp` returns false for all non-symbol objects, including lists, arrays, and functions.

```lisp
(symbolp '(a b c)) ; → NIL
(symbolp #(1 2 3)) ; → NIL
(symbolp #'car) ; → NIL
(symbolp 3.14) ; → NIL
```

### Equivalence with typep

`symbolp` is equivalent to testing with `typep` for the type `symbol`.

```lisp
(let ((x 'foo))
  (eq (symbolp x) (typep x 'symbol)))
; → T

(let ((x 42))
  (eq (symbolp x) (typep x 'symbol)))
; → T
```

### Filtering symbols from a mixed list

`symbolp` is useful as a predicate with higher-order functions.

```lisp
(remove-if-not #'symbolp '(a 1 b "c" :d 2 nil))
; → (A B :D NIL)
```
