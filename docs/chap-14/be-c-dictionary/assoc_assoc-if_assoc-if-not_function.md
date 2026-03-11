---
title: "assoc, assoc-if, assoc-if-not"
---

# assoc, assoc-if, assoc-if-not

import AssocFunction from './_assoc_assoc-if_assoc-if-not_function.md';

<AssocFunction />

## Expanded Reference: assoc, assoc-if, assoc-if-not

### Basic association list lookup

`assoc` searches an association list (alist) for a pair whose car matches the given item. It returns the entire pair, or NIL if not found. The default test is `eql`.

```lisp
(assoc 'b '((a . 1) (b . 2) (c . 3)))
=> (B . 2)

(assoc 'z '((a . 1) (b . 2) (c . 3)))
=> NIL
```

### Extracting the value from the result

`assoc` returns the whole cons pair. Use `cdr` to get just the associated value.

```lisp
(cdr (assoc 'y '((x . 10) (y . 20) (z . 30))))
=> 20
```

### String keys require a :test argument

The default `eql` test does not work for string keys. Use `:test #'equal` or `:test #'string=`.

```lisp
(assoc "two" '(("one" . 1) ("two" . 2) ("three" . 3)) :test #'equal)
=> ("two" . 2)

(assoc "two" '(("one" . 1) ("two" . 2) ("three" . 3)))
=> NIL
```

### assoc-if: search by predicate on the key

`assoc-if` applies a predicate to the car of each pair and returns the first match.

```lisp
(assoc-if #'evenp '((1 . "odd") (2 . "even") (3 . "odd")))
=> (2 . "even")

(assoc-if #'stringp '((1 . :num) ("hello" . :str) (t . :bool)))
=> ("hello" . :STR)
```

### Using :key for custom extraction

The `:key` function is applied to the car of each alist entry before the test.

```lisp
(assoc 3 '(((1 2) . "a") ((3 4) . "b") ((5 6) . "c"))
       :key #'car)
=> ((3 4) . "b")
```

### Practical use: a simple configuration lookup

Alists are commonly used for configuration data, and `assoc` provides the lookup mechanism.

```lisp
(let ((config '((:host . "localhost")
                (:port . 8080)
                (:debug . t))))
  (values (cdr (assoc :host config))
          (cdr (assoc :port config))
          (cdr (assoc :debug config))))
=> "localhost"
=> 8080
=> T
```
