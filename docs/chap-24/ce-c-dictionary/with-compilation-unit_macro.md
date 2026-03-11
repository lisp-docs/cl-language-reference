---
title: "with-compilation-unit"
---

# with-compilation-unit

import WithCompilationUnitMacro from './_with-compilation-unit_macro.md';

<WithCompilationUnitMacro />

## Expanded Reference: with-compilation-unit

### Deferring warnings across multiple compilations

`with-compilation-unit` groups multiple compilations together so that deferred warnings (such as "undefined function") are not issued until the entire unit is complete.

```lisp
(defun compile-my-system ()
  (with-compilation-unit ()
    (compile-file "/tmp/cl-wcu-a.lisp")
    (compile-file "/tmp/cl-wcu-b.lisp")
    (compile-file "/tmp/cl-wcu-c.lisp")))
```

### Using with mapcar

A common pattern is to compile a list of files within a single compilation unit.

```lisp
(defun compile-files (&rest files)
  (with-compilation-unit ()
    (mapcar #'compile-file files)))
```

### The :override option

Normally, only the outermost `with-compilation-unit` controls when deferred warnings are emitted. The `:override t` option forces an inner form to act as its own compilation unit.

```lisp
(with-compilation-unit ()
  ;; Warnings deferred to end of outer unit
  (compile-file "/tmp/cl-wcu-a.lisp")
  (with-compilation-unit (:override t)
    ;; Warnings deferred only to end of this inner unit
    (compile-file "/tmp/cl-wcu-b.lisp")))
```

### Returns the values of the body

The macro returns the values of the last form in its body.

```lisp
(with-compilation-unit ()
  (values 1 2 3))
=> 1
=> 2
=> 3
```
