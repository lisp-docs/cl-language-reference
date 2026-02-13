---
title: "make-pathname"
---

# make-pathname

import MakePathnameFunction from './_make-pathname_function.md';

<MakePathnameFunction />

## Expanded Reference: make-pathname

### Constructing a pathname from components

`make-pathname` creates a pathname object from individually specified components such as directory, name, and type.

```lisp
(make-pathname :directory '(:absolute "usr" "local")
               :name "config"
               :type "lisp")
→ #P"/usr/local/config.lisp"
```

### Building a relative pathname

Use `:relative` as the first element of the directory list to construct a relative pathname.

```lisp
(make-pathname :directory '(:relative "src")
               :name "main"
               :type "lisp")
→ #P"src/main.lisp"
```

### Name and type only

If only name and type are supplied, the resulting pathname has no directory component.

```lisp
(make-pathname :name "data" :type "csv")
→ #P"data.csv"

(pathname-directory (make-pathname :name "data" :type "csv"))
→ NIL
```

### Using defaults to fill in missing components

The `:defaults` keyword provides fallback values for components not explicitly supplied.

```lisp
(make-pathname :name "output"
               :defaults #P"/home/user/input.txt")
→ #P"/home/user/output.txt"
```

### Directory with wild components

Wildcard components can be used in directory specifications.

```lisp
(make-pathname :directory '(:absolute "usr" :wild)
               :name :wild
               :type "lisp")
→ #P"/usr/*//*.lisp"  ; exact format is implementation-dependent

(wild-pathname-p (make-pathname :name :wild))
→ T
```
