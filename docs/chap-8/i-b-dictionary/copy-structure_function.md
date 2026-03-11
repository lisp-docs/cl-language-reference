---
title: "copy-structure"
---

# copy-structure

import CopyStructureFunction from './_copy-structure_function.md';

<CopyStructureFunction />

## Expanded Reference: copy-structure

### Basic Usage

`copy-structure` creates a shallow copy of a structure. The copy has the same type and slot values as the original, but is a distinct object.

```lisp
(defstruct point x y)
=> POINT

(setq p1 (make-point :x 1 :y 2))
;; => #S(POINT :X 1 :Y 2)

(setq p2 (copy-structure p1))
;; => #S(POINT :X 1 :Y 2)

(point-x p2)
=> 1

(point-y p2)
=> 2
```

### The Copy Is a Distinct Object

```lisp
(eq p1 p2)
;; => NIL

(equalp p1 p2)
;; => T
```

### Modifying the Copy Does Not Affect the Original

```lisp
(setf (point-x p2) 99)
;; => 99

(point-x p1)
;; => 1

(point-x p2)
;; => 99
```

### Shallow Copy: Shared Slot Values

The copy shares the same slot value objects -- it is not a deep copy.

```lisp
(defstruct container items)
=> CONTAINER

(setq c1 (make-container :items (list 1 2 3)))
;; => #S(CONTAINER :ITEMS (1 2 3))

(setq c2 (copy-structure c1))

(eq (container-items c1) (container-items c2))
=> T

(push 0 (container-items c2))
;; push creates a new cons in c2's slot; c1's slot still points to the old list:
(container-items c1)
=> (1 2 3)
```

### Equivalent to the Auto-Generated Copier

Each `defstruct` definition creates a copier function (e.g., `copy-point`). For a structure type without `:type`, `copy-point` is equivalent to `copy-structure`.

```lisp
(equalp (copy-point p1) (copy-structure p1))
;; => T
```
