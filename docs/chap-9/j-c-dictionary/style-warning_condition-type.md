---
title: "style-warning"
---

# style-warning

import StyleWarningConditionType from './_style-warning_condition-type.md';

<StyleWarningConditionType />

## Expanded Reference: style-warning

### The style-warning Type

`style-warning` is a subtype of `warning` used for conditions related to code style issues, such as unused variables or redefined functions. Implementations typically signal `style-warning` conditions during compilation.

```lisp
(subtypep 'style-warning 'warning)
```

```lisp
→ T, T
```

### Signaling a Style Warning

```lisp
(handler-bind ((style-warning (lambda (c)
                                (declare (ignore c))
                                (muffle-warning))))
  (warn 'style-warning
        :format-control "Variable ~S is unused"
        :format-arguments '(x))
  :done)
```

```lisp
→ :DONE
```

### Distinguishing Style Warnings from Other Warnings

```lisp
(handler-case
    (warn 'simple-warning :format-control "regular warning")
  (style-warning () :style)
  (warning () :other-warning))
```

```lisp
→ :OTHER-WARNING
```
