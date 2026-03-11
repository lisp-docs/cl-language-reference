---
title: "revappend, nreconc"
---

# revappend, nreconc

import RevappendFunction from './_revappend_nreconc_function.md';

<RevappendFunction />

## Expanded Reference: revappend, nreconc

### Basic revappend usage

`revappend` reverses the first list and appends the second list (tail) to the result. It is equivalent to `(nconc (reverse list) tail)` but typically more efficient.

```lisp
(revappend '(1 2 3) '(4 5 6))
=> (3 2 1 4 5 6)

(revappend '(a b c) '())
=> (C B A)
```

### revappend does not modify its arguments

```lisp
(let ((lst '(1 2 3))
      (tail '(a b)))
  (revappend lst tail)
  (values lst tail))
=> (1 2 3)
=> (A B)
```

### Non-list tail values

The tail argument does not have to be a list. It becomes the cdr of the last cons in the result, creating a dotted list.

```lisp
(revappend '(1 2 3) 'end)
=> (3 2 1 . END)

(revappend '() 'x)
=> X
```

### nreconc is the destructive version

`nreconc` is like `revappend` but may destructively modify the first list. The tail is never modified.

```lisp
(let ((lst (list 1 2 3)))
  (nreconc lst '(a b c)))
=> (3 2 1 A B C)
```

### Practical use: accumulate-and-reverse pattern

`revappend` is commonly used in the pattern of accumulating results in reverse order and then reversing at the end, appending remaining elements.

```lisp
;; Take elements while they satisfy a predicate, return them
;; in order along with the rest of the list
(defun take-while (pred lst)
  (do ((rest lst (cdr rest))
       (acc '() (cons (car rest) acc)))
      ((or (null rest) (not (funcall pred (car rest))))
       (values (revappend acc '()) rest))))

(take-while #'evenp '(2 4 6 7 8))
=> (2 4 6)
=> (7 8)
```
