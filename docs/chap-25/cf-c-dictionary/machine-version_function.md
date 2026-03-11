---
title: "machine-version"
---

# machine-version

import MachineVersionFunction from './_machine-version_function.md';

<MachineVersionFunction />

## Expanded Reference: machine-version

### Basic Usage

`machine-version` returns a string identifying the version of the hardware on which the Lisp implementation is running. The exact value is implementation-dependent.

```lisp
(or (stringp (machine-version)) (null (machine-version)))
;; => T
```

### Typical Return Values

Some implementations return detailed CPU model strings, while others return simpler identifiers or `NIL`.

```lisp
;; On SBCL (Linux), returns a CPU model string
;; On some implementations where version info is unavailable, returns NIL
(stringp (machine-version))
;; => impl-dependent
```

### Gathering Full Machine Identity

`machine-version` is most useful in combination with `machine-type` and `machine-instance` to build a complete picture of the execution environment.

```lisp
(defun machine-info ()
  (list :instance (machine-instance)
        :type     (machine-type)
        :version  (machine-version)))

(listp (machine-info))
;; => T
```

### Important Notes

The return value is a string or `NIL`. The content and format of the string are entirely implementation-dependent. Some implementations may return the same value as `machine-type` or provide no additional detail beyond it.
