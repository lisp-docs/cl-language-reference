---
title: "features"
---

# \*features\*

import FeaturesVariable from './_features_variable.md';

<FeaturesVariable />

## Expanded Reference: \*features\*

### Inspecting the features list

`*features*` is a list of symbols (typically keywords) describing aspects of the implementation and environment.

```lisp
(listp *features*)
=> T

;; Common features include :common-lisp and implementation-specific ones
(member :common-lisp *features*)
;; => (:COMMON-LISP ...)  ; implementation-dependent
```

### Using features with read-time conditionals

The `#+` and `#-` reader macros test for the presence or absence of features in `*features*`.

```lisp
;; This form is read only if :common-lisp is in *features*
#+common-lisp (format nil "This is a Common Lisp implementation")
=> "This is a Common Lisp implementation"

;; This form is skipped because :nonexistent-feature is not in *features*
#+nonexistent-feature (error "should not happen")
;; => ; nothing (the form is skipped)
```

### Checking for specific implementation features

You can test for specific features programmatically using `member`.

```lisp
(if (member :ansi-cl *features*)
    "ANSI CL conforming"
    "Pre-ANSI or non-conforming")
;; => "ANSI CL conforming"  ; implementation-dependent
```

### Adding custom features

You can push custom feature symbols onto `*features*` for use in read-time conditionals.

```lisp
(push :my-application-debug *features*)

#+my-application-debug (format nil "Debug mode active")
=> "Debug mode active"
```
