---
title: "merge-pathnames"
---

# merge-pathnames

import MergePathnamesFunction from './_merge-pathnames_function.md';

<MergePathnamesFunction />

## Expanded Reference: merge-pathnames

### Filling in missing components from defaults

`merge-pathnames` fills in unspecified components of the first pathname using corresponding components from the default pathname.

```lisp
(merge-pathnames "output.dat" #P"/home/user/input.txt")
=> #P"/home/user/output.dat"
```

### Supplying only a name

When only a name is given, the directory and type come from the defaults.

```lisp
(merge-pathnames "report" #P"/var/log/old.txt")
=> #P"/var/log/report.txt"
```

### Merging relative directories

If the first pathname has a relative directory, it is appended to the default's directory.

```lisp
(merge-pathnames
  (make-pathname :directory '(:relative "sub")
                 :name "file"
                 :type "lisp")
  #P"/home/user/")
=> #P"/home/user/sub/file.lisp"
```

### An absolute directory overrides the default

If the first pathname specifies an absolute directory, it is used rather than the default.

```lisp
(merge-pathnames #P"/opt/bin/tool" #P"/home/user/data.txt")
=> #P"/opt/bin/tool.txt"
```

### Changing just the file type

A common pattern is to produce an output pathname that differs from the input only in type.

```lisp
(merge-pathnames
  (make-pathname :type "fasl")
  #P"/home/user/code.lisp")
=> #P"/home/user/code.fasl"
```
