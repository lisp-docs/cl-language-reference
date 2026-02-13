---
title: "catch"
---

# catch

import CatchSpecialOperator from './_catch_special-operator.md';

<CatchSpecialOperator />

## Expanded Reference: catch

### Basic catch and throw

`catch` establishes a dynamic catch point identified by a tag. If a `throw` with a matching tag (compared by `eq`) occurs during execution of the body, the value passed to `throw` is returned from the `catch`.

```lisp
(catch 'done
  (+ 1 2)
  (throw 'done 42)
  (+ 3 4))
; => 42
```

### Normal return when no throw occurs

If no `throw` is executed, `catch` returns the value of its last body form, just like `progn`.

```lisp
(catch 'done
  (+ 1 2)
  (+ 3 4))
; => 7
```

### catch/throw across function boundaries

Unlike `block`/`return-from`, `catch`/`throw` has dynamic scope, meaning `throw` does not need to be lexically inside the `catch`. It works across function call boundaries.

```lisp
(defun check-value (x)
  (when (minusp x)
    (throw 'error "negative value")))

(catch 'error
  (check-value 5)
  (check-value -3)
  (check-value 10))
; => "negative value"
```

### Tags are compared with eq

The catch tag can be any object, but symbols are conventional. Since comparison uses `eq`, avoid using numbers or characters as tags.

```lisp
(catch 'my-tag
  (throw 'my-tag :found))
; => :FOUND
```

### Nested catches with the same tag

When multiple catches with the same tag are nested, `throw` targets the dynamically most recent one.

```lisp
(catch 'c
  (catch 'c
    (throw 'c 1))
  2)
; => 2
```

The inner `catch` receives the value 1 and returns it. The outer `catch` then continues and returns 2.

### Returning multiple values via throw

`throw` can transfer multiple values to the corresponding `catch`.

```lisp
(catch 'result
  (throw 'result (values 10 20 30)))
; => 10, 20, 30
```
