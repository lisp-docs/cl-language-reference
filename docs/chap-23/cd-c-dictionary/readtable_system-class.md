---
title: "readtable"
---

# readtable

import ReadtableSystemClass from './_readtable_system-class.md';

<ReadtableSystemClass />

## Expanded Reference: readtable

### The readtable system class

A readtable is an object that maps characters to syntax types for the Lisp reader. It also stores associations between macro characters and their reader macro functions, and records the case conversion mode for symbol reading.

```lisp
;; *readtable* always holds a readtable object
(typep *readtable* 'readtable)
=> T

;; copy-readtable produces new readtable objects
(typep (copy-readtable) 'readtable)
=> T
```

### Class precedence list

The class precedence list for `readtable` is: `readtable`, `t`.

```lisp
(subtypep 'readtable t)
=> T
=> T
```

### Readtables are not printed readably

Readtable objects have no standard printed representation that can be read back in. They print in an implementation-defined format.

```lisp
;; The printed representation is implementation-dependent, typically something like:
;; #<READTABLE ...>
(readtablep (copy-readtable))
=> T
```

### Key operations on readtables

The primary operations for working with readtables are `copy-readtable`, `readtable-case`, `set-macro-character`, `get-macro-character`, `set-dispatch-macro-character`, `get-dispatch-macro-character`, `make-dispatch-macro-character`, and `set-syntax-from-char`.

```lisp
(let ((rt (copy-readtable)))
  (list (readtable-case rt)
        (null (get-macro-character #\( rt))
        (null (get-macro-character #\a rt))))
=> (:UPCASE NIL T)
;; ( is a macro character, a is not
```
