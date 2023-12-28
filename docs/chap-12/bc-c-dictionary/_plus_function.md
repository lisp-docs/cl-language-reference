**+** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm>

**Syntax:**

<DictionaryLink  term={"+"}><b>+</b></DictionaryLink> &amp;rest *numbers → sum*

**Arguments and Values:**

<GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm>—a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> .

*sum*—a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> .

**Description:**

Returns the sum of <GlossaryTerm  term={"number"}><i>numbers</i></GlossaryTerm>, performing any necessary type conversions in the process. If no <GlossaryTerm  term={"number"}><i>numbers</i></GlossaryTerm> are supplied, 0 is returned.

**Examples:**

```lisp

(+) → 0 
(+ 1) → 1 
(+ 31/100 69/100) → 1 
(+ 1/5 0.8) → 1.0 
```

**Exceptional Situations:**

Might signal <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if some <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm> is not a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> . Might signal <DictionaryLink  term={"arithmetic-error"}><b>arithmetic-error</b></DictionaryLink>.

**See Also:**

Section 12.1.1 (Numeric Operations), Section 12.1.3 (Rational Computations), Section 12.1.4 (Floating-point Computations), Section 12.1.5 (Complex Computations)
