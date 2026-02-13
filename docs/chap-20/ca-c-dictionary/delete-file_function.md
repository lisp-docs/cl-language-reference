---
title: "delete-file"
---

# delete-file

import DeleteFileFunction from './_delete-file_function.md';

<DeleteFileFunction />

## Expanded Reference: delete-file

### Deleting a file

`delete-file` removes a file from the file system and returns T on success.

```lisp
(with-open-file (s "/tmp/cl-delete-test.txt" :direction :output
                   :if-exists :supersede)
  (write-string "temporary data" s))

(probe-file "/tmp/cl-delete-test.txt")
→ #P"/tmp/cl-delete-test.txt"  ; file exists

(delete-file "/tmp/cl-delete-test.txt")
→ T

(probe-file "/tmp/cl-delete-test.txt")
→ NIL  ; file is gone
```

### Deleting via a pathname object

`delete-file` accepts any pathname designator: strings, pathnames, or streams.

```lisp
(with-open-file (s "/tmp/cl-delete-test2.txt" :direction :output
                   :if-exists :supersede)
  (write-string "temporary" s))

(delete-file #P"/tmp/cl-delete-test2.txt")
→ T
```

### Error on nonexistent file

Whether deleting a nonexistent file signals an error is implementation-dependent. Many implementations signal a `file-error`.

```lisp
;; This may signal a file-error on some implementations:
;; (delete-file "/tmp/no-such-file-xyz-99999.txt")
;; => signals FILE-ERROR (implementation-dependent)
```

### Create-and-delete pattern

A common pattern is creating a temporary file, using it, then deleting it.

```lisp
(let ((path "/tmp/cl-delete-temp.txt"))
  (with-open-file (s path :direction :output :if-exists :supersede)
    (write-string "work in progress" s))
  ;; ... use the file ...
  (delete-file path)
  (null (probe-file path)))
→ T
```
