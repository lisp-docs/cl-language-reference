---
title: "readtable-case"
---

# readtable-case

import ReadtableCaseAccessor from './_readtable-case_accessor.md';

<ReadtableCaseAccessor />

## Expanded Reference: readtable-case

### Querying the current readtable case

`readtable-case` returns the case sensitivity mode of a readtable. The standard readtable uses `:upcase`, which converts unescaped lowercase letters to uppercase during reading.

```lisp
(readtable-case *readtable*)
; => :UPCASE
```

### The four readtable case modes

The valid modes are `:upcase`, `:downcase`, `:preserve`, and `:invert`.

```lisp
;; :UPCASE (default) - unescaped letters are uppercased
(let ((*readtable* (copy-readtable)))
  (setf (readtable-case *readtable*) :upcase)
  (read-from-string "hello"))
; => HELLO
; => 5

;; :DOWNCASE - unescaped letters are lowercased
(let ((*readtable* (copy-readtable)))
  (setf (readtable-case *readtable*) :downcase)
  (read-from-string "HELLO"))
; => |hello|   ; the symbol name is "hello"
; => 5

;; :PRESERVE - letters are not changed
(let ((*readtable* (copy-readtable)))
  (setf (readtable-case *readtable*) :preserve)
  (symbol-name (read-from-string "Hello")))
; => "Hello"

;; :INVERT - if all unescaped letters in a token have the same case,
;;           that case is inverted; mixed case is preserved
(let ((*readtable* (copy-readtable)))
  (setf (readtable-case *readtable*) :invert)
  (list (symbol-name (read-from-string "hello"))
        (symbol-name (read-from-string "HELLO"))
        (symbol-name (read-from-string "Hello"))))
; => ("HELLO" "hello" "Hello")
```

### Setting readtable case with SETF

`readtable-case` is a `setf`-able accessor.

```lisp
(let ((*readtable* (copy-readtable)))
  (setf (readtable-case *readtable*) :preserve)
  (readtable-case *readtable*))
; => :PRESERVE
```

### Readtable case affects symbol printing too

The readtable case influences how the printer writes symbols, ensuring round-trip consistency.

```lisp
(let ((*readtable* (copy-readtable)))
  (setf (readtable-case *readtable*) :invert)
  ;; Standard symbols (all uppercase internally) print as lowercase
  (format nil "~A" 'hello))
; => "hello"
```
