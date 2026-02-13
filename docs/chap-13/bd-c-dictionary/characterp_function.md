---
title: "characterp"
---

# characterp

import CharacterpFunction from './_characterp_function.md';

<CharacterpFunction />

## Expanded Reference: characterp

### Basic type checking

`characterp` returns true if the object is a character, false otherwise.

```lisp
(characterp #\a)       ; → T
(characterp #\Space)   ; → T
(characterp #\Newline) ; → T
```

### Non-character objects

Strings, symbols, and numbers are not characters, even if they represent or contain characters.

```lisp
(characterp "a")    ; → NIL
(characterp 'a)     ; → NIL
(characterp 65)     ; → NIL
(characterp nil)    ; → NIL
(characterp "")     ; → NIL
```

### Equivalence with typep

`characterp` is equivalent to `(typep object 'character)`.

```lisp
(eql (characterp #\x) (typep #\x 'character)) ; → T
(eql (characterp 42)  (typep 42  'character))  ; → T
```

### Using characterp as a predicate

`characterp` can be used with higher-order functions to filter or test collections.

```lisp
(every #'characterp '(#\a #\b #\c))           ; → T
(every #'characterp '(#\a "b" #\c))           ; → NIL
(remove-if-not #'characterp '(#\a 1 #\b "c")) ; → (#\a #\b)
```

### Characters extracted from strings

Individual characters extracted from strings via `char` or `aref` are always character objects.

```lisp
(characterp (char "hello" 0))  ; → T
(characterp (aref "world" 2)) ; → T
```
