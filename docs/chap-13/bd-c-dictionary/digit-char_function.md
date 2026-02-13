---
title: "digit-char"
---

# digit-char

import DigitCharFunction from './_digit-char_function.md';

<DigitCharFunction />

## Expanded Reference: digit-char

### Basic decimal digit conversion

`digit-char` converts a digit weight (0-9) to its corresponding character in the given radix (default 10).

```lisp
(digit-char 0) ; → #\0
(digit-char 5) ; → #\5
(digit-char 9) ; → #\9
```

### Hexadecimal digit conversion

When the radix is 16, weights 10-15 produce uppercase letters A-F.

```lisp
(digit-char 10 16) ; → #\A
(digit-char 11 16) ; → #\B
(digit-char 15 16) ; → #\F
(digit-char 12 16) ; → #\C
```

### Weight out of range returns NIL

If the weight is greater than or equal to the radix, `digit-char` returns NIL.

```lisp
(digit-char 10 10) ; → NIL  (10 is not a valid digit in base 10)
(digit-char 12)    ; → NIL  (12 is not a valid digit in base 10)
(digit-char 6 2)   ; → NIL  (6 is not a valid digit in base 2)
(digit-char 2 2)   ; → NIL  (2 is not a valid digit in base 2)
```

### Binary digits

```lisp
(digit-char 0 2) ; → #\0
(digit-char 1 2) ; → #\1
```

### Converting a number to a digit string in any base

`digit-char` is useful for building string representations of numbers in arbitrary bases.

```lisp
(defun integer-to-base-string (n base)
  (if (zerop n)
      "0"
      (let ((digits '()))
        (loop while (plusp n)
              do (push (digit-char (mod n base) base) digits)
                 (setf n (floor n base)))
        (coerce digits 'string))))

(integer-to-base-string 255 16)  ; → "FF"
(integer-to-base-string 10 2)   ; → "1010"
(integer-to-base-string 42 10)  ; → "42"
```
