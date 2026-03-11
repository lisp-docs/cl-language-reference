---
title: "machine-instance"
---

# machine-instance

import MachineInstanceFunction from './_machine-instance_function.md';

<MachineInstanceFunction />

## Expanded Reference: machine-instance

### Basic Usage

`machine-instance` returns a string that identifies the particular machine (host) on which the Lisp implementation is running. The exact content is implementation-dependent.

```lisp
(or (stringp (machine-instance)) (null (machine-instance)))
;; => T
```

### Typical Return Values

Different implementations may return hostnames, fully qualified domain names, or other identifiers. The function may also return `NIL` if no meaningful value can be determined.

```lisp
;; On SBCL running on a Linux host, returns the hostname string
;; On some implementations where host info is unavailable, returns NIL
(stringp (machine-instance))
;; => impl-dependent
```

### Using in Diagnostic Output

`machine-instance` is commonly used alongside other environment-querying functions to produce diagnostic or logging information.

```lisp
(stringp (format nil "Running on ~A (~A ~A)"
                 (or (machine-instance) "unknown host")
                 (or (machine-type) "unknown type")
                 (or (machine-version) "unknown version")))
;; => T
```

### Important Notes

The return value is a string or `NIL`. The format and content are entirely implementation-dependent -- there is no portable way to rely on the structure of the returned string.
