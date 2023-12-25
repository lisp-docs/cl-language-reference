**+** <ClLinks  term={"function"}><i>Function</i></ClLinks>

**Syntax:**

<ClLinks  term={"+"}><b>+</b></ClLinks> &amp;rest *numbers → sum*

**Arguments and Values:**

<ClLinks  term={"number"}><i>number</i></ClLinks>—a <ClLinks  term={"number"}><i>number</i></ClLinks> .

*sum*—a <ClLinks  term={"number"}><i>number</i></ClLinks> .

**Description:**

Returns the sum of <ClLinks  term={"number"}><i>numbers</i></ClLinks>, performing any necessary type conversions in the process. If no <ClLinks  term={"number"}><i>numbers</i></ClLinks> are supplied, 0 is returned.

**Examples:**

```lisp

(+) → 0 
(+ 1) → 1 
(+ 31/100 69/100) → 1 
(+ 1/5 0.8) → 1.0 
```

**Exceptional Situations:**

Might signal <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if some <ClLinks  term={"argument"}><i>argument</i></ClLinks> is not a <ClLinks  term={"number"}><i>number</i></ClLinks> . Might signal <ClLinks  term={"arithmetic-error"}><b>arithmetic-error</b></ClLinks>.

**See Also:**

Section 12.1.1 (Numeric Operations), Section 12.1.3 (Rational Computations), Section 12.1.4 (Floating-point Computations), Section 12.1.5 (Complex Computations)
