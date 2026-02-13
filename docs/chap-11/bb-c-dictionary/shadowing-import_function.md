---
title: "shadowing-import"
---

# shadowing-import

import ShadowingImportFunction from './_shadowing-import_function.md';

<ShadowingImportFunction />

## Expanded Reference: shadowing-import

### Basic Usage: Importing a Symbol and Adding It to the Shadowing List

`shadowing-import` is like `import`, but it does not signal a name conflict error. The imported symbol is added to the package's shadowing symbols list.

```lisp
(defpackage "ORIGIN-SI" (:use) (:export "ITEM"))
(make-package "DEST-SI" :use '())
(intern "ITEM" "DEST-SI")  ; a different symbol with the same name

(find-symbol "ITEM" "DEST-SI")
;; → DEST-SI::ITEM, :INTERNAL

;; shadowing-import replaces DEST-SI::ITEM with ORIGIN-SI:ITEM
(shadowing-import (find-symbol "ITEM" "ORIGIN-SI") "DEST-SI")
;; → T

(find-symbol "ITEM" "DEST-SI")
;; → ORIGIN-SI:ITEM, :INTERNAL

(package-shadowing-symbols "DEST-SI")
;; → (ORIGIN-SI:ITEM)
```

### Resolving Name Conflicts Between Used Packages

`shadowing-import` is useful for resolving conflicts when two used packages export symbols with the same name.

```lisp
(defpackage "A-SI" (:use) (:export "CLASH"))
(defpackage "B-SI" (:use) (:export "CLASH"))
(make-package "C-SI" :use '())

;; Import A's CLASH as the shadowing symbol before using both packages
(shadowing-import (find-symbol "CLASH" "A-SI") "C-SI")
(use-package '("A-SI" "B-SI") "C-SI")
;; → T  ; no conflict because C-SI::CLASH shadows B-SI:CLASH

(find-symbol "CLASH" "C-SI")
;; → A-SI:CLASH, :INTERNAL
```

### Difference from import

Regular `import` would signal an error if a different symbol with the same name is already accessible. `shadowing-import` silently replaces it.

```lisp
(defpackage "NEW-SI" (:use))
(intern "THING" "NEW-SI")

;; Create an unrelated symbol to import
(defpackage "OTHER-SI" (:use) (:export "THING"))

;; import would signal an error here, but shadowing-import does not
(shadowing-import (find-symbol "THING" "OTHER-SI") "NEW-SI")
;; → T

;; The old THING is gone, replaced by OTHER-SI's THING
(find-symbol "THING" "NEW-SI")
;; → OTHER-SI:THING, :INTERNAL
```

### The Symbol is Added to package-shadowing-symbols

```lisp
(make-package "SHADOW-LIST-SI" :use '())
(package-shadowing-symbols "SHADOW-LIST-SI")
;; → ()

(shadowing-import 'cl:car "SHADOW-LIST-SI")
;; → T

(package-shadowing-symbols "SHADOW-LIST-SI")
;; → (CAR)
```
