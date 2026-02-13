---
title: "let, let"
---

# let, let

import LetSpecialOperator from './_let_let_special-operator.md';

<LetSpecialOperator />

## Expanded Reference: let, let*

### Basic variable binding with let

`let` creates local variable bindings. Each variable is bound to the result of evaluating its init-form, then the body forms are executed.

```lisp
(let ((x 10)
      (y 20))
  (+ x y))
→ 30
```

### Variables without init-forms default to NIL

If no init-form is provided, the variable is initialized to `nil`.

```lisp
(let (x y z)
  (list x y z))
→ (NIL NIL NIL)
```

### Parallel binding with let

In `let`, all init-forms are evaluated before any variable is bound. Here, `b` gets the outer value of `a`, not the inner one.

```lisp
(let ((a 1))
  (let ((a 2)
        (b a))
    (list a b)))
→ (2 1)
```

### Sequential binding with let*

In `let*`, each binding is completed before the next init-form is evaluated. Here, `b` sees the new value of `a`.

```lisp
(let* ((a 1)
       (b (+ a 10))
       (c (+ a b)))
  (list a b c))
→ (1 11 12)
```

### Nested let for building up local context

`let` forms can be nested and the body is an implicit `progn`, returning the value of the last form.

```lisp
(let ((name "Alice")
      (greeting "Hello"))
  (let ((message (concatenate 'string greeting ", " name "!")))
    (length message)
    message))
→ "Hello, Alice!"
```

### Shadowing outer bindings

Inner `let` bindings shadow outer ones without affecting them.

```lisp
(let ((x 100))
  (list
    (let ((x 1)) x)
    x))
→ (1 100)
```
