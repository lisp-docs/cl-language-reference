---
title: "make-instances-obsolete"
---

# make-instances-obsolete

import MakeInstancesObsoleteStandardGenericFunction from './_make-instances-obsolete_standard-generic-function.md';

<MakeInstancesObsoleteStandardGenericFunction />

## Expanded Reference: make-instances-obsolete

### Triggering Instance Updates

`make-instances-obsolete` marks all existing instances of a class as needing updating. The next time a slot of such an instance is accessed, `update-instance-for-redefined-class` is called. Normally this happens automatically when a class is redefined via `defclass`, but it can be triggered manually.

```lisp
(defclass versioned ()
  ((data :initarg :data :accessor versioned-data)))

(let ((obj (make-instance 'versioned :data "v1")))
  ;; Manually mark instances as obsolete
  (make-instances-obsolete 'versioned)
  ;; Next access triggers the update protocol
  (versioned-data obj))
=> "v1"
```

### Automatic Invocation on Class Redefinition

When you redefine a class with `defclass`, `make-instances-obsolete` is called automatically by the system if the slot layout changes.

```lisp
(defclass point ()
  ((x :initarg :x :accessor point-x)
   (y :initarg :y :accessor point-y)))

(let ((p (make-instance 'point :x 1 :y 2)))
  ;; Redefine the class with an additional slot
  ;; (In practice this would be a separate defclass form)
  ;; The system calls make-instances-obsolete automatically
  ;; and instances are updated on next access.
  (point-x p))
=> 1
```

### Using with a Class Object

`make-instances-obsolete` accepts either a symbol (class name) or a class object.

```lisp
(defclass demo () ((val :initarg :val :accessor demo-val)))

(make-instances-obsolete (find-class 'demo))
==> #<STANDARD-CLASS DEMO>
```
