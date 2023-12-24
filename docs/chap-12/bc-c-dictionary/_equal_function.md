**=, /=, \<, \>, \<=, \>=** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks>

**Syntax:**

<ClLinks styled={true} term={"="}><b>=</b></ClLinks> &amp;rest <ClLinks styled={true} term={"number"}><i>numbers</i></ClLinks><sup>+</sup> → generalized-boolean

<ClLinks styled={true} term={"/="}><b>/=</b></ClLinks> &amp;rest <ClLinks styled={true} term={"number"}><i>numbers</i></ClLinks><sup>+</sup> → generalized-boolean

&lt; &amp;rest <ClLinks styled={true} term={"number"}><i>numbers</i></ClLinks><sup>+</sup> → generalized-boolean

&gt; &amp;rest <ClLinks styled={true} term={"number"}><i>numbers</i></ClLinks><sup>+</sup> → generalized-boolean

&lt;<ClLinks styled={true} term={"="}><b>=</b></ClLinks> &amp;rest <ClLinks styled={true} term={"number"}><i>numbers</i></ClLinks><sup>+</sup> → generalized-boolean

&gt;<ClLinks styled={true} term={"="}><b>=</b></ClLinks> &amp;rest <ClLinks styled={true} term={"number"}><i>numbers</i></ClLinks><sup>+</sup> → generalized-boolean

**Arguments and Values:**

<ClLinks styled={true} term={"number"}><i>number</i></ClLinks>—for &lt;, &gt;, &lt;<ClLinks styled={true} term={"="}><b>=</b></ClLinks>, &gt;<ClLinks styled={true} term={"="}><b>=</b></ClLinks>: a *real*; for <ClLinks styled={true} term={"="}><b>=</b></ClLinks>, <ClLinks styled={true} term={"/="}><b>/=</b></ClLinks>: a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> .

*generalized-boolean*—a *generalized boolean*.

**Description:**

<ClLinks styled={true} term={"="}><b>=</b></ClLinks>, <ClLinks styled={true} term={"/="}><b>/=</b></ClLinks>, &lt;, &gt;, &lt;<ClLinks styled={true} term={"="}><b>=</b></ClLinks>, and &gt;<ClLinks styled={true} term={"="}><b>=</b></ClLinks> perform arithmetic comparisons on their arguments as follows: <ClLinks styled={true} term={"="}><b>=</b></ClLinks>

The value of <ClLinks styled={true} term={"="}><b>=</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if all <ClLinks styled={true} term={"number"}><i>numbers</i></ClLinks> are the same in value; otherwise it is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. Two *complexes* are considered equal by <ClLinks styled={true} term={"="}><b>=</b></ClLinks> if their real and imaginary parts are equal according to <ClLinks styled={true} term={"="}><b>=</b></ClLinks>.

<ClLinks styled={true} term={"/="}><b>/=</b></ClLinks>

The value of <ClLinks styled={true} term={"/="}><b>/=</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if no two <ClLinks styled={true} term={"number"}><i>numbers</i></ClLinks> are the same in value; otherwise it is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>.

**=, /=,** *&lt;***,** *&gt;***,** *&lt;***=,** *&gt;***=**

&lt;

The value of &lt; is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if the <ClLinks styled={true} term={"number"}><i>numbers</i></ClLinks> are in monotonically increasing order; otherwise it is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>.

&gt;

The value of &gt; is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if the <ClLinks styled={true} term={"number"}><i>numbers</i></ClLinks> are in monotonically decreasing order; otherwise it is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>.

&lt;<ClLinks styled={true} term={"="}><b>=</b></ClLinks>

The value of &lt;<ClLinks styled={true} term={"="}><b>=</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if the <ClLinks styled={true} term={"number"}><i>numbers</i></ClLinks> are in monotonically nondecreasing order; otherwise it is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>.

&gt;<ClLinks styled={true} term={"="}><b>=</b></ClLinks>

The value of &gt;<ClLinks styled={true} term={"="}><b>=</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if the <ClLinks styled={true} term={"number"}><i>numbers</i></ClLinks> are in monotonically nonincreasing order; otherwise it is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>.

<ClLinks styled={true} term={"="}><b>=</b></ClLinks>, <ClLinks styled={true} term={"/="}><b>/=</b></ClLinks>, &lt;, &gt;, &lt;<ClLinks styled={true} term={"="}><b>=</b></ClLinks>, and &gt;<ClLinks styled={true} term={"="}><b>=</b></ClLinks> perform necessary type conversions.

**Examples:**

The uses of these functions are illustrated in Figure 12–13.

```lisp title="Figure 12–13. Uses of /=, =, <, >, <=, and >="
(= 3 3) ;is true.
(/= 3 3) ;is false. 
(= 3 5) ;is false.
(/= 3 5) ;is true. 
(= 3 3 3 3) ;is true.
(/= 3 3 3 3) ;is false. 
(= 3 3 5 3) ;is false.
(/= 3 3 5 3) ;is false. 
(= 3 6 5 2) ;is false.
(/= 3 6 5 2) ;is true. 
(= 3 2 3) ;is false.
(/= 3 2 3) ;is false. 
(< 3 5) ;is true.
(<= 3 5) ;is true. 
(< 3 -5) ;is false.
(<= 3 -5) ;is false. 
(< 3 3) ;is false.
(<= 3 3) ;is true. 
(< 0 3 4 6 7) ;is true.
(<= 0 3 4 6 7) ;is true. 
(< 0 3 4 4 6) ;is false.
(<= 0 3 4 4 6) ;is true. 
(> 4 3) ;is true.
(>= 4 3) ;is true. 
(> 4 3 2 1 0) ;is true.
(>= 4 3 2 1 0) ;is true. 
(> 4 3 3 2 0) ;is false.
(>= 4 3 3 2 0) ;is true. 
(> 4 3 1 2 0) ;is false.
(>= 4 3 1 2 0) ;is false. 
(= 3) ;is true.
(/= 3) ;is true. 
(< 3) ;is true.
(<= 3) ;is true. 
(= 3.0 #c(3.0 0.0)) ;is true.
(/= 3.0 #c(3.0 1.0)) ;is true. 
(= 3 3.0) ;is true.
(= 3.0s0 3.0d0) ;is true. 
(= 0.0 -0.0) ;is true.
(= 5/2 2.5) ;is true. 
(> 0.0 -0.0) ;is false.
(= 0 -0.0) ;is true. 
(<= 0 x 9) ;is true if x is between 0 and 9, inclusive 
(< 0.0 x 1.0) ;is true if x is between 0.0 and 1.0, exclusive 
(< -1 j (length v)) ;is true if j is a valid array index for a vector v
```

**Exceptional Situations:**

Might signal <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if some <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> is not a *real*. Might signal <ClLinks styled={true} term={"arithmetic-error"}><b>arithmetic-error</b></ClLinks> if otherwise unable to fulfill its contract.

**Notes:**

<ClLinks styled={true} term={"="}><b>=</b></ClLinks> differs from <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks> in that `(= 0.0 -0.0)` is always true, because <ClLinks styled={true} term={"="}><b>=</b></ClLinks> compares the mathematical values of its operands, whereas <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks> compares the representational values, so to speak.
