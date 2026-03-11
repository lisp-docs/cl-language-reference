---
title: "translate-logical-pathname"
---

# translate-logical-pathname

import TranslateLogicalPathnameFunction from './_translate-logical-pathname_function.md';

<TranslateLogicalPathnameFunction />

## Expanded Reference: translate-logical-pathname

### Translating a logical pathname to physical

`translate-logical-pathname` converts a logical pathname into a physical pathname using the translation rules established for the logical host.

```lisp
(setf (logical-pathname-translations "MYAPP")
      '(("**;*.*.*" "/opt/myapp/**/*.*")))

(translate-logical-pathname "MYAPP:SRC;MAIN.LISP")
;; => #P"/opt/myapp/src/main.lisp"  ; exact result is implementation-dependent
```

### Physical pathnames pass through unchanged

If the argument is already a physical pathname, it is returned as-is.

```lisp
(translate-logical-pathname #P"/tmp/test.lisp")
=> #P"/tmp/test.lisp"
```

### Chained translations

If a translation rule maps a logical pathname to another logical pathname, `translate-logical-pathname` continues translating until a physical pathname is reached.

```lisp
(setf (logical-pathname-translations "STAGE")
      '(("**;*.*.*" "/staging/**/*.*")))

(setf (logical-pathname-translations "PROD")
      '(("**;*.*.*" "STAGE:**;*.*.*")))

(translate-logical-pathname "PROD:DATA;CONFIG.YAML")
;; => #P"/staging/data/config.yaml"  ; implementation-dependent
```

### String input requires a host component

When given a string argument, it must be a valid logical pathname namestring that includes the host and its colon.

```lisp
(setf (logical-pathname-translations "DOCS")
      '(("**;*.*.*" "/usr/share/docs/**/*.*")))

(translate-logical-pathname "DOCS:MANUAL;INTRO.TXT")
;; => #P"/usr/share/docs/manual/intro.txt"  ; implementation-dependent
```
