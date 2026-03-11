---
title: "complement"
---

# complement

import ComplementFunction from './_complement_function.md';

<ComplementFunction />

## Expanded Reference: complement

### Basic usage: negating a predicate

`complement` takes a function and returns a new function that returns the logical opposite of the original.

```lisp
(funcall (complement #'zerop) 1) → T
(funcall (complement #'zerop) 0) → NIL
```

### Filtering with complemented predicates

`complement` is commonly used with higher-order functions like `remove-if` and `find-if` to avoid the deprecated `-if-not` variants.

```lisp
;; Find the first non-alphabetic character
(find-if (complement #'alpha-char-p) "hello world!")
=> #\Space

;; Remove non-numeric elements (equivalent to remove-if-not)
(remove-if (complement #'numberp) '(1 a 2 b 3 c))
=> (1 2 3)
```

### Replacing -if-not functions

The `-if-not` family of functions is deprecated. Use the corresponding `-if` function with `complement` instead.

```lisp
;; Instead of (find-if-not #'zerop '(0 0 3)):
(find-if (complement #'zerop) '(0 0 3))
=> 3

;; Instead of (remove-if-not #'evenp '(1 2 3 4 5)):
(remove-if (complement #'evenp) '(1 2 3 4 5))
=> (2 4)
```

### Works with multi-argument predicates

`complement` preserves the arity of the original function.

```lisp
(funcall (complement #'<) 3 5) → NIL
(funcall (complement #'<) 5 3) → T

(funcall (complement #'string-equal) "foo" "FOO") → NIL
```

### Using complement with member

`complement` only looks at the primary return value of the original function.

```lisp
(funcall (complement #'member) 'a '(a b c)) → NIL
(funcall (complement #'member) 'd '(a b c)) → T
```
