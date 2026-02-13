---
title: "software-type, software-version"
---

# software-type, software-version

import SoftwareTypeFunction from './_software-type_software-version_function.md';

<SoftwareTypeFunction />

## Expanded Reference: software-type, software-version

### Basic Usage

`software-type` returns a string identifying the operating system or generic software environment, while `software-version` returns a string identifying the version of that software. Both may return `NIL` if the information is unavailable.

```lisp
(software-type)
; → "Linux"

(software-version)
; → "6.1.0-17-amd64"
```

### Typical Return Values Across Platforms

The returned strings are implementation-dependent and vary by both the Lisp implementation and the host operating system.

```lisp
;; On SBCL running on Linux
(software-type)    ; → "Linux"
(software-version) ; → "6.1.0-17-amd64"

;; On SBCL running on macOS
(software-type)    ; → "Darwin"
(software-version) ; → "23.1.0"

;; On SBCL running on Windows
(software-type)    ; → "Win32"
(software-version) ; → NIL
```

### Building an Environment Description

These functions are commonly used with the `machine-*` family to produce comprehensive environment reports.

```lisp
(defun environment-report ()
  (format nil "~A ~A on ~A (~A ~A), Lisp: ~A ~A"
          (or (software-type) "Unknown OS")
          (or (software-version) "")
          (or (machine-instance) "unknown host")
          (or (machine-type) "?")
          (or (machine-version) "")
          (lisp-implementation-type)
          (lisp-implementation-version)))

(environment-report)
; → "Linux 6.1.0-17-amd64 on myhost (X86-64 Intel Core i7), Lisp: SBCL 2.4.0"
```

### Important Notes

Both functions return a string or `NIL`. The format and content of the returned strings are entirely implementation-dependent. `software-type` typically identifies the operating system name, while `software-version` identifies the OS kernel or release version.
