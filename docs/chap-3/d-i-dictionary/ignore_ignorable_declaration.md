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

Notice how the `declare` statement is *after* the `x` is bound. See also the syntax for <DictionaryLink term={"let"}><b>let</b></DictionaryLink> where the *declaration* is explicitly specified after the *variables* and before the *forms*.

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

Notice again that the `declare` statement is *after* the `x` is bound.

```lisp
CL-USER> (foo 24)
Hello World!NIL
```

And there is no compiler warning about `x` not being used.

However without the ignore declaration a compiler warning is issued:

```lisp
CL-USER> (defun foo (x)  (format T "Hello World!"))
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

### Other Examples

:::tip
TODO: Please contribute to this page by adding explanations and examples
:::

```lisp
(ignore, ignorable )

```
