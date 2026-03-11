---
title: "pathname"
---

# pathname

import PathnameSystemClass from './_pathname_system-class.md';

<PathnameSystemClass />

## Expanded Reference: pathname (System Class)

### The pathname type

A pathname is a structured object representing a filename. There are two kinds of pathnames: physical pathnames and logical pathnames. The `#P` reader macro creates pathname objects.

```lisp
(type-of #P"/usr/local/bin/sbcl")
;; => PATHNAME  ; or a subtype, implementation-dependent

(typep #P"/tmp/test.lisp" 'pathname)
=> T
```

### Pathnames have six components

Every pathname has a host, device, directory, name, type, and version component. These can be accessed with the `pathname-*` accessor functions.

```lisp
(let ((p (make-pathname :directory '(:absolute "home" "user")
                        :name "data"
                        :type "csv")))
  (list (pathname-directory p)
        (pathname-name p)
        (pathname-type p)))
=> ((:ABSOLUTE "home" "user") "data" "csv")
```

### Pathnames from strings

Strings are automatically coerced to pathnames in many contexts. The `pathname` function explicitly converts a pathname designator to a pathname object.

```lisp
(pathnamep "foo.lisp")
=> NIL

(pathnamep (pathname "foo.lisp"))
=> T
```

### Logical pathnames are a subtype

Logical pathnames are a subtype of pathname that provide a portable way to refer to files independent of the actual file system.

```lisp
(subtypep 'logical-pathname 'pathname)
=> T
=> T
```
