---
title: "defmacro"
---

# defmacro

import DefmacroMacro from './_defmacro_macro.md';

<DefmacroMacro />

## Expanded Reference: defmacro

### Basic Macro Definition

`defmacro` defines a macro by name, with a lambda list for destructuring the macro call, and a body that returns the expansion form.

```lisp
(defmacro my-when (test &body body)
  `(if ,test (progn ,@body)))
=> MY-WHEN

(my-when t (print "hello") 42)
;; prints: "hello"
=> 42
```

### Macro with Documentation String

```lisp
(defmacro square (x)
  "Multiplies X by itself."
  `(* ,x ,x))
=> SQUARE

(square 5)
=> 25

(documentation 'square 'function)
=> "Multiplies X by itself."
```

### Destructuring Lambda Lists

Macro lambda lists support destructuring, allowing nested patterns to be matched against the arguments.

```lisp
(defmacro with-pair ((a b) &body body)
  `(let ((,a (car pair))
         (,b (cdr pair)))
     ,@body))
=> WITH-PAIR
```

### Using &whole to Access the Entire Form

```lisp
(defmacro debug-form (&whole form &rest args)
  (declare (ignore args))
  `(progn
     (format t "~&Evaluating: ~S~%" ',form)
     ,(second form)))
=> DEBUG-FORM
```

### Using &optional and &rest in Macros

```lisp
(defmacro my-list (&rest elements)
  `(list ,@elements))
=> MY-LIST

(my-list 1 2 3)
=> (1 2 3)

(defmacro with-default (x &optional (default nil))
  `(if ,x ,x ,default))
=> WITH-DEFAULT

(with-default nil 42)
=> 42
```

### Verifying Expansion with macroexpand-1

```lisp
(defmacro swap (a b)
  `(let ((temp ,a))
     (setf ,a ,b)
     (setf ,b temp)))
=> SWAP

(macroexpand-1 '(swap x y))
=> (LET ((TEMP X)) (SETF X Y) (SETF Y TEMP))
=> T
```
