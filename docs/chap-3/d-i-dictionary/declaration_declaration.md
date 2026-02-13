---
title: "declaration"
---

# declaration

import DeclarationDeclaration from './_declaration_declaration.md';

<DeclarationDeclaration />

## Expanded Reference: declaration

### Declaring Custom Declaration Identifiers

The `declaration` proclamation advises the system that certain names are valid declaration identifiers. This prevents warnings about unrecognized declarations.

```lisp
(declaim (declaration my-author my-version))
;; Now my-author and my-version are recognized as valid declaration identifiers.

(defun foo (x)
  (declare (my-author "Alice")
           (my-version 2))
  (* x x))
;; => FOO
;; No warning about unrecognized declarations.
```

### Using proclaim

```lisp
(proclaim '(declaration my-note))
;; my-note is now a recognized declaration identifier.
```
