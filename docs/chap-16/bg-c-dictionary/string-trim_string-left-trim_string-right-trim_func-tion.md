---
title: "string-trim, string-left-trim, string-right-trim"
---

# string-trim, string-left-trim, string-right-trim

import StringTrimFunction from './_string-trim_string-left-trim_string-right-trim_func-tion.md';

<StringTrimFunction />

## Expanded Reference: string-trim, string-left-trim, string-right-trim

### Trimming characters from both ends with string-trim

`string-trim` removes characters found in the character-bag from both the beginning and end of the string.

```lisp
(string-trim " " "  hello world  ")
→ "hello world"

(string-trim "abc" "abcaakaaakabcaaa")
→ "kaaak"
```

### Trimming whitespace characters

The character-bag can be any sequence of characters, including a list.

```lisp
(string-trim '(#\Space #\Tab #\Newline) "   hello   ")
→ "hello"

(string-trim '(#\Space #\Tab #\Newline)
             (format nil "  garbanzo beans  ~%"))
→ "garbanzo beans"
```

### Trimming only the left side with string-left-trim

`string-left-trim` removes matching characters only from the beginning of the string.

```lisp
(string-left-trim " " "   hello   ")
→ "hello   "

(string-left-trim "0" "000123")
→ "123"

(string-left-trim "abc" "labcabcabc")
→ "labcabcabc"
```

### Trimming only the right side with string-right-trim

`string-right-trim` removes matching characters only from the end of the string.

```lisp
(string-right-trim " " "   hello   ")
→ "   hello"

(string-right-trim "." "sentence...")
→ "sentence"
```

### The character-bag as a string

A string can serve as the character-bag, specifying all characters to strip.

```lisp
(string-trim "xyz" "xxyyzzhaborxyz")
→ "habor"

(string-trim " (*)" " ( *three (silly) words* ) ")
→ "three (silly) words"
```

### Using with string designators

These functions accept string designators, so you can pass symbols as the string argument.

```lisp
(string-trim " " 'hello)
→ "HELLO"

(string-left-trim "HE" 'hello)
→ "LLO"
```
