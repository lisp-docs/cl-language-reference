---
title: "compile-file-truename"
---

# \*compile-file-truename\*

import CompileFileTruenameVariable from './_compile-file-truename_variable.md';

<CompileFileTruenameVariable />

## Expanded Reference: \*compile-file-truename\*

### Nil outside of compile-file

Outside of a call to `compile-file`, both `*compile-file-pathname*` and `*compile-file-truename*` are nil.

```lisp
*compile-file-pathname*
→ NIL

*compile-file-truename*
→ NIL
```

### Bound during compile-file

During compilation, `*compile-file-pathname*` is bound to the merged pathname of the input file, and `*compile-file-truename*` is bound to the truename of the file being compiled.

```lisp
;; Create a file that records these values during compilation
(with-open-file (s "/tmp/cl-cft-test.lisp" :direction :output
                   :if-exists :supersede)
  (write-string
    "(defparameter *recorded-cfp* *compile-file-pathname*)
     (defparameter *recorded-cft* *compile-file-truename*)"
    s))

(compile-file "/tmp/cl-cft-test.lisp")
(load (compile-file-pathname "/tmp/cl-cft-test.lisp"))

(pathnamep *recorded-cfp*)
→ T

(pathnamep *recorded-cft*)
→ T
```

### Useful for locating resources relative to source

These variables enable code to find files relative to the source being compiled.

```lisp
;; Inside a file being compiled, you might write:
;; (defvar *my-data-dir*
;;   (merge-pathnames "data/" *compile-file-truename*))
```
