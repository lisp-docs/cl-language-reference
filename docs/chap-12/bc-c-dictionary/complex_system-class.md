---
title: "complex"
---

# complex

import ComplexSystemClass from './_complex_system-class.md';

<ComplexSystemClass />

## Expanded Reference: complex

### Creating Complex Numbers

Complex numbers are created using the `complex` function or the `#C` reader macro. A complex number has a real part and an imaginary part.

```lisp
(complex 3 4)   ; → #C(3 4)
#C(3 4)         ; → #C(3 4)
(complex 1.5 2.3) ; → #C(1.5 2.3)
(complex 5 0)   ; → 5  (canonicalized to a real when imaginary part is zero)
```

### Type Checking

The `complex` type specifier can optionally restrict the type of the parts.

```lisp
(typep #C(3 4) 'complex)           ; → T
(typep #C(3 4) 'number)            ; → T
(typep #C(3 4) '(complex integer)) ; → T
(typep #C(1.5 2.3) '(complex float))   ; → T
(typep #C(1.5 2.3) '(complex integer)) ; → NIL
(typep 5 'complex)                 ; → NIL  (real numbers are not complex)
```

### Accessing Parts

Use `realpart` and `imagpart` to extract the components of a complex number.

```lisp
(realpart #C(3 4))   ; → 3
(imagpart #C(3 4))   ; → 4
(realpart #C(1.5 2.3)) ; → 1.5
(imagpart #C(1.5 2.3)) ; → 2.3
```

### Arithmetic with Complex Numbers

Standard arithmetic operations work with complex numbers, following the rules of complex arithmetic.

```lisp
(+ #C(1 2) #C(3 4))   ; → #C(4 6)
(* #C(1 2) #C(3 4))   ; → #C(-5 10)
(abs #C(3 4))          ; → 5.0
(conjugate #C(3 4))   ; → #C(3 -4)
(phase #C(0 1))        ; → 1.5707964  (approximately pi/2)
```

### Canonicalization

If a complex number is created with a zero imaginary part and both parts are rational, the result is canonicalized to a rational number, not a complex.

```lisp
(complex 5 0)     ; → 5
(typep (complex 5 0) 'complex)   ; → NIL
(complex 5.0 0.0) ; → #C(5.0 0.0)  (floats are not canonicalized)
(typep (complex 5.0 0.0) 'complex) ; → T
```
