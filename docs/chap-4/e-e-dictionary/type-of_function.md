---
title: "type-of"
---

# type-of

import TypeOfFunction from './_type-of_function.md';

<TypeOfFunction />

## Expanded Reference: type-of

### Basic Usage

`type-of` returns a type specifier for a type that has the object as an element. The exact result is implementation-dependent, but it always satisfies `(typep object (type-of object))`.

```lisp
(type-of 42)
;; => FIXNUM  (or (INTEGER 0 4611686018427387903), etc.)

(type-of 'hello)
;; => SYMBOL

(type-of "hello")
;; => (SIMPLE-BASE-STRING 5)  (or STRING, etc.)

(type-of #\A)
;; => STANDARD-CHAR  (or CHARACTER, etc.)
```

### Structures Return Their Type Name

```lisp
(defstruct point x y)
;; => POINT

(type-of (make-point :x 1 :y 2))
;; => POINT
```

### Lists and Cons Cells

```lisp
(type-of '(1 . 2))
;; => CONS

(type-of nil)
;; => NULL

(type-of '())
;; => NULL
```

### Floats Return Specific Float Types

```lisp
(type-of 1.0)
;; => SINGLE-FLOAT  (or DOUBLE-FLOAT depending on read default)

(type-of 1.0d0)
;; => DOUBLE-FLOAT
```

### The Result Is Always a Valid typep Argument

```lisp
(let ((obj (list 1 2 3)))
  (typep obj (type-of obj)))
;; => T
```
