---
title: "default-pathname-defaults"
---

# \*default-pathname-defaults\*

import DefaultPathnameDefaultsVariable from './_default-pathname-defaults_variable.md';

<DefaultPathnameDefaultsVariable />

## Expanded Reference: \*default-pathname-defaults\*

### Inspecting the default pathname

`*default-pathname-defaults*` holds a pathname used as the default whenever a function needs a default pathname and one is not explicitly supplied. Its initial value is implementation-dependent, typically the working directory.

```lisp
(pathnamep *default-pathname-defaults*)
=> T

;; The value is implementation-dependent, e.g.:
*default-pathname-defaults*
;; => #P"/home/user/"  ; typical on Unix
```

### Functions that use the default

Many pathname functions such as `merge-pathnames`, `parse-namestring`, and `enough-namestring` use `*default-pathname-defaults*` when no explicit default is supplied.

```lisp
;; merge-pathnames fills in from *default-pathname-defaults*
(let ((*default-pathname-defaults* #P"/home/user/projects/"))
  (merge-pathnames "report.txt"))
;; => #P"/home/user/projects/report.txt"
```

### Temporarily binding the default

You can use `let` to temporarily change the default pathname for a dynamic scope.

```lisp
(let ((*default-pathname-defaults* #P"/tmp/"))
  (namestring (merge-pathnames "output.log")))
=> "/tmp/output.log"
```

### Effect on make-pathname

`make-pathname` also uses `*default-pathname-defaults*` to fill in the host component when no host is explicitly provided.

```lisp
(let ((*default-pathname-defaults* #P"/var/data/"))
  (namestring (merge-pathnames (make-pathname :name "info" :type "txt"))))
=> "/var/data/info.txt"
```
