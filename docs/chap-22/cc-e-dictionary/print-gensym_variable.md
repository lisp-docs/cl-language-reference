---
title: "print-gensym"
---

# \*print-gensym\*

import PrintGensymVariable from './_print-gensym_variable.md';

<PrintGensymVariable />

## Expanded Reference: \*print-gensym\*

### Default Behavior (true)

When `*print-gensym*` is true, uninterned symbols are printed with the `#:` prefix to distinguish them from interned symbols.

```lisp
(let ((*print-gensym* t))
  (write-to-string (make-symbol "FOO")))
=> "#:FOO"

(let ((*print-gensym* t))
  (write-to-string (gensym)))
;; => "#:G123"
```

### When Set to NIL

When `*print-gensym*` is false, uninterned symbols are printed without the `#:` prefix, making them look like interned symbols.

```lisp
(let ((*print-gensym* nil))
  (write-to-string (make-symbol "FOO")))
=> "FOO"
```

### Impact on Readability

Without the `#:` prefix, reading the output back would produce an interned symbol rather than an uninterned one, losing the original identity.

```lisp
(let* ((sym (gensym "TEMP"))
       (with-prefix    (let ((*print-gensym* t))
                         (write-to-string sym)))
       (without-prefix (let ((*print-gensym* nil))
                         (write-to-string sym))))
  (list with-prefix without-prefix))
;; => ("#:TEMP1" "TEMP1")
```

### print Uses Current Value

`print` (and `prin1`) respect the current binding of `*print-gensym*`.

```lisp
(let ((*print-gensym* nil))
  (prin1-to-string (gensym "X")))
;; => "X1"
```
