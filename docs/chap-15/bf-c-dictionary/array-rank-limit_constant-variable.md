---
title: "array-rank-limit"
---

# array-rank-limit

import ArrayRankLimitConstantVariable from './_array-rank-limit_constant-variable.md';

<ArrayRankLimitConstantVariable />

## Expanded Reference: array-rank-limit

### Basic Usage

`array-rank-limit` is a constant that specifies the upper exclusive bound on the rank (number of dimensions) of an array. The actual value is implementation-dependent but must be at least 8.

```lisp
;; Check the value (implementation-dependent)
array-rank-limit
→ 65529  ; example value, varies by implementation

;; It is always at least 8
(>= array-rank-limit 8)
→ T
```

### Relationship to Array Creation

The number of dimensions of any array must be less than `array-rank-limit`.

```lisp
;; Valid: rank 7 is always supported (< 8)
(array-rank (make-array '(2 2 2 2 2 2 2)))
→ 7
```

### Checking Rank Limits

```lisp
(defun valid-rank-p (n)
  "Check whether an array of rank N can be created."
  (and (>= n 0) (< n array-rank-limit)))

(valid-rank-p 3)
→ T

(valid-rank-p 0)
→ T
```
