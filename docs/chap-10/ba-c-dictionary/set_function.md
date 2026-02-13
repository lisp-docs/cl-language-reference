---
title: "set"
---

# set

import SetFunction from './_set_function.md';

<SetFunction />

## Expanded Reference: set

:::warning
`set` is deprecated. Use `(setf (symbol-value ...) ...)` instead.
:::

### Basic usage

`set` changes the value cell of a symbol. It is equivalent to `(setf (symbol-value symbol) value)`.

```lisp
(set 'my-var 42)
(symbol-value 'my-var) ; → 42
```

### set cannot change lexical variables

Like `symbol-value`, `set` only affects the dynamic (special) value of a symbol, not lexical bindings.

```lisp
(set 'x 10)

(let ((x 20))
  (set 'x 30)
  (values x (symbol-value 'x)))
; → 20   (lexical x unchanged)
;   30   (dynamic x changed)
```

### set with dynamic (special) variables

`set` works with dynamically bound variables as expected.

```lisp
(defvar *setting* :initial)

(let ((*setting* :temporary))
  (set '*setting* :modified)
  *setting*)
; → :MODIFIED

*setting* ; → :INITIAL  (original value restored after let)
```

### Equivalence with setf of symbol-value

```lisp
(set 'equiv-test 'via-set)
(symbol-value 'equiv-test) ; → VIA-SET

(setf (symbol-value 'equiv-test) 'via-setf)
(symbol-value 'equiv-test) ; → VIA-SETF
```

### Using set with a computed symbol

One advantage of `set` over `setq` is that the symbol argument is evaluated, allowing dynamic dispatch.

```lisp
(defvar *a* 0)
(defvar *b* 0)

(dolist (pair '((*a* 10) (*b* 20)))
  (set (first pair) (second pair)))

(values *a* *b*)
; → 10
;   20
```
