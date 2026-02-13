---
title: "provide, require"
---

# provide, require

import ProvideFunction from './_provide_require_function.md';

<ProvideFunction />

## Expanded Reference: provide, require

**Note:** `provide` and `require` are deprecated. Modern Common Lisp programs typically use ASDF or other system definition facilities instead.

### Registering a module with provide

`provide` adds a module name to `*modules*`, indicating that the module has been loaded.

```lisp
(provide "MY-UTILITIES")

(member "MY-UTILITIES" *modules* :test #'string=)
→ ("MY-UTILITIES" ...)  ; implementation-dependent
```

### Using require to conditionally load a module

`require` checks whether a module is already loaded (present in `*modules*`). If not, it attempts to load it.

```lisp
;; After providing, require does nothing:
(provide "MY-MODULE")
(require "MY-MODULE")
→ NIL  ; implementation-dependent; no loading needed
```

### Supplying an explicit pathname list

`require` can accept a list of pathnames to load when the module is not found.

```lisp
;; Create a module file
(with-open-file (s "/tmp/cl-req-module.lisp" :direction :output
                   :if-exists :supersede)
  (write-string "(provide \"CL-REQ-MODULE\")" s))

(require "CL-REQ-MODULE" "/tmp/cl-req-module.lisp")

(member "CL-REQ-MODULE" *modules* :test #'string=)
→ ("CL-REQ-MODULE" ...)  ; implementation-dependent
```

### Checking *modules*

The `*modules*` variable holds the list of currently loaded module names.

```lisp
(listp *modules*)
→ T

;; Every element is a string
(every #'stringp *modules*)
→ T
```
