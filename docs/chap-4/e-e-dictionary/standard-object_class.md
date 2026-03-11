---
title: "standard-object"
---

# standard-object

import StandardObjectClass from './_standard-object_class.md';

<StandardObjectClass />

## Expanded Reference: standard-object

### The standard-object Class

`standard-object` is the default superclass for classes defined with `defclass`. All instances of CLOS classes are of type `standard-object`.

```lisp
(defclass my-thing () ())
==> #<STANDARD-CLASS MY-THING>

(typep (make-instance 'my-thing) 'standard-object)
=> T
```

### Subtype Relationships

```lisp
(subtypep 'standard-object t)
=> T
=> T
```
