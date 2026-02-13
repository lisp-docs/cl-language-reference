---
title: "parse-namestring"
---

# parse-namestring

import ParseNamestringFunction from './_parse-namestring_function.md';

<ParseNamestringFunction />

## Expanded Reference: parse-namestring

### Basic string to pathname conversion

`parse-namestring` converts a string into a pathname object. It returns two values: the pathname and the position in the string where parsing ended.

```lisp
(parse-namestring "foo.lisp")
→ #P"foo.lisp"
→ 8
```

### Parsing a full path

A complete file path string is parsed into its component parts.

```lisp
(let ((p (parse-namestring "/home/user/data.txt")))
  (values (pathname-directory p)
          (pathname-name p)
          (pathname-type p)))
→ (:ABSOLUTE "home" "user")
→ "data"
→ "txt"
```

### Parsing a substring with :start and :end

The `:start` and `:end` keyword arguments restrict parsing to a portion of the string.

```lisp
(parse-namestring "xxxfoo.lispyyy" nil nil :start 3 :end 11)
→ #P"foo.lisp"
→ 11
```

### A pathname argument is returned as-is

If the first argument is already a pathname, it is returned unchanged along with the start position.

```lisp
(parse-namestring #P"/tmp/test.txt")
→ #P"/tmp/test.txt"
→ 0
```

### Parsing an empty string

Parsing an empty string succeeds and produces a pathname with all components (except host) equal to nil.

```lisp
(let ((p (parse-namestring "")))
  (values (pathname-name p)
          (pathname-type p)))
→ NIL
→ NIL
```
