---
title: "rename-file"
---

# rename-file

import RenameFileFunction from './_rename-file_function.md';

<RenameFileFunction />

## Expanded Reference: rename-file

### Basic file renaming

`rename-file` renames a file and returns three values: the defaulted new name, the old truename, and the new truename.

```lisp
;; Create a file, then rename it
(with-open-file (s "/tmp/cl-rename-old.txt" :direction :output
                   :if-exists :supersede)
  (write-string "data" s))

(rename-file "/tmp/cl-rename-old.txt" "/tmp/cl-rename-new.txt")
=> #P"/tmp/cl-rename-new.txt"
=> #P"/tmp/cl-rename-old.txt"
=> #P"/tmp/cl-rename-new.txt"
```

### New name defaults from the old name

Missing components of the new name are filled in from the original filename using `merge-pathnames`.

```lisp
(with-open-file (s "/tmp/cl-rename2-old.txt" :direction :output
                   :if-exists :supersede)
  (write-string "data" s))

;; Only changing the name component; type defaults from the original
(rename-file "/tmp/cl-rename2-old.txt"
             (make-pathname :name "cl-rename2-new"))
=> #P"/tmp/cl-rename2-new.txt"
=> #P"/tmp/cl-rename2-old.txt"
=> #P"/tmp/cl-rename2-new.txt"
```

### Verifying the rename

After renaming, the old file no longer exists and the new one does.

```lisp
(with-open-file (s "/tmp/cl-rename3.txt" :direction :output
                   :if-exists :supersede)
  (write-string "data" s))

(rename-file "/tmp/cl-rename3.txt" "/tmp/cl-rename3-done.txt")

(values (probe-file "/tmp/cl-rename3.txt")
        (not (null (probe-file "/tmp/cl-rename3-done.txt"))))
=> NIL
=> T
```
