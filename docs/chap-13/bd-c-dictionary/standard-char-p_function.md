---
title: "standard-char-p"
---

# standard-char-p

import StandardCharPFunction from './_standard-char-p_function.md';

<StandardCharPFunction />

## Expanded Reference: standard-char-p

### Basic standard character tests

`standard-char-p` returns true if the character is one of the 96 standard characters: the 26 uppercase letters, 26 lowercase letters, 10 digits, space, newline, and the standard punctuation characters.

```lisp
(standard-char-p #\A)       ; → T
(standard-char-p #\a)       ; → T
(standard-char-p #\5)       ; → T
(standard-char-p #\Space)   ; → T
(standard-char-p #\Newline) ; → T
```

### Standard punctuation characters

All the standard punctuation and special characters are standard characters.

```lisp
(standard-char-p #\!)  ; → T
(standard-char-p #\@)  ; → T
(standard-char-p #\+)  ; → T
(standard-char-p #\~)  ; → T
(standard-char-p #\()  ; → T
(standard-char-p #\/)  ; → T
```

### Non-standard characters

Tab, Return, and other control characters are not standard characters, even though some implementations support them.

```lisp
;; These semi-standard characters are not standard characters:
(standard-char-p #\Tab)    ; → NIL (if Tab is supported)
(standard-char-p #\Return) ; → NIL (if Return is supported)
```

### Checking all characters in a string

You can verify that a string consists entirely of standard characters.

```lisp
(every #'standard-char-p "Hello, World!")  ; → T
(every #'standard-char-p (format nil "Hello~%World")) ; → T
;; (Newline is a standard character)
```

### Counting standard characters

The standard defines exactly 96 standard characters.

```lisp
(count-if #'standard-char-p
          (loop for i from 0 below char-code-limit
                for ch = (code-char i)
                when ch collect ch))
; → at least 96 (exactly 96 that are standard)
```
