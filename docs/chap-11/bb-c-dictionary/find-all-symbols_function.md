---
title: "find-all-symbols"
---

# find-all-symbols

import FindAllSymbolsFunction from './_find-all-symbols_function.md';

<FindAllSymbolsFunction />

## Expanded Reference: find-all-symbols

### Basic Usage: Finding Symbols Across All Packages

`find-all-symbols` searches every registered package for symbols with the given name. It returns a list of all such symbols.

```lisp
;; CAR exists in COMMON-LISP and is inherited by many packages,
;; but find-all-symbols returns each distinct symbol only once
(member 'car (find-all-symbols "CAR"))
;; => (CAR ...)
```

### Finding a Symbol That Exists in Multiple Packages

```lisp
(defpackage "FAS-A" (:use) (:export "SHARED"))
(defpackage "FAS-B" (:use) (:export "SHARED"))

;; These are two distinct symbols with the same name
(let ((results (find-all-symbols "SHARED")))
  (>= (length results) 2))
=> T
```

### Using a Symbol as the Argument

When a symbol is passed, its name string is used for the search.

```lisp
(let ((results (find-all-symbols 'car)))
  (member (find-symbol "CAR" "COMMON-LISP") results))
;; => (CAR ...)
```

### Symbols in Bare Packages Are Also Found

```lisp
(make-package "FAS-HIDDEN" :use '())
(intern "UNIQUE-FAS-SYM" "FAS-HIDDEN")

(find-all-symbols "UNIQUE-FAS-SYM")
;; => (FAS-HIDDEN::UNIQUE-FAS-SYM)
```

### The Order of Results is Implementation-Dependent

```lisp
;; The returned list may be in any order
(let ((results (find-all-symbols "CAR")))
  (every #'symbolp results))
=> T
```
