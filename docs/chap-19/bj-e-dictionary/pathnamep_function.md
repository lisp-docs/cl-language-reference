---
title: "pathnamep"
---

# pathnamep

import PathnamepFunction from './_pathnamep_function.md';

<PathnamepFunction />

## Expanded Reference: pathnamep

### Testing for pathname objects

`pathnamep` returns true if its argument is a pathname, and false otherwise.

```lisp
(pathnamep #P"/tmp/test.lisp")
→ T

(pathnamep "just-a-string")
→ NIL
```

### Strings are not pathnames

Even though strings can designate pathnames in many contexts, they are not themselves pathname objects.

```lisp
(pathnamep "/usr/local/bin")
→ NIL

(pathnamep (pathname "/usr/local/bin"))
→ T
```

### Logical pathnames are also pathnames

Since `logical-pathname` is a subtype of `pathname`, logical pathnames satisfy `pathnamep`.

```lisp
(setf (logical-pathname-translations "MYHOST")
      '(("**;*.*.*" "/tmp/**/*.*")))

(pathnamep (logical-pathname "MYHOST:CODE;UTILS.LISP"))
→ T
```

### Equivalent to typep

`pathnamep` is equivalent to `(typep object 'pathname)`.

```lisp
(let ((p (make-pathname :name "test")))
  (values (pathnamep p)
          (typep p 'pathname)))
→ T
→ T
```
