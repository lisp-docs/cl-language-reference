---
title: "atom"
---

# atom

import AtomType from './_atom_type.md';

<AtomType />

## Expanded Reference: atom (Type)

### Type definition

The type `atom` is equivalent to `(not cons)`. It includes everything that is not a cons cell: numbers, strings, symbols, arrays, characters, NIL, and so on.

```lisp
(typep 42 'atom)
=> T

(typep "hello" 'atom)
=> T

(typep 'foo 'atom)
=> T

(typep '(1 2) 'atom)
=> NIL
```

### NIL is an atom

NIL (the empty list) is an atom, not a cons. This is an important distinction since NIL is also a list.

```lisp
(typep nil 'atom)
=> T

(typep '() 'atom)
=> T
```

### Using atom type in declarations

The `atom` type can be used in type checks and declarations.

```lisp
(let ((items '(1 "two" (3 4) x nil #\a)))
  (remove-if-not (lambda (x) (typep x 'atom)) items))
=> (1 "two" X NIL #\a)
```

### Relationship to cons type

The types `atom` and `cons` form an exhaustive partition of the type `t`. Every object is either an atom or a cons, but never both.

```lisp
(let ((obj '(a . b)))
  (values (typep obj 'atom) (typep obj 'cons)))
=> NIL
=> T

(let ((obj 42))
  (values (typep obj 'atom) (typep obj 'cons)))
=> T
=> NIL
```
