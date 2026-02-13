---
title: "file-author"
---

# file-author

import FileAuthorFunction from './_file-author_function.md';

<FileAuthorFunction />

## Expanded Reference: file-author

### Querying the author of a file

`file-author` returns a string naming the author of the specified file, or nil if the author cannot be determined. Support for file authorship is implementation-dependent and file-system-dependent.

```lisp
;; On many Unix systems, file-author returns the owner's login name
(with-open-file (s "/tmp/cl-author-test.txt" :direction :output
                   :if-exists :supersede)
  (write-string "test" s))

(file-author "/tmp/cl-author-test.txt")
→ "username"  ; or NIL, implementation-dependent
```

### Result type is string or nil

The return value is always either a string or nil. Many modern file systems do not track authorship separately from ownership.

```lisp
(let ((author (file-author "/tmp/cl-author-test.txt")))
  (or (stringp author) (null author)))
→ T
```

### Accepts pathname designators

Like most file functions, `file-author` accepts strings, pathnames, and streams as its argument.

```lisp
(file-author #P"/tmp/cl-author-test.txt")
→ "username"  ; or NIL, implementation-dependent

(with-open-file (s "/tmp/cl-author-test.txt")
  (file-author s))
→ "username"  ; or NIL, implementation-dependent
```
