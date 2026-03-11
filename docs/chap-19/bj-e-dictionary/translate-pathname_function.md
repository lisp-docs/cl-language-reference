---
title: "translate-pathname"
---

# translate-pathname

import TranslatePathnameFunction from './_translate-pathname_function.md';

<TranslatePathnameFunction />

## Expanded Reference: translate-pathname

### Basic wildcard translation

`translate-pathname` translates a source pathname that matches a from-wildcard pattern into a pathname matching a to-wildcard pattern. The wild portions are substituted accordingly.

```lisp
(namestring
  (translate-pathname "/usr/me/init.lisp"
                      "/usr/me/*.lisp"
                      "/usr/me/backup/*.bak"))
=> "/usr/me/backup/init.bak"
```

### Translating name components

The matched wildcard portions of the source replace the wildcard portions in the target pattern.

```lisp
(pathname-name (translate-pathname "foobar" "foo*" "*baz"))
=> "barbaz"

(pathname-name (translate-pathname "bar" "*" "foo*"))
=> "foobar"
```

### Using translate-pathname for file migration

A common use case is moving files between directory structures while preserving names.

```lisp
(namestring
  (translate-pathname "/home/user/src/main.lisp"
                      "/home/user/src/*.lisp"
                      "/home/user/backup/*.lisp"))
=> "/home/user/backup/main.lisp"
```

### Source must match from-wildcard

The source pathname must match the from-wildcard (as determined by `pathname-match-p`), otherwise an error is signaled.

```lisp
(pathname-match-p "/usr/me/test.lisp" "/usr/me/*.lisp")
=> T

;; This succeeds because source matches from-wildcard:
(translate-pathname "/usr/me/test.lisp"
                    "/usr/me/*.lisp"
                    "/usr/you/*.lisp")
=> #P"/usr/you/test.lisp"
```
