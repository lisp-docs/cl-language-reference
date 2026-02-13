---
title: "getf"
---

# getf

import GetfAccessor from './_getf_accessor.md';

<GetfAccessor />

## Expanded Reference: getf

### Basic property list lookup

`getf` searches a property list for an indicator (compared with `eq`) and returns the associated value. Returns NIL if not found.

```lisp
(getf '(:name "Alice" :age 30) :name)
; → "Alice"

(getf '(:name "Alice" :age 30) :age)
; → 30

(getf '(:name "Alice" :age 30) :email)
; → NIL
```

### Providing a default value

A default value can be supplied and is returned when the indicator is not found.

```lisp
(getf '(:x 1 :y 2) :z 0)
; → 0

(getf '(:x 1 :y 2) :x 0)
; → 1
```

### Using setf with getf

`setf` of `getf` sets or adds a property on a property list stored in a place.

```lisp
(let ((plist '()))
  (setf (getf plist :color) 'red)
  (setf (getf plist :size) 'large)
  plist)
; → (:SIZE LARGE :COLOR RED)
```

### Updating an existing property

When the indicator already exists, `setf` of `getf` updates the value.

```lisp
(let ((plist (list :x 1 :y 2)))
  (setf (getf plist :x) 99)
  plist)
; → (:X 99 :Y 2)
```

### Using getf with incf

`getf` works as a place with macros like `incf` and `push`. A default value is useful for the initial read.

```lisp
(let ((plist '()))
  (incf (getf plist :count 0))
  (incf (getf plist :count 0))
  (incf (getf plist :count 0))
  plist)
; → (:COUNT 3)
```

### First match wins

When a property list has duplicate indicators, `getf` returns the value associated with the first one.

```lisp
(getf '(:a 1 :b 2 :a 3) :a)
; → 1
```
