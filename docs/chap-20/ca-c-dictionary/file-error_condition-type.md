---
title: "file-error"
---

# file-error

import FileErrorConditionType from './_file-error_condition-type.md';

<FileErrorConditionType />

## Expanded Reference: file-error

### Catching file errors

`file-error` is a condition type signaled when file system operations fail. It is a subtype of `error`.

```lisp
(handler-case
    (open "/tmp/nonexistent-directory-xyz/no-file.txt")
  (file-error (c)
    (format nil "File error: ~A" c)))
;; => "File error: ..."  ; implementation-dependent message
```

### The file-error type hierarchy

`file-error` is a subtype of `error`, which is a subtype of `serious-condition`.

```lisp
(subtypep 'file-error 'error)
=> T
=> T

(subtypep 'file-error 'serious-condition)
=> T
=> T
```

### Extracting the offending pathname

The `file-error-pathname` function retrieves the pathname that caused the error.

```lisp
(handler-case
    (open "/tmp/nonexistent-dir-xyz/test.txt")
  (file-error (c)
    (pathnamep (file-error-pathname c))))
=> T
```

### Signaling file-error with make-condition

You can create file-error conditions programmatically with the `:pathname` initarg.

```lisp
(let ((c (make-condition 'file-error :pathname #P"/bad/path.txt")))
  (file-error-pathname c))
=> #P"/bad/path.txt"
```
