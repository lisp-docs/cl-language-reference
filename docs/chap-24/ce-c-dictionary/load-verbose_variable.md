---
title: "load-verbose"
---

# \*load-verbose\*

import LoadVerboseVariable from './_load-verbose_variable.md';

<LoadVerboseVariable />

## Expanded Reference: \*load-verbose\*

### Default verbosity for load

`*load-verbose*` provides the default value for the `:verbose` argument to `load`. Its initial value is implementation-dependent.

```lisp
;; Check the current value
(typep *load-verbose* 'boolean)
→ T  ; it is a generalized boolean
```

### Controlling default verbose behavior

Setting `*load-verbose*` to true causes `load` to print progress information by default.

```lisp
(let ((*load-verbose* t))
  (load "/tmp/cl-load-test.lisp"))
; Implementation may print loading information
→ T
```

### Suppressing verbose output

Setting it to nil suppresses the default verbose output from `load`.

```lisp
(let ((*load-verbose* nil))
  (load "/tmp/cl-load-test.lisp"))
; No verbose output printed
→ T
```
