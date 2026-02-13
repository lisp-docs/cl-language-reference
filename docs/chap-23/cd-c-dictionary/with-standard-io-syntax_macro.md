---
title: "with-standard-io-syntax"
---

# with-standard-io-syntax

import WithStandardIoSyntaxMacro from './_with-standard-io-syntax_macro.md';

<WithStandardIoSyntaxMacro />

## Expanded Reference: with-standard-io-syntax

### Basic usage

`with-standard-io-syntax` establishes a dynamic environment where all reader and printer control variables are bound to their standard values. This guarantees portable, reproducible read/print behavior.

```lisp
(with-standard-io-syntax
  (list *read-base*
        *read-default-float-format*
        *read-eval*
        *read-suppress*
        *print-base*
        *print-case*))
; => (10 SINGLE-FLOAT T NIL 10 :UPCASE)
```

### Ensuring round-trip consistency for data serialization

The primary use case is to ensure that objects printed under standard syntax can be read back reliably, even if the surrounding environment has customized reader/printer settings.

```lisp
;; Even with a modified environment, with-standard-io-syntax
;; ensures standard behavior for serialization
(let ((*print-base* 16)
      (*read-base* 16))
  (with-standard-io-syntax
    (let ((str (prin1-to-string 255)))
      (list str (read-from-string str)))))
; => ("255" 255)
```

### Writing and reading data files

A common pattern is to use `with-standard-io-syntax` when writing data to a file and reading it back, ensuring the data survives across different Lisp sessions with potentially different settings.

```lisp
;; Writing data
;; (with-open-file (out pathname :direction :output)
;;   (with-standard-io-syntax
;;     (print data out)))

;; Reading data back
;; (with-open-file (in pathname :direction :input)
;;   (with-standard-io-syntax
;;     (setq data (read in))))

;; Simulated with string streams:
(let ((data '(hello 42 "world" 3.14)))
  (let ((str (with-standard-io-syntax
               (prin1-to-string data))))
    (with-standard-io-syntax
      (read-from-string str))))
; => (HELLO 42 "world" 3.14)
; => 27
```

### The readtable is bound to the standard readtable

Inside `with-standard-io-syntax`, `*readtable*` is bound to the standard readtable, so any custom reader macros in effect outside the form are not active.

```lisp
(let ((*readtable* (copy-readtable)))
  (set-macro-character #\!
    (lambda (s c) (declare (ignore s c)) 'bang))
  ;; Inside with-standard-io-syntax, ! is a normal constituent
  (with-standard-io-syntax
    (with-input-from-string (s "!test")
      (symbol-name (read s)))))
; => "!TEST"
```

### Package is bound to CL-USER

Inside the form, `*package*` is bound to the `CL-USER` package.

```lisp
(in-package :cl-user)
(with-standard-io-syntax
  (package-name *package*))
; => "COMMON-LISP-USER"
```
