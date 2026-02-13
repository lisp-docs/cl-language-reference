---
title: "string"
---

# string

import StringFunction from './_string_function.md';

<StringFunction />

## Expanded Reference: string (Function)

### Converting a string (identity)

When given a string, `string` returns it as-is.

```lisp
(string "hello")
→ "hello"

(string "")
→ ""
```

### Converting a symbol to its name

When given a symbol, `string` returns the symbol's name.

```lisp
(string 'hello)
→ "HELLO"

(string 'common-lisp)
→ "COMMON-LISP"

(string '|Mixed Case|)
→ "Mixed Case"
```

### Converting a character to a one-character string

When given a character, `string` returns a string containing that single character.

```lisp
(string #\a)
→ "a"

(string #\Space)
→ " "
```

### Error on invalid arguments

Passing an object that is not a string, symbol, or character signals a `type-error`.

```lisp
(handler-case (string 42)
  (type-error () "got type-error"))
→ "got type-error"
```

### Practical use: normalizing string designators

`string` is useful for accepting string designators (strings, symbols, or characters) in user-defined functions.

```lisp
(defun greeting (name)
  (concatenate 'string "Hello, " (string name) "!"))

(greeting "Alice")
→ "Hello, Alice!"

(greeting 'bob)
→ "Hello, BOB!"

(greeting #\X)
→ "Hello, X!"
```

## Expanded Reference: string-upcase, string-downcase, string-capitalize, nstring-upcase, nstring-downcase, nstring-capitalize

### Converting to uppercase with string-upcase

`string-upcase` returns a new string with all lowercase characters converted to uppercase.

```lisp
(string-upcase "hello world")
→ "HELLO WORLD"

(string-upcase "Already UPPER")
→ "ALREADY UPPER"
```

### Converting to lowercase with string-downcase

`string-downcase` returns a new string with all uppercase characters converted to lowercase.

```lisp
(string-downcase "HELLO WORLD")
→ "hello world"

(string-downcase "Dr. Livingston, I presume?")
→ "dr. livingston, i presume?"
```

### Capitalizing words with string-capitalize

`string-capitalize` uppercases the first character of each word and lowercases the rest. A "word" is a maximal sequence of alphanumeric characters.

```lisp
(string-capitalize "hello world")
→ "Hello World"

(string-capitalize "elm 13c arthur;fig don't")
→ "Elm 13c Arthur;Fig Don'T"

(string-capitalize "occlUDeD cASEmenTs")
→ "Occluded Casements"
```

### Using :start and :end to limit the affected region

All case-conversion functions accept `:start` and `:end` keyword arguments to restrict the operation to a substring.

```lisp
(string-upcase "hello world" :start 6)
→ "hello WORLD"

(string-upcase "Dr. Livingston, I presume?" :start 6 :end 10)
→ "Dr. LiVINGston, I presume?"

(string-downcase "HELLO WORLD" :start 0 :end 5)
→ "hello WORLD"
```

### Destructive variants: nstring-upcase, nstring-downcase, nstring-capitalize

The `nstring-` variants modify the string in place and return it. They require an actual string (not a symbol or character).

```lisp
(let ((s (copy-seq "hello world")))
  (nstring-upcase s)
  s)
→ "HELLO WORLD"

(let ((s (copy-seq "HELLO WORLD")))
  (nstring-downcase s :start 5 :end 10)
  s)
→ "HELLO world"

(let ((s (copy-seq "hello world")))
  (nstring-capitalize s)
  s)
→ "Hello World"
```

### Symbols as string designators

The non-destructive variants accept string designators, including symbols.

```lisp
(string-upcase 'hello)
→ "HELLO"

(string-capitalize 'kludgy-hash-search)
→ "Kludgy-Hash-Search"
```
