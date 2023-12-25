<b>boole-1, boole-2, boole-and, boole-andc1, boole-andc2, boole-c1, boole-c2, boole-clr, boole-eqv, boole-ior, boole-nand, boole-nor, boole-orc1, boole-orc2, boole-set, boole-xor</b> <i>Constant Variable</i>

<br /><br />

**Constant Value:**

The identity and nature of the <ClLinks  term={"value"}><i>values</i></ClLinks> of each of these <ClLinks  term={"variable"}><i>variables</i></ClLinks> is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>, except that it must be <ClLinks  term={"distinct"}><i>distinct</i></ClLinks> from each of the <ClLinks  term={"value"}><i>values</i></ClLinks> of the others, and it must be a valid first <ClLinks  term={"argument"}><i>argument</i></ClLinks> to the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"boole"}><b>boole</b></ClLinks>.

**Description:**

Each of these <ClLinks  term={"constant"}><i>constants</i></ClLinks> has a <ClLinks  term={"value"}><i>value</i></ClLinks> which is one of the sixteen possible *bit-wise logical operation specifiers*.

**Examples:**

```lisp
(boole boole-ior 1 16) → 17 
(boole boole-and -2 5) → 4 
(boole boole-eqv 17 15) → -31 
```

**See Also:**

<ClLinks  term={"boole"}><b>boole</b></ClLinks>
