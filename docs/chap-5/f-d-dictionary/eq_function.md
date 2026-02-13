---
title: "eq"
---

# eq

import EqFunction from './_eq_function.md';

<EqFunction />

## Expanded Reference: eq

### Basic identity comparison with symbols

`eq` tests whether two objects are the exact same object in memory. Symbols with the same name are always `eq` because the reader interns them to the same object.

```lisp
(eq 'hello 'hello) → T
(eq 'a 'b) → NIL
```

### Cons cells are never eq unless they are the same object

Two separately constructed cons cells are never `eq`, even if they contain the same elements. Only the exact same cons cell is `eq` to itself.

```lisp
(eq (cons 1 2) (cons 1 2)) → NIL

(let ((x (cons 1 2)))
  (eq x x)) → T
```

### Numbers and characters are unreliable with eq

The standard does not guarantee that `eq` returns true for numbers or characters, even when they have the same value. Implementations may or may not cache these objects. Use `eql` instead for reliable number and character comparison.

```lisp
;; Symbols are always reliably eq
(eq 'foo 'foo) → T

;; Numbers may or may not be eq -- implementation-dependent
(eq 3 3) → T ; or NIL -- unspecified

;; Different numeric types are never eq
(eq 3 3.0) → NIL

;; Characters may or may not be eq -- implementation-dependent
(eq #\A #\A) → T ; or NIL -- unspecified
```

### Strings are only eq when they are the same object

Strings that look the same are not necessarily the same object. Use `equal` or `string=` for string comparison.

```lisp
(let ((s "hello"))
  (eq s s)) → T

(eq "hello" (copy-seq "hello")) → NIL
```

### Practical use: checking for specific sentinel objects

`eq` is commonly used to check for sentinel values like NIL, or when you need to know if two variables reference the exact same mutable object.

```lisp
(let ((sentinel (list 'unique)))
  (eq sentinel sentinel)) → T

(eq nil '()) → T
(eq t 't) → T
```
