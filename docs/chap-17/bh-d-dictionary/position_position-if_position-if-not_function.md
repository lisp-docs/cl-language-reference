---
title: "position, position-if, position-if-not"
---

# position, position-if, position-if-not

import PositionFunction from './_position_position-if_position-if-not_function.md';

<PositionFunction />

## Expanded Reference: position, position-if, position-if-not

### Finding the index of an element

`position` returns the zero-based index of the first matching element, or `NIL` if not found.

```lisp
(position 'c '(a b c d e))
=> 2
(position #\l "hello")
=> 2
(position 99 '(1 2 3))
=> NIL
```

### Finding a position by predicate

`position-if` returns the index of the first element satisfying the predicate.

```lisp
(position-if #'evenp '(1 3 5 2 7))
=> 3
(position-if #'digit-char-p "abc123")
=> 3
```

### Searching from the end

With `:from-end t`, the position of the rightmost matching element is returned. The index is still relative to the start of the sequence.

```lisp
(position #\a "banana")
=> 1
(position #\a "banana" :from-end t)
=> 5
```

### Using :key to search by a derived value

```lisp
(position 3 '((a 1) (b 2) (c 3)) :key #'second)
=> 2

(position-if #'oddp '((1 a) (2 b) (3 c)) :start 1 :key #'car)
=> 2
```

### Restricting the search range

The `:start` and `:end` keywords limit the search, but the returned index is always relative to the beginning of the entire sequence.

```lisp
(position #\o "hello world" :start 5)
=> 7
```

### Practical example: splitting a string

`position` is often used to locate delimiters for parsing.

```lisp
(let* ((str "key=value")
       (pos (position #\= str)))
  (values (subseq str 0 pos)
          (subseq str (1+ pos))))
=> "key"
=> "value"
```
