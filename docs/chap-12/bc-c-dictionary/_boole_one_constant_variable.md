<b>boole-1, boole-2, boole-and, boole-andc1, boole-andc2, boole-c1, boole-c2, boole-clr, boole-eqv, boole-ior, boole-nand, boole-nor, boole-orc1, boole-orc2, boole-set, boole-xor</b> <i>Constant Variable</i>

<br /><br />

**Constant Value:**

The identity and nature of the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> of each of these <ClLinks styled={true} term={"variable"}><i>variables</i></ClLinks> is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>, except that it must be <ClLinks styled={true} term={"distinct"}><i>distinct</i></ClLinks> from each of the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> of the others, and it must be a valid first <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> to the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"boole"}><b>boole</b></ClLinks>.

**Description:**

Each of these <ClLinks styled={true} term={"constant"}><i>constants</i></ClLinks> has a <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> which is one of the sixteen possible *bit-wise logical operation specifiers*.

**Examples:**

```lisp
(boole boole-ior 1 16) → 17 
(boole boole-and -2 5) → 4 
(boole boole-eqv 17 15) → -31 
```

**See Also:**

<ClLinks styled={true} term={"boole"}><b>boole</b></ClLinks>
