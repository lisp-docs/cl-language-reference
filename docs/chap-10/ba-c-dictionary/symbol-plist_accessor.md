---
title: "symbol-plist"
---

# symbol-plist

import SymbolPlistAccessor from './_symbol-plist_accessor.md';

<SymbolPlistAccessor />

## Expanded Reference: symbol-plist

### Basic usage

`symbol-plist` returns the property list associated with a symbol. A fresh symbol has an empty property list.

```lisp
(let ((sym (gensym)))
  (symbol-plist sym))
=> NIL
```

### Viewing properties after adding them with get/setf

Properties are typically added with `(setf (get ...))`. `symbol-plist` reveals the underlying list structure.

```lisp
(let ((sym (make-symbol "EXAMPLE")))
  (setf (get sym 'color) 'red)
  (setf (get sym 'size) 42)
  (symbol-plist sym))
;; => (SIZE 42 COLOR RED)  (order may vary)
```

### Directly setting the property list

You can replace the entire property list with `setf`, though this is generally discouraged since property lists are a shared global resource.

```lisp
(let ((sym (make-symbol "DEMO")))
  (setf (get sym 'a) 1)
  (setf (get sym 'b) 2)
  (format nil "Before: ~S" (symbol-plist sym))
  (setf (symbol-plist sym) '(x 10 y 20))
  (values (get sym 'x) (get sym 'y) (get sym 'a)))
=> 10
=> 20
=> NIL
```

### Property list structure

The property list is a flat list of alternating indicators and values.

```lisp
(let ((sym (make-symbol "DATA")))
  (setf (get sym 'name) "Alice")
  (setf (get sym 'age) 30)
  (let ((plist (symbol-plist sym)))
    (values (length plist)
            (evenp (length plist)))))
=> 4
=> T
```

### Empty property list for standard symbols

Most standard symbols do not have property list entries by default (though implementations may add some).

```lisp
;; Check the type of what symbol-plist returns
(listp (symbol-plist (make-symbol "FRESH")))
=> T
```
