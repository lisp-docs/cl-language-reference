---
title: "special-operator-p"
---

# special-operator-p

import SpecialOperatorPFunction from './_special-operator-p_function.md';

<SpecialOperatorPFunction />

## Expanded Reference: special-operator-p

### Testing Common Special Operators

`special-operator-p` returns true if the given symbol names a special operator.

```lisp
(special-operator-p 'if)
=> T

(special-operator-p 'let)
=> T

(special-operator-p 'quote)
=> T

(special-operator-p 'progn)
=> T
```

### Regular Functions and Macros Return NIL

```lisp
(special-operator-p 'car)
=> NIL

(special-operator-p 'defun)
=> NIL

(special-operator-p 'list)
=> NIL
```

### Checking Several Standard Special Operators

The standard defines exactly 25 special operators. Here are a few more tests:

```lisp
(special-operator-p 'setq)
=> T

(special-operator-p 'function)
=> T

(special-operator-p 'go)
=> T

(special-operator-p 'tagbody)
=> T
```

### Non-Existent Symbols

```lisp
(special-operator-p 'not-a-real-thing)
=> NIL
```
