**/** <ClLinks  term={"function"}><i>Function</i></ClLinks>

**Syntax:**

<ClLinks  term={"/"}><b>/</b></ClLinks> *number → reciprocal*

<ClLinks  term={"/"}><b>/</b></ClLinks> *numerator* &amp;rest *denominators*<sup>+</sup> → quotient

**Arguments and Values:**

<ClLinks  term={"number"}><i>number</i></ClLinks>, *denominator*—a non-zero <ClLinks  term={"number"}><i>number</i></ClLinks> .

*numerator*, *quotient*, *reciprocal*—a <ClLinks  term={"number"}><i>number</i></ClLinks> .

**Description:**

The <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"/"}><b>/</b></ClLinks> performs division or reciprocation.

If no *denominators* are supplied, the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"/"}><b>/</b></ClLinks> returns the reciprocal of <ClLinks  term={"number"}><i>number</i></ClLinks>.

If at least one *denominator* is supplied, the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"/"}><b>/</b></ClLinks> divides the *numerator* by all of the *denominators* and returns the resulting *quotient*.

If each <ClLinks  term={"argument"}><i>argument</i></ClLinks> is either an *integer* or a <ClLinks  term={"ratio"}><i>ratio</i></ClLinks>, and the result is not an *integer* , then it is a <ClLinks  term={"ratio"}><i>ratio</i></ClLinks>.

The <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"/"}><b>/</b></ClLinks> performs necessary type conversions.

If any <ClLinks  term={"argument"}><i>argument</i></ClLinks> is a <ClLinks  term={"float"}><i>float</i></ClLinks> then the rules of floating-point contagion apply; see Section 12.1.4 (Floating-point Computations).

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

The consequences are unspecified if any <ClLinks  term={"argument"}><i>argument</i></ClLinks> other than the first is zero. If there is only one <ClLinks  term={"argument"}><i>argument</i></ClLinks>, the consequences are unspecified if it is zero.

Might signal <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if some <ClLinks  term={"argument"}><i>argument</i></ClLinks> is not a <ClLinks  term={"number"}><i>number</i></ClLinks> . Might signal <DictionaryLink  term={"division-by-zero"}><b>division-by-zero</b></DictionaryLink> if division by zero is attempted. Might signal <DictionaryLink  term={"arithmetic-error"}><b>arithmetic-error</b></DictionaryLink>.

**See Also:**

<DictionaryLink  term={"floor"}><b>floor</b></DictionaryLink>, <DictionaryLink  term={"ceiling"}><b>ceiling</b></DictionaryLink>, <DictionaryLink  term={"truncate"}><b>truncate</b></DictionaryLink>, <DictionaryLink  term={"round"}><b>round</b></DictionaryLink>
