**char=, char/=, char***&lt;***, char***&gt;***, char***&lt;***=, char***&gt;***=,** *. . .*

<b>char=, char/=, char</b><i>&lt;</i><b>, char</b><i>&gt;</i><b>, char</b><i>&lt;</i><b>=, char</b><i>&gt;</i><b>=, <sup>char-equal, char-not-equal, char-lessp, char</sup> greaterp, char-not-greaterp, char-not-lessp</b> <i>Function</i>

**Syntax:**

<ClLinks  term={"char"}><b>char</b></ClLinks>= &amp;rest <ClLinks  term={"character"}><i>characters</i></ClLinks><sup>+</sup> → generalized-boolean

<ClLinks  term={"char"}><b>char*</b></ClLinks>/* = &amp;rest <ClLinks  term={"character"}><i>characters</i></ClLinks><sup>+</sup> → generalized-boolean

<ClLinks  term={"char"}><b>char</b></ClLinks>&lt; &amp;rest <ClLinks  term={"character"}><i>characters</i></ClLinks><sup>+</sup> → generalized-boolean

<ClLinks  term={"char"}><b>char</b></ClLinks>&gt; &amp;rest <ClLinks  term={"character"}><i>characters</i></ClLinks><sup>+</sup> → generalized-boolean

<ClLinks  term={"char"}><b>char</b></ClLinks>&lt;= &amp;rest <ClLinks  term={"character"}><i>characters</i></ClLinks><sup>+</sup> → generalized-boolean

<ClLinks  term={"char"}><b>char</b></ClLinks>&gt;= &amp;rest <ClLinks  term={"character"}><i>characters</i></ClLinks><sup>+</sup> → generalized-boolean

<ClLinks  term={"char-equal"}><b>char-equal</b></ClLinks> &amp;rest <ClLinks  term={"character"}><i>characters</i></ClLinks><sup>+</sup> → generalized-boolean

<ClLinks  term={"char-not-equal"}><b>char-not-equal</b></ClLinks> &amp;rest <ClLinks  term={"character"}><i>characters</i></ClLinks><sup>+</sup> → generalized-boolean

<ClLinks  term={"char-lessp"}><b>char-lessp</b></ClLinks> &amp;rest <ClLinks  term={"character"}><i>characters</i></ClLinks><sup>+</sup> → generalized-boolean

<ClLinks  term={"char-greaterp"}><b>char-greaterp</b></ClLinks> &amp;rest <ClLinks  term={"character"}><i>characters</i></ClLinks><sup>+</sup> → generalized-boolean

<ClLinks  term={"char-not-greaterp"}><b>char-not-greaterp</b></ClLinks> &amp;rest <ClLinks  term={"character"}><i>characters</i></ClLinks><sup>+</sup> → generalized-boolean

<ClLinks  term={"char-not-lessp"}><b>char-not-lessp</b></ClLinks> &amp;rest <ClLinks  term={"character"}><i>characters</i></ClLinks><sup>+</sup> → generalized-boolean

**Arguments and Values:**

<ClLinks  term={"character"}><i>character</i></ClLinks>—a <ClLinks  term={"character"}><i>character</i></ClLinks> .

*generalized-boolean*—a *generalized boolean*.

**Description:**

These predicates compare <ClLinks  term={"character"}><i>characters</i></ClLinks>.

<ClLinks  term={"char="}><b>char=</b></ClLinks> returns <ClLinks  term={"true"}><i>true</i></ClLinks> if all <ClLinks  term={"character"}><i>characters</i></ClLinks> are the <ClLinks  term={"same"}><i>same</i></ClLinks>; otherwise, it returns <ClLinks  term={"false"}><i>false</i></ClLinks>. If two <ClLinks  term={"character"}><i>characters</i></ClLinks> differ in any *implementation-defined attributes*, then they are not <ClLinks  term={"char="}><b>char=</b></ClLinks>.

<ClLinks  term={"char/="}><b>char/=</b></ClLinks> returns <ClLinks  term={"true"}><i>true</i></ClLinks> if all <ClLinks  term={"character"}><i>characters</i></ClLinks> are different; otherwise, it returns <ClLinks  term={"false"}><i>false</i></ClLinks>.

<ClLinks  term={"char"}><b>char</b></ClLinks>&lt; returns <ClLinks  term={"true"}><i>true</i></ClLinks> if the <ClLinks  term={"character"}><i>characters</i></ClLinks> are monotonically increasing; otherwise, it returns <ClLinks  term={"false"}><i>false</i></ClLinks>. If two <ClLinks  term={"character"}><i>characters</i></ClLinks> have *identical implementation-defined attributes*, then their ordering by <ClLinks  term={"char"}><b>char</b></ClLinks>&lt; is consistent with the numerical ordering by the predicate &lt; on their <ClLinks  term={"code"}><i>codes</i></ClLinks>.

<ClLinks  term={"char"}><b>char</b></ClLinks>&gt; returns <ClLinks  term={"true"}><i>true</i></ClLinks> if the <ClLinks  term={"character"}><i>characters</i></ClLinks> are monotonically decreasing; otherwise, it returns <ClLinks  term={"false"}><i>false</i></ClLinks>. If two <ClLinks  term={"character"}><i>characters</i></ClLinks> have *identical implementation-defined attributes*, then their ordering by <ClLinks  term={"char"}><b>char</b></ClLinks>&gt; is consistent with the numerical ordering by the predicate &gt; on their <ClLinks  term={"code"}><i>codes</i></ClLinks>.

<ClLinks  term={"char"}><b>char</b></ClLinks>&lt;<ClLinks  term={"="}><b>=</b></ClLinks> returns <ClLinks  term={"true"}><i>true</i></ClLinks> if the <ClLinks  term={"character"}><i>characters</i></ClLinks> are monotonically nondecreasing; otherwise, it returns <ClLinks  term={"false"}><i>false</i></ClLinks>. If two <ClLinks  term={"character"}><i>characters</i></ClLinks> have *identical implementation-defined attributes*, then their ordering by <ClLinks  term={"char"}><b>char</b></ClLinks>&lt;<ClLinks  term={"="}><b>=</b></ClLinks> is consistent with the numerical ordering by the predicate &lt;= on their <ClLinks  term={"code"}><i>codes</i></ClLinks>.

<ClLinks  term={"char"}><b>char</b></ClLinks>&gt;<ClLinks  term={"="}><b>=</b></ClLinks> returns <ClLinks  term={"true"}><i>true</i></ClLinks> if the <ClLinks  term={"character"}><i>characters</i></ClLinks> are monotonically nonincreasing; otherwise, it returns <ClLinks  term={"false"}><i>false</i></ClLinks>.

**char=, char/=, char***&lt;***, char***&gt;***, char***&lt;***=, char***&gt;***=,** *. . .*

If two <ClLinks  term={"character"}><i>characters</i></ClLinks> have *identical implementation-defined attributes*, then their ordering by <ClLinks  term={"char"}><b>char</b></ClLinks>&gt;<ClLinks  term={"="}><b>=</b></ClLinks> is consistent with the numerical ordering by the predicate &gt;= on their <ClLinks  term={"code"}><i>codes</i></ClLinks>.

<ClLinks  term={"char-equal"}><b>char-equal</b></ClLinks>, <ClLinks  term={"char-not-equal"}><b>char-not-equal</b></ClLinks>, <ClLinks  term={"char-lessp"}><b>char-lessp</b></ClLinks>, <ClLinks  term={"char-greaterp"}><b>char-greaterp</b></ClLinks>, <ClLinks  term={"char-not-greaterp"}><b>char-not-greaterp</b></ClLinks>, and <ClLinks  term={"char-not-lessp"}><b>char-not-lessp</b></ClLinks> are similar to <ClLinks  term={"char="}><b>char=</b></ClLinks>, <ClLinks  term={"char/="}><b>char/=</b></ClLinks>, <ClLinks  term={"char"}><b>char</b></ClLinks>&lt;, <ClLinks  term={"char"}><b>char</b></ClLinks>&gt;, <ClLinks  term={"char"}><b>char</b></ClLinks>&lt;<ClLinks  term={"="}><b>=</b></ClLinks>, <ClLinks  term={"char"}><b>char</b></ClLinks>&gt;<ClLinks  term={"="}><b>=</b></ClLinks>, respectively, except that they ignore differences in <ClLinks  term={"case"}><i>case</i></ClLinks> and might have an <ClLinks  term={"implementation-defined"}><i>implementation-defined</i></ClLinks> behavior for *non-simple characters*. For example, an <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> might define that <ClLinks  term={"char-equal"}><b>char-equal</b></ClLinks>, *etc.* ignore certain *implementation-defined attributes*. The effect, if any, of each *implementation-defined attribute* upon these functions must be specified as part of the definition of that <ClLinks  term={"attribute"}><i>attribute</i></ClLinks>.

**Examples:**

```lisp
(char= #\d #\d) → true 
(char= #\A #\a) → false 
(char= #\d #\x) → false 
(char= #\d #\D) → false 
(char/= #\d #\d) → false 
(char/= #\d #\x) → true 
(char/= #\d #\D) → true 
(char= #\d #\d #\d #\d) → true 
(char/= #\d #\d #\d #\d) → false 
(char= #\d #\d #\x #\d) → false 
(char/= #\d #\d #\x #\d) → false 
(char= #\d #\y #\x #\c) → false 
(char/= #\d #\y #\x #\c) → true 
(char= #\d #\c #\d) → false 
(char/= #\d #\c #\d) → false 
(char< #\d #\x) → true 
(char<= #\d #\x) → true 
(char< #\d #\d) → false 
(char<= #\d #\d) → true 
(char< #\a #\e #\y #\z) → true 
(char<= #\a #\e #\y #\z) → true 
(char< #\a #\e #\e #\y) → false 
(char<= #\a #\e #\e #\y) → true 
(char> #\e #\d) → true 
(char>= #\e #\d) → true 
(char> #\d #\c #\b #\a) → true 
(char>= #\d #\c #\b #\a) → true 
(char> #\d #\d #\c #\a) → false 
(char>= #\d #\d #\c #\a) → true 
(char> #\e #\d #\b #\c #\a) → false 
(char>= #\e #\d #\b #\c #\a) → false 
(char> #\z #\A) → implementation-dependent 
(char> #\Z #\a) → implementation-dependent 
(char-equal #\A #\a) → true 

(stable-sort (list #\b #\A #\B #\a #\c #\C) #’char-lessp) 
→ (#\A #\a #\b #\B #\c #\C) 
(stable-sort (list #\b #\A #\B #\a #\c #\C) #’char<) 
→ (#\A #\B #\C #\a #\b #\c) ;Implementation A 
→ (#\a #\b #\c #\A #\B #\C) ;Implementation B 
→ (#\a #\A #\b #\B #\c #\C) ;Implementation C 
→ (#\A #\a #\B #\b #\C #\c) ;Implementation D 
→ (#\A #\B #\a #\b #\C #\c) ;Implementation E 
```

**Exceptional Situations:**

Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"program-error"}><b>program-error</b></ClLinks> if at least one <ClLinks  term={"character"}><i>character</i></ClLinks> is not supplied.

**See Also:**

Section 2.1 (Character Syntax), Section 13.1.10 (Documentation of Implementation-Defined Scripts)

**Notes:**

If characters differ in their *code attribute* or any *implementation-defined attribute*, they are considered to be different by <ClLinks  term={"char="}><b>char=</b></ClLinks>.

There is no requirement that (eq c1 c2) be true merely because (char= c1 c2) is <ClLinks  term={"true"}><i>true</i></ClLinks>. While <ClLinks  term={"eq"}><b>eq</b></ClLinks> can distinguish two <ClLinks  term={"character"}><i>characters</i></ClLinks> that <ClLinks  term={"char="}><b>char=</b></ClLinks> does not, it is distinguishing them not as <ClLinks  term={"character"}><i>characters</i></ClLinks>, but in some sense on the basis of a lower level implementation characteristic. If (eq c1 c2) is <ClLinks  term={"true"}><i>true</i></ClLinks>, then (char= c1 c2) is also true. <ClLinks  term={"eql"}><b>eql</b></ClLinks> and <ClLinks  term={"equal"}><b>equal</b></ClLinks> compare <ClLinks  term={"character"}><i>characters</i></ClLinks> in the same way that <ClLinks  term={"char="}><b>char=</b></ClLinks> does.

The manner in which <ClLinks  term={"case"}><i>case</i></ClLinks> is used by <ClLinks  term={"char-equal"}><b>char-equal</b></ClLinks>, <ClLinks  term={"char-not-equal"}><b>char-not-equal</b></ClLinks>, <ClLinks  term={"char-lessp"}><b>char-lessp</b></ClLinks>, <ClLinks  term={"char-greaterp"}><b>char-greaterp</b></ClLinks>, <ClLinks  term={"char-not-greaterp"}><b>char-not-greaterp</b></ClLinks>, and <ClLinks  term={"char-not-lessp"}><b>char-not-lessp</b></ClLinks> implies an ordering for *standard characters* such that `A=a`, `B=b`, and so on, up to `Z=z`, and furthermore either `9<A` or `Z<0`.
