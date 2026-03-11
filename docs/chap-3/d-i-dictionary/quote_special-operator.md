---
title: "quote"
---

# quote

import QuoteSpecialOperator from './_quote_special-operator.md';

<QuoteSpecialOperator />

## Expanded Reference: quote

### Basic Usage

`quote` returns its argument without evaluating it. The reader shorthand `'` is equivalent to `(quote ...)`.

```lisp
(quote hello)
=> HELLO

'hello
=> HELLO

(quote (1 2 3))
=> (1 2 3)
```

### Preventing Evaluation

Without `quote`, a symbol would be looked up as a variable and a list would be treated as a function call. `quote` prevents this.

```lisp
(setq a 42)
=> 42

a
=> 42

'a
=> A

(list 'a 'b 'c)
=> (A B C)
```

### Self-Evaluating Objects

Numbers, strings, and characters are self-evaluating -- quoting them is permitted but unnecessary.

```lisp
42
=> 42

'42
=> 42

"hello"
=> "hello"

'"hello"
=> "hello"
```

### Nested quote

```lisp
''a
=> (QUOTE A)

'''a
=> (QUOTE (QUOTE A))
```

### Important: Do Not Modify Quoted Objects

The consequences are undefined if you destructively modify a quoted literal.

```lisp
;; BAD -- do not do this:
;; (let ((x '(a b c)))
;;   (setf (car x) 'z))  ; undefined consequences
```
