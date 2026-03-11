---
title: "special"
---

# special

import SpecialDeclaration from './_special_declaration.md';

<SpecialDeclaration />

## Expanded Reference: special

### Declaring a Parameter as Special

The `special` declaration causes a variable binding to be dynamic rather than lexical.

```lisp
(defun show-special (val)
  (declare (special val))
  (inner-fn))
=> SHOW-SPECIAL

(defun inner-fn ()
  (declare (special val))
  val)
=> INNER-FN

(show-special 42)
=> 42
```

### Free (Reference-Only) Special Declaration

A `special` declaration inside `locally` affects only references, not bindings. This accesses the dynamic binding of a variable.

```lisp
(defun demo (y)
  (declare (special y))
  (let ((y t))           ; this y is lexical
    (list y
          (locally (declare (special y))
            y))))         ; this y refers to the special binding
=> DEMO

(demo nil)
=> (T NIL)
```

### Global Special Proclamation

After a global `special` proclamation via `declaim`, all bindings of that variable become dynamic.

```lisp
(declaim (special *mode*))

(setq *mode* :normal)
=> :NORMAL

(defun check-mode ()
  *mode*)
=> CHECK-MODE

(let ((*mode* :debug))
  (check-mode))
=> :DEBUG
```

### Bound vs. Free Declarations

```lisp
(setf (symbol-value 'x) 6)
=> 6

(defun bar (x y)
  (let ((old-x x)
        (x y))
    (declare (special x))
    (list old-x x)))
=> BAR

(bar 'first 'second)
=> (FIRST SECOND)
;; old-x gets the lexical parameter, x in the list gets the special binding
```
