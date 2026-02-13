---
title: "typep"
---

# typep

import TypepFunction from './_typep_function.md';

<TypepFunction />

## Expanded Reference: typep

### Basic Type Checking

`typep` returns true if an object is of the specified type.

```lisp
(typep 42 'integer)
;; => T

(typep "hello" 'string)
;; => T

(typep 3.14 'float)
;; => T

(typep 'foo 'symbol)
;; => T
```

### Everything Is of Type t, Nothing Is of Type nil

```lisp
(typep 42 t)
;; => T

(typep nil t)
;; => T

(typep 42 nil)
;; => NIL

(typep nil nil)
;; => NIL
```

### Compound Type Specifiers

```lisp
(typep 5 '(integer 0 10))
;; => T

(typep 15 '(integer 0 10))
;; => NIL

(typep 1 '(mod 4))
;; => T

(typep "hello" '(string 5))
;; => T
```

### Using or, and, not Type Specifiers

```lisp
(typep 42 '(or string integer))
;; => T

(typep "hi" '(or string integer))
;; => T

(typep 'foo '(and symbol (not keyword)))
;; => T

(typep :foo '(not keyword))
;; => NIL
```

### Using satisfies

```lisp
(typep 4 '(satisfies evenp))
;; => T

(typep 3 '(satisfies evenp))
;; => NIL
```

### Checking member Types

```lisp
(typep :red '(member :red :green :blue))
;; => T

(typep :yellow '(member :red :green :blue))
;; => NIL
```
