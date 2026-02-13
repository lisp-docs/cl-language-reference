---
title: "truename"
---

# truename

import TruenameFunction from './_truename_function.md';

<TruenameFunction />

## Expanded Reference: truename

### Getting the canonical name of a file

`truename` returns the canonical physical pathname of a file, resolving any symbolic links or other file system indirections.

```lisp
(with-open-file (s "/tmp/cl-truename-test.txt" :direction :output
                   :if-exists :supersede)
  (write-string "test" s))

(truename "/tmp/cl-truename-test.txt")
→ #P"/tmp/cl-truename-test.txt"  ; implementation-dependent
```

### Using truename with a stream

`truename` can be called on an open or closed stream to get the truename of the associated file.

```lisp
(with-open-file (s "/tmp/cl-truename-test.txt")
  (truename s))
→ #P"/tmp/cl-truename-test.txt"  ; implementation-dependent
```

### Truename vs. pathname

While `pathname` returns the name used to open a file, `truename` returns the actual canonical name in the file system. These may differ when aliases or links are involved.

```lisp
(with-open-file (s "/tmp/cl-truename-test.txt")
  (values (pathname s)
          (truename s)))
→ #P"/tmp/cl-truename-test.txt"
→ #P"/tmp/cl-truename-test.txt"  ; may differ with symlinks
```

### Error on nonexistent files

`truename` signals a `file-error` if the file does not exist.

```lisp
;; (truename "/tmp/absolutely-no-such-file-xyz.txt")
;; => signals FILE-ERROR
```
