**\*** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks>

**Syntax:**

**\*** &amp;rest *numbers → product*

**Arguments and Values:**

<ClLinks styled={true} term={"number"}><i>number</i></ClLinks>—a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> .

*product*—a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> .

**Description:**

Returns the product of <ClLinks styled={true} term={"number"}><i>numbers</i></ClLinks>, performing any necessary type conversions in the process. If no <ClLinks styled={true} term={"number"}><i>numbers</i></ClLinks> are supplied, 1 is returned.

**Examples:**

```lisp

(\*) → 1 
(\* 3 5) → 15 
(\* 1.0 #c(22 33) 55/98) → #C(12.346938775510203 18.520408163265305) 

```

**Exceptional Situations:**

Might signal <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if some <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> is not a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> . Might signal <ClLinks styled={true} term={"arithmetic-error"}><b>arithmetic-error</b></ClLinks>.

**See Also:**

Section 12.1.1 (Numeric Operations), Section 12.1.3 (Rational Computations), Section 12.1.4 (Floating-point Computations), Section 12.1.5 (Complex Computations)
