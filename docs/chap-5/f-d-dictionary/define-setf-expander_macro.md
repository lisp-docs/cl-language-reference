---
title: "define-setf-expander"
---

# define-setf-expander

import DefineSetfExpanderMacro from './_define-setf-expander_macro.md';

<DefineSetfExpanderMacro />

## Expanded Reference: define-setf-expander

### Custom setf Expander for a Clamped Value

`define-setf-expander` gives full control over how `setf` expands for a given accessor. The body must return five values via `get-setf-expansion` protocol: temporary variables, value forms, store variables, the storing form, and the accessing form.

```lisp
;; Accessor: (clamped-ref vector index min max)
;; setf stores the value clamped to [min, max]
(defun clamped-ref (vector index min max)
  (let ((val (aref vector index)))
    (max min (min max val))))

(define-setf-expander clamped-ref (vector index min max &environment env)
  (multiple-value-bind (temps vals stores store-form access-form)
      (get-setf-expansion vector env)
    (declare (ignore stores store-form access-form))
    (let ((v-vec (gensym "VEC"))
          (v-idx (gensym "IDX"))
          (v-min (gensym "MIN"))
          (v-max (gensym "MAX"))
          (v-store (gensym "STORE")))
      (values (list* v-vec v-idx v-min v-max temps)
              (list* vector index min max vals)
              (list v-store)
              `(setf (aref ,v-vec ,v-idx)
                     (max ,v-min (min ,v-max ,v-store)))
              `(clamped-ref ,v-vec ,v-idx ,v-min ,v-max)))))

(let ((v (vector 0 0 0)))
  (setf (clamped-ref v 1 0 10) 25)
  v)
; → #(0 10 0)  (value was clamped to max of 10)
```

### setf Expander for a Computed Place

Here is a simpler example that makes `(middle lst)` a setf-able place targeting the middle element of a list.

```lisp
(defun middle (lst)
  (nth (floor (length lst) 2) lst))

(define-setf-expander middle (lst &environment env)
  (multiple-value-bind (temps vals stores store-form access-form)
      (get-setf-expansion lst env)
    (declare (ignore stores store-form access-form))
    (let ((v-lst (gensym "LST"))
          (v-store (gensym "STORE")))
      (values (list* v-lst temps)
              (list* lst vals)
              (list v-store)
              `(setf (nth (floor (length ,v-lst) 2) ,v-lst) ,v-store)
              `(middle ,v-lst)))))

(let ((data (list 1 2 3 4 5)))
  (setf (middle data) 99)
  data)
; → (1 2 99 4 5)
```
