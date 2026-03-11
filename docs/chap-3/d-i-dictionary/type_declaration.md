---
title: "type"
---

# type

import TypeDeclaration from './_type_declaration.md';

<TypeDeclaration />

## Expanded Reference: type

### Declaring Variable Types

The `type` declaration specifies the type of values a variable will hold. This can help the compiler generate more efficient code.

```lisp
(let ((x 10)
      (name "Alice"))
  (declare (type integer x)
           (type string name))
  (format nil "~A is ~D years old" name x))
=> "Alice is 10 years old"
```

### Shorthand Type Declarations

Instead of `(type fixnum x)`, you can write `(fixnum x)` as a shorthand when the type name is a symbol.

```lisp
(let ((count 0))
  (declare (fixnum count))
  (dotimes (i 10)
    (incf count i))
  count)
=> 45
```

### Type Declarations in defun

```lisp
(defun safe-divide (a b)
  (declare (type number a b))
  (if (zerop b)
      (error "Division by zero")
      (/ a b)))
=> SAFE-DIVIDE

(safe-divide 10 3)
=> 10/3
```

### Compound Type Specifiers

```lisp
(let ((items '(1 2 3)))
  (declare (type list items))
  (length items))
=> 3
```
