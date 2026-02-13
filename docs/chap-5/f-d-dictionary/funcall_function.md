---
title: "funcall"
---

# funcall

import FuncallFunction from './_funcall_function.md';

<FuncallFunction />

## Expanded Reference: funcall

### Calling a function object

`funcall` calls a function with individually specified arguments, unlike `apply` which takes a trailing list.

```lisp
(funcall #'+ 1 2 3)
→ 6
```

### Calling a function stored in a variable

`funcall` is essential when the function to call is determined at runtime.

```lisp
(let ((op #'*))
  (funcall op 3 4))
→ 12
```

### Using a symbol as a function designator

When given a symbol, `funcall` looks up its global function definition.

```lisp
(funcall 'list 'a 'b 'c)
→ (A B C)
```

### Higher-order programming with funcall

`funcall` is the standard way to invoke function arguments within higher-order functions.

```lisp
(defun apply-twice (f x)
  (funcall f (funcall f x)))
→ APPLY-TWICE

(apply-twice #'1+ 5)
→ 7

(apply-twice #'reverse '(1 2 3))
→ (1 2 3)
```

### Difference between funcall with #' and a symbol

Using `#'name` captures the lexical function binding, while using a symbol always looks up the global definition.

```lisp
(defun foo () :global)
→ FOO

(flet ((foo () :local))
  (list (funcall #'foo)
        (funcall 'foo)))
→ (:LOCAL :GLOBAL)
```
