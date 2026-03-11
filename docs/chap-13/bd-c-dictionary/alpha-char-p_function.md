---
title: "alpha-char-p"
---

# alpha-char-p

import AlphaCharPFunction from './_alpha-char-p_function.md';

<AlphaCharPFunction />

## Expanded Reference: alpha-char-p

### Basic alphabetic character tests

`alpha-char-p` returns true if the character is alphabetic (a letter), and false otherwise.

```lisp
(alpha-char-p #\a)
=> T
(alpha-char-p #\Z)
=> T
(alpha-char-p #\5)
=> NIL
(alpha-char-p #\+)
=> NIL
```

### Non-graphic and whitespace characters

Whitespace and non-graphic characters are never alphabetic.

```lisp
(alpha-char-p #\Space)
=> NIL
(alpha-char-p #\Newline)
=> NIL
(alpha-char-p #\Tab)
=> NIL
```

### Filtering alphabetic characters from a string

`alpha-char-p` is commonly used to extract only letter characters from a string.

```lisp
(remove-if-not #'alpha-char-p "Hello, World! 123")
=> "HelloWorld"
```

### Checking if a string contains only letters

You can use `every` with `alpha-char-p` to test whether a string is purely alphabetic.

```lisp
(every #'alpha-char-p "Hello")
=> T
(every #'alpha-char-p "Hello!")
=> NIL
(every #'alpha-char-p "abc123")
=> NIL
(every #'alpha-char-p "")
=> T
```

### Relationship with alphanumericp

`alpha-char-p` tests for letters only, while `alphanumericp` also accepts digits.

```lisp
(alpha-char-p #\7)
=> NIL
(alphanumericp #\7)
=> T
(alpha-char-p #\G)
=> T
(alphanumericp #\G)
=> T
```
