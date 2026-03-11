---
title: "package-nicknames"
---

# package-nicknames

import PackageNicknamesFunction from './_package-nicknames_function.md';

<PackageNicknamesFunction />

## Expanded Reference: package-nicknames

### Basic Usage: Retrieving Package Nicknames

`package-nicknames` returns a list of nickname strings for a package. The primary name is not included.

```lisp
(defpackage "GRAPHICS-LIBRARY"
  (:use "COMMON-LISP")
  (:nicknames "GLIB" "GL"))

(package-nicknames "GRAPHICS-LIBRARY")
=> ("GLIB" "GL")
```

### Package with No Nicknames

A package without nicknames returns an empty list.

```lisp
(package-nicknames "COMMON-LISP-USER")
=> ("CL-USER")

(make-package "NO-NICKS" :use '())
(package-nicknames "NO-NICKS")
=> ()
```

### Using make-package with Nicknames

```lisp
(make-package "NETWORKING" :nicknames '("NET" "NW") :use '())
==> #<PACKAGE "NETWORKING">

(package-nicknames "NETWORKING")
=> ("NET" "NW")
```

### Nicknames After rename-package

`rename-package` replaces all nicknames.

```lisp
(make-package "OLD-NAME" :nicknames '("ON") :use '())
(package-nicknames "OLD-NAME")
=> ("ON")

(rename-package "OLD-NAME" "NEW-NAME" '("NN" "N"))
(package-nicknames "NEW-NAME")
=> ("NN" "N")
```
