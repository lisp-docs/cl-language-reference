---
title: "equalp"
---

# equalp

import EqualpFunction from './_equalp_function.md';

<EqualpFunction />

## Expanded Reference: equalp

### Case-insensitive string comparison

`equalp` ignores case when comparing characters and strings, unlike `equal`.

```lisp
(equalp "Hello" "hello") → T
(equalp "FOO" "foo") → T
(equalp #\A #\a) → T
```

### Numeric comparison across types

`equalp` uses `=` for numbers, so it compares numeric value regardless of type.

```lisp
(equalp 3 3.0) → T
(equalp 1 1.0d0) → T
(equalp #c(3 -4.0) #c(3 -4)) → T
```

### Recursive comparison of lists

Like `equal`, `equalp` recursively descends into cons cells, but applies its more lenient comparison rules.

```lisp
(equalp '("Hello" 1) '("hello" 1.0)) → T
(equalp '(a (b c)) '(A (B C))) → T
```

### Array comparison by content

Unlike `equal`, `equalp` compares all arrays element by element (not just strings and bit vectors). The arrays must have the same dimensions.

```lisp
(equalp #(1 2 3) #(1 2 3)) → T
(equalp #(1 2 3) #(1.0 2.0 3.0)) → T

(let ((a1 (make-array 6 :element-type 'integer
                        :initial-contents '(1 1 1 3 5 7)))
      (a2 (make-array 8 :element-type 'integer
                        :initial-contents '(1 1 1 3 5 7 2 6)
                        :fill-pointer 6)))
  (equalp a1 a2)) → T
```

### Structure comparison by slot values

`equalp` descends into structures of the same class, comparing their slots recursively with `equalp`.

```lisp
(defstruct point x y)

(equalp (make-point :x 1 :y 2)
        (make-point :x 1 :y 2)) → T

(equalp (make-point :x 1 :y 2)
        (make-point :x 1 :y 3)) → NIL
```

### Everything that is equal is also equalp

`equalp` is the most permissive of the standard equality predicates. If two objects are `equal`, they are always `equalp`, but not vice versa.

```lisp
(equal "Foo" "foo") → NIL
(equalp "Foo" "foo") → T

(equal 1 1.0) → NIL
(equalp 1 1.0) → T
```
