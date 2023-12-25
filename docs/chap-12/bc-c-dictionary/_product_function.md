**\*** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm>

**Syntax:**

**\*** &amp;rest *numbers → product*

**Arguments and Values:**

<GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm>—a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> .

*product*—a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> .

**Description:**

Returns the product of <GlossaryTerm  term={"number"}><i>numbers</i></GlossaryTerm>, performing any necessary type conversions in the process. If no <GlossaryTerm  term={"number"}><i>numbers</i></GlossaryTerm> are supplied, 1 is returned.

**Examples:**

```lisp
(\*) → 1 
(\* 3 5) → 15 
(\* 1.0 #c(22 33) 55/98) → #C(12.346938775510203 18.520408163265305) 
```

**Exceptional Situations:**

Might signal <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if some <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm> is not a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> . Might signal <DictionaryLink  term={"arithmetic-error"}><b>arithmetic-error</b></DictionaryLink>.

**See Also:**

Section 12.1.1 (Numeric Operations), Section 12.1.3 (Rational Computations), Section 12.1.4 (Floating-point Computations), Section 12.1.5 (Complex Computations)
