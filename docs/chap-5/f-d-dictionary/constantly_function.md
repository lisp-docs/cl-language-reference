---
title: "constantly"
---

# constantly

import ConstantlyFunction from './_constantly_function.md';

<ConstantlyFunction />

## Expanded Reference: constantly

### Basic usage

`constantly` returns a function that always returns the given value, regardless of what arguments it receives.

```lisp
(funcall (constantly 42)) → 42
(funcall (constantly 42) 'a 'b 'c) → 42
(funcall (constantly nil) 1 2 3) → NIL
```

### Using constantly with mapcar

`constantly` is useful when you need to generate a sequence of the same value.

```lisp
(mapcar (constantly 0) '(a b c d e))
→ (0 0 0 0 0)

(mapcar (constantly :default) '(1 2 3))
→ (:DEFAULT :DEFAULT :DEFAULT)
```

### As a callback that ignores its arguments

When an API requires a function argument but you want to return a fixed value, `constantly` is the right tool.

```lisp
;; Replace every element in a tree with the same value
(subst-if :replaced (constantly t) '(a (b c) (d (e f))))
→ :REPLACED

;; Use with maphash to collect all keys
(let ((ht (make-hash-table)))
  (setf (gethash 'a ht) 1)
  (setf (gethash 'b ht) 2)
  (maphash (constantly nil) ht)) → NIL
```

### Building default value functions

`constantly` can provide default values in functional interfaces.

```lisp
(let ((get-default (constantly "N/A")))
  (mapcar (lambda (x)
            (if (numberp x) x (funcall get-default)))
          '(1 :missing 3 :missing 5)))
→ (1 "N/A" 3 "N/A" 5)
```
