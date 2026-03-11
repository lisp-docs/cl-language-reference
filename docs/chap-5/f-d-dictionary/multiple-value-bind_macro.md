---
title: "multiple-value-bind"
---

# multiple-value-bind

import MultipleValueBindMacro from './_multiple-value-bind_macro.md';

<MultipleValueBindMacro />

## Expanded Reference: multiple-value-bind

### Capturing multiple return values from floor

`multiple-value-bind` binds variables to the multiple values returned by a form.

```lisp
(multiple-value-bind (quotient remainder)
    (floor 17 5)
  (list quotient remainder))
=> (3 2)
```

### Decomposing a floating point number

`decode-float` returns three values: significand, exponent, and sign.

```lisp
(multiple-value-bind (significand exponent sign)
    (decode-float -3.5)
  (list significand exponent sign))
=> (0.875 2 -1.0)
```

### Extra variables are bound to NIL

If the form returns fewer values than there are variables, the excess variables are bound to `nil`.

```lisp
(multiple-value-bind (a b c)
    (values 1 2)
  (list a b c))
=> (1 2 NIL)
```

### Excess values are discarded

If the form returns more values than there are variables, the extra values are simply discarded.

```lisp
(multiple-value-bind (q)
    (floor 10 3)
  q)
=> 3
```

### Using with truncate for integer division

A practical use case: getting just the integer part and remainder of a division.

```lisp
(defun divide-with-remainder (dividend divisor)
  (multiple-value-bind (quotient remainder)
      (truncate dividend divisor)
    (format nil "~A divided by ~A is ~A remainder ~A"
            dividend divisor quotient remainder)))
=> DIVIDE-WITH-REMAINDER

(divide-with-remainder 17 5)
=> "17 divided by 5 is 3 remainder 2"
```

### Capturing hash table lookup results

`gethash` returns the value and a boolean indicating whether the key was found.

```lisp
(let ((ht (make-hash-table)))
  (setf (gethash :a ht) 1)
  (multiple-value-bind (value found-p)
      (gethash :b ht)
    (if found-p
        (format nil "Found: ~A" value)
        "Not found")))
=> "Not found"
```
