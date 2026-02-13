---
title: "defgeneric"
---

# defgeneric

import DefgenericMacro from './_defgeneric_macro.md';

<DefgenericMacro />

## Expanded Reference: defgeneric

### Basic Generic Function Definition

`defgeneric` explicitly declares a generic function and its lambda list. Methods are then added with `defmethod`. While `defmethod` can implicitly create a generic function, `defgeneric` lets you control documentation, method combination, and other options.

```lisp
(defgeneric greet (person)
  (:documentation "Return a greeting string for PERSON."))

(defmethod greet ((p string))
  (format nil "Hello, ~A!" p))

(greet "World")
;; => "Hello, World!"
```

### Inline Method Definitions

Methods can be defined directly within the `defgeneric` form using `:method`. These are equivalent to separate `defmethod` forms.

```lisp
(defgeneric area (shape)
  (:documentation "Compute the area of SHAPE.")
  (:method ((shape (eql :unit-square))) 1)
  (:method ((shape (eql :unit-circle))) (coerce pi 'single-float)))

(area :unit-square) ;; => 1
(area :unit-circle) ;; => 3.1415927
```

### Method Combination

The `:method-combination` option selects how methods are combined. Built-in types include `+`, `list`, `progn`, `and`, `or`, `min`, `max`, `append`, and `nconc`.

```lisp
(defgeneric priority (item)
  (:method-combination +))

(defclass base-item () ())
(defclass important-item (base-item) ())
(defclass urgent-item (important-item) ())

(defmethod priority + ((item base-item)) 1)
(defmethod priority + ((item important-item)) 5)
(defmethod priority + ((item urgent-item)) 10)

;; Methods are combined with +, so all applicable methods contribute
(priority (make-instance 'urgent-item))
;; => 16
```

### Argument Precedence Order

The `:argument-precedence-order` option controls which arguments are considered first when selecting methods. By default, leftmost arguments have highest precedence.

```lisp
(defgeneric render (format object)
  (:argument-precedence-order object format)
  (:documentation "Render OBJECT in the given FORMAT."))

(defmethod render ((format (eql :text)) (object string))
  (format nil "TEXT: ~A" object))

(defmethod render ((format (eql :html)) (object string))
  (format nil "<p>~A</p>" object))

(render :html "hello") ;; => "<p>hello</p>"
(render :text "hello") ;; => "TEXT: hello"
```

### Declaring a Generic Function with Keywords

The generic function lambda list establishes the contract for all methods. It can include `&optional`, `&rest`, and `&key` parameters.

```lisp
(defgeneric describe-thing (thing &key verbose)
  (:documentation "Describe THING, optionally in VERBOSE mode."))

(defmethod describe-thing ((thing string) &key verbose)
  (if verbose
      (format nil "String ~S of length ~D" thing (length thing))
      (format nil "~S" thing)))

(describe-thing "hi")              ;; => "\"hi\""
(describe-thing "hi" :verbose t)   ;; => "String \"hi\" of length 2"
```
