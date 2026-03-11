---
title: "cons"
---

# cons

import ConsFunction from './_cons_function.md';

<ConsFunction />

## Expanded Reference: cons

### Creating a dotted pair

`cons` creates a new cons cell with two components: the car and the cdr.

```lisp
(cons 'a 'b)
=> (A . B)
```

### Building a list element by element

When the second argument is a list (or NIL), `cons` prepends the first argument to that list.

```lisp
(cons 1 nil)
=> (1)

(cons 1 '(2 3 4))
=> (1 2 3 4)
```

### Building a list from scratch

You can nest `cons` calls to construct a proper list, terminating with NIL.

```lisp
(cons 'a (cons 'b (cons 'c nil)))
=> (A B C)
```

### Cons cells hold any types of objects

The car and cdr of a cons can be any Lisp object, including other cons cells, strings, numbers, or symbols.

```lisp
(cons "hello" 42)
=> ("hello" . 42)

(cons '(1 2) '(3 4))
=> ((1 2) 3 4)
```

### Using cons to prepend to an association list

A common pattern is using `cons` to add a new key-value pair to an alist.

```lisp
(defvar *settings* '((:width . 80) (:height . 24)))

(setq *settings* (cons '(:color . :blue) *settings*))
=> ((:COLOR . :BLUE) (:WIDTH . 80) (:HEIGHT . 24))
```
