---
title: "digit-char-p"
---

# digit-char-p

import DigitCharPFunction from './_digit-char-p_function.md';

<DigitCharPFunction />

## Expanded Reference: digit-char-p

### Basic decimal digit test

`digit-char-p` returns the numeric weight of a character if it is a digit in the given radix (default 10), or NIL otherwise.

```lisp
(digit-char-p #\0) ; → 0
(digit-char-p #\5) ; → 5
(digit-char-p #\9) ; → 9
(digit-char-p #\a) ; → NIL
(digit-char-p #\#) ; → NIL
```

### Hexadecimal digit testing

With a radix of 16, letters A-F (case-insensitive) are valid digits with weights 10-15.

```lisp
(digit-char-p #\A 16) ; → 10
(digit-char-p #\a 16) ; → 10
(digit-char-p #\F 16) ; → 15
(digit-char-p #\G 16) ; → NIL
```

### Binary digit testing

With a radix of 2, only #\0 and #\1 are valid.

```lisp
(digit-char-p #\0 2) ; → 0
(digit-char-p #\1 2) ; → 1
(digit-char-p #\2 2) ; → NIL
(digit-char-p #\5 2) ; → NIL
```

### Parsing a digit string manually

Since `digit-char-p` returns the numeric weight, it can be used to parse strings into numbers.

```lisp
(defun parse-hex-string (s)
  (reduce (lambda (acc ch)
            (+ (* acc 16) (digit-char-p ch 16)))
          s :initial-value 0))

(parse-hex-string "FF")  ; → 255
(parse-hex-string "1A")  ; → 26
(parse-hex-string "10")  ; → 16
```

### Testing digit characters across multiple radixes

```lisp
(mapcar (lambda (radix)
          (map 'list (lambda (c) (digit-char-p c radix)) "09AaFZ"))
        '(2 10 16 36))
; → ((0 NIL NIL NIL NIL NIL)
;    (0 9 NIL NIL NIL NIL)
;    (0 9 10 10 15 NIL)
;    (0 9 10 10 15 35))
```

### Checking if a string represents a valid integer

```lisp
(defun all-digits-p (string &optional (radix 10))
  (and (plusp (length string))
       (every (lambda (c) (digit-char-p c radix)) string)))

(all-digits-p "12345")    ; → T
(all-digits-p "123a5")    ; → NIL
(all-digits-p "DEAD" 16)  ; → T
(all-digits-p "")          ; → NIL
```
