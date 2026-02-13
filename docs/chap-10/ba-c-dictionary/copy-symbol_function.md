---
title: "copy-symbol"
---

# copy-symbol

import CopySymbolFunction from './_copy-symbol_function.md';

<CopySymbolFunction />

## Expanded Reference: copy-symbol

### Basic copy without properties

By default (or with `nil` as the second argument), `copy-symbol` creates an uninterned symbol with the same name but no value, function definition, or property list.

```lisp
(let* ((original 'my-sym)
       (copy (copy-symbol original)))
  (values (symbol-name copy)
          (symbol-package copy)
          (eq original copy)))
; → "MY-SYM"
;   NIL
;   NIL
```

### Copy without properties leaves symbol unbound

```lisp
(setf (symbol-value 'source) 42)
(let ((copy (copy-symbol 'source nil)))
  (values (boundp 'source)
          (boundp copy)))
; → T
;   NIL
```

### Copy with properties

When the second argument is true, the new symbol gets a copy of the original's value, function definition, and property list.

```lisp
(setf (symbol-value 'original) 100)
(setf (get 'original 'color) 'red)

(let ((copy (copy-symbol 'original t)))
  (values (symbol-value copy)
          (get copy 'color)
          (eq copy 'original)))
; → 100
;   RED
;   NIL
```

### Property lists are independent copies

Modifying the copy's property list does not affect the original.

```lisp
(setf (get 'proto 'x) 1)
(setf (get 'proto 'y) 2)

(let ((clone (copy-symbol 'proto t)))
  (setf (get clone 'x) 999)
  (values (get 'proto 'x)
          (get clone 'x)))
; → 1
;   999
```

### The copy is always uninterned

Regardless of whether the original is interned, the copy is always a fresh, uninterned symbol.

```lisp
(let ((copy (copy-symbol :some-keyword t)))
  (values (symbol-name copy)
          (symbol-package copy)
          (keywordp copy)))
; → "SOME-KEYWORD"
;   NIL
;   NIL
```

### Each copy is a distinct object

Multiple copies of the same symbol are distinct from each other.

```lisp
(let ((a (copy-symbol 'foo))
      (b (copy-symbol 'foo)))
  (values (string= (symbol-name a) (symbol-name b))
          (eq a b)))
; → T
;   NIL
```
