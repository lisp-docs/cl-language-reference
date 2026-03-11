---
title: "keywordp"
---

# keywordp

import KeywordpFunction from './_keywordp_function.md';

<KeywordpFunction />

## Expanded Reference: keywordp

### Basic usage

`keywordp` returns true if the object is a keyword (a symbol interned in the `KEYWORD` package), and false otherwise.

```lisp
(keywordp :test)
=> T
(keywordp :hello)
=> T
(keywordp :nil)
=> T
```

### Non-keyword symbols

Regular symbols, even if their names look like keywords, are not keywords.

```lisp
(keywordp 'test)
=> NIL
(keywordp 'hello)
=> NIL
```

### NIL is not a keyword

Despite being a constant, `nil` is interned in the `COMMON-LISP` package, not `KEYWORD`.

```lisp
(keywordp nil)
=> NIL
(keywordp t)
=> NIL
```

### Non-symbol types

`keywordp` returns false for all non-symbol objects.

```lisp
(keywordp 42)
=> NIL
(keywordp "hello")
=> NIL
(keywordp ":hello")
=> NIL
(keywordp '(:a :b))
=> NIL
```

### Keywords are self-evaluating

Keywords evaluate to themselves, which is one reason `keywordp` is useful for validation.

```lisp
(let ((k :mode))
  (values (keywordp k)
          (eq k (symbol-value k))))
=> T
=> T
```

### Filtering keywords from a list

```lisp
(remove-if-not #'keywordp '(:a b :c 42 "d" :e nil))
=> (:A :C :E)
```
