---
title: "pprint-fill, pprint-linear, pprint-tabular"
---

# pprint-fill, pprint-linear, pprint-tabular

import PprintFillFunction from './_pprint-fill_pprint-linear_pprint-tabular_function.md';

<PprintFillFunction />

## Expanded Reference: pprint-fill, pprint-linear, pprint-tabular

### pprint-linear -- All on One Line or Each on Its Own

`pprint-linear` prints a list either entirely on one line, or with each element on a separate line.

```lisp
(let ((*print-pretty* t)
      (*print-right-margin* 30))
  (with-output-to-string (s)
    (pprint-linear s '(alpha beta gamma delta epsilon))))
=> "(ALPHA
 BETA
 GAMMA
 DELTA
 EPSILON)"
```

### pprint-fill -- Fill as Many as Fit

`pprint-fill` prints a list with as many elements as possible on each line, wrapping when the right margin is reached.

```lisp
(let ((*print-pretty* t)
      (*print-right-margin* 30))
  (with-output-to-string (s)
    (pprint-fill s '(alpha beta gamma delta epsilon zeta))))
=> "(ALPHA BETA GAMMA DELTA
 EPSILON ZETA)"
```

### pprint-tabular -- Columnar Output

`pprint-tabular` is like `pprint-fill` but aligns elements in columns. The optional tabsize argument (default 16) specifies the column spacing.

```lisp
(let ((*print-pretty* t)
      (*print-right-margin* 40))
  (with-output-to-string (s)
    (pprint-tabular s '(one two three four five six) t nil 10)))
=> "(ONE       TWO       THREE     FOUR
 FIVE      SIX)"
```

### The colon-p Argument Controls Parentheses

When `colon-p` is true (the default), the output is enclosed in parentheses. When false, parentheses are omitted.

```lisp
(let ((*print-pretty* t)
      (*print-right-margin* 40))
  (with-output-to-string (s)
    (pprint-fill s '(a b c d) nil)))
=> "A B C D"

(let ((*print-pretty* t)
      (*print-right-margin* 40))
  (with-output-to-string (s)
    (pprint-fill s '(a b c d) t)))
=> "(A B C D)"
```

### Non-List Arguments Are Printed with write

If the object is not a list, these functions print it using `write`.

```lisp
(let ((*print-pretty* t))
  (with-output-to-string (s)
    (pprint-fill s 42)))
=> "42"
```
