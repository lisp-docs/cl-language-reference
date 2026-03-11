---
title: "coerce"
---

# coerce

import CoerceFunction from './_coerce_function.md';

<CoerceFunction />

## Expanded Reference: coerce

### Coercing Sequences

Lists can be coerced to vectors and vice versa.

```lisp
(coerce '(a b c) 'vector)
=> #(A B C)

(coerce #(1 2 3) 'list)
=> (1 2 3)

(coerce '(#\h #\i) 'string)
=> "hi"
```

### Coercing Characters

A character designator (a string of length 1, or a symbol with a one-character name) can be coerced to a character.

```lisp
(coerce 'a 'character)
=> #\A

(coerce "z" 'character)
=> #\z
```

### Coercing Numbers to Float

```lisp
(coerce 5 'float)
=> 5.0

(coerce 7/2 'float)
=> 3.5

(coerce 0 'short-float)
=> 0.0s0

(coerce 1 'double-float)
=> 1.0d0
```

### Coercing to Complex

```lisp
(coerce 4.5 'complex)
=> #C(4.5 0.0)

;; Rational numbers remain rational (canonical representation rule):
(coerce 3 'complex)
=> 3
```

### Coercing Lambda Expressions to Functions

```lisp
(coerce '(lambda (x) (* x x)) 'function)
==> #<FUNCTION ...>

(funcall (coerce '(lambda (x) (+ x 1)) 'function) 10)
=> 11
```

### Identity Coercion with t

Any object can be coerced to type `t`, which returns the object unchanged.

```lisp
(coerce '(1 . 2) t)
=> (1 . 2)
```
