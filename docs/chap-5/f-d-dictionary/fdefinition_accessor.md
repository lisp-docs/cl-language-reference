---
title: "fdefinition"
---

# fdefinition

import FdefinitionAccessor from './_fdefinition_accessor.md';

<FdefinitionAccessor />

## Expanded Reference: fdefinition

The function name that is set with `(setf (fdefinition` does not have to be <GlossaryTerm  term={"fbound"}><i>fbound</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>. Therefore this can be useful for defining new functions programatically for them to be available in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>.

```lisp
CL-USER> (setf (fdefinition 'foo) (lambda (x) (+ x 1)))
#<FUNCTION (LAMBDA (X)) {5436EE0B}>
CL-USER> (foo 3)
4 (3 bits, #x4, #o4, #b100)
```

This can be useful when wanting to bind a function returned from another function to a global name.

Note however that when passing in the function name argument, it must be quoted so that it is available in the function as a symbol and not evaluated.

If it's not quoted a condition will be raised:

```lisp
CL-USER> (setf (fdefinition foo) (lambda (x) (+ x 1)))
; Debugger entered on #<SYMBOL-PACKAGE-LOCKED-ERROR "setting fdefinition of ~A" {10031BF813}>

Lock on package COMMON-LISP violated when
setting fdefinition of NIL while in package COMMON-LISP-USER.
   [Condition of type SYMBOL-PACKAGE-LOCKED-ERROR]
```
