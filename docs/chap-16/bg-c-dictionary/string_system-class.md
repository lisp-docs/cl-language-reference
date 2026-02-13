---
title: "string"
---

# string

import StringSystemClass from './_string_system-class.md';

<StringSystemClass />

## Expanded Reference: string (System Class)

### Strings are specialized vectors of characters

A string is a one-dimensional array (vector) whose elements are characters. String literals are written with double quotes.

```lisp
(type-of "hello")
→ (SIMPLE-BASE-STRING 5)  ; implementation-dependent, but always a subtype of STRING

(typep "hello" 'string)
→ T

(typep "hello" 'vector)
→ T
```

### Strings are sequences and arrays

Because strings are vectors, all sequence and array operations work on them.

```lisp
(length "Common Lisp")
→ 11

(reverse "Common Lisp")
→ "psiL nommoC"

(elt "abcdef" 3)
→ #\d
```

### Using the string type specifier with a size

The compound type specifier `(string size)` denotes strings of a particular length.

```lisp
(typep "hello" '(string 5))
→ T

(typep "hello" '(string 3))
→ NIL

(typep "hello" '(string *))
→ T
```

### Creating strings with make-array

Strings can be created explicitly using `make-array` with a character element type.

```lisp
(make-array 5 :element-type 'character :initial-element #\x)
→ "xxxxx"

(let ((s (make-array 5 :element-type 'character :initial-contents "hello")))
  (typep s 'string))
→ T
```

### Strings with fill pointers

Strings created with fill pointers are still strings, but they are not simple strings.

```lisp
(let ((s (make-array 10 :element-type 'character
                        :fill-pointer 5
                        :initial-element #\a)))
  (list (typep s 'string)
        (length s)
        (array-total-size s)))
→ (T 5 10)
```
