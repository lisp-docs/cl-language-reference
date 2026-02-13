---
title: "directory"
---

# directory

import DirectoryFunction from './_directory_function.md';

<DirectoryFunction />

## Expanded Reference: directory

### Listing files matching a wildcard pattern

`directory` returns a list of pathnames for files matching the given wildcard pattern. The results are truenames (physical pathnames).

```lisp
;; List all .lisp files in /tmp (if any exist)
(directory #P"/tmp/*.lisp")
→ (#P"/tmp/test.lisp" #P"/tmp/utils.lisp")  ; implementation-dependent
```

### Non-wild pathspec returns zero or one matches

If the pathspec contains no wildcards, the result is either an empty list or a list with one element.

```lisp
;; Check for a specific file
(directory #P"/tmp/nonexistent-file-xyz.txt")
→ ()

;; An existing file returns a one-element list
(with-open-file (s "/tmp/cl-dir-test.txt" :direction :output
                   :if-exists :supersede)
  (write-string "test" s))
(directory #P"/tmp/cl-dir-test.txt")
→ (#P"/tmp/cl-dir-test.txt")  ; the truename; implementation-dependent
```

### Using :wild-inferiors for recursive listing

Use `:wild-inferiors` in the directory component to match files in subdirectories recursively.

```lisp
;; List all .lisp files under a directory tree
(directory (make-pathname :directory '(:absolute "home" "user" :wild-inferiors)
                          :name :wild
                          :type "lisp"))
→ (...)  ; all .lisp files found recursively; implementation-dependent
```

### The result is always a fresh list

Each call to `directory` returns a new list, even for the same pattern.

```lisp
(let ((a (directory #P"/tmp/*.txt"))
      (b (directory #P"/tmp/*.txt")))
  (eq a b))
→ NIL
```
