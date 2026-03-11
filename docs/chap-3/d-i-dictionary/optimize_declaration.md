---
title: "optimize"
---

# optimize

import OptimizeDeclaration from './_optimize_declaration.md';

<OptimizeDeclaration />

## Expanded Reference: optimize

### Basic Optimization Qualities

The `optimize` declaration specifies priorities among optimization qualities: `speed`, `safety`, `debug`, `space`, and `compilation-speed`. Each quality ranges from 0 (unimportant) to 3 (most important).

```lisp
(defun fast-add (a b)
  (declare (optimize (speed 3) (safety 0)))
  (+ a b))
=> FAST-ADD
```

### Prioritizing Safety

```lisp
(defun safe-access (list index)
  (declare (optimize (safety 3) (speed 0)))
  (nth index list))
=> SAFE-ACCESS
```

### Global Optimization with declaim

```lisp
(declaim (optimize (speed 2) (safety 2) (debug 1) (space 1)))
;; Sets default optimization levels for all subsequent compilations.
```

### Local Optimization with locally

```lisp
(locally (declare (optimize (speed 3) (debug 0)))
  (defun hot-loop (n)
    (let ((sum 0))
      (declare (type fixnum sum n))
      (dotimes (i n sum)
        (incf sum i)))))
=> HOT-LOOP
```

### Minimizing Code Size

```lisp
(defun compact-fn (x)
  (declare (optimize (space 3) (speed 0)))
  (list x x x))
=> COMPACT-FN
```
