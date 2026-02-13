---
title: "cons"
---

# cons

import ConsSystemClass from './_cons_system-class.md';

<ConsSystemClass />

## Expanded Reference: cons (System Class)

### Basic cons cell

A cons is a compound object with two components: a car and a cdr. Every non-empty list is built from cons cells.

```lisp
(typep '(a . b) 'cons)
; → T

(typep '(1 2 3) 'cons)
; → T

(typep nil 'cons)
; → NIL
```

### Class precedence

The class precedence list for `cons` is: `cons`, `list`, `sequence`, `t`.

```lisp
(subtypep 'cons 'list)
; → T, T

(subtypep 'cons 'sequence)
; → T, T
```

### Compound type specifier

The compound type specifier `(cons car-type cdr-type)` constrains the types of the car and cdr components.

```lisp
(typep '(1 . "hello") '(cons integer string))
; → T

(typep '(1 . 2) '(cons integer string))
; → NIL

(typep '(a . b) '(cons symbol symbol))
; → T
```

### Cons vs null partition the list type

Every list is either a cons (non-empty) or null (the empty list). There is no overlap.

```lisp
(typep '(a) 'cons)
; → T

(typep '() 'cons)
; → NIL

(typep '() 'null)
; → T
```

### Cons cells are the building blocks of lists

A proper list is a chain of cons cells where the cdr of the last cons is NIL.

```lisp
;; (1 2 3) is really (cons 1 (cons 2 (cons 3 nil)))
(equal '(1 2 3)
       (cons 1 (cons 2 (cons 3 nil))))
; → T
```
