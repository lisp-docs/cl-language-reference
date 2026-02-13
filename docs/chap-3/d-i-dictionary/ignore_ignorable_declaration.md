---
title: "ignore, ignorable"
---

# ignore, ignorable

import IgnoreDeclaration from './_ignore_ignorable_declaration.md';

<IgnoreDeclaration />

## Expanded Reference: ignore, ignorable

A key point to declaring variable bindings to be ignored is that the declaration must be *within* the scope where the binding happens.

Here are a few examples of using this declaration:

### `let` Example

```lisp
(let ((x 24)) (declare (ignorable x)))
```

Notice how the <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm> is *after* the `x` is bound. See also the syntax for <DictionaryLink term={"let"}><b>let</b></DictionaryLink> where the <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm> is explicitly specified after the <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> and before the *forms*.

Without an ignore declararation we get the expected compiler warning:

```lisp
CL-USER> (let ((x 24)))
; in: LET ((X 24))
;     (X 24)
; 
; caught STYLE-WARNING:
;   The variable X is defined but never used.
; 
; compilation unit finished
;   caught 1 STYLE-WARNING condition
NIL
```

### `defun` Example

```lisp
CL-USER> (defun foo (x) (declare (ignore x)) (format T "Hello World!"))
```

Notice again that the <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm> is *after* the `x` is bound.

```lisp
CL-USER> (foo 24)
Hello World!NIL
```

And there is no compiler warning about `x` not being used.

However without the ignore <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm> a compiler warning is issued:

```lisp
CL-USER> (defun foo (x) (format T "Hello World!"))
; in: DEFUN FOO
;     (SB-INT:NAMED-LAMBDA FOO
;         (X)
;       (BLOCK FOO (FORMAT T "Hello World!")))
; 
; caught STYLE-WARNING:
;   The variable X is defined but never used.
; 
; compilation unit finished
;   caught 1 STYLE-WARNING condition
WARNING: redefining COMMON-LISP-USER::FOO in DEFUN
FOO
```

### Using ignorable for Macro-Generated Code

`ignorable` is preferred over `ignore` in macros where a variable may or may not be used depending on the expansion.

```lisp
(defmacro with-result ((var form) &body body)
  `(let ((,var ,form))
     (declare (ignorable ,var))
     ,@body))
;; => WITH-RESULT

;; var is used:
(with-result (x (+ 1 2)) (* x x))
;; => 9

;; var is not used (no warning thanks to ignorable):
(with-result (x (+ 1 2)) 42)
;; => 42
```

### Ignoring Multiple Variables

```lisp
(defun pick-first (a b c)
  (declare (ignore b c))
  a)
;; => PICK-FIRST

(pick-first 'x 'y 'z)
;; => X
```
