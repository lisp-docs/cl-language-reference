---
title: "with-open-file"
---

# with-open-file

import WithOpenFilemacro from './_with-open-file_macro.md';

<WithOpenFilemacro />

## Expanded Reference: with-open-file

### Basic Writing and Reading

`with-open-file` opens a file, binds a stream variable, executes the body, and automatically closes the stream on exit.

```lisp
(with-open-file (s "/tmp/cl-wof-test.txt"
                   :direction :output :if-exists :supersede)
  (write-line "Hello from Common Lisp" s)
  (write-line "Second line" s))
=> "Second line"

(with-open-file (s "/tmp/cl-wof-test.txt")
  (list (read-line s) (read-line s)))
=> ("Hello from Common Lisp" "Second line")
```

### Reading Lines Until End of File

```lisp
(with-open-file (s "/tmp/cl-wof-test.txt")
  (loop for line = (read-line s nil nil)
        while line
        collect line))
=> ("Hello from Common Lisp" "Second line")
```

### Binary File I/O

```lisp
(with-open-file (s "/tmp/cl-wof-bin.dat"
                   :direction :output
                   :element-type '(unsigned-byte 8)
                   :if-exists :supersede)
  (write-byte 255 s)
  (write-byte 0 s)
  (write-byte 42 s))
=> 42

(with-open-file (s "/tmp/cl-wof-bin.dat"
                   :element-type '(unsigned-byte 8))
  (list (read-byte s) (read-byte s) (read-byte s)))
=> (255 0 42)
```

### Handling File Does Not Exist

When `:if-does-not-exist` is `nil`, the stream variable may be `nil`.

```lisp
(with-open-file (s "/tmp/no-such-file-xyz.txt"
                   :if-does-not-exist nil)
  (if s
      (read-line s)
      "file not found"))
=> "file not found"
```

### Appending to an Existing File

```lisp
(with-open-file (s "/tmp/cl-wof-test.txt"
                   :direction :output :if-exists :append)
  (write-line "Appended line" s))

(with-open-file (s "/tmp/cl-wof-test.txt")
  (loop for line = (read-line s nil nil)
        while line
        collect line))
=> ("Hello from Common Lisp" "Second line" "Appended line")
```
