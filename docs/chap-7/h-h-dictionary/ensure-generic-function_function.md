---
title: "ensure-generic-function"
---

# ensure-generic-function

import EnsureGenericFunctionFunction from './_ensure-generic-function_function.md';

<EnsureGenericFunctionFunction />

## Expanded Reference: ensure-generic-function

### Creating a Generic Function Programmatically

`ensure-generic-function` is the functional equivalent of `defgeneric`. It creates a new generic function or modifies an existing one. This is useful for metaprogramming scenarios.

```lisp
(ensure-generic-function 'my-operation
  :lambda-list '(x y)
  :documentation "A dynamically created generic function.")

(defmethod my-operation ((x number) (y number))
  (+ x y))

(my-operation 3 4)
=> 7
```

### Modifying an Existing Generic Function

If the named function already exists as a generic function, `ensure-generic-function` updates its properties.

```lisp
(defgeneric flexible-op (x))

;; Update documentation
(ensure-generic-function 'flexible-op
  :lambda-list '(x)
  :documentation "Updated documentation.")

(documentation 'flexible-op 'function)
=> "Updated documentation."
```

### Difference from defgeneric

`ensure-generic-function` does not remove existing methods. `defgeneric` removes methods that were defined by a previous `defgeneric` form for the same function. `ensure-generic-function` is purely additive.

```lisp
(ensure-generic-function 'compute
  :lambda-list '(x))

(defmethod compute ((x integer)) (* x x))
(defmethod compute ((x string)) (length x))

(list (compute 5) (compute "hello"))
=> (25 5)
```
