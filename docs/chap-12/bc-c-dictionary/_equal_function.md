**=, /=, \<, \>, \<=, \>=** <ClLinks  term={"function"}><i>Function</i></ClLinks>

**Syntax:**

<ClLinks  term={"="}><b>=</b></ClLinks> &amp;rest <ClLinks  term={"number"}><i>numbers</i></ClLinks><sup>+</sup> → generalized-boolean

<ClLinks  term={"/="}><b>/=</b></ClLinks> &amp;rest <ClLinks  term={"number"}><i>numbers</i></ClLinks><sup>+</sup> → generalized-boolean

&lt; &amp;rest <ClLinks  term={"number"}><i>numbers</i></ClLinks><sup>+</sup> → generalized-boolean

&gt; &amp;rest <ClLinks  term={"number"}><i>numbers</i></ClLinks><sup>+</sup> → generalized-boolean

&lt;<ClLinks  term={"="}><b>=</b></ClLinks> &amp;rest <ClLinks  term={"number"}><i>numbers</i></ClLinks><sup>+</sup> → generalized-boolean

&gt;<ClLinks  term={"="}><b>=</b></ClLinks> &amp;rest <ClLinks  term={"number"}><i>numbers</i></ClLinks><sup>+</sup> → generalized-boolean

**Arguments and Values:**

<ClLinks  term={"number"}><i>number</i></ClLinks>—for &lt;, &gt;, &lt;<ClLinks  term={"="}><b>=</b></ClLinks>, &gt;<ClLinks  term={"="}><b>=</b></ClLinks>: a *real*; for <ClLinks  term={"="}><b>=</b></ClLinks>, <ClLinks  term={"/="}><b>/=</b></ClLinks>: a <ClLinks  term={"number"}><i>number</i></ClLinks> .

*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>.

**Description:**

<ClLinks  term={"="}><b>=</b></ClLinks>, <ClLinks  term={"/="}><b>/=</b></ClLinks>, &lt;, &gt;, &lt;<ClLinks  term={"="}><b>=</b></ClLinks>, and &gt;<ClLinks  term={"="}><b>=</b></ClLinks> perform arithmetic comparisons on their arguments as follows: <ClLinks  term={"="}><b>=</b></ClLinks>

The value of <ClLinks  term={"="}><b>=</b></ClLinks> is <ClLinks  term={"true"}><i>true</i></ClLinks> if all <ClLinks  term={"number"}><i>numbers</i></ClLinks> are the same in value; otherwise it is <ClLinks  term={"false"}><i>false</i></ClLinks>. Two *complexes* are considered equal by <ClLinks  term={"="}><b>=</b></ClLinks> if their real and imaginary parts are equal according to <ClLinks  term={"="}><b>=</b></ClLinks>.

<ClLinks  term={"/="}><b>/=</b></ClLinks>

The value of <ClLinks  term={"/="}><b>/=</b></ClLinks> is <ClLinks  term={"true"}><i>true</i></ClLinks> if no two <ClLinks  term={"number"}><i>numbers</i></ClLinks> are the same in value; otherwise it is <ClLinks  term={"false"}><i>false</i></ClLinks>.

**=, /=,** *&lt;***,** *&gt;***,** *&lt;***=,** *&gt;***=**

&lt;

The value of &lt; is <ClLinks  term={"true"}><i>true</i></ClLinks> if the <ClLinks  term={"number"}><i>numbers</i></ClLinks> are in monotonically increasing order; otherwise it is <ClLinks  term={"false"}><i>false</i></ClLinks>.

&gt;

The value of &gt; is <ClLinks  term={"true"}><i>true</i></ClLinks> if the <ClLinks  term={"number"}><i>numbers</i></ClLinks> are in monotonically decreasing order; otherwise it is <ClLinks  term={"false"}><i>false</i></ClLinks>.

&lt;<ClLinks  term={"="}><b>=</b></ClLinks>

The value of &lt;<ClLinks  term={"="}><b>=</b></ClLinks> is <ClLinks  term={"true"}><i>true</i></ClLinks> if the <ClLinks  term={"number"}><i>numbers</i></ClLinks> are in monotonically nondecreasing order; otherwise it is <ClLinks  term={"false"}><i>false</i></ClLinks>.

&gt;<ClLinks  term={"="}><b>=</b></ClLinks>

The value of &gt;<ClLinks  term={"="}><b>=</b></ClLinks> is <ClLinks  term={"true"}><i>true</i></ClLinks> if the <ClLinks  term={"number"}><i>numbers</i></ClLinks> are in monotonically nonincreasing order; otherwise it is <ClLinks  term={"false"}><i>false</i></ClLinks>.

<ClLinks  term={"="}><b>=</b></ClLinks>, <ClLinks  term={"/="}><b>/=</b></ClLinks>, &lt;, &gt;, &lt;<ClLinks  term={"="}><b>=</b></ClLinks>, and &gt;<ClLinks  term={"="}><b>=</b></ClLinks> perform necessary type conversions.

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

Might signal <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if some <ClLinks  term={"argument"}><i>argument</i></ClLinks> is not a *real*. Might signal <ClLinks  term={"arithmetic-error"}><b>arithmetic-error</b></ClLinks> if otherwise unable to fulfill its contract.

**Notes:**

<ClLinks  term={"="}><b>=</b></ClLinks> differs from <ClLinks  term={"eql"}><b>eql</b></ClLinks> in that `(= 0.0 -0.0)` is always true, because <ClLinks  term={"="}><b>=</b></ClLinks> compares the mathematical values of its operands, whereas <ClLinks  term={"eql"}><b>eql</b></ClLinks> compares the representational values, so to speak.
