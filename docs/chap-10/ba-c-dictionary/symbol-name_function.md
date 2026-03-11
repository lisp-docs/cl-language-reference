---
title: "symbol-name"
---

# symbol-name

import SymbolNameFunction from './_symbol-name_function.md';

<SymbolNameFunction />

## Expanded Reference: symbol-name

### Basic usage

`symbol-name` returns the name of a symbol as a string. By default, the Lisp reader upcases symbol names.

```lisp
(symbol-name 'hello)
=> "HELLO"
(symbol-name 'car)
=> "CAR"
(symbol-name 'my-variable)
=> "MY-VARIABLE"
```

### Keywords

Keywords also have string names. The leading colon is not part of the name.

```lisp
(symbol-name :test)
=> "TEST"
(symbol-name :key-name)
=> "KEY-NAME"
```

### Special symbols: NIL and T

```lisp
(symbol-name nil)
=> "NIL"
(symbol-name t)
=> "T"
```

### Uninterned and generated symbols

`symbol-name` works on uninterned symbols and gensyms as well.

```lisp
(symbol-name (make-symbol "my-sym"))
=> "my-sym"
(symbol-name '#:foo)
=> "FOO"
```

### Comparing symbol names

Since `symbol-name` returns a string, you can use string comparison functions on symbol names.

```lisp
(string= (symbol-name 'hello) "HELLO")
=> T
(string-equal (symbol-name 'hello) "hello")
=> T

(sort '(banana apple cherry) #'string< :key #'symbol-name)
=> (APPLE BANANA CHERRY)
```

### The returned string should not be modified

The string returned by `symbol-name` may share structure with the symbol's internal representation. Modifying it has undefined consequences. Use `copy-seq` if you need a mutable copy.

```lisp
(let* ((sym 'example)
       (name (symbol-name sym))
       (copy (copy-seq name)))
  (setf (char copy 0) #\e)
  (values name copy))
=> "EXAMPLE"
=> "eXAMPLE"
```
