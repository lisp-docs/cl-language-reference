---
title: "keyword"
---

# keyword

import KeywordType from './_keyword_type.md';

<KeywordType />

## Expanded Reference: keyword

### Keywords as a type

The `keyword` type includes all symbols interned in the `KEYWORD` package. You can test with `typep` or `keywordp`.

```lisp
(typep :test 'keyword)
=> T
(typep 'test 'keyword)
=> NIL
(typep 42 'keyword)
=> NIL
```

### Keywords are self-evaluating constants

Interning a symbol in the `KEYWORD` package automatically makes it a constant variable bound to itself.

```lisp
:my-keyword
=> :MY-KEYWORD
(eq :my-keyword (symbol-value :my-keyword))
=> T
(constantp :my-keyword)
=> T
```

### Keywords are always external symbols

All keywords are automatically exported from the `KEYWORD` package.

```lisp
(multiple-value-bind (sym status)
    (find-symbol "TEST" "KEYWORD")
  (values sym status))
=> :TEST
=> :EXTERNAL
```

### Keywords are a subtype of symbol

Keywords are symbols with special properties: they live in the `KEYWORD` package, are self-evaluating, and are constants.

```lisp
(subtypep 'keyword 'symbol)
=> T
=> T
(symbolp :example)
=> T
(keywordp :example)
=> T
```

### Common uses of keywords

Keywords are commonly used as indicators in property lists, keys in keyword arguments, and as enumeration-like values.

```lisp
;; As function keyword arguments
(defun describe-item (&key name color)
  (format nil "~A is ~A" name color))

(describe-item :name "apple" :color "red")
=> "apple is red"

;; As property list indicators
(let ((sym (make-symbol "ITEM")))
  (setf (get sym :type) :fruit)
  (get sym :type))
=> :FRUIT
```
