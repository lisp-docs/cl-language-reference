---
title: "no-next-method"
---

# no-next-method

import NoNextMethodStandardGenericFunction from './_no-next-method_standard-generic-function.md';

<NoNextMethodStandardGenericFunction />

## Expanded Reference: no-next-method

### Default Behavior

`no-next-method` is called when `call-next-method` is invoked but there is no next method in the chain. The default system-supplied method signals an error.

```lisp
(defgeneric only-one (x))

(defmethod only-one ((x integer))
  ;; This is the only method -- call-next-method will fail
  (call-next-method))

(handler-case (only-one 42)
  (error () :caught-error))
=> :CAUGHT-ERROR
```

### Avoiding the Error with next-method-p

The standard way to avoid `no-next-method` errors is to check with `next-method-p` before calling `call-next-method`.

```lisp
(defgeneric safe-chain (x))

(defmethod safe-chain ((x number))
  (if (next-method-p)
      (call-next-method)
      :end-of-chain))

(safe-chain 42)
=> :END-OF-CHAIN
```

### Defining a Custom no-next-method Handler

You can define a method on `no-next-method` to customize the behavior when no next method exists.

```lisp
(defgeneric chained-op (x))

(defmethod chained-op ((x integer))
  (+ x (call-next-method)))

(defmethod no-next-method ((gf (eql #'chained-op)) method &rest args)
  (declare (ignore gf method args))
  0)  ;; Return 0 as the base case

(chained-op 5)
=> 5
```
