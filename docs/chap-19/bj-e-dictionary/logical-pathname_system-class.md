---
title: "logical-pathname"
---

# logical-pathname

import LogicalPathnameSystemClass from './_logical-pathname_system-class.md';

<LogicalPathnameSystemClass />

## Expanded Reference: logical-pathname (System Class)

### Logical pathnames are a subtype of pathname

A logical pathname provides a portable, implementation-independent way to specify file locations. It is a subtype of `pathname`.

```lisp
(subtypep 'logical-pathname 'pathname)
=> T
=> T
```

### Creating and recognizing logical pathnames

Logical pathnames are created by establishing translations and then using logical pathname namestrings.

```lisp
(setf (logical-pathname-translations "MYLIB")
      '(("**;*.*.*" "/usr/lib/mylib/**/*.*")))

(typep (logical-pathname "MYLIB:SRC;UTILS.LISP") 'logical-pathname)
=> T

(typep #P"/tmp/test.lisp" 'logical-pathname)
=> NIL
```

### Logical pathnames satisfy pathnamep

Since logical-pathname is a subclass of pathname, logical pathnames also satisfy `pathnamep`.

```lisp
(setf (logical-pathname-translations "TESTH")
      '(("**;*.*.*" "/tmp/**/*.*")))

(let ((lp (logical-pathname "TESTH:DATA;FILE.TXT")))
  (values (pathnamep lp)
          (typep lp 'logical-pathname)))
=> T
=> T
```
