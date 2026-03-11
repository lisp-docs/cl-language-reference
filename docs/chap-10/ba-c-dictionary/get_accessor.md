---
title: "get"
---

# get

import GetAccessor from './_get_accessor.md';

<GetAccessor />

## Expanded Reference: get

### Basic property access

`get` retrieves a property value from a symbol's property list, identified by an indicator tested with `eq`.

```lisp
(let ((sym (make-symbol "PERSON")))
  (setf (get sym 'name) "Alice")
  (setf (get sym 'age) 30)
  (values (get sym 'name)
          (get sym 'age)))
=> "Alice"
=> 30
```

### Default value for missing properties

When a property is not found, `get` returns `nil` by default, or an optional default value.

```lisp
(let ((sym (make-symbol "ITEM")))
  (setf (get sym 'color) 'blue)
  (values (get sym 'color)
          (get sym 'weight)
          (get sym 'weight 'unknown)))
=> BLUE
=> NIL
=> UNKNOWN
```

### Setting properties with setf

`(setf (get ...) value)` creates a new property or updates an existing one.

```lisp
(let ((sym (make-symbol "CONFIG")))
  (setf (get sym 'debug) nil)
  (setf (get sym 'verbose) t)
  (get sym 'debug))
=> NIL
```

### Using symbols as simple data records

Property lists on gensyms can serve as lightweight record-like structures.

```lisp
(defun make-point (x y)
  (let ((pt (gensym "POINT")))
    (setf (get pt 'x) x)
    (setf (get pt 'y) y)
    pt))

(defun point-distance (p1 p2)
  (let ((dx (- (get p1 'x) (get p2 'x)))
        (dy (- (get p1 'y) (get p2 'y))))
    (sqrt (+ (* dx dx) (* dy dy)))))

(let ((a (make-point 0 0))
      (b (make-point 3 4)))
  (point-distance a b))
=> 5.0
```

### Indicators are compared with eq

Because `get` uses `eq` for comparison, symbols should be used as indicators rather than numbers or strings.

```lisp
(let ((sym (make-symbol "TEST")))
  (setf (get sym 'status) 'active)
  (values (get sym 'status)
          (get sym 'STATUS)))
=> ACTIVE
=> ACTIVE
```

### Equivalence with getf on symbol-plist

`(get symbol indicator)` is equivalent to `(getf (symbol-plist symbol) indicator)`.

```lisp
(let ((sym (make-symbol "EQ-TEST")))
  (setf (get sym 'key) 'value)
  (eq (get sym 'key)
      (getf (symbol-plist sym) 'key)))
=> T
```
