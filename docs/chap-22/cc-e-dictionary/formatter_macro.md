---
title: "formatter"
---

# formatter

import FormatterMacro from './_formatter_macro.md';

<FormatterMacro />

## Expanded Reference: formatter

### Basic Usage

`formatter` compiles a format control string into a function at macro-expansion time. The resulting function takes a stream as its first argument, followed by the format arguments.

```lisp
(funcall (formatter "~A + ~A = ~A") *standard-output* 2 3 5)
.. 2 + 3 = 5
=> NIL
```

### Using with format

The function returned by `formatter` can be passed to `format` in place of a string.

```lisp
(format t (formatter "Hello, ~A!~%") "world")
.. Hello, world!
..
=> NIL

(format nil (formatter "~D items") 42)
=> "42 items"
```

### Return Value -- Remaining Arguments

When called directly with `funcall`, the function returns the tail of the argument list that was not consumed by the format string.

```lisp
(funcall (formatter "~A ~A") *standard-output* 'x 'y 'z 'w)
.. X Y
=> (Z W)
```

### Pre-compiled for Efficiency

`formatter` is useful when the same format string is used repeatedly, since it compiles the format string once at compile time rather than interpreting it each time.

```lisp
(let ((fmt (formatter "Item: ~A, Qty: ~D~%")))
  (with-output-to-string (s)
    (funcall fmt s "Widget" 10)
    (funcall fmt s "Gadget" 5)))
=> "Item: Widget, Qty: 10
Item: Gadget, Qty: 5
"
```

### Using with set-pprint-dispatch

`formatter` can produce functions suitable for use with `set-pprint-dispatch` and with `~/...~/` format directives.

```lisp
(let ((*print-pprint-dispatch* (copy-pprint-dispatch))
      (*print-pretty* t))
  (set-pprint-dispatch '(cons (eql :pair))
    (formatter "~:<~W ~:_~W ~:_~W~:>"))
  (write-to-string '(:pair "key" "value")))
=> "(:PAIR \"key\" \"value\")"
```
