---
title: "defconstant"
---

# defconstant

import DefconstantMacro from './_defconstant_macro.md';

<DefconstantMacro />

## Expanded Reference: defconstant

### Defining a constant

`defconstant` defines a named constant whose value cannot be changed by assignment or binding.

```lisp
(defconstant +golden-ratio+ (/ (1+ (sqrt 5.0d0)) 2))
=> +GOLDEN-RATIO+

+golden-ratio+
=> 1.618033988749895d0
```

### Constants are recognized by constantp

You can check whether a symbol names a constant variable with `constantp`.

```lisp
(defconstant +max-size+ 1024)
=> +MAX-SIZE+

(constantp '+max-size+)
=> T
```

### Using a documentation string

A documentation string can be attached to the constant.

```lisp
(defconstant +avogadro+ 6.022d23
  "Avogadro's number: the number of particles per mole.")
=> +AVOGADRO+

(documentation '+avogadro+ 'variable)
=> "Avogadro's number: the number of particles per mole."
```

### Constants in expressions

Constants can be used anywhere a value is expected and are particularly useful for configuration values that should never change at runtime.

```lisp
(defconstant +days-per-week+ 7)
=> +DAYS-PER-WEEK+

(defun weeks-to-days (weeks)
  (* weeks +days-per-week+))
=> WEEKS-TO-DAYS

(weeks-to-days 4)
=> 28
```

### Built-in constants

Common Lisp provides several built-in constants defined as if by `defconstant`.

```lisp
pi
=> 3.141592653589793d0

most-positive-fixnum
=> 4611686018427387903

t
=> T

nil
=> NIL
```
