---
title: "destructuring-bind"
---

# destructuring-bind

import DestructuringBindMacro from './_destructuring-bind_macro.md';

<DestructuringBindMacro />

## Expanded Reference: destructuring-bind

### Basic destructuring of a flat list

`destructuring-bind` binds variables to the corresponding elements of a list.

```lisp
(destructuring-bind (a b c) '(1 2 3)
  (list a b c))
=> (1 2 3)
```

### Nested destructuring

The lambda list can mirror the tree structure of the data.

```lisp
(destructuring-bind ((a b) (c d)) '((1 2) (3 4))
  (+ a b c d))
=> 10

(destructuring-bind (name (year month day)) '("Alice" (1990 6 15))
  (format nil "~A was born ~D/~D/~D" name month day year))
=> "Alice was born 6/15/1990"
```

### Using &optional and &rest

`destructuring-bind` supports the full destructuring lambda list syntax, including `&optional`, `&rest`, and `&key`.

```lisp
(destructuring-bind (a &optional (b 10)) '(1)
  (list a b))
=> (1 10)

(destructuring-bind (first &rest others) '(a b c d)
  (list first others))
=> (A (B C D))
```

### Using &key for keyword destructuring

```lisp
(destructuring-bind (&key name age) '(:age 30 :name "Bob")
  (format nil "~A is ~D years old" name age))
=> "Bob is 30 years old"
```

### Combining positional and keyword arguments

```lisp
(destructuring-bind (op &key (verbose nil)) '(run :verbose t)
  (list op verbose))
=> (RUN T)
```

### Dotted pair destructuring

The lambda list can use dotted pair notation to bind the cdr of a list.

```lisp
(destructuring-bind (a . b) '(1 2 3)
  (list a b))
=> (1 (2 3))

(destructuring-bind (a b . c) '(1 2 3 4 5)
  (list a b c))
=> (1 2 (3 4 5))
```
