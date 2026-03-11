---
title: "compile-file"
---

# compile-file

import CompileFileFunction from './_compile-file_function.md';

<CompileFileFunction />

## Expanded Reference: compile-file

### Compiling a source file

`compile-file` compiles a Lisp source file into implementation-dependent binary form. It returns three values: the output truename, a warnings-p flag, and a failure-p flag.

```lisp
;; Compile a source file (assumes /tmp/cl-cf-test.lisp exists)
(with-open-file (s "/tmp/cl-cf-test.lisp" :direction :output
                   :if-exists :supersede)
  (write-string "(defun cl-cf-test-fn (x) (* x x))" s))

(compile-file "/tmp/cl-cf-test.lisp")
;; => #P"/tmp/cl-cf-test.fasl"  ; output truename (extension is implementation-dependent)
;; => NIL                         ; warnings-p
;; => NIL                         ; failure-p
```

### Specifying an output file

The `:output-file` keyword argument overrides the default output pathname.

```lisp
(compile-file "/tmp/cl-cf-test.lisp"
              :output-file "/tmp/cl-cf-test-compiled.fasl")
;; => #P"/tmp/cl-cf-test-compiled.fasl"  ; implementation-dependent extension
;; => NIL
;; => NIL
```

### Controlling verbosity

The `:verbose` keyword controls whether `compile-file` prints progress information.

```lisp
(compile-file "/tmp/cl-cf-test.lisp" :verbose nil)
;; => #P"/tmp/cl-cf-test.fasl"  ; implementation-dependent
;; => NIL
;; => NIL
```

### Checking for compilation warnings and failures

The second and third return values indicate whether warnings or failures occurred during compilation.

```lisp
(multiple-value-bind (output warnings-p failure-p)
    (compile-file "/tmp/cl-cf-test.lisp")
  (list :output output
        :warnings warnings-p
        :failure failure-p))
;; => (:OUTPUT #P"/tmp/cl-cf-test.fasl" :WARNINGS NIL :FAILURE NIL)
;; implementation-dependent
```
