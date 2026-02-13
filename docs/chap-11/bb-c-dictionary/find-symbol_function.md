---
title: "find-symbol"
---

# find-symbol

import FindSymbolFunction from './_find-symbol_function.md';

<FindSymbolFunction />

## Expanded Reference: find-symbol

### Basic Usage: Looking Up a Symbol by Name

`find-symbol` searches for a symbol by name in a package. Unlike `intern`, it never creates a new symbol.

```lisp
(find-symbol "CAR" "COMMON-LISP")
;; → CAR, :EXTERNAL

(find-symbol "CAR" "COMMON-LISP-USER")
;; → CAR, :INHERITED
```

### When No Symbol is Found

Both return values are NIL when the symbol does not exist.

```lisp
(find-symbol "XYZZY-NONEXISTENT" "COMMON-LISP-USER")
;; → NIL, NIL
```

### Status Values Explained

The second value indicates the symbol's accessibility in the specified package.

```lisp
;; :EXTERNAL - present and exported
(find-symbol "CONS" "COMMON-LISP")
;; → CONS, :EXTERNAL

;; :INHERITED - accessible via use-package, not directly present
(find-symbol "CONS" "COMMON-LISP-USER")
;; → CONS, :INHERITED

;; :INTERNAL - present but not exported
(make-package "FS-DEMO" :use '())
(intern "SECRET" "FS-DEMO")
(find-symbol "SECRET" "FS-DEMO")
;; → FS-DEMO::SECRET, :INTERNAL
```

### Case Sensitivity

`find-symbol` is case-sensitive. Standard CL symbols are uppercase.

```lisp
(find-symbol "car" "COMMON-LISP")
;; → NIL, NIL

(find-symbol "CAR" "COMMON-LISP")
;; → CAR, :EXTERNAL
```

### Finding NIL in Different Packages

The symbol NIL can be tricky because it is also the boolean false.

```lisp
(find-symbol "NIL" "COMMON-LISP")
;; → NIL, :EXTERNAL
;; The first value is the symbol NIL, the second is :EXTERNAL

(find-symbol "NIL" "COMMON-LISP-USER")
;; → NIL, :INHERITED
```

### Using find-symbol to Check Before Acting

`find-symbol` is useful when you want to check whether a symbol exists without creating one as a side effect.

```lisp
(make-package "CHECK-FIRST" :use '())

;; Does "MAYBE" exist? No.
(find-symbol "MAYBE" "CHECK-FIRST")
;; → NIL, NIL

;; Now create it with intern
(intern "MAYBE" "CHECK-FIRST")
;; → CHECK-FIRST::MAYBE, NIL

;; Now find-symbol can find it
(find-symbol "MAYBE" "CHECK-FIRST")
;; → CHECK-FIRST::MAYBE, :INTERNAL
```
