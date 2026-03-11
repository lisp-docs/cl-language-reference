---
title: "string=, string/=, string<, string>, string<=, string>=, string-equal, string-not-equal, string-lessp, string-greaterp, string-not-greaterp, string-not-lessp"
---

# string=, string/=, string&lt;, string&gt;, string&lt;=, string&gt;=, string-equal, string-not-equal, string-lessp, string-greaterp, string-not-greaterp, string-not-lessp

import StringEquality from './_string-equality.md';

<StringEquality />

## Expanded Reference: string=, string/=, string&lt;, string&gt;, string&lt;=, string&gt;=, string-equal, string-not-equal, string-lessp, string-greaterp, string-not-greaterp, string-not-lessp

### Case-sensitive equality with string=

`string=` returns true if both strings contain the same characters in the same positions. It is case-sensitive.

```lisp
(string= "foo" "foo")
=> T

(string= "foo" "Foo")
=> NIL

(string= "foo" "bar")
=> NIL

(string= "" "")
=> T
```

### Case-insensitive equality with string-equal

`string-equal` works like `string=` but ignores case differences.

```lisp
(string-equal "foo" "Foo")
=> T

(string-equal "HELLO" "hello")
=> T

(string-equal "abc" "abd")
=> NIL
```

### Inequality returns the mismatch index

The inequality functions (`string/=`, `string<`, etc.) return the index of the first mismatch when the comparison is true, or NIL when false.

```lisp
(string< "aaaa" "aaab")
=> 3

(string> "aaab" "aaaa")
=> 3

(string/= "hello" "help!")
=> 3

(string/= "hello" "hello")
=> NIL
```

### Ordering comparisons

`string<`, `string>`, `string<=`, and `string>=` perform lexicographic ordering.

```lisp
(string< "apple" "banana")
=> 0

(string>= "aaaaa" "aaaa")
=> 4

(string<= "abc" "abc")
=> 3

(string> "abc" "abc")
=> NIL
```

### Using :start and :end to compare substrings

All comparison functions accept `:start1`, `:end1`, `:start2`, and `:end2` to restrict the comparison to substrings.

```lisp
(string= "together" "frog" :start1 1 :end1 3 :start2 2)
=> T

(string= "abcd" "01234abcd9012" :start2 5 :end2 9)
=> T

(string-lessp "012AAAA789" "01aaab6" :start1 3 :end1 7 :start2 2 :end2 6)
=> 6
```

### Case-insensitive ordering with string-lessp and friends

`string-lessp`, `string-greaterp`, `string-not-greaterp`, and `string-not-lessp` compare like their case-sensitive counterparts but ignore case.

```lisp
(string-lessp "apple" "Banana")
=> 0

(string-not-greaterp "Abcde" "abcdE")
=> 5

(string-not-equal "AAAA" "aaaA")
=> NIL
```

### Symbols as string designators

These functions accept string designators, so symbols can be compared directly.

```lisp
(string= 'hello 'hello)
=> T

(string< 'abc 'abd)
=> 2
```
