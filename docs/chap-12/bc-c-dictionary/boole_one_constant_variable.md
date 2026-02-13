---
title: "boole-1, boole-2, boole-and, boole-andc1, boole-andc2, boole-c1, boole-c2, boole-clr, boole-eqv, boole-ior, boole-nand, boole-nor, boole-orc1, boole-orc2, boole-set, boole-xor"
---

# boole-1, boole-2, boole-and, boole-andc1, boole-andc2, boole-c1, boole-c2, boole-clr, boole-eqv, boole-ior, boole-nand, boole-nor, boole-orc1, boole-orc2, boole-set, boole-xor

import BooleFunction from './_boole_one_constant_variable.md';

<BooleFunction />

## Expanded Reference: boole-1, boole-2, boole-and, boole-andc1, boole-andc2, boole-c1, boole-c2, boole-clr, boole-eqv, boole-ior, boole-nand, boole-nor, boole-orc1, boole-orc2, boole-set, boole-xor

### Constant Values

Each `boole-` constant is an implementation-dependent integer used as the first argument to `boole`. Their actual numeric values vary across implementations but their semantics are standardized.

```lisp
;; Values are implementation-dependent integers
(integerp boole-and) ; → T
(integerp boole-ior) ; → T
(integerp boole-xor) ; → T
```

### Common Boolean Operations with boole

The most frequently used constants are `boole-and`, `boole-ior`, and `boole-xor`, which perform bitwise AND, inclusive OR, and exclusive OR respectively.

```lisp
(boole boole-and #b1100 #b1010) ; → 8    (i.e., #b1000)
(boole boole-ior #b1100 #b1010) ; → 14   (i.e., #b1110)
(boole boole-xor #b1100 #b1010) ; → 6    (i.e., #b0110)
```

### All 16 Operations

The 16 constants represent all possible two-argument boolean operations. Here they are demonstrated on the same pair of inputs.

```lisp
(boole boole-clr  #b1100 #b1010) ; → 0    ; always 0
(boole boole-set  #b1100 #b1010) ; → -1   ; always all 1s
(boole boole-1   #b1100 #b1010)  ; → 12   ; return integer-1
(boole boole-2   #b1100 #b1010)  ; → 10   ; return integer-2
(boole boole-c1  #b1100 #b1010)  ; → -13  ; complement of integer-1
(boole boole-c2  #b1100 #b1010)  ; → -11  ; complement of integer-2
(boole boole-and  #b1100 #b1010) ; → 8    ; and
(boole boole-ior  #b1100 #b1010) ; → 14   ; inclusive or
(boole boole-xor  #b1100 #b1010) ; → 6    ; exclusive or
(boole boole-eqv  #b1100 #b1010) ; → -7   ; equivalence (xnor)
(boole boole-nand #b1100 #b1010) ; → -9   ; not and
(boole boole-nor  #b1100 #b1010) ; → -15  ; not or
(boole boole-andc1 #b1100 #b1010) ; → 2   ; and complement of integer-1
(boole boole-andc2 #b1100 #b1010) ; → 4   ; and complement of integer-2
(boole boole-orc1 #b1100 #b1010)  ; → -5  ; or complement of integer-1
(boole boole-orc2 #b1100 #b1010)  ; → -3  ; or complement of integer-2
```

### Practical Note

In modern Common Lisp code, the dedicated functions `logand`, `logior`, `logxor`, `lognot`, etc. are preferred over `boole` because they are more readable and take variable numbers of arguments. The `boole` function is primarily useful when the operation itself needs to be a parameter.

```lisp
;; Preferred: use logand, logior, logxor directly
(logand #b1100 #b1010) ; → 8
(logior #b1100 #b1010) ; → 14

;; boole is useful when the operation is a variable
(defun apply-bit-op (op a b)
  (boole op a b))

(apply-bit-op boole-and #xFF #x0F) ; → 15
(apply-bit-op boole-xor #xFF #x0F) ; → 240
```
