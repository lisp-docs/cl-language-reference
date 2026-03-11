---
title: "case, ccase, ecase"
---

# case, ccase, ecase

import CaseMacro from './_case_ccase_ecase_macro.md';

<CaseMacro />

## Expanded Reference: case, ccase, ecase

### Basic case dispatch

`case` compares a key value against sets of keys using `eql`. When a match is found, the corresponding body forms are evaluated.

```lisp
(defun describe-day (day)
  (case day
    (:monday    "Start of the work week")
    (:friday    "Almost weekend")
    (:saturday  "Weekend!")
    (:sunday    "Weekend!")
    (otherwise  "Midweek")))

(describe-day :monday)
=> "Start of the work week"
(describe-day :wednesday)
=> "Midweek"
(describe-day :saturday)
=> "Weekend!"
```

### Grouping multiple keys in a single clause

A clause can match multiple keys by providing them as a list.

```lisp
(defun weekend-p (day)
  (case day
    ((:saturday :sunday) t)
    (otherwise nil)))

(weekend-p :saturday)
=> T
(weekend-p :tuesday)
=> NIL
```

### case returns NIL when no clause matches and there is no otherwise

```lisp
(case 99
  (1 "one")
  (2 "two")
  (3 "three"))
=> NIL
```

### Using ecase for exhaustive matching

`ecase` signals a non-correctable error if no clause matches, which is useful when you expect the key to always match one of the clauses.

```lisp
(defun direction-vector (dir)
  (ecase dir
    (:north '(0 1))
    (:south '(0 -1))
    (:east  '(1 0))
    (:west  '(-1 0))))

(direction-vector :north)
=> (0 1)
(direction-vector :east)
=> (1 0)

;; (direction-vector :up)
;; would signal a TYPE-ERROR because :UP is not one of the expected keys.
```

### Matching t and nil as literal keys

In `case`, the symbols `t` and `otherwise` in the key position designate the default clause. To match the actual values `t` or `nil` as keys, wrap them in a list.

```lisp
(defun bool-to-string (val)
  (case val
    ((t)   "true")
    ((nil) "false")
    (otherwise "unknown")))

(bool-to-string t)
=> "true"
(bool-to-string nil)
=> "false"
(bool-to-string 42)
=> "unknown"
```

### case uses eql for comparison

Because `case` uses `eql`, it works with numbers, characters, and symbols, but not with strings or lists.

```lisp
(case 2
  (1 "one")
  (2 "two")
  (3 "three"))
=> "two"

(case #\a
  (#\a "lowercase a")
  (#\A "uppercase A"))
=> "lowercase a"
```
