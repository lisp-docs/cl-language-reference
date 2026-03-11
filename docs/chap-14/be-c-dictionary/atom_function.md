---
title: "atom"
---

# atom

import AtomFunction from './_atom_function.md';

<AtomFunction />

## Expanded Reference: atom

### Testing if an object is an atom

`atom` returns true if its argument is not a cons cell. Everything that is not a cons is an atom.

```lisp
(atom 'hello)
=> T

(atom 42)
=> T

(atom "a string")
=> T
```

### NIL is an atom

NIL (the empty list) is an atom, not a cons.

```lisp
(atom nil)
=> T

(atom '())
=> T
```

### Cons cells are not atoms

Any cons cell returns NIL for `atom`. This is the complement of `consp`.

```lisp
(atom '(1 2 3))
=> NIL

(atom (cons 'a 'b))
=> NIL
```

### Relationship between atom and consp

`atom` is the logical negation of `consp`. An object is either an atom or a cons, never both.

```lisp
(atom '(x))
=> NIL

(consp '(x))
=> T

(atom 5)
=> T

(consp 5)
=> NIL
```

### Using atom to test for leaf nodes in a tree

`atom` is often used as the base case when recursing through tree structures built from conses.

```lisp
(defun flatten (tree)
  "Flatten a nested list structure into a flat list."
  (cond ((null tree) nil)
        ((atom tree) (list tree))
        (t (append (flatten (car tree))
                   (flatten (cdr tree))))))

(flatten '(a (b (c d) e) f))
=> (A B C D E F)
```
