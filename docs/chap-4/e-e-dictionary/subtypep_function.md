---
title: "subtypep"
---

# subtypep

import SubtypepFunction from './_subtypep_function.md';

<SubtypepFunction />

## Expanded Reference: subtypep

### Basic Subtype Relationships

`subtypep` returns two values: whether type-1 is a subtype of type-2, and whether the answer is definitive.

```lisp
(subtypep 'integer 'number)
=> T
=> T

(subtypep 'string 'sequence)
=> T
=> T

(subtypep 'null 'list)
=> T
=> T
```

### Negative Results

When type-1 is definitely not a subtype of type-2, the first value is `nil` and the second value is `t`.

```lisp
(subtypep 'integer 'string)
=> NIL
=> T

(subtypep 'symbol 'number)
=> NIL
=> T
```

### Uncertain Results

When `subtypep` cannot determine the relationship, it returns `nil, nil`.

```lisp
(subtypep '(satisfies evenp) 'integer)
=> NIL
=> NIL
```

### Numeric Range Types

```lisp
(subtypep '(integer 1 3) '(integer 1 4))
=> T
=> T

(subtypep '(integer 1 10) '(integer 0 5))
=> NIL
=> T
```

### Class Hierarchy

```lisp
(subtypep 'compiled-function 'function)
=> T
=> T

(subtypep 'null 'symbol)
=> T
=> T

(subtypep 'fixnum 'integer)
=> T
=> T
```

### Identical Types

```lisp
(subtypep 'integer 'integer)
=> T
=> T

;; The empty type is a subtype of everything:
(subtypep nil 'integer)
=> T
=> T
```
