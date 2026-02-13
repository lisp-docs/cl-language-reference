---
title: "declare"
---

# declare

import DeclareSymbol from './_declare_symbol.md';

<DeclareSymbol />

## Expanded Reference: declare

### Basic Usage in defun

`declare` expressions can appear at the beginning of bodies of forms such as `defun`, `let`, `lambda`, etc. They provide information to the compiler but are not evaluated.

```lisp
(defun add-ints (a b)
  (declare (type integer a b))
  (+ a b))
;; => ADD-INTS

(add-ints 3 4)
;; => 7
```

### Multiple Declarations

Multiple declaration specifiers can appear in a single `declare`, or in multiple `declare` expressions.

```lisp
(defun process (x y)
  (declare (type string x)
           (type integer y))
  (declare (optimize (speed 3)))
  (format nil "~A: ~D" x y))
;; => PROCESS
```

### Declarations in let

```lisp
(let ((x 10)
      (y 20))
  (declare (type fixnum x y))
  (+ x y))
;; => 30
```

### Declarations in lambda

```lisp
(funcall (lambda (x)
           (declare (type number x))
           (* x x))
         5)
;; => 25
```

### declare Is Not a Form

`declare` expressions are not evaluable forms. They must appear only where the syntax of a form explicitly allows them. Attempting to evaluate a `declare` expression has undefined consequences.
