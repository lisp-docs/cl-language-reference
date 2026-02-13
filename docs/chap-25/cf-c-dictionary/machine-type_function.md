---
title: "machine-type"
---

# machine-type

import MachineTypeFunction from './_machine-type_function.md';

<MachineTypeFunction />

## Expanded Reference: machine-type

### Basic Usage

`machine-type` returns a string identifying the hardware type (CPU architecture) of the machine running the Lisp implementation. The exact value is implementation-dependent.

```lisp
(machine-type)
; → "X86-64"
```

### Typical Return Values

The returned string varies by implementation and platform. Common values include architecture names.

```lisp
;; On a 64-bit x86 system (SBCL)
(machine-type)
; → "X86-64"

;; On an ARM system (e.g., Apple Silicon via an implementation that reports it)
(machine-type)
; → "ARM64"

;; If the implementation cannot determine the type
(machine-type)
; → NIL
```

### Conditional Behavior Based on Architecture

You can use `machine-type` to adjust behavior based on the hardware platform, though relying on specific strings is inherently non-portable.

```lisp
(defun pointer-size-heuristic ()
  (let ((mt (machine-type)))
    (cond
      ((and mt (search "64" mt)) "Likely 64-bit architecture")
      ((and mt (search "86" mt)) "Likely 32-bit x86 architecture")
      (t "Unknown architecture"))))

(pointer-size-heuristic)
; → "Likely 64-bit architecture"
```

### Important Notes

The return value is a string or `NIL`. There is no standard format for the returned string, so portable code should not depend on its exact contents.
