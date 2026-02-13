---
title: "char-code-limit"
---

# char-code-limit

import CharCodeLimitConstantVariable from './_char-code-limit_constant-variable.md';

<CharCodeLimitConstantVariable />

## Expanded Reference: char-code-limit

### The upper bound on character codes

`char-code-limit` is a constant that gives the upper exclusive bound on values returned by `char-code`. Its exact value is implementation-dependent but is at least 96.

```lisp
(integerp char-code-limit) ; → T
(>= char-code-limit 96)    ; → T
```

### All character codes are below char-code-limit

The value returned by `char-code` for any character is always a non-negative integer strictly less than `char-code-limit`.

```lisp
(< (char-code #\A) char-code-limit)     ; → T
(< (char-code #\Space) char-code-limit)  ; → T
(< (char-code #\z) char-code-limit)      ; → T
```

### Iterating over all possible character codes

`char-code-limit` can be used to enumerate all characters supported by the implementation. Note that not every code below the limit necessarily maps to a character.

```lisp
;; Count how many valid characters exist
(loop for code from 0 below char-code-limit
      count (code-char code))
; → implementation-dependent

;; Collect all standard characters by iterating codes
(length (loop for code from 0 below char-code-limit
              for ch = (code-char code)
              when (and ch (standard-char-p ch))
              collect ch))
; → 96
```

### Typical values

In most modern implementations using Unicode, `char-code-limit` is 1114112 (the number of Unicode code points). In simpler implementations it might be 256 or 128.

```lisp
;; Just inspecting the value (implementation-dependent):
char-code-limit ; → 1114112 (typical for Unicode implementations)
```
