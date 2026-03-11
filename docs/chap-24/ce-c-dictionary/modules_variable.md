---
title: "modules"
---

# \*modules\*

import ModulesVariable from './_modules_variable.md';

<ModulesVariable />

## Expanded Reference: \*modules\*

**Note:** `*modules*` is deprecated along with `provide` and `require`.

### Inspecting loaded modules

`*modules*` holds a list of strings naming modules that have been loaded into the current Lisp image.

```lisp
(listp *modules*)
=> T

;; All elements are strings
(every #'stringp *modules*)
=> T
```

### Modified by provide

The `provide` function adds a module name to `*modules*`.

```lisp
(provide "MY-TEST-MODULE")

(member "MY-TEST-MODULE" *modules* :test #'string=)
;; => ("MY-TEST-MODULE" ...)  ; implementation-dependent
```

### Checked by require

The `require` function consults `*modules*` to determine whether a module needs to be loaded.

```lisp
(provide "ALREADY-LOADED")
;; require sees it in *modules* and does nothing
(require "ALREADY-LOADED")
;; => NIL  ; implementation-dependent
```
