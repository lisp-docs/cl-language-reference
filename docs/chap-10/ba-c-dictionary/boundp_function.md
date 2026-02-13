---
title: "boundp"
---

# boundp

import BoundpFunction from './_boundp_function.md';

<BoundpFunction />

## Expanded Reference: boundp

### Basic usage

`boundp` returns true if the symbol has a global (dynamic) value, and false otherwise.

```lisp
(defvar *my-var* 42)
(boundp '*my-var*) ; → T

(boundp (gensym)) ; → NIL  (fresh gensym has no value)
```

### After makunbound

`makunbound` removes the value binding, so `boundp` returns false afterwards.

```lisp
(setf (symbol-value 'temp-var) 100)
(boundp 'temp-var) ; → T

(makunbound 'temp-var)
(boundp 'temp-var) ; → NIL
```

### boundp does not see lexical bindings

`boundp` only checks the global/dynamic environment, not lexical bindings.

```lisp
(makunbound 'lex-test)

(let ((lex-test 99))
  (boundp 'lex-test))
; → NIL  (the lexical binding is invisible to boundp)
```

### boundp sees dynamic (special) bindings

When a variable is declared special, `boundp` can see its dynamic binding.

```lisp
(makunbound 'dyn-test)

(let ((dyn-test 99))
  (declare (special dyn-test))
  (boundp 'dyn-test))
; → T
```

### Safe value access pattern

`boundp` is commonly used to safely access a symbol's value without risking an error.

```lisp
(defun safe-value (sym &optional default)
  (if (boundp sym)
      (symbol-value sym)
      default))

(setf (symbol-value 'configured) :yes)
(safe-value 'configured) ; → :YES
(safe-value (gensym) :not-set) ; → :NOT-SET
```

### Keywords and constants are always bound

```lisp
(boundp :any-keyword) ; → T
(boundp t) ; → T
(boundp nil) ; → T
(boundp 'pi) ; → T
```
