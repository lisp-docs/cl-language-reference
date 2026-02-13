---
title: "compile-verbose"
---

# \*compile-verbose\*

import CompileVerboseVariable from './_compile-verbose_variable.md';

<CompileVerboseVariable />

## Expanded Reference: \*compile-verbose\*

### Default verbosity for compile-file

`*compile-verbose*` provides the default value for the `:verbose` argument to `compile-file`. Its initial value is implementation-dependent.

```lisp
(typep *compile-verbose* 'boolean)
→ T  ; it is a generalized boolean
```

### Controlling compile-file output

Binding `*compile-verbose*` to t causes `compile-file` to print progress information by default.

```lisp
(let ((*compile-verbose* t))
  (compile-file "/tmp/cl-cf-test.lisp"))
; Implementation may print compilation progress
→ #P"/tmp/cl-cf-test.fasl"  ; implementation-dependent
→ NIL
→ NIL
```

### Suppressing compile-file output

Binding it to nil suppresses the default verbose output.

```lisp
(let ((*compile-verbose* nil))
  (compile-file "/tmp/cl-cf-test.lisp"))
; No verbose output printed
→ #P"/tmp/cl-cf-test.fasl"  ; implementation-dependent
→ NIL
→ NIL
```
