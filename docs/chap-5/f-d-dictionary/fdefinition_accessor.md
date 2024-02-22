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

Notice that FDEFINITION is a function, so that its arguments are evaluated.  Thus, if it is desirable to use a literal function name, it must be quoted.

If the NAME argument is not quoted, it will be taken to be the name of a variable, and if that variable does not have a value, an error will be signaled:

```lisp
CL-USER> (setf (fdefinition bar) (lambda (x) (+ x 1)))
; in: SETF (FDEFINITION BAR)
;     (#:BAR2176 BAR)
; 
; caught WARNING:
;   undefined variable: COMMON-LISP-USER::BAR
; 
; compilation unit finished
;   Undefined variable:
;     BAR
;   caught 1 WARNING condition
; Debugger entered on #<UNBOUND-VARIABLE BAR {1005485F93}>

The variable BAR is unbound.
   [Condition of type UNBOUND-VARIABLE]
```
