**+** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks>

**Syntax:**

<ClLinks styled={true} term={"+"}><b>+</b></ClLinks> &amp;rest *numbers → sum*

**Arguments and Values:**

<ClLinks styled={true} term={"number"}><i>number</i></ClLinks>—a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> .

*sum*—a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> .

**Description:**

Returns the sum of <ClLinks styled={true} term={"number"}><i>numbers</i></ClLinks>, performing any necessary type conversions in the process. If no <ClLinks styled={true} term={"number"}><i>numbers</i></ClLinks> are supplied, 0 is returned.

**Examples:**

```lisp

(+) → 0 
(+ 1) → 1 
(+ 31/100 69/100) → 1 
(+ 1/5 0.8) → 1.0 
```

**Exceptional Situations:**

Might signal <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if some <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> is not a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> . Might signal <ClLinks styled={true} term={"arithmetic-error"}><b>arithmetic-error</b></ClLinks>.

**See Also:**

Section 12.1.1 (Numeric Operations), Section 12.1.3 (Rational Computations), Section 12.1.4 (Floating-point Computations), Section 12.1.5 (Complex Computations)
