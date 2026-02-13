---
title: "pathname-match-p"
---

# pathname-match-p

import PathnameMatchPFunction from './_pathname-match-p_function.md';

<PathnameMatchPFunction />

## Expanded Reference: pathname-match-p

### Basic wildcard matching

`pathname-match-p` tests whether a pathname matches a wildcard pathname pattern. It returns true if the pathname matches.

```lisp
(pathname-match-p #P"/tmp/test.lisp"
                  (make-pathname :directory '(:absolute "tmp")
                                 :name :wild
                                 :type "lisp"))
→ T
```

### Matching with :wild name

The `:wild` component in a pattern matches any single name.

```lisp
(pathname-match-p (make-pathname :name "foo" :type "lisp")
                  (make-pathname :name :wild :type "lisp"))
→ T

(pathname-match-p (make-pathname :name "foo" :type "txt")
                  (make-pathname :name :wild :type "lisp"))
→ NIL
```

### Matching with :wild-inferiors

The `:wild-inferiors` directory component matches any number of directory levels.

```lisp
(pathname-match-p
  (make-pathname :directory '(:absolute "home" "user" "src")
                 :name "main" :type "lisp")
  (make-pathname :directory '(:absolute :wild-inferiors)
                 :name :wild :type "lisp"))
→ T
```

### Non-matching pathnames

When the pathname does not match the pattern, nil is returned.

```lisp
(pathname-match-p (make-pathname :name "data" :type "csv")
                  (make-pathname :name "data" :type "txt"))
→ NIL
```
