---
title: "invalid-method-error"
---

# invalid-method-error

import InvalidMethodErrorFunction from './_invalid-method-error_function.md';

<InvalidMethodErrorFunction />

## Expanded Reference: invalid-method-error

### Purpose

`invalid-method-error` is called to signal an error when a method does not conform to the qualifiers required by the method combination. It is intended to be called from the body of effective method computations in user-defined method combinations.

### Signature

```lisp
(invalid-method-error method format-control &rest format-arguments)
```

The first argument is the offending method object. The remaining arguments form a format control string and arguments describing the error.

### Typical Usage in define-method-combination

`invalid-method-error` is typically called from within `define-method-combination` when a method has unexpected qualifiers.

```lisp
;; Conceptual example (within a define-method-combination body):
;; (when (some-invalid-qualifier-p method)
;;   (invalid-method-error method
;;     "~S has an invalid qualifier for this combination." method))
```

### Not Commonly Called Directly

Most application code does not call `invalid-method-error` directly. It is part of the protocol for defining custom method combinations. The CLOS implementation calls it when needed during method dispatch.
