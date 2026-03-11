---
title: "list"
---

# list

import ListSystemClass from './_list_system-class.md';

<ListSystemClass />

## Expanded Reference: list (System Class)

### Type checking with list

The type `list` is the union of `cons` and `null`. It includes all proper lists, dotted lists, and circular lists.

```lisp
(typep '(1 2 3) 'list)
=> T

(typep nil 'list)
=> T

(typep 42 'list)
=> NIL
```

### Three kinds of lists

Lists come in three varieties: proper lists (terminated by NIL), dotted lists (terminated by a non-NIL atom), and circular lists.

```lisp
;; Proper list
(typep '(a b c) 'list)
=> T

;; Dotted list
(typep '(a b . c) 'list)
=> T

;; NIL (the empty list)
(typep '() 'list)
=> T
```

### Cons and null partition list

Every object of type `list` is either of type `cons` (non-empty list) or of type `null` (empty list). There is no third possibility.

```lisp
(let ((items (list '(a b) nil '(x) '() '(1 . 2))))
  (every (lambda (x) (or (typep x 'cons) (typep x 'null)))
         items))
=> T
```

### Class precedence list

The class precedence list for `list` is: `list`, `sequence`, `t`. Since `list` is a subtype of `sequence`, all sequence functions work on lists.

```lisp
(subtypep 'list 'sequence)
=> T
=> T

(length '(a b c))
=> 3

(elt '(a b c) 1)
=> B
```

### Difference between list type and listp

The type `list` and the predicate `listp` test the same thing: whether an object is a cons or NIL.

```lisp
(values (typep '(1) 'list) (listp '(1)))
=> T
=> T

(values (typep 42 'list) (listp 42))
=> NIL
=> NIL
```
