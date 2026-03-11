---
title: "eql"
---

# eql

import EqlFunction from './_eql_function.md';

<EqlFunction />

## Expanded Reference: eql

### Basic value comparison

`eql` is the default comparison predicate in Common Lisp. It is like `eq` but additionally guarantees correct comparison for numbers of the same type and for characters.

```lisp
(eql 'a 'a) → T
(eql 'a 'b) → NIL
(eql 3 3) → T
(eql #\A #\A) → T
```

### Numbers must be the same type and value

`eql` only considers numbers equal when they are of the same type and have the same value. It does not perform numeric type coercion.

```lisp
(eql 3 3) → T
(eql 3 3.0) → NIL
(eql 3.0 3.0) → T
(eql #c(3 -4) #c(3 -4)) → T
(eql #c(3 -4.0) #c(3 -4)) → NIL
```

### Lists and other compound objects

Like `eq`, `eql` does not descend into compound structures. Two separately constructed lists are not `eql`.

```lisp
(eql (cons 'a 'b) (cons 'a 'b)) → NIL

(let ((x (list 1 2 3)))
  (eql x x)) → T
```

### Strings are not compared by content

`eql` does not compare string contents. Use `equal` or `string=` for that.

```lisp
(eql "Foo" (copy-seq "Foo")) → NIL
(eql "FOO" "foo") → NIL
```

### eql as the default test in standard functions

Many standard functions like `member`, `assoc`, and `find` use `eql` as their default `:test`. This is why they work naturally with numbers and characters.

```lisp
(member 3 '(1 2 3 4 5)) → (3 4 5)
(assoc 2 '((1 . a) (2 . b) (3 . c))) → (2 . B)
(find #\a "banana") → #\a
```
