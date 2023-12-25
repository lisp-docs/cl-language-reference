**-** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm>

**Syntax:**

*− number → negation*

*− minuend* &amp;rest *subtrahends*<sup>+</sup> → difference

**Arguments and Values:**

<GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm>, *minuend*, *subtrahend*—a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> .

*negation*, *difference*—a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> .

**Description:**

The <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"-"}><b>-</b></DictionaryLink> performs arithmetic subtraction and negation.

If only one <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> is supplied, the negation of that <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> is returned.

If more than one <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm> is given, it subtracts all of the *subtrahends* from the *minuend* and returns the result.

The <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"-"}><b>-</b></DictionaryLink> performs necessary type conversions.

**Examples:**

```lisp
(- 55.55) → -55.55 
(- #c(3 -5)) → #C(-3 5) 
(- 0) → 0 
(eql (- 0.0) -0.0) → true 
(- #c(100 45) #c(0 45)) → 100 
(- 10 1 2 3 4) → 0 
```

**Exceptional Situations:**

Might signal <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if some <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm> is not a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> . Might signal <DictionaryLink  term={"arithmetic-error"}><b>arithmetic-error</b></DictionaryLink>.

**See Also:**

Section 12.1.1 (Numeric Operations), Section 12.1.3 (Rational Computations), Section 12.1.4 (Floating-point Computations), Section 12.1.5 (Complex Computations)
