---
title: "search"
---

# search

import SearchFunction from './_search_function.md';

<SearchFunction />

## Expanded Reference: search

### Basic substring search

`search` finds the first occurrence of sequence-1 within sequence-2 and returns the index into sequence-2 where the match begins. Returns `NIL` if no match is found.

```lisp
(search "dog" "it's a dog's life")
=> 7
(search "cat" "it's a dog's life")
=> NIL
```

### Searching in lists

`search` works with any sequence types, not just strings.

```lisp
(search '(c d) '(a b c d e))
=> 2
(search '(x y) '(a b c))
=> NIL
```

### Case-insensitive search with :test

```lisp
(search "WORLD" "hello world" :test #'char-equal)
=> 6
```

### Searching from the end

With `:from-end t`, the position of the last (rightmost) match is returned.

```lisp
(search "an" "banana")
=> 1
(search "an" "banana" :from-end t)
=> 3
```

### Using :key with search

The `:key` function is applied to elements of both sequences before comparison.

```lisp
(search '(0 1) '(2 4 6 1 3 5) :key #'oddp)
=> 2
```

### Restricting search ranges with start/end

You can limit which portions of each sequence participate in the search.

```lisp
(search "ab" "aababc" :start2 2)
=> 3
```
