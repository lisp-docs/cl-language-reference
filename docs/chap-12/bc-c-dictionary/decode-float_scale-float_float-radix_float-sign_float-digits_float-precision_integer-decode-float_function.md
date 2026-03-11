---
title: "decode-float, scale-float, float-radix, float-sign, float-digits, float-precision, integer-decode-float"
---

# decode-float, scale-float, float-radix, float-sign, float-digits, float-precision, integer-decode-float

import DecodeFloatFunction from './_decode-float_scale-float_float-radix_float-sign_float-digits_float-precision_integer-decode-float_function.md';

<DecodeFloatFunction />

## Expanded Reference: decode-float, scale-float, float-radix, float-sign, float-digits, float-precision, integer-decode-float

### decode-float: decomposing a float

`decode-float` returns three values: the significand (between 1/radix and 1), the exponent, and the sign (1.0 or -1.0). Results are implementation-dependent.

```lisp
(decode-float 0.5)
=> 0.5
=> 0
=> 1.0
(decode-float 1.0)
=> 0.5
=> 1
=> 1.0
(decode-float -1.0)
=> 0.5
=> 1
=> -1.0
(decode-float 8.0)
=> 0.5
=> 4
=> 1.0
```

### Reconstructing a float from decode-float

The original float can be reconstructed by multiplying the significand (scaled by exponent) with the sign.

```lisp
(multiple-value-bind (sig exp sign)
    (decode-float -3.5)
  (* (scale-float sig exp) sign))
=> -3.5
```

### scale-float: multiplying by a power of the radix

`scale-float` efficiently multiplies a float by the radix raised to an integer power.

```lisp
(scale-float 1.0 1)
=> 2.0
(scale-float 1.0 10)
=> 1024.0
(scale-float 10.01 -2)
=> 2.5025
(scale-float 23.0 0)
=> 23.0
```

### float-radix, float-digits, and float-precision

These functions query the representation parameters of a float.

```lisp
(float-radix 1.0)
=> 2
(float-digits 1.0)
=> 24
(float-precision 1.0)
=> 24
(float-precision 0.0)
=> 0
```

### float-sign: extracting or transferring sign

`float-sign` with one argument returns 1.0 or -1.0 indicating the sign. With two arguments, it returns a float with the sign of the first and the magnitude of the second.

```lisp
(float-sign 5.0)
=> 1.0
(float-sign -5.0)
=> -1.0
(float-sign 0.0)
=> 1.0
(float-sign -1.0 10.0)
=> -10.0
(float-sign 1.0 -10.0)
=> 10.0
(float-sign 1.0 0.0)
=> 0.0
```

### integer-decode-float: integer significand

`integer-decode-float` is like `decode-float` but returns the significand as an integer and the sign as -1 or 1.

```lisp
(integer-decode-float 1.0)
=> 8388608
=> -23
=> 1
(integer-decode-float -1.0)
=> 8388608
=> -23
=> -1

;; Reconstructing the value
(multiple-value-bind (sig exp sign)
    (integer-decode-float 1.0)
  (* (scale-float (float sig 1.0) exp) sign))
=> 1.0
```
