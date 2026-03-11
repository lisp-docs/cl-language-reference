---
title: "pathname"
---

# pathname

import PathnameFunction from './_pathname_function.md';

<PathnameFunction />

## Expanded Reference: pathname

### Converting a string to a pathname

The `pathname` function converts a pathname designator (a string, stream, or pathname) into a pathname object.

```lisp
(pathname "foo.lisp")
=> #P"foo.lisp"

(pathnamep (pathname "foo.lisp"))
=> T
```

### A pathname passed through is returned as-is

When the argument is already a pathname, `pathname` returns it unchanged (it is identity on pathnames).

```lisp
(let ((p #P"/tmp/test.txt"))
  (eq p (pathname p)))
=> T
```

### Converting from a file stream

When given a stream associated with a file, `pathname` returns the pathname used to open that file. This works on both open and closed streams.

```lisp
(with-open-file (s "/tmp/cl-test-pathname.txt"
                   :direction :output
                   :if-exists :supersede)
  (pathname s))
=> #P"/tmp/cl-test-pathname.txt"
```

### Extracting components after conversion

A common pattern is to convert a string to a pathname and then access its components.

```lisp
(let ((p (pathname "/home/user/document.txt")))
  (values (pathname-name p)
          (pathname-type p)))
=> "document"
=> "txt"
```
