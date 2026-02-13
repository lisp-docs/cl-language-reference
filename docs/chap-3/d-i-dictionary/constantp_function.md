---
title: "constantp"
---

# constantp

import ConstantpFunction from './_constantp_function.md';

<ConstantpFunction />

## Expanded Reference: constantp

### Self-Evaluating Objects

Numbers, characters, strings, and arrays are always recognized as constant forms.

```lisp
(constantp 42)
;; => T

(constantp #\A)
;; => T

(constantp "hello")
;; => T
```

### Quoted Forms

A `quote` form is always a constant form.

```lisp
(constantp '(quote (a b c)))
;; => T

(constantp ''foo)
;; => T
```

### Keywords and Defined Constants

Keywords, `t`, `nil`, and symbols defined with `defconstant` are constant.

```lisp
(constantp :my-keyword)
;; => T

(constantp t)
;; => T

(constantp nil)
;; => T

(constantp 'pi)
;; => T
```

### Ordinary Variables Are Not Constant

```lisp
(constantp 'some-variable)
;; => NIL
```

### Implementation-Dependent Cases

Some forms may or may not be recognized as constant depending on the implementation.

```lisp
(constantp '(+ 1 2))
;; => implementation-dependent

(constantp '(sqrt pi))
;; => implementation-dependent
```
