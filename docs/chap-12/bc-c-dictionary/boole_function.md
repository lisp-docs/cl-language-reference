---
title: "boole"
---

# boole

import BooleFunction from './_boole_function.md';

<BooleFunction />

## Expanded Reference: boole

### Basic bit-wise operations

`boole` performs a bit-wise logical operation specified by the `op` argument on two integers.

```lisp
(boole boole-and 15 9)
=> 9
(boole boole-ior 5 3)
=> 7
(boole boole-xor 15 9)
=> 6
(boole boole-eqv 17 15)
=> -31
```

### All 16 boolean operations

`boole` supports all 16 possible two-input boolean operations via constant specifiers.

```lisp
(boole boole-clr  #b1010 #b1100)
=> 0
(boole boole-set  #b1010 #b1100)
=> -1
(boole boole-1    #b1010 #b1100)
=> 10
(boole boole-2    #b1010 #b1100)
=> 12
(boole boole-c1   #b1010 #b1100)
=> -11
(boole boole-c2   #b1010 #b1100)
=> -13
```

### Complement and combined operations

```lisp
(boole boole-and    #b0011 #b0101)
=> 1
(boole boole-andc1  #b0011 #b0101)
=> 4
(boole boole-andc2  #b0011 #b0101)
=> 2
(boole boole-nand   #b0011 #b0101)
=> -2
(boole boole-nor    #b0011 #b0101)
=> -8
(boole boole-orc1   #b0011 #b0101)
=> -3
(boole boole-orc2   #b0011 #b0101)
=> -5
```

### Equivalence to logand

`boole` with `boole-and` is equivalent to `logand`, and similarly for other operations.

```lisp
(eql (boole boole-and 100 55) (logand 100 55))
=> T
(eql (boole boole-ior 100 55) (logior 100 55))
=> T
(eql (boole boole-xor 100 55) (logxor 100 55))
=> T
```

### Practical use: parameterized bit operations

`boole` is useful when the operation itself needs to be a variable or parameter.

```lisp
(defun apply-bit-op (op a b)
  (boole op a b))

(apply-bit-op boole-and #xFF #x0F)
=> 15
(apply-bit-op boole-ior #xF0 #x0F)
=> 255
```
