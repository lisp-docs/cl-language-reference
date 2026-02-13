---
title: "file-error-pathname"
---

# file-error-pathname

import FileErrorPathnameFunction from './_file-error-pathname_function.md';

<FileErrorPathnameFunction />

## Expanded Reference: file-error-pathname

### Retrieving the offending pathname

`file-error-pathname` extracts the pathname associated with a `file-error` condition, identifying which file caused the error.

```lisp
(handler-case
    (open "/tmp/nonexistent-dir-xyz/test.txt")
  (file-error (c)
    (file-error-pathname c)))
→ #P"/tmp/nonexistent-dir-xyz/test.txt"  ; implementation-dependent
```

### Using with handler-bind for logging

You can use `file-error-pathname` within a handler to log or report which file caused a problem.

```lisp
(handler-case
    (delete-file "/tmp/absolutely-no-such-file-xyz.txt")
  (file-error (c)
    (format nil "Cannot operate on: ~A"
            (namestring (file-error-pathname c)))))
→ "Cannot operate on: /tmp/absolutely-no-such-file-xyz.txt"
; implementation-dependent (some implementations may not error on delete of nonexistent)
```

### Works with programmatically created conditions

The function also works on conditions created with `make-condition`.

```lisp
(let ((c (make-condition 'file-error
                         :pathname "/missing/file.txt")))
  (file-error-pathname c))
→ "/missing/file.txt"  ; returns whatever was passed as :pathname
```
