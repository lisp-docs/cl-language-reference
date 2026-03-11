---
title: "list, list"
---

# list, list

import ListFunction from './_list_list_function.md';

<ListFunction />

## Expanded Reference: list, list*

### Creating a simple list with list

`list` constructs a proper list from its arguments.

```lisp
(list 1 2 3)
=> (1 2 3)

(list 'a 'b 'c)
=> (A B C)

(list)
=> NIL
```

### list always creates a proper list

Every call to `list` produces a proper list terminated by NIL.

```lisp
(list 1)
=> (1)

(list 'a '(b c) 3)
=> (A (B C) 3)

(cdr (last (list 1 2 3)))
=> NIL
```

### Creating a dotted list with list*

`list*` is like `list`, but the last argument becomes the cdr of the last cons cell rather than being wrapped in one.

```lisp
(list* 1 2)
=> (1 . 2)

(list* 1 2 3)
=> (1 2 . 3)

(list* 'a 'b '(c d))
=> (A B C D)
```

### list* with one argument returns that argument

When called with a single argument, `list*` returns it directly without consing.

```lisp
(list* 'a)
=> A

(list* '(1 2 3))
=> (1 2 3)
```

### Practical use: building argument lists with list*

`list*` is useful for prepending known arguments to a rest-argument list, for example when calling `apply`.

```lisp
(apply #'+ (list* 1 2 '(3 4 5)))
=> 15

;; Equivalent to (apply #'+ '(1 2 3 4 5))
```

### list evaluates its arguments

Unlike the quote form, `list` evaluates each of its arguments.

```lisp
(let ((x 10) (y 20))
  (list x y (+ x y)))
=> (10 20 30)
```
