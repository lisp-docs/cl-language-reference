---
title: "member, member-if, member-if-not"
---

# member, member-if, member-if-not

import MemberFunction from './_member_member-if_member-if-not_function.md';

<MemberFunction />

## Expanded Reference: member, member-if, member-if-not

### Basic membership test with member

`member` searches a list for an item. If found, it returns the tail of the list starting with that item; otherwise it returns NIL. The default test is `eql`.

```lisp
(member 'c '(a b c d e))
→ (C D E)

(member 'z '(a b c d e))
→ NIL
```

### Using member as a boolean test

Since `member` returns a non-NIL tail when the item is found, it works naturally in boolean contexts.

```lisp
(if (member 3 '(1 2 3 4 5))
    "found"
    "not found")
→ "found"
```

### String membership with :test

The default `eql` test does not work for strings. Use `:test #'equal` or `:test #'string=` for string comparison.

```lisp
(member "b" '("a" "b" "c") :test #'equal)
→ ("b" "c")

(member "b" '("a" "b" "c"))
→ NIL
```

### member-if: search with a predicate

`member-if` searches for the first element that satisfies a predicate.

```lisp
(member-if #'evenp '(1 3 5 4 7))
→ (4 7)

(member-if #'stringp '(1 :key "hello" 42))
→ ("hello" 42)
```

### Using the :key argument

The `:key` function extracts the part of each element to test against.

```lisp
(member 'b '((a 1) (b 2) (c 3)) :key #'car)
→ ((B 2) (C 3))

(member-if #'evenp '((a 1) (b 2) (c 3)) :key #'cadr)
→ ((B 2) (C 3))
```

### Practical use: finding and processing from a point

Because `member` returns the tail of the list starting from the match, you can process everything from that point onward.

```lisp
(let ((data '(setup load :start process1 process2 cleanup)))
  (rest (member :start data)))
→ (PROCESS1 PROCESS2 CLEANUP)
```
