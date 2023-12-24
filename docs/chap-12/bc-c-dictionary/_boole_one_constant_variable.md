<b>boole-1, boole-2, boole-and, boole-andc1, boole-andc2, boole-c1, boole-c2, boole-clr, boole-eqv, boole-ior, boole-nand, boole-nor, boole-orc1, boole-orc2, boole-set, boole-xor</b> <i>Constant Variable</i>

<br /><br />

**Constant Value:**

The identity and nature of the *values* of each of these *variables* is *implementation-dependent*, except that it must be *distinct* from each of the *values* of the others, and it must be a valid first *argument* to the *function* **boole**.

**Description:**

Each of these *constants* has a *value* which is one of the sixteen possible *bit-wise logical operation specifiers*.

**Examples:**

```lisp

(boole boole-ior 1 16) → 17 
(boole boole-and -2 5) → 4 
(boole boole-eqv 17 15) → -31 

```

**See Also:**

**boole**
