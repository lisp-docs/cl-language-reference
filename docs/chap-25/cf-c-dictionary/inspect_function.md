---
title: "inspect"
---

# inspect

import InspectFunction from './_inspect_function.md';

<InspectFunction />

## Expanded Reference: inspect

### Interactive object inspection

`inspect` provides an interactive, implementation-dependent interface for examining and potentially modifying an object. It returns no useful value.

```lisp
;; Inspect a list (enters an interactive inspector in most implementations)
;; (inspect '(1 2 3))
;; The user can then browse the structure interactively.
```

### Inspecting various objects

`inspect` works on any Lisp object. The interactive interface varies by implementation.

```lisp
;; Inspect a hash table
;; (inspect (make-hash-table))
;; Shows slots, count, rehash-size, etc. in implementation-dependent format

;; Inspect an array
;; (inspect (make-array '(3 3) :initial-element 0))
;; Shows dimensions, element-type, contents, etc.
```

### Non-interactive usage

Since `inspect` is interactive, it is primarily useful at the REPL during development. In non-interactive contexts, `describe` is typically more appropriate.

```lisp
;; For non-interactive output, use describe instead:
(describe (make-hash-table))
; Prints hash table details to *standard-output*
=> ; no useful return value
```
