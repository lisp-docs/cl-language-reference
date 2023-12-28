**=, /=, \<, \>, \<=, \>=** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm>

**Syntax:**

<DictionaryLink  term={"="}><b>=</b></DictionaryLink> &amp;rest <GlossaryTerm  term={"number"}><i>numbers</i></GlossaryTerm><sup>+</sup> → generalized-boolean

<DictionaryLink  term={"/="}><b>/=</b></DictionaryLink> &amp;rest <GlossaryTerm  term={"number"}><i>numbers</i></GlossaryTerm><sup>+</sup> → generalized-boolean

&lt; &amp;rest <GlossaryTerm  term={"number"}><i>numbers</i></GlossaryTerm><sup>+</sup> → generalized-boolean

&gt; &amp;rest <GlossaryTerm  term={"number"}><i>numbers</i></GlossaryTerm><sup>+</sup> → generalized-boolean

&lt;<DictionaryLink  term={"="}><b>=</b></DictionaryLink> &amp;rest <GlossaryTerm  term={"number"}><i>numbers</i></GlossaryTerm><sup>+</sup> → generalized-boolean

&gt;<DictionaryLink  term={"="}><b>=</b></DictionaryLink> &amp;rest <GlossaryTerm  term={"number"}><i>numbers</i></GlossaryTerm><sup>+</sup> → generalized-boolean

**Arguments and Values:**

<GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm>—for &lt;, &gt;, &lt;<DictionaryLink  term={"="}><b>=</b></DictionaryLink>, &gt;<DictionaryLink  term={"="}><b>=</b></DictionaryLink>: a *real*; for <DictionaryLink  term={"="}><b>=</b></DictionaryLink>, <DictionaryLink  term={"/="}><b>/=</b></DictionaryLink>: a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> .

*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>.

**Description:**

<DictionaryLink  term={"="}><b>=</b></DictionaryLink>, <DictionaryLink  term={"/="}><b>/=</b></DictionaryLink>, &lt;, &gt;, &lt;<DictionaryLink  term={"="}><b>=</b></DictionaryLink>, and &gt;<DictionaryLink  term={"="}><b>=</b></DictionaryLink> perform arithmetic comparisons on their arguments as follows: <DictionaryLink  term={"="}><b>=</b></DictionaryLink>

The value of <DictionaryLink  term={"="}><b>=</b></DictionaryLink> is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if all <GlossaryTerm  term={"number"}><i>numbers</i></GlossaryTerm> are the same in value; otherwise it is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. Two *complexes* are considered equal by <DictionaryLink  term={"="}><b>=</b></DictionaryLink> if their real and imaginary parts are equal according to <DictionaryLink  term={"="}><b>=</b></DictionaryLink>.

<DictionaryLink  term={"/="}><b>/=</b></DictionaryLink>

The value of <DictionaryLink  term={"/="}><b>/=</b></DictionaryLink> is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if no two <GlossaryTerm  term={"number"}><i>numbers</i></GlossaryTerm> are the same in value; otherwise it is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>.

**=, /=,** *&lt;***,** *&gt;***,** *&lt;***=,** *&gt;***=**

&lt;

The value of &lt; is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if the <GlossaryTerm  term={"number"}><i>numbers</i></GlossaryTerm> are in monotonically increasing order; otherwise it is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>.

&gt;

The value of &gt; is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if the <GlossaryTerm  term={"number"}><i>numbers</i></GlossaryTerm> are in monotonically decreasing order; otherwise it is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>.

&lt;<DictionaryLink  term={"="}><b>=</b></DictionaryLink>

The value of &lt;<DictionaryLink  term={"="}><b>=</b></DictionaryLink> is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if the <GlossaryTerm  term={"number"}><i>numbers</i></GlossaryTerm> are in monotonically nondecreasing order; otherwise it is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>.

&gt;<DictionaryLink  term={"="}><b>=</b></DictionaryLink>

The value of &gt;<DictionaryLink  term={"="}><b>=</b></DictionaryLink> is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if the <GlossaryTerm  term={"number"}><i>numbers</i></GlossaryTerm> are in monotonically nonincreasing order; otherwise it is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>.

<DictionaryLink  term={"="}><b>=</b></DictionaryLink>, <DictionaryLink  term={"/="}><b>/=</b></DictionaryLink>, &lt;, &gt;, &lt;<DictionaryLink  term={"="}><b>=</b></DictionaryLink>, and &gt;<DictionaryLink  term={"="}><b>=</b></DictionaryLink> perform necessary type conversions.

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

Might signal <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if some <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm> is not a *real*. Might signal <DictionaryLink  term={"arithmetic-error"}><b>arithmetic-error</b></DictionaryLink> if otherwise unable to fulfill its contract.

**Notes:**

<DictionaryLink  term={"="}><b>=</b></DictionaryLink> differs from <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> in that `(= 0.0 -0.0)` is always true, because <DictionaryLink  term={"="}><b>=</b></DictionaryLink> compares the mathematical values of its operands, whereas <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> compares the representational values, so to speak.
