<b>boole-1, boole-2, boole-and, boole-andc1, boole-andc2, boole-c1, boole-c2, boole-clr, boole-eqv, boole-ior, boole-nand, boole-nor, boole-orc1, boole-orc2, boole-set, boole-xor</b> <i>Constant Variable</i>

<br /><br />

**Constant Value:**

The identity and nature of the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> of each of these <GlossaryTerm  term={"variable"}><i>variables</i></GlossaryTerm> is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>, except that it must be <GlossaryTerm  term={"distinct"}><i>distinct</i></GlossaryTerm> from each of the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> of the others, and it must be a valid first <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm> to the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"boole"}><b>boole</b></DictionaryLink>.

**Description:**

Each of these <GlossaryTerm  term={"constant"}><i>constants</i></GlossaryTerm> has a <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> which is one of the sixteen possible *bit-wise logical operation specifiers*.

**Examples:**

```lisp
(boole boole-ior 1 16) → 17 
(boole boole-and -2 5) → 4 
(boole boole-eqv 17 15) → -31 
```

**See Also:**

<DictionaryLink  term={"boole"}><b>boole</b></DictionaryLink>
