**-** <ClLinks  term={"function"}><i>Function</i></ClLinks>

**Syntax:**

*− number → negation*

*− minuend* &amp;rest *subtrahends*<sup>+</sup> → difference

**Arguments and Values:**

<ClLinks  term={"number"}><i>number</i></ClLinks>, *minuend*, *subtrahend*—a <ClLinks  term={"number"}><i>number</i></ClLinks> .

*negation*, *difference*—a <ClLinks  term={"number"}><i>number</i></ClLinks> .

**Description:**

The <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"-"}><b>-</b></ClLinks> performs arithmetic subtraction and negation.

If only one <ClLinks  term={"number"}><i>number</i></ClLinks> is supplied, the negation of that <ClLinks  term={"number"}><i>number</i></ClLinks> is returned.

If more than one <ClLinks  term={"argument"}><i>argument</i></ClLinks> is given, it subtracts all of the *subtrahends* from the *minuend* and returns the result.

The <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"-"}><b>-</b></ClLinks> performs necessary type conversions.

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

Might signal <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if some <ClLinks  term={"argument"}><i>argument</i></ClLinks> is not a <ClLinks  term={"number"}><i>number</i></ClLinks> . Might signal <ClLinks  term={"arithmetic-error"}><b>arithmetic-error</b></ClLinks>.

**See Also:**

Section 12.1.1 (Numeric Operations), Section 12.1.3 (Rational Computations), Section 12.1.4 (Floating-point Computations), Section 12.1.5 (Complex Computations)
