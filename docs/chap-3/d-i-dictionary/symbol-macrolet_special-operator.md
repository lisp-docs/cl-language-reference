---
title: "symbol-macrolet"
---

# symbol-macrolet

import SymbolMacroletSpecialOperator from './_symbol-macrolet_special-operator.md';

<SymbolMacroletSpecialOperator />

## Expanded Reference: symbol-macrolet

### Basic Symbol Macro

`symbol-macrolet` lexically establishes symbol macros: each occurrence of the named symbol within the body is replaced by its expansion form.

```lisp
(symbol-macrolet ((x 'foo))
  (list x x))
;; => (FOO FOO)
```

### Shadowing by let

A `let` binding shadows a `symbol-macrolet` definition, just as it would shadow a lexical variable.

```lisp
(symbol-macrolet ((x 'foo))
  (list x (let ((x 'bar)) x)))
;; => (FOO BAR)
```

### Accessing Structure Slots

`symbol-macrolet` is the underlying mechanism for `with-slots`. It can provide convenient aliases to place forms.

```lisp
(let ((data (list 1 2 3)))
  (symbol-macrolet ((first-elem (first data))
                    (second-elem (second data)))
    (setq first-elem 10)
    (setq second-elem 20)
    data))
;; => (10 20 3)
```

### setq Becomes setf

When `setq` is used on a symbol macro, it is treated as `setf` of the expansion.

```lisp
(let ((pair (cons 'a 'b)))
  (symbol-macrolet ((head (car pair)))
    (setq head 'z)
    pair))
;; => (Z . B)
```

### Nested Expansion

The expansion of a symbol macro is itself subject to further macro expansion in the same lexical environment.

```lisp
(symbol-macrolet ((x '(foo x)))
  (list x))
;; => ((FOO X))
```
