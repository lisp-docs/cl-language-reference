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
→ (FACTORIAL)

(factorial 4)
; 0: (FACTORIAL 4)
;   1: (FACTORIAL 3)
;     2: (FACTORIAL 2)
;       3: (FACTORIAL 1)
;       3: FACTORIAL returned 1
;     2: FACTORIAL returned 2
;   1: FACTORIAL returned 6
; 0: FACTORIAL returned 24
→ 24
```

### Untracing a function

`untrace` disables tracing for specified functions. With no arguments, it untraces all currently traced functions.

```lisp
(untrace factorial)
→ (FACTORIAL)

(factorial 4)
→ 24  ; no trace output
```

### Tracing multiple functions at once

Multiple function names can be given to `trace`.

```lisp
(defun add1 (x) (+ x 1))
(defun double-it (x) (* x 2))

(trace add1 double-it)
→ (ADD1 DOUBLE-IT)

(add1 (double-it 3))
; 0: (DOUBLE-IT 3)
; 0: DOUBLE-IT returned 6
; 0: (ADD1 6)
; 0: ADD1 returned 7
→ 7

(untrace)
→ (ADD1 DOUBLE-IT)  ; untraces all
```

### Checking what is currently traced

Calling `trace` with no arguments returns the list of currently traced functions.

```lisp
(trace factorial)
(trace)
→ (FACTORIAL)

(untrace)
→ (FACTORIAL)
```
