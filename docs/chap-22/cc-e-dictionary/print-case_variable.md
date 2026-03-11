---
title: "print-case"
---

# \*print-case\*

import PrintCaseVariable from './_print-case_variable.md';

<PrintCaseVariable />

## Expanded Reference: \*print-case\*

### :upcase (Default)

Symbol names with all uppercase internal characters are printed in uppercase.

```lisp
(let ((*print-case* :upcase))
  (write-to-string 'hello-world))
=> "HELLO-WORLD"
```

### :downcase

Uppercase characters in symbol names are printed in lowercase.

```lisp
(let ((*print-case* :downcase))
  (write-to-string 'hello-world))
=> "hello-world"

(let ((*print-case* :downcase))
  (format nil "~S ~S" 'defun 'my-function))
=> "defun my-function"
```

### :capitalize

Each word in the symbol name is capitalized. Words are separated by non-alphanumeric characters.

```lisp
(let ((*print-case* :capitalize))
  (write-to-string 'hello-world))
=> "Hello-World"

(let ((*print-case* :capitalize))
  (format nil "~S ~S" 'defun 'my-function))
=> "Defun My-Function"
```

### Effect on Mixed-Case Symbol Names

`*print-case*` only affects the case of uppercase characters in the internal name. Lowercase characters in symbol names (created with vertical bars or backslash escapes) are always printed in lowercase with appropriate escaping when `*print-escape*` is true.

```lisp
(let ((*print-case* :upcase))
  (write-to-string '|MixedCase|))
=> "|MixedCase|"

(let ((*print-case* :downcase)
      (*print-escape* nil))
  (write-to-string 'hello))
=> "hello"
```
