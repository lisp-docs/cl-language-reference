---
title: "symbol-value"
---

# symbol-value

import SymbolValueAccessor from './_symbol-value_accessor.md';

<SymbolValueAccessor />

## Expanded Reference: symbol-value

### Basic usage: getting and setting global values

`symbol-value` accesses the value cell of a symbol, which holds the global (dynamic) variable value.

```lisp
(defvar *count* 10)

(symbol-value '*count*)
=> 10
(setf (symbol-value '*count*) 20)
(symbol-value '*count*)
=> 20
```

### symbol-value cannot see lexical variables

`symbol-value` always accesses the dynamic (special) binding, not lexical bindings.

```lisp
(setf (symbol-value 'x) 100)

(let ((x 999))
  (symbol-value 'x))
=> 100
```

### symbol-value can see dynamic bindings

When a variable is declared special, `symbol-value` sees the dynamic binding.

```lisp
(defvar *level* 1)

(let ((*level* 2))
  (symbol-value '*level*))
=> 2

(symbol-value '*level*)
=> 1
```

### Keywords evaluate to themselves

Keywords are constant variables whose value is the keyword symbol itself.

```lisp
(symbol-value :test)
=> :TEST
(symbol-value :hello)
=> :HELLO
```

### Constants

`symbol-value` can retrieve the value of constant variables like `nil`, `t`, and `pi`.

```lisp
(symbol-value 'nil)
=> NIL
(symbol-value 't)
=> T
(symbol-value 'pi)
;; => 3.141592653589793d0  (precision is implementation-dependent)
```

### Error on unbound symbols

Attempting to read the value of an unbound symbol signals an `unbound-variable` error.

```lisp
(handler-case (symbol-value (gensym))
  (unbound-variable (c)
    (format nil "Caught unbound variable: ~A" (cell-error-name c))))
;; => "Caught unbound variable: G..."  (exact gensym name varies)
```
