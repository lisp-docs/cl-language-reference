---
title: "print-escape"
---

# \*print-escape\*

import PrintEscapeVariable from './_print-escape_variable.md';

<PrintEscapeVariable />

## Expanded Reference: \*print-escape\*

### Default Behavior (true)

When `*print-escape*` is true (the default), objects are printed with escape characters so they can be read back by `read`.

```lisp
(let ((*print-escape* t))
  (write-to-string "hello"))
=> "\"hello\""

(let ((*print-escape* t))
  (write-to-string #\Space))
=> "#\\ "

(let ((*print-escape* t))
  (write-to-string 'foo))
=> "FOO"
```

### When Set to NIL

When `*print-escape*` is false, escape characters and package prefixes are omitted. Output looks "nice" but may not be readable by `read`.

```lisp
(let ((*print-escape* nil))
  (write-to-string "hello"))
=> "hello"

(let ((*print-escape* nil))
  (write-to-string #\Space))
=> " "
```

### Relationship to prin1 and princ

`prin1` binds `*print-escape*` to true; `princ` binds it to false. This is the key difference between the two functions.

```lisp
;; prin1 uses escape characters
(prin1-to-string "She said \"hi\"")
=> "\"She said \\\"hi\\\"\""

;; princ suppresses escape characters
(princ-to-string "She said \"hi\"")
=> "She said \"hi\""
```

### Effect on Symbols with Special Characters

```lisp
(let ((*print-escape* t))
  (write-to-string '|hello world|))
=> "|hello world|"

(let ((*print-escape* nil))
  (write-to-string '|hello world|))
=> "hello world"
```
