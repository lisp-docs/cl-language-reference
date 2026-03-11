---
title: "load"
---

# load

import LoadFunction from './_load_function.md';

<LoadFunction />

## Expanded Reference: load

### Loading a source file

`load` reads and evaluates each form in a file sequentially. It returns true on success.

```lisp
(with-open-file (s "/tmp/cl-load-test.lisp" :direction :output
                   :if-exists :supersede)
  (write-string "(defun cl-load-test-fn () 42)" s))

(load "/tmp/cl-load-test.lisp")
=> T

(cl-load-test-fn)
=> 42
```

### Loading with verbose output

The `:verbose` keyword causes `load` to print information about the loading process.

```lisp
(load "/tmp/cl-load-test.lisp" :verbose t)
; Prints loading information to *standard-output*
=> T
```

### Handling missing files

The `:if-does-not-exist` keyword controls behavior when the file is not found. When nil, `load` returns nil instead of signaling an error.

```lisp
(load "/tmp/nonexistent-file-xyz.lisp" :if-does-not-exist nil)
=> NIL
```

### Loading a compiled file

After compiling a file with `compile-file`, the compiled version can be loaded for faster execution.

```lisp
(with-open-file (s "/tmp/cl-load-compiled.lisp" :direction :output
                   :if-exists :supersede)
  (write-string "(defun cl-load-compiled-fn (x) (* x x))" s))

(compile-file "/tmp/cl-load-compiled.lisp")
(load (compile-file-pathname "/tmp/cl-load-compiled.lisp"))
;; => T

(cl-load-compiled-fn 5)
=> 25
```
