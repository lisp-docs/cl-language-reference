---
title: "load-truename"
---

# \*load-truename\*

import LoadTruenameVariable from './_load-truename_variable.md';

<LoadTruenameVariable />

## Expanded Reference: \*load-truename\*

### Nil outside of load

Outside of a call to `load`, both `*load-pathname*` and `*load-truename*` are nil.

```lisp
*load-pathname*
→ NIL

*load-truename*
→ NIL
```

### Bound during load

During loading, `*load-pathname*` is bound to the merged pathname argument, and `*load-truename*` is bound to the truename of the file being loaded.

```lisp
;; Create a file that captures these values during loading
(with-open-file (s "/tmp/cl-lt-test.lisp" :direction :output
                   :if-exists :supersede)
  (write-string
    "(defparameter *my-load-path* *load-pathname*)
     (defparameter *my-load-true* *load-truename*)"
    s))

(load "/tmp/cl-lt-test.lisp")
→ T

(pathnamep *my-load-path*)
→ T

(pathnamep *my-load-true*)
→ T
```

### Locating resources relative to the loaded file

A common pattern is to find data files or configuration files relative to the file being loaded.

```lisp
;; Inside a file being loaded:
;; (defvar *config-path*
;;   (merge-pathnames "config.dat" *load-truename*))
```
