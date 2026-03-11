---
title: "trace, untrace"
---

# trace, untrace

import TraceMacro from './_trace_untrace_macro.md';

<TraceMacro />

## Expanded Reference: trace, untrace

### Tracing a function

`trace` enables tracing for named functions. When a traced function is called, entry and exit information is printed.

```lisp
(defun factorial (n)
  (if (<= n 1) 1 (* n (factorial (1- n)))))

(trace factorial)
=> (FACTORIAL)

(factorial 4)
;; prints trace output showing recursive calls
=> 24
```

### Untracing a function

`untrace` disables tracing for specified functions. With no arguments, it untraces all currently traced functions.

```lisp
(defun factorial (n)
  (if (<= n 1) 1 (* n (factorial (1- n)))))

(trace factorial)
=> (FACTORIAL)

(untrace factorial)
;; => impl-dependent

(factorial 4)
=> 24
```

### Tracing multiple functions at once

Multiple function names can be given to `trace`.

```lisp
(defun add1 (x) (+ x 1))
(defun double-it (x) (* x 2))

(trace add1 double-it)
=> (ADD1 DOUBLE-IT)

(add1 (double-it 3))
;; prints trace output for both functions
=> 7

(untrace add1 double-it)
;; => impl-dependent
```

### Checking what is currently traced

Calling `trace` with no arguments returns the list of currently traced functions.

```lisp
(defun factorial (n)
  (if (<= n 1) 1 (* n (factorial (1- n)))))

(trace factorial)
=> (FACTORIAL)

(trace)
;; => (FACTORIAL)

(untrace)
;; => impl-dependent
```
