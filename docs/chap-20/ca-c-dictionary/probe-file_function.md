---
title: "probe-file"
---

# probe-file

import ProbeFileFunction from './_probe-file_function.md';

<ProbeFileFunction />

## Expanded Reference: probe-file

### Testing whether a file exists

`probe-file` returns the truename of a file if it exists, or nil if it does not.

```lisp
;; A file that does not exist
(probe-file "/tmp/nonexistent-file-xyz-12345.txt")
=> NIL
```

### Getting the truename of an existing file

When the file exists, `probe-file` returns its truename as a physical pathname.

```lisp
(with-open-file (s "/tmp/cl-probe-test.txt" :direction :output
                   :if-exists :supersede)
  (write-string "hello" s))

(probe-file "/tmp/cl-probe-test.txt")
=> #P"/tmp/cl-probe-test.txt"
```

### Using probe-file for conditional file operations

A common pattern is to test for file existence before performing operations.

```lisp
(let ((path "/tmp/cl-probe-test.txt"))
  (if (probe-file path)
      (format nil "File ~A exists" path)
      (format nil "File ~A does not exist" path)))
=> "File /tmp/cl-probe-test.txt exists"
```

### probe-file works with pathname objects

The argument can be a string, a pathname, or a stream.

```lisp
(let ((p (make-pathname :directory '(:absolute "tmp")
                        :name "cl-probe-test"
                        :type "txt")))
  (if (probe-file p) "found" "not found"))
=> "found"
```
