---
title: "typecase, ctypecase, etypecase"
---

# typecase, ctypecase, etypecase

import TypecaseMacro from './_typecase_ctypecase_etypecase_macro.md';

<TypecaseMacro />

## Expanded Reference: typecase, ctypecase, etypecase

### typecase

The `typecase` macro evaluates a keyform and then selects a clause based on the type of the resulting value.

```lisp
(defun describe-thing (thing)
  (typecase thing
    (string (format nil "The string is ~S." thing))
    (integer (format nil "The integer is ~D." thing))
    (list (format nil "The list is ~S." thing))
    (t (format nil "It's a ~A." (type-of thing)))))

(describe-thing "hello")
; => "The string is \"hello\"."

(describe-thing 42)
; => "The integer is 42."

(describe-thing '(1 2 3))
; => "The list is (1 2 3)."

(describe-thing #\A)
; => "It's a CHARACTER."
```

### No matching clause

If no clause matches and there is no `t` or `otherwise` clause, `typecase` returns `NIL`.

```lisp
(typecase 123
  (string "It's a string.")
  (list "It's a list."))
; => NIL
```

### ctypecase

`ctypecase` is similar to `typecase`, but it signals a correctable `type-error` if no clause is selected.

```lisp
(defun process-numeric (num)
  (ctypecase num
    (integer (format nil "Processing integer: ~D" num))
    (float (format nil "Processing float: ~F" num))))

(process-numeric 10)
; => "Processing integer: 10"

(process-numeric 3.14)
; => "Processing float: 3.14"
```

### `ctypecase` with no matching clause

When no type matches, a correctable error is signaled. An interactive debugger would typically offer a `store-value` restart to provide a new value.

```lisp
(handler-case (ctypecase "a string"
                (integer "an integer")
                (float "a float"))
  (type-error (c)
    (format t "Correctable error signaled: ~A" c)
    t))
; >> Correctable error signaled: "a string" is not of type (OR INTEGER FLOAT).
; => T
```

### etypecase

`etypecase` is like `typecase`, but it signals a non-correctable `type-error` if no clause is selected.

```lisp
(defun classify-pet (pet)
  (etypecase pet
    ((member :dog :cat) "It's a mammal.")
    ((member :lizard :snake) "It's a reptile.")))

(classify-pet :dog)
; => "It's a mammal."

(classify-pet :snake)
; => "It's a reptile."
```

### `etypecase` with no matching clause

When no type matches, a non-correctable error is signaled.

```lisp
(handler-case (etypecase :bird
                ((member :dog :cat) "mammal")
                ((member :lizard :snake) "reptile"))
  (type-error (c)
    (format t "Error signaled: ~A" c)
    t))
; >> Error signaled: :BIRD is not of type (OR (MEMBER :DOG :CAT) (MEMBER :LIZARD :SNAKE)).
; => T
```
