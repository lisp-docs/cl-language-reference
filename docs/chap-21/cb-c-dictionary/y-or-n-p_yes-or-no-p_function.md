---
title: "y-or-n-p, yes-or-no-p"
---

# y-or-n-p, yes-or-no-p

import YOrNPFunction from './_y-or-n-p_yes-or-no-p_function.md';

<YOrNPFunction />

## Expanded Reference: y-or-n-p, yes-or-no-p

### Overview

`y-or-n-p` and `yes-or-no-p` are interactive functions that ask the user a yes/no question via `*query-io*` and return a generalized boolean. They require user interaction and cannot be demonstrated in non-interactive examples.

### y-or-n-p with a Message

`y-or-n-p` expects a quick single-character response (e.g., Y or N).

```lisp
;; Interactive usage (requires user input):
;; (y-or-n-p "Save changes?")
;; prints: Save changes? (Y or N)
;; If user types Y: returns T
;; If user types N: returns NIL
```

### yes-or-no-p with a Message

`yes-or-no-p` expects the user to type the full word "yes" or "no".

```lisp
;; Interactive usage:
;; (yes-or-no-p "Delete all files?")
;; prints: Delete all files? (Yes or No)
;; If user types yes: returns T
;; If user types no: returns NIL
```

### Format Control Arguments

Both functions accept format control strings and arguments, just like `format`.

```lisp
;; (y-or-n-p "Process ~D items?" 42)
;; prints: Process 42 items? (Y or N)

;; (yes-or-no-p "Overwrite ~A?" "data.txt")
;; prints: Overwrite data.txt? (Yes or No)
```

### Without a Message

When called with no arguments, only the prompt (e.g., "(Y or N)") is displayed.

```lisp
;; (y-or-n-p)
;; prints: (Y or N)
```
