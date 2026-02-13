---
title: "upper-case-p, lower-case-p, both-case-p"
---

# upper-case-p, lower-case-p, both-case-p

import UpperCasePFunction from './_upper-case-p_lower-case-p_both-case-p_function.md';

<UpperCasePFunction />

## Expanded Reference: upper-case-p, lower-case-p, both-case-p

### Testing for uppercase letters

`upper-case-p` returns true if the character is an uppercase letter.

```lisp
(upper-case-p #\A) ; → T
(upper-case-p #\Z) ; → T
(upper-case-p #\a) ; → NIL
(upper-case-p #\5) ; → NIL
```

### Testing for lowercase letters

`lower-case-p` returns true if the character is a lowercase letter.

```lisp
(lower-case-p #\a) ; → T
(lower-case-p #\z) ; → T
(lower-case-p #\A) ; → NIL
(lower-case-p #\5) ; → NIL
```

### Testing whether a character has case

`both-case-p` returns true if the character has both an uppercase and a lowercase variant -- that is, it is a letter with case.

```lisp
(both-case-p #\a)     ; → T
(both-case-p #\A)     ; → T
(both-case-p #\5)     ; → NIL
(both-case-p #\Space) ; → NIL
(both-case-p #\+)     ; → NIL
```

### Relationship between the three predicates

For any character, `both-case-p` is true if and only if either `upper-case-p` or `lower-case-p` is true.

```lisp
(defun verify-case-consistency (char)
  (eql (both-case-p char)
       (or (upper-case-p char) (lower-case-p char))))

(every #'verify-case-consistency
       (coerce "ABCabc012!@#" 'list))
; → T
```

### Practical use: counting case statistics in a string

```lisp
(defun case-stats (string)
  (list :upper (count-if #'upper-case-p string)
        :lower (count-if #'lower-case-p string)
        :no-case (count-if-not #'both-case-p string)))

(case-stats "Hello, World!")
; → (:UPPER 2 :LOWER 8 :NO-CASE 3)
```

### Filtering by case

```lisp
(remove-if-not #'upper-case-p "Hello World")
; → "HW"

(remove-if-not #'lower-case-p "Hello World")
; → "elloorld"
```
