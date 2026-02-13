---
title: "logical-pathname-translations"
---

# logical-pathname-translations

import LogicalPathnameTranslationsAccessor from './_logical-pathname-translations_accessor.md';

<LogicalPathnameTranslationsAccessor />

## Expanded Reference: logical-pathname-translations

### Setting up translations for a logical host

Use `setf` with `logical-pathname-translations` to define or replace the translation rules for a logical host. Each rule is a list of (from-wildcard to-wildcard).

```lisp
(setf (logical-pathname-translations "MYAPP")
      '(("**;*.*.*" "/opt/myapp/**/*.*")))
→ (("**;*.*.*" "/opt/myapp/**/*.*"))
```

### Retrieving translations

Call `logical-pathname-translations` with a host name to retrieve the current translation list.

```lisp
(setf (logical-pathname-translations "DEMO")
      '(("CODE;*.*.*" "/home/user/code/*.*")
        ("DATA;*.*.*" "/home/user/data/*.*")))

(logical-pathname-translations "DEMO")
→ (("CODE;*.*.*" "/home/user/code/*.*")
   ("DATA;*.*.*" "/home/user/data/*.*"))  ; implementation-dependent form
```

### Multiple translation rules with ordering

Translations are tried in order. More specific patterns should appear before more general ones.

```lisp
(setf (logical-pathname-translations "LIB")
      '(("SPECIAL;CONFIG.*.*" "/etc/lib/config.*")
        ("**;*.*.*" "/usr/lib/**/*.*")))

(translate-logical-pathname "LIB:SPECIAL;CONFIG.YAML")
→ #P"/etc/lib/config.yaml"  ; implementation-dependent

(translate-logical-pathname "LIB:SRC;MAIN.LISP")
→ #P"/usr/lib/src/main.lisp"  ; implementation-dependent
```

### Replacing translations

Setting the translations replaces any previously defined rules for that host.

```lisp
(setf (logical-pathname-translations "REPLACE-TEST")
      '(("**;*.*.*" "/old/**/*.*")))

(setf (logical-pathname-translations "REPLACE-TEST")
      '(("**;*.*.*" "/new/**/*.*")))

(translate-logical-pathname "REPLACE-TEST:FILE.TXT")
→ #P"/new/file.txt"  ; implementation-dependent
```
