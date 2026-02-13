---
title: "break-on-signals"
---

# \*break-on-signals\*

import BreakOnSignalsVariable from './_break-on-signals_variable.md';

<BreakOnSignalsVariable />

## Expanded Reference: \*break-on-signals\*

### Default Value

`*break-on-signals*` is `nil` by default, meaning no automatic debugger entry before signaling.

```lisp
*break-on-signals*
```

```lisp
→ NIL
```

### Breaking on All Errors

Setting `*break-on-signals*` to a type specifier causes the debugger to be entered before signaling any condition matching that type. The `continue` restart proceeds with normal signaling.

```lisp
;; (let ((*break-on-signals* 'error))
;;   (ignore-errors (error "test")))
;; => enters debugger BEFORE the error is signaled
;; => after continuing, ignore-errors handles the error normally
```

### Breaking on Warnings

You can use it to debug warning conditions too.

```lisp
;; (let ((*break-on-signals* 'warning))
;;   (warn "something suspicious"))
;; => enters debugger before the warning is signaled
```

### Using a Specific Type

For targeted debugging, set it to a specific condition type.

```lisp
;; Only break on type-error conditions:
;; (let ((*break-on-signals* 'type-error))
;;   (check-type x integer))
```

### Debugging Tip

Use the most specific type possible. Setting `*break-on-signals*` to `t` (matching all conditions) can cause excessive debugger entries because many internal operations signal conditions.

```lisp
;; Avoid this in production:
;; (setf *break-on-signals* t)  ; too broad
;;
;; Prefer this for targeted debugging:
;; (setf *break-on-signals* 'my-custom-error)
```
