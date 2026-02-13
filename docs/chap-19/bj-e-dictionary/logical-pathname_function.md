---
title: "logical-pathname"
---

# logical-pathname

import LogicalPathnameFunction from './_logical-pathname_function.md';

<LogicalPathnameFunction />

## Expanded Reference: logical-pathname

### Creating a logical pathname from a namestring

The `logical-pathname` function converts a logical pathname namestring (which must include the host and colon) into a logical pathname object.

```lisp
(setf (logical-pathname-translations "APPHOST")
      '(("**;*.*.*" "/opt/app/**/*.*")))

(logical-pathname "APPHOST:CODE;MAIN.LISP")
→ #P"APPHOST:CODE;MAIN.LISP"

(typep (logical-pathname "APPHOST:CODE;MAIN.LISP") 'logical-pathname)
→ T
```

### Passing through an existing logical pathname

If the argument is already a logical pathname, it is returned as-is.

```lisp
(setf (logical-pathname-translations "LPH")
      '(("**;*.*.*" "/tmp/**/*.*")))

(let ((lp (logical-pathname "LPH:DATA;FILE.TXT")))
  (eq lp (logical-pathname lp)))
→ T
```

### Accessing components of a logical pathname

Once created, the components of a logical pathname can be examined with the standard pathname accessors.

```lisp
(setf (logical-pathname-translations "PROJ")
      '(("**;*.*.*" "/home/dev/proj/**/*.*")))

(let ((lp (logical-pathname "PROJ:SRC;UTILS.LISP.1")))
  (values (pathname-host lp)
          (pathname-directory lp)
          (pathname-name lp)
          (pathname-type lp)))
→ "PROJ"
→ (:ABSOLUTE "SRC")
→ "UTILS"
→ "LISP"
```
