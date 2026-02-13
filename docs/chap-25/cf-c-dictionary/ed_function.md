---
title: "ed"
---

# ed

import EdFunction from './_ed_function.md';

<EdFunction />

## Expanded Reference: ed

### Invoking the editor

`ed` invokes an implementation-dependent editor. With no argument, it enters the editor. With a pathname, it opens that file for editing. With a function name, it opens the source of that function if available.

```lisp
;; Open the editor (implementation-dependent)
;; (ed)

;; Edit a specific file
;; (ed "/tmp/my-code.lisp")

;; Edit a function's source (if the implementation supports it)
;; (ed 'my-function)
```

### Editing a file

When given a pathname argument, `ed` opens that file in the editor.

```lisp
;; (ed #P"/home/user/project/main.lisp")
;; Opens the file in the implementation's editor
→ ; implementation-dependent
```

### Editing a function definition

When given a symbol naming a function, some implementations can locate and edit the function's source code.

```lisp
;; (defun greet (name) (format nil "Hello, ~A!" name))
;; (ed 'greet)
;; Opens the source of GREET in the editor (if supported)
→ ; implementation-dependent
```

### Return value

The return value of `ed` is implementation-dependent.

```lisp
;; (ed)
;; => NIL  ; or implementation-dependent value
```
