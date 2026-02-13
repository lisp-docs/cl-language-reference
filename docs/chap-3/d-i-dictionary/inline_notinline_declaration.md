---
title: "inline, notinline"
---

# inline, notinline

import InlineDeclaration from './_inline_notinline_declaration.md';

<InlineDeclaration />

## Expanded Reference: inline, notinline

### Requesting Inlining

The `inline` declaration advises the compiler to expand calls to the named function inline, potentially improving performance.

```lisp
(declaim (inline square))

(defun square (x) (* x x))
;; => SQUARE

;; Calls to square may be expanded inline by the compiler.
(defun sum-of-squares (a b)
  (+ (square a) (square b)))
;; => SUM-OF-SQUARES
```

### Preventing Inlining with notinline

The `notinline` declaration tells the compiler not to inline the function. This is useful for debugging or when you need the function to be redefinable at run time.

```lisp
(defun compute (x)
  (declare (notinline square))
  (square x))
;; => COMPUTE
;; The call to square will NOT be inlined here.
```

### Local inline and notinline

These declarations can be used locally within a form.

```lisp
(defun fast-path (x)
  (locally (declare (inline square))
    (square x)))
;; => FAST-PATH

(defun debug-path (x)
  (locally (declare (notinline square))
    (square x)))
;; => DEBUG-PATH
```

### Scope of the Declaration

An `inline` declaration applies only within the scope of the declaration, not to calls outside it.

```lisp
(defun example (a b)
  (let ((x (square a)))            ; NOT affected by inline below
    (locally (declare (inline square))
      (+ x (square b)))))          ; this call may be inlined
;; => EXAMPLE
```
