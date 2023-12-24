**/** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks>

**Syntax:**

<ClLinks styled={true} term={"/"}><b>/</b></ClLinks> *number → reciprocal*

<ClLinks styled={true} term={"/"}><b>/</b></ClLinks> *numerator* &amp;rest *denominators*<sup>+</sup> → quotient

**Arguments and Values:**

<ClLinks styled={true} term={"number"}><i>number</i></ClLinks>, *denominator*—a non-zero <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> .

*numerator*, *quotient*, *reciprocal*—a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> .

**Description:**

The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"/"}><b>/</b></ClLinks> performs division or reciprocation.

If no *denominators* are supplied, the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"/"}><b>/</b></ClLinks> returns the reciprocal of <ClLinks styled={true} term={"number"}><i>number</i></ClLinks>.

If at least one *denominator* is supplied, the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"/"}><b>/</b></ClLinks> divides the *numerator* by all of the *denominators* and returns the resulting *quotient*.

If each <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> is either an *integer* or a <ClLinks styled={true} term={"ratio"}><i>ratio</i></ClLinks>, and the result is not an *integer* , then it is a <ClLinks styled={true} term={"ratio"}><i>ratio</i></ClLinks>.

The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"/"}><b>/</b></ClLinks> performs necessary type conversions.

If any <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> is a <ClLinks styled={true} term={"float"}><i>float</i></ClLinks> then the rules of floating-point contagion apply; see Section 12.1.4 (Floating-point Computations).

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

The consequences are unspecified if any <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> other than the first is zero. If there is only one <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks>, the consequences are unspecified if it is zero.

Might signal <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if some <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> is not a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> . Might signal <ClLinks styled={true} term={"division-by-zero"}><b>division-by-zero</b></ClLinks> if division by zero is attempted. Might signal <ClLinks styled={true} term={"arithmetic-error"}><b>arithmetic-error</b></ClLinks>.

**See Also:**

<ClLinks styled={true} term={"floor"}><b>floor</b></ClLinks>, <ClLinks styled={true} term={"ceiling"}><b>ceiling</b></ClLinks>, <ClLinks styled={true} term={"truncate"}><b>truncate</b></ClLinks>, <ClLinks styled={true} term={"round"}><b>round</b></ClLinks>
