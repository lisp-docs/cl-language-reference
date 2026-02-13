---
title: "remf"
---

# remf

import RemfMacro from './_remf_macro.md';

<RemfMacro />

## Expanded Reference: remf

### Basic usage

`remf` destructively removes a property from a property list stored in a place. It returns true if the property was found and removed, or false otherwise.

```lisp
(let ((plist (list :a 1 :b 2 :c 3)))
  (values (remf plist :b) plist))
; → T, (:A 1 :C 3)
```

### Removing a non-existent property

When the indicator is not present, `remf` returns NIL and the plist is unchanged.

```lisp
(let ((plist (list :x 10 :y 20)))
  (values (remf plist :z) plist))
; → NIL, (:X 10 :Y 20)
```

### Successive removals

`remf` can be called multiple times to remove different properties.

```lisp
(let ((plist (list :name "Alice" :age 30 :email "a@b.com")))
  (remf plist :age)
  (remf plist :email)
  plist)
; → (:NAME "Alice")
```

### Only the first occurrence is removed

When duplicate indicators exist, only the first one is removed.

```lisp
(let ((plist (list :a 1 :b 2 :a 3)))
  (remf plist :a)
  plist)
; → (:B 2 :A 3)
```

### Using with setf and getf

`remf` pairs naturally with `getf` and `setf` of `getf` for managing property lists.

```lisp
(let ((plist '()))
  (setf (getf plist :color) 'red)
  (setf (getf plist :size) 'large)
  (setf (getf plist :weight) 10)
  (remf plist :size)
  plist)
; → (:WEIGHT 10 :COLOR RED)
```
