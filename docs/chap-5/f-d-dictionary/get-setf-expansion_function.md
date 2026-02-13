---
title: "get-setf-expansion"
---

# get-setf-expansion

import GetSetfExpansionFunction from './_get-setf-expansion_function.md';

<GetSetfExpansionFunction />

## Expanded Reference: get-setf-expansion

### Examining the Five Values

`get-setf-expansion` returns five values that describe how to read and write a given place: temporary variables, value forms, store variables, the storing form, and the accessing form.

```lisp
;; Expand a simple variable place
(get-setf-expansion 'x)
; → NIL, NIL, (#:NEW-0), (SETQ X #:NEW-0), X
;; (Five values: no temps needed, one store var, setq to store, x to access)
```

### Expansion for an Accessor

For accessor forms like `(car lst)`, the expansion includes temporary bindings to avoid multiple evaluation.

```lisp
(multiple-value-bind (temps vals stores store-form access-form)
    (get-setf-expansion '(car my-list))
  (list :temps temps
        :vals vals
        :stores stores
        :store-form store-form
        :access-form access-form))
; → (:TEMPS (#:G0) :VALS (MY-LIST) :STORES (#:G1)
;    :STORE-FORM (SB-KERNEL:%RPLACA #:G0 #:G1) :ACCESS-FORM (CAR #:G0))
;    (implementation-dependent details)
```

### Using the Expansion in a Macro

The five values from `get-setf-expansion` are used when writing macros that need to properly read-modify-write a place.

```lisp
;; A macro that increments a place and returns the old value (like post-increment)
(defmacro post-incf (place &environment env)
  (multiple-value-bind (temps vals stores store-form access-form)
      (get-setf-expansion place env)
    (let ((old (gensym "OLD")))
      `(let* (,@(mapcar #'list temps vals)
              (,old ,access-form)
              (,(car stores) (1+ ,old)))
         ,store-form
         ,old))))

(let ((x 5))
  (values (post-incf x) x))
; → 5, 6
```

### Expansion for Nested Places

`get-setf-expansion` handles arbitrarily nested setf-able places.

```lisp
(multiple-value-bind (temps vals stores store-form access-form)
    (get-setf-expansion '(aref vec (+ i 1)))
  (list :num-temps (length temps)
        :num-vals (length vals)
        :stores stores))
; → (:NUM-TEMPS 2 :NUM-VALS 2 :STORES (#:NEW))  (implementation-dependent)
```
