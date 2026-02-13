---
title: "load-logical-pathname-translations"
---

# load-logical-pathname-translations

import LoadLogicalPathnameTranslationsFunction from './_load-logical-pathname-translations_function.md';

<LoadLogicalPathnameTranslationsFunction />

## Expanded Reference: load-logical-pathname-translations

### Loading translations for a logical host

`load-logical-pathname-translations` searches for and loads the translation definitions for a logical host. The search mechanism is implementation-defined. It returns true if translations were loaded, nil if the host was already defined.

```lisp
;; If "SYS" is already a known logical host, returns false
(load-logical-pathname-translations "SYS")
→ NIL  ; host already defined, implementation-dependent
```

### Returns false for already-defined hosts

If the host is already defined (e.g., via a prior `setf` of `logical-pathname-translations`), no loading is attempted and false is returned.

```lisp
(setf (logical-pathname-translations "MYKNOWNHOST")
      '(("**;*.*.*" "/tmp/**/*.*")))

(load-logical-pathname-translations "MYKNOWNHOST")
→ NIL
```

### Error on unknown host with no definition file

If the host is not defined and no definition can be found by the implementation's search mechanism, an error is signaled.

```lisp
;; This will signal an error if "NONEXISTENT-HOST-XYZ" has no
;; translation file available:
;; (load-logical-pathname-translations "NONEXISTENT-HOST-XYZ")
;; => ERROR: No translations found for logical host NONEXISTENT-HOST-XYZ
```
