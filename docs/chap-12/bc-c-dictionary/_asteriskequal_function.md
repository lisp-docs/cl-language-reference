*<DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink> <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink> &amp;rest <GlossaryTerm styled={true} term={"number"}><i>numbers</i></GlossaryTerm><sup>+</sup> *→ generalized-boolean* 



<DictionaryLink styled={true} term={"/="}><b>/=</b></DictionaryLink> &amp;rest <GlossaryTerm styled={true} term={"number"}><i>numbers</i></GlossaryTerm><sup>+</sup> *→ generalized-boolean* 



&lt; &amp;rest <GlossaryTerm styled={true} term={"number"}><i>numbers</i></GlossaryTerm><sup>+</sup> *→ generalized-boolean* 



\&gt; &amp;rest <GlossaryTerm styled={true} term={"number"}><i>numbers</i></GlossaryTerm><sup>+</sup> *→ generalized-boolean* 



&lt;<DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink> &amp;rest <GlossaryTerm styled={true} term={"number"}><i>numbers</i></GlossaryTerm><sup>+</sup> *→ generalized-boolean* 



\&gt;<DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink> &amp;rest <GlossaryTerm styled={true} term={"number"}><i>numbers</i></GlossaryTerm><sup>+</sup> *→ generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm>—for &lt;, &gt;, &lt;<DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink>, &gt;<DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink>: a *real*; for <DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink>, <DictionaryLink styled={true} term={"/="}><b>/=</b></DictionaryLink>: a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> . 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



<DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink>, <DictionaryLink styled={true} term={"/="}><b>/=</b></DictionaryLink>, &lt;, &gt;, &lt;<DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink>, and &gt;<DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink> perform arithmetic comparisons on their arguments as follows: <DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink> 



The value of <DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if all <GlossaryTerm styled={true} term={"number"}><i>numbers</i></GlossaryTerm> are the same in value; otherwise it is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. Two *complexes* are considered equal by <DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink> if their real and imaginary parts are equal according to <DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink>. 



<DictionaryLink styled={true} term={"/="}><b>/=</b></DictionaryLink> 



The value of <DictionaryLink styled={true} term={"/="}><b>/=</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if no two <GlossaryTerm styled={true} term={"number"}><i>numbers</i></GlossaryTerm> are the same in value; otherwise it is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



 



 



**=, /=,** *&lt;***,** *&gt;***,** *&lt;***=,** *&gt;***=** 



&lt; 



The value of &lt; is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if the <GlossaryTerm styled={true} term={"number"}><i>numbers</i></GlossaryTerm> are in monotonically increasing order; otherwise it is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



\&gt; 



The value of &gt; is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if the <GlossaryTerm styled={true} term={"number"}><i>numbers</i></GlossaryTerm> are in monotonically decreasing order; otherwise it is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



&lt;<DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink> 



The value of &lt;<DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if the <GlossaryTerm styled={true} term={"number"}><i>numbers</i></GlossaryTerm> are in monotonically nondecreasing order; otherwise it is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



\&gt;<DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink> 



The value of &gt;<DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if the <GlossaryTerm styled={true} term={"number"}><i>numbers</i></GlossaryTerm> are in monotonically nonincreasing order; otherwise it is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink>, <DictionaryLink styled={true} term={"/="}><b>/=</b></DictionaryLink>, &lt;, &gt;, &lt;<DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink>, and &gt;<DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink> perform necessary type conversions. 



**Examples:**
```lisp

The uses of these functions are illustrated in Figure 12–13. 



|<p>(= 3 3) is *true*. (/= 3 3) is *false*. </p><p>(= 3 5) is *false*. (/= 3 5) is *true*. </p><p>(= 3 3 3 3) is *true*. (/= 3 3 3 3) is *false*. </p><p>(= 3 3 5 3) is *false*. (/= 3 3 5 3) is *false*. </p><p>(= 3 6 5 2) is *false*. (/= 3 6 5 2) is *true*. </p><p>(= 3 2 3) is *false*. (/= 3 2 3) is *false*. </p><p>(< 3 5) is *true*. (<= 3 5) is *true*. </p><p>(< 3 -5) is *false*. (<= 3 -5) is *false*. </p><p>(< 3 3) is *false*. (<= 3 3) is *true*. </p><p>(< 0 3 4 6 7) is *true*. (<= 0 3 4 6 7) is *true*. </p><p>(< 0 3 4 4 6) is *false*. (<= 0 3 4 4 6) is *true*. </p><p>(> 4 3) is *true*. (>= 4 3) is *true*. </p><p>(> 4 3 2 1 0) is *true*. (>= 4 3 2 1 0) is *true*. </p><p>(> 4 3 3 2 0) is *false*. (>= 4 3 3 2 0) is *true*. </p><p>(> 4 3 1 2 0) is *false*. (>= 4 3 1 2 0) is *false*. </p><p>(= 3) is *true*. (/= 3) is *true*. </p><p>(< 3) is *true*. (<= 3) is *true*. </p><p>(= 3.0 #c(3.0 0.0)) is *true*. (/= 3.0 #c(3.0 1.0)) is *true*. </p><p>(= 3 3.0) is *true*. (= 3.0s0 3.0d0) is *true*. </p><p>(= 0.0 -0.0) is *true*. (= 5/2 2.5) is *true*. </p><p>(> 0.0 -0.0) is *false*. (= 0 -0.0) is *true*. </p><p>(<= 0 x 9) is *true* if x is between 0 and 9, inclusive </p><p>(< 0.0 x 1.0) is *true* if x is between 0.0 and 1.0, exclusive </p><p>(< -1 j (length v)) is *true* if j is a *valid array index* for a *vector* v</p>|
| :- |

**Figure 12–13. Uses of /=, =,** <**,** >**,** <**=, and** >**=** 

```
**Exceptional Situations:** 



Might signal <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if some <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> is not a *real*. Might signal <DictionaryLink styled={true} term={"arithmetic-error"}><b>arithmetic-error</b></DictionaryLink> if otherwise unable to fulfill its contract. 



**Notes:** 



<DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink> differs from <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink> in that (= 0.0 -0.0) is always true, because <DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink> compares the mathematical values of its operands, whereas <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink> compares the representational values, so to speak. 



