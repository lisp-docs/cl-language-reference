---
title: "graphic-char-p"
---

# graphic-char-p

import GraphicCharPFunction from './_graphic-char-p_function.md';

<GraphicCharPFunction />

## Expanded Reference: graphic-char-p

### Basic graphic character tests

`graphic-char-p` returns true if the character is a graphic (visible or space) character. Letters, digits, punctuation, and the space character are all graphic.

```lisp
(graphic-char-p #\A)     ; → T
(graphic-char-p #\a)     ; → T
(graphic-char-p #\5)     ; → T
(graphic-char-p #\#)     ; → T
(graphic-char-p #\Space) ; → T
```

### Non-graphic characters

Newline, tab, and other control characters are not graphic.

```lisp
(graphic-char-p #\Newline) ; → NIL
(graphic-char-p #\Tab)     ; → NIL (if Tab is supported)
(graphic-char-p #\Return)  ; → NIL (if Return is supported)
```

### Space is graphic, Newline is not

An important distinction: the space character is considered graphic, but the newline character is not.

```lisp
(graphic-char-p #\Space)   ; → T
(graphic-char-p #\Newline) ; → NIL
```

### Filtering graphic characters from a string

You can use `graphic-char-p` to strip non-graphic characters (like newlines and tabs) from text.

```lisp
(remove-if-not #'graphic-char-p
               (format nil "Hello~%World~%"))
; → "HelloWorld"

(remove-if-not #'graphic-char-p
               (format nil "Line 1~CLine 2" #\Tab))
; → "Line 1Line 2"  (implementation-dependent if Tab is supported)
```

### Relationship with other character predicates

All alphanumeric characters are graphic. All standard characters except Newline are graphic.

```lisp
;; Every alphanumeric character is graphic
(every #'graphic-char-p
       (remove-if-not #'alphanumericp
                       "abc123!@#"))
; → T

(standard-char-p #\Newline)  ; → T
(graphic-char-p #\Newline)   ; → NIL
```
