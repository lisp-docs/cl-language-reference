---
title: "get-properties"
---

# get-properties

import GetPropertiesFunction from './_get-properties_function.md';

<GetPropertiesFunction />

## Expanded Reference: get-properties

### Basic usage

`get-properties` searches a property list for the first indicator that appears in the given indicator list. It returns three values: the indicator found, its value, and the tail of the plist starting at that indicator.

```lisp
(get-properties '(:name "Alice" :age 30 :email "a@b.com")
                '(:age :email))
=> :AGE
=> 30
=> (:AGE 30 :EMAIL "a@b.com")
```

### When no indicator matches

When none of the indicators are found, all three return values are NIL.

```lisp
(get-properties '(:x 1 :y 2) '(:a :b :c))
=> NIL
=> NIL
=> NIL
```

### Searching for the first of several properties

`get-properties` finds the first property in the plist that matches any indicator in the list. This is useful for checking which of several alternatives is present.

```lisp
(get-properties '(:width 100 :height 200 :color red)
                '(:color :width))
=> :WIDTH
=> 100
=> (:WIDTH 100 :HEIGHT 200 :COLOR RED)
```

### Distinguishing absent properties from NIL values

Unlike `getf`, `get-properties` can distinguish a missing property from one with a NIL value by checking the tail.

```lisp
;; Property exists with NIL value
(multiple-value-bind (indicator value tail)
    (get-properties '(:debug nil :verbose t) '(:debug))
  (values (not (null tail)) value))
=> T
=> NIL

;; Property does not exist
(multiple-value-bind (indicator value tail)
    (get-properties '(:verbose t) '(:debug))
  (values (not (null tail)) value))
=> NIL
=> NIL
```

### Iterating through multiple properties

The tail return value allows progressive searching through a property list.

```lisp
(let ((plist '(:a 1 :b 2 :a 3 :c 4)))
  (multiple-value-bind (ind val tail)
      (get-properties plist '(:a))
    (format nil "First :A is ~A, remaining plist: ~S" val (cddr tail))))
=> "First :A is 1, remaining plist: (:B 2 :A 3 :C 4)"
```
