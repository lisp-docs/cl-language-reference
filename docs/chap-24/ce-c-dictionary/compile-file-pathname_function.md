---
title: "compile-file-pathname"
---

# compile-file-pathname

import CompileFilePathnameFunction from './_compile-file-pathname_function.md';

<CompileFilePathnameFunction />

## Expanded Reference: compile-file-pathname

### Determining the output pathname for compile-file

`compile-file-pathname` returns the pathname that `compile-file` would use as its output file, without actually performing compilation.

```lisp
(compile-file-pathname "myfile.lisp")
;; => #P"myfile.fasl"  ; extension is implementation-dependent (e.g., .fasl, .fas, .o)
```

### The type component changes to the compiled file type

The primary effect is changing the type component to the implementation's compiled file type.

```lisp
(pathname-type (compile-file-pathname "test.lisp"))
;; => "fasl"  ; implementation-dependent
```

### Specifying a custom output file

The `:output-file` keyword overrides the default, just as it would with `compile-file`.

```lisp
(compile-file-pathname "test.lisp" :output-file "/tmp/output.bin")
;; => #P"/tmp/output.bin"
```

### Useful for building file dependency systems

`compile-file-pathname` is commonly used to determine whether a compiled file is up to date relative to its source.

```lisp
(let* ((source #P"/tmp/cl-cfp-test.lisp")
       (compiled (compile-file-pathname source)))
  (namestring compiled))
;; => "/tmp/cl-cfp-test.fasl"  ; implementation-dependent
```
