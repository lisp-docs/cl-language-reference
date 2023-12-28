**/** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm>

**Syntax:**

<DictionaryLink  term={"/"}><b>/</b></DictionaryLink> *number → reciprocal*

<DictionaryLink  term={"/"}><b>/</b></DictionaryLink> *numerator* &amp;rest *denominators*<sup>+</sup> → quotient

**Arguments and Values:**

<GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm>, *denominator*—a non-zero <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> .

*numerator*, *quotient*, *reciprocal*—a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> .

**Description:**

The <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"/"}><b>/</b></DictionaryLink> performs division or reciprocation.

If no *denominators* are supplied, the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"/"}><b>/</b></DictionaryLink> returns the reciprocal of <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm>.

If at least one *denominator* is supplied, the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"/"}><b>/</b></DictionaryLink> divides the *numerator* by all of the *denominators* and returns the resulting *quotient*.

If each <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm> is either an *integer* or a <GlossaryTerm  term={"ratio"}><i>ratio</i></GlossaryTerm>, and the result is not an *integer* , then it is a <GlossaryTerm  term={"ratio"}><i>ratio</i></GlossaryTerm>.

The <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"/"}><b>/</b></DictionaryLink> performs necessary type conversions.

If any <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm> is a <GlossaryTerm  term={"float"}><i>float</i></GlossaryTerm> then the rules of floating-point contagion apply; see Section 12.1.4 (Floating-point Computations).

**Examples:**

```lisp

(/ 12 4) → 3 
(/ 13 4) → 13/4 
(/ -8) → -1/8 
(/ 3 4 5) → 3/20 
(/ 0.5) → 2.0 
(/ 20 5) → 4 
(/ 5 20) → 1/4 
(/ 60 -2 3 5.0) → -2.0 
(/ 2 #c(2 2)) → #C(1/2 -1/2) 
```

**Exceptional Situations:**

The consequences are unspecified if any <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm> other than the first is zero. If there is only one <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm>, the consequences are unspecified if it is zero.

Might signal <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if some <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm> is not a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> . Might signal <DictionaryLink  term={"division-by-zero"}><b>division-by-zero</b></DictionaryLink> if division by zero is attempted. Might signal <DictionaryLink  term={"arithmetic-error"}><b>arithmetic-error</b></DictionaryLink>.

**See Also:**

<DictionaryLink  term={"floor"}><b>floor</b></DictionaryLink>, <DictionaryLink  term={"ceiling"}><b>ceiling</b></DictionaryLink>, <DictionaryLink  term={"truncate"}><b>truncate</b></DictionaryLink>, <DictionaryLink  term={"round"}><b>round</b></DictionaryLink>
