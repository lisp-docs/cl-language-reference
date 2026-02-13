---
title: "concatenate"
---

# concatenate

import ConcatenateFunction from './_concatenate_function.md';

<ConcatenateFunction />

## Expanded Reference: concatenate

### Concatenating strings

`concatenate` joins multiple sequences into a new sequence of the specified type. The first argument is the result type.

```lisp
(concatenate 'string "Hello" ", " "World!") ; → "Hello, World!"
```

### Concatenating into a list

You can concatenate sequences of different types into a list.

```lisp
(concatenate 'list '(1 2) '(3 4) '(5 6)) ; → (1 2 3 4 5 6)
(concatenate 'list "abc" '(1 2 3)) ; → (#\a #\b #\c 1 2 3)
```

### Concatenating into a vector

```lisp
(concatenate 'vector '(a b) #(c d) '(e f)) ; → #(A B C D E F)
```

### Mixing sequence types

`concatenate` freely mixes lists, vectors, and strings as input sequences.

```lisp
(concatenate 'string "abc" '(#\d #\e) #(#\f))
; → "abcdef"
```

### Empty concatenation

Concatenating with no sequences produces an empty sequence of the requested type.

```lisp
(concatenate 'string) ; → ""
(concatenate 'list) ; → NIL
(concatenate 'vector) ; → #()
```

### Practical example: joining strings with a separator

```lisp
(defun join-strings (separator strings)
  (if (null strings)
      ""
      (reduce (lambda (a b)
                (concatenate 'string a separator b))
              strings)))

(join-strings ", " '("apple" "banana" "cherry"))
; → "apple, banana, cherry"
```
