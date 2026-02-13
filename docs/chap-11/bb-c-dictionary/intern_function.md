---
title: "intern"
---

# intern

import InternFunction from './_intern_function.md';

<InternFunction />

## Expanded Reference: intern

### Basic Usage: Creating a New Symbol

`intern` looks up a string in a package. If no symbol with that name exists, a new one is created. It returns two values: the symbol and a status indicator.

```lisp
(intern "BRAND-NEW" "COMMON-LISP-USER")
;; → BRAND-NEW, NIL
;; NIL status means a new symbol was created

(intern "BRAND-NEW" "COMMON-LISP-USER")
;; → BRAND-NEW, :INTERNAL
;; :INTERNAL means it was found as an internal symbol
```

### Status Values

The second return value indicates how the symbol was found.

```lisp
;; Finding an inherited symbol
(intern "CAR" "COMMON-LISP-USER")
;; → CAR, :INHERITED

;; Finding an external symbol
(intern "CAR" "COMMON-LISP")
;; → CAR, :EXTERNAL

;; Creating a new symbol in a fresh package
(make-package "INTERN-DEMO" :use '())
(intern "FRESH" "INTERN-DEMO")
;; → INTERN-DEMO::FRESH, NIL
;; NIL means no pre-existing symbol was found

;; Looking it up again
(intern "FRESH" "INTERN-DEMO")
;; → INTERN-DEMO::FRESH, :INTERNAL
```

### Case Sensitivity

Symbol names are case-sensitive. Standard Common Lisp symbols are uppercase.

```lisp
(intern "hello" "COMMON-LISP-USER")
;; → |hello|, NIL  ; a new symbol with a lowercase name

(intern "HELLO" "COMMON-LISP-USER")
;; → HELLO, NIL  ; a different symbol with an uppercase name

(eq (intern "hello") (intern "HELLO"))
;; → NIL
```

### Interning into the KEYWORD Package

Symbols interned in the KEYWORD package are automatically external and self-evaluating.

```lisp
(intern "MY-KEY" "KEYWORD")
;; → :MY-KEY, NIL

(intern "MY-KEY" "KEYWORD")
;; → :MY-KEY, :EXTERNAL
```

### Difference from find-symbol

Unlike `find-symbol`, `intern` creates a new symbol if one is not found.

```lisp
(make-package "LOOKUP-TEST" :use '())

(find-symbol "ABSENT" "LOOKUP-TEST")
;; → NIL, NIL  ; not found, nothing created

(intern "ABSENT" "LOOKUP-TEST")
;; → LOOKUP-TEST::ABSENT, NIL  ; not found, so created

(find-symbol "ABSENT" "LOOKUP-TEST")
;; → LOOKUP-TEST::ABSENT, :INTERNAL  ; now it exists
```
