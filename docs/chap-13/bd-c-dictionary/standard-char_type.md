---
title: "standard-char"
---

# standard-char

import StandardCharType from './_standard-char_type.md';

<StandardCharType />

## Expanded Reference: standard-char

### The standard-char type

`standard-char` is a type comprising exactly 96 characters that must be present in every conforming Common Lisp implementation: 26 uppercase letters, 26 lowercase letters, 10 digits, the space, newline, and a set of punctuation characters.

```lisp
(typep #\A 'standard-char)       ; → T
(typep #\a 'standard-char)       ; → T
(typep #\0 'standard-char)       ; → T
(typep #\Space 'standard-char)   ; → T
(typep #\Newline 'standard-char) ; → T
```

### Type hierarchy

`standard-char` is a subtype of `base-char`, which is a subtype of `character`.

```lisp
(subtypep 'standard-char 'base-char)  ; → T, T
(subtypep 'standard-char 'character)  ; → T, T
```

### Standard punctuation characters

The standard character set includes these special characters: `!`, `"`, `#`, `$`, `%`, `&`, `'`, `(`, `)`, `*`, `+`, `,`, `-`, `.`, `/`, `:`, `;`, `<`, `=`, `>`, `?`, `@`, `[`, `\`, `]`, `^`, `_`, `` ` ``, `{`, `|`, `}`, `~`.

```lisp
(typep #\! 'standard-char) ; → T
(typep #\@ 'standard-char) ; → T
(typep #\~ 'standard-char) ; → T
(typep #\( 'standard-char) ; → T
(typep #\} 'standard-char) ; → T
```

### Non-standard characters

Semi-standard characters like Tab and Return are not members of the `standard-char` type.

```lisp
(typep #\Tab 'standard-char)    ; → NIL (if Tab is supported)
(typep #\Return 'standard-char) ; → NIL (if Return is supported)
```

### Counting the 96 standard characters

```lisp
(count-if (lambda (ch) (typep ch 'standard-char))
          (loop for code from 0 below char-code-limit
                for ch = (code-char code)
                when ch collect ch))
; → 96
```
