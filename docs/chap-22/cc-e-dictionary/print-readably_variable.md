---
title: "print-readably"
---

# \*print-readably\*

import PrintReadablyVariable from './_print-readably_variable.md';

<PrintReadablyVariable />

## Expanded Reference: \*print-readably\*

### Default Behavior (false)

When `*print-readably*` is false, objects are printed normally according to other printer control variables.

```lisp
(let ((*print-readably* nil)
      (*print-length* 3))
  (write-to-string '(a b c d e)))
=> "(A B C ...)"
```

### When Set to True

When `*print-readably*` is true, the printer ensures that output can be read back to produce a similar object. It overrides `*print-escape*`, `*print-array*`, `*print-gensym*` to true, and `*print-length*`, `*print-level*`, `*print-lines*` to nil.

```lisp
(let ((*print-readably* t)
      (*print-length* 2))     ; would normally truncate
  (write-to-string '(a b c d e)))
=> "(A B C D E)"
```

### Signals Error for Unprintable Objects

When `*print-readably*` is true and an object cannot be printed readably, a `print-not-readable` error is signaled.

```lisp
(handler-case
    (let ((*print-readably* t))
      (write-to-string *standard-output*))
  (print-not-readable ()
    "Cannot print readably"))
=> "Cannot print readably"
```

### Preserving Gensym and Array Content

```lisp
;; Without *print-readably*, gensyms may lose identity
(let ((*print-readably* nil)
      (*print-gensym* nil))
  (write-to-string (gensym "FOO")))
;; => "FOO1"  ; gensym counter is nondeterministic

;; With *print-readably*, gensym prefix is always printed
(let ((*print-readably* t))
  (let ((s (write-to-string (gensym "FOO"))))
    (char= (char s 0) #\#)))
=> T
```
