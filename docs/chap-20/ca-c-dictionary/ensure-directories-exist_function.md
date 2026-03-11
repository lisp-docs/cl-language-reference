---
title: "ensure-directories-exist"
---

# ensure-directories-exist

import EnsureDirectoriesExistFunction from './_ensure-directories-exist_function.md';

<EnsureDirectoriesExistFunction />

## Expanded Reference: ensure-directories-exist

### Creating directories for a file path

`ensure-directories-exist` creates any missing directories in the path. It returns two values: the original pathspec and a boolean indicating whether directories were actually created.

```lisp
(ensure-directories-exist "/tmp/cl-test-ede/sub/dir/file.txt")
;; => #P"/tmp/cl-test-ede/sub/dir/file.txt"
;; => T
```

### Directories already exist

If all directories in the path already exist, the second value is nil.

```lisp
(ensure-directories-exist "/tmp/file.txt")
;; => #P"/tmp/file.txt"
;; => NIL
```

### Composing with file operations

Because `ensure-directories-exist` returns the pathspec as its primary value, it can be composed directly with file operations.

```lisp
(with-open-file (s (ensure-directories-exist
                     "/tmp/cl-test-ede2/output/data.txt")
                   :direction :output
                   :if-exists :supersede)
  (write-string "data" s))
=> "data"
```

### Using the :verbose keyword

When `:verbose` is true, the implementation may print information about which directories were created.

```lisp
(ensure-directories-exist "/tmp/cl-test-ede3/a/b/c/file.txt"
                          :verbose t)
;; May print information about directory creation
;; => #P"/tmp/cl-test-ede3/a/b/c/file.txt"
;; => T
```
