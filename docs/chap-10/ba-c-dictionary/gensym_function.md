---
title: "gensym"
---

# gensym

import GensymFunction from './_gensym_function.md';

<GensymFunction />

## Expanded Reference: gensym

### Basic usage

`gensym` creates a fresh, uninterned symbol with an automatically generated name. The default prefix is "G" followed by a counter value.

```lisp
(gensym)
;; => #:G0  (exact number depends on *gensym-counter*)
(gensym)
;; => #:G1  (counter increments each call)
```

### Custom prefix

You can supply a string to use as a prefix instead of "G".

```lisp
(gensym "TEMP")
;; => #:TEMP2  (number depends on *gensym-counter*)
(gensym "MY-VAR")
;; => #:MY-VAR3
```

### Each gensym is unique

Even with the same prefix, each call produces a distinct symbol.

```lisp
(let ((a (gensym "X"))
      (b (gensym "X")))
  (eq a b))
=> NIL
```

### Gensyms are uninterned

A gensym has no home package and cannot be found by `find-symbol`.

```lisp
(let ((sym (gensym)))
  (values (symbol-package sym)
          (find-symbol (symbol-name sym))))
=> NIL
=> NIL
```

### Using gensym in macros to avoid variable capture

The most common use of `gensym` is in macro definitions to create hygienic variable names.

```lisp
(defmacro with-timing (&body body)
  (let ((start (gensym "START"))
        (result (gensym "RESULT")))
    `(let ((,start (get-internal-real-time)))
       (let ((,result (progn ,@body)))
         (format t "Elapsed: ~D time units~%"
                 (- (get-internal-real-time) ,start))
         ,result))))

;; The macro expands using unique symbols to avoid name clashes
(macroexpand-1 '(with-timing (+ 1 2)))
;; => (LET ((#:START0 (GET-INTERNAL-REAL-TIME)))
;;      (LET ((#:RESULT1 (PROGN (+ 1 2))))
;;        (FORMAT T "Elapsed: ~D time units~%" (- (GET-INTERNAL-REAL-TIME) #:START0))
;;        #:RESULT1))
```

### Controlling the counter with *gensym-counter*

You can bind `*gensym-counter*` to control the suffix numbering.

```lisp
(let ((*gensym-counter* 100))
  (values (gensym) (gensym) (gensym)))
;; => #:G100
;; => #:G101
;; => #:G102
```
