---
title: "remprop"
---

# remprop

import RempropFunction from './_remprop_function.md';

<RempropFunction />

## Expanded Reference: remprop

### Basic property removal

`remprop` removes a property from a symbol's property list and returns a generalized boolean indicating whether the property was found.

```lisp
(let ((sym (make-symbol "DEMO")))
  (setf (get sym 'color) 'red)
  (setf (get sym 'size) 10)
  (let ((before (get sym 'color)))
    (remprop sym 'color)
    (values before (get sym 'color))))
=> RED
=> NIL
```

### Removing a non-existent property

If the property does not exist, `remprop` returns `nil` (false) and makes no changes.

```lisp
(let ((sym (make-symbol "TEST")))
  (setf (get sym 'a) 1)
  (values (remprop sym 'b)
          (symbol-plist sym)))
=> NIL
=> (A 1)
```

### Removing properties one by one

`remprop` only removes the first matching property. Successive calls can be used to clean up a property list.

```lisp
(let ((sym (make-symbol "CLEANUP")))
  (setf (get sym 'x) 1)
  (setf (get sym 'y) 2)
  (setf (get sym 'z) 3)
  (remprop sym 'y)
  (symbol-plist sym))
;; => (Z 3 X 1)  (order may vary, Y removed)
```

### Distinguishing nil value from absent property

Setting a property to `nil` is different from removing it. `remprop` truly removes the entry.

```lisp
(let ((sym (make-symbol "NIL-TEST")))
  (setf (get sym 'flag) nil)
  (values (get sym 'flag)
          (get sym 'flag :missing)
          (progn (remprop sym 'flag)
                 (get sym 'flag :missing))))
=> NIL
=> NIL
=> :MISSING
```

### Practical cleanup of all properties

You can remove all properties from a symbol by iterating over its property list.

```lisp
(let ((sym (make-symbol "FULL")))
  (setf (get sym 'a) 1)
  (setf (get sym 'b) 2)
  (setf (get sym 'c) 3)
  (loop for (key nil) on (symbol-plist sym) by #'cddr
        do (remprop sym key))
  (symbol-plist sym))
=> NIL
```
