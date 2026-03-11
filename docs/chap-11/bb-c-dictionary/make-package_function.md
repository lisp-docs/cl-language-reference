---
title: "make-package"
---

# make-package

import MakePackageFunction from './_make-package_function.md';

<MakePackageFunction />

## Expanded Reference: make-package

### Basic Usage: Creating a Simple Package

`make-package` creates and returns a new package with the given name.

```lisp
(make-package "NETWORK")
==> #<PACKAGE "NETWORK">

(find-package "NETWORK")
==> #<PACKAGE "NETWORK">
```

### Creating a Package with Nicknames

The `:nicknames` keyword specifies alternative names for the package.

```lisp
(make-package "TEMPORARY-STORAGE" :nicknames '("TEMP-STORE" "TS"))
==> #<PACKAGE "TEMPORARY-STORAGE">

(find-package "TS")
==> #<PACKAGE "TEMPORARY-STORAGE">

(package-nicknames "TEMPORARY-STORAGE")
=> ("TEMP-STORE" "TS")
```

### Creating a Package with No Inherited Symbols

Use `:use '()` to create a bare package that inherits nothing from COMMON-LISP.

```lisp
(make-package "BARE" :use '())
==> #<PACKAGE "BARE">

;; No inherited symbols at all
(find-symbol "CAR" "BARE")
=> NIL
=> NIL

(find-symbol "+" "BARE")
=> NIL
=> NIL
```

### Creating a Package That Uses Another Package

The `:use` keyword specifies which packages' external symbols should be inherited.

```lisp
(defpackage "PROVIDER" (:use) (:export "SERVE"))
(make-package "CONSUMER" :use '("COMMON-LISP" "PROVIDER"))
==> #<PACKAGE "CONSUMER">

(find-symbol "SERVE" "CONSUMER")
;; => PROVIDER:SERVE
;; => :INHERITED

(find-symbol "CAR" "CONSUMER")
=> CAR
=> :INHERITED
```

### Symbol Names vs Package Names

Package names are strings. When a symbol is given, its name (a string) is used.

```lisp
(make-package 'my-demo :use '())
==> #<PACKAGE "MY-DEMO">

(package-name (find-package 'my-demo))
=> "MY-DEMO"
```
