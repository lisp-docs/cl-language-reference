---
title: "char=, char/=, char<, char>, char<=, char>=, char-equal, char-not-equal, char-lessp, char-greaterp, char-not-greaterp, char-not-lessp"
---

<!-- # char=, char/=, char&lt;, char&gt;, char&lt;=, char&gt;=, char-equal, char-not-equal, char-lessp, char-greaterp, char-not-greaterp, char-not-lessp -->

import Charequal from './_charequal.md';

<Charequal />

## Expanded Reference: char=, char/=, char&lt;, char&gt;, char&lt;=, char&gt;=, char-equal, char-not-equal, char-lessp, char-greaterp, char-not-greaterp, char-not-lessp

### Case-sensitive equality with char= and char/=

`char=` tests whether characters are identical (case-sensitive). `char/=` tests whether all characters are pairwise different.

```lisp
(char= #\a #\a) ; → T
(char= #\a #\A) ; → NIL
(char= #\a #\b) ; → NIL
(char/= #\a #\b) ; → T
(char/= #\a #\a) ; → NIL
```

### Ordering with char&lt;, char&gt;, char&lt;=, char&gt;=

These test monotonic ordering of characters. Uppercase letters are ordered A through Z, lowercase a through z, and digits 0 through 9. The relative order of uppercase vs. lowercase is implementation-dependent.

```lisp
(char< #\a #\b #\c)    ; → T
(char< #\a #\b #\b)    ; → NIL
(char<= #\a #\b #\b)   ; → T
(char> #\z #\m #\a)     ; → T
(char>= #\z #\z #\a)   ; → T
(char< #\0 #\1 #\9)    ; → T
```

### Multiple argument comparisons

All these functions accept one or more characters. With multiple arguments, they check that the ordering relation holds between every consecutive pair (or every pair for `char/=`).

```lisp
(char= #\x #\x #\x #\x)  ; → T
(char= #\x #\x #\y #\x)  ; → NIL
(char/= #\a #\b #\c)      ; → T   (all pairwise different)
(char/= #\a #\b #\a)      ; → NIL (first and third are the same)
```

### Case-insensitive comparison with char-equal and friends

`char-equal`, `char-not-equal`, `char-lessp`, `char-greaterp`, `char-not-greaterp`, and `char-not-lessp` work like their case-sensitive counterparts but ignore case differences.

```lisp
(char-equal #\A #\a)        ; → T
(char-not-equal #\A #\a)    ; → NIL
(char-lessp #\a #\B)        ; → T
(char-greaterp #\Z #\a)     ; → T
(char-not-greaterp #\a #\A) ; → T
(char-not-lessp #\Z #\z)    ; → T
```

### Sorting characters

The case-insensitive comparison functions are useful for sorting characters without regard to case.

```lisp
(sort (list #\C #\a #\B #\d) #'char-lessp)
; → (#\a #\B #\C #\d)

(sort (list #\C #\a #\B #\d) #'char<)
; → implementation-dependent ordering of upper/lowercase
```

### Practical use: case-insensitive string character comparison

```lisp
(defun char-equal-at (s1 s2 index)
  "Compare characters at the same index in two strings, ignoring case."
  (char-equal (char s1 index) (char s2 index)))

(char-equal-at "Hello" "HELLO" 0) ; → T
(char-equal-at "Hello" "World" 0) ; → NIL
```
