**char=, char/=, char***&lt;***, char***&gt;***, char***&lt;***=, char***&gt;***=,** *. . .*

<b>char=, char/=, char</b><i>&lt;</i><b>, char</b><i>&gt;</i><b>, char</b><i>&lt;</i><b>=, char</b><i>&gt;</i><b>=, <sup>char-equal, char-not-equal, char-lessp, char</sup> greaterp, char-not-greaterp, char-not-lessp</b> <i>Function</i>

**Syntax:**

<DictionaryLink  term={"char"}><b>char</b></DictionaryLink>= &amp;rest <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm><sup>+</sup> → generalized-boolean

<DictionaryLink  term={"char"}><b>char*</b></DictionaryLink>/* = &amp;rest <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm><sup>+</sup> → generalized-boolean

<DictionaryLink  term={"char"}><b>char</b></DictionaryLink>&lt; &amp;rest <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm><sup>+</sup> → generalized-boolean

<DictionaryLink  term={"char"}><b>char</b></DictionaryLink>&gt; &amp;rest <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm><sup>+</sup> → generalized-boolean

<DictionaryLink  term={"char"}><b>char</b></DictionaryLink>&lt;= &amp;rest <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm><sup>+</sup> → generalized-boolean

<DictionaryLink  term={"char"}><b>char</b></DictionaryLink>&gt;= &amp;rest <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm><sup>+</sup> → generalized-boolean

<DictionaryLink  term={"char-equal"}><b>char-equal</b></DictionaryLink> &amp;rest <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm><sup>+</sup> → generalized-boolean

<DictionaryLink  term={"char-not-equal"}><b>char-not-equal</b></DictionaryLink> &amp;rest <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm><sup>+</sup> → generalized-boolean

<DictionaryLink  term={"char-lessp"}><b>char-lessp</b></DictionaryLink> &amp;rest <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm><sup>+</sup> → generalized-boolean

<DictionaryLink  term={"char-greaterp"}><b>char-greaterp</b></DictionaryLink> &amp;rest <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm><sup>+</sup> → generalized-boolean

<DictionaryLink  term={"char-not-greaterp"}><b>char-not-greaterp</b></DictionaryLink> &amp;rest <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm><sup>+</sup> → generalized-boolean

<DictionaryLink  term={"char-not-lessp"}><b>char-not-lessp</b></DictionaryLink> &amp;rest <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm><sup>+</sup> → generalized-boolean

**Arguments and Values:**

<GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm>—a <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> .

*generalized-boolean*—a *generalized boolean*.

**Description:**

These predicates compare <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm>.

<ClLinks  term={"char="}><b>char=</b></ClLinks> returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if all <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> are the <GlossaryTerm  term={"same"}><i>same</i></GlossaryTerm>; otherwise, it returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. If two <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> differ in any *implementation-defined attributes*, then they are not <ClLinks  term={"char="}><b>char=</b></ClLinks>.

<ClLinks  term={"char/="}><b>char/=</b></ClLinks> returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if all <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> are different; otherwise, it returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>.

<DictionaryLink  term={"char"}><b>char</b></DictionaryLink>&lt; returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if the <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> are monotonically increasing; otherwise, it returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. If two <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> have *identical implementation-defined attributes*, then their ordering by <DictionaryLink  term={"char"}><b>char</b></DictionaryLink>&lt; is consistent with the numerical ordering by the predicate &lt; on their <GlossaryTerm  term={"code"}><i>codes</i></GlossaryTerm>.

<DictionaryLink  term={"char"}><b>char</b></DictionaryLink>&gt; returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if the <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> are monotonically decreasing; otherwise, it returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. If two <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> have *identical implementation-defined attributes*, then their ordering by <DictionaryLink  term={"char"}><b>char</b></DictionaryLink>&gt; is consistent with the numerical ordering by the predicate &gt; on their <GlossaryTerm  term={"code"}><i>codes</i></GlossaryTerm>.

<DictionaryLink  term={"char"}><b>char</b></DictionaryLink>&lt;<ClLinks  term={"="}><b>=</b></ClLinks> returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if the <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> are monotonically nondecreasing; otherwise, it returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. If two <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> have *identical implementation-defined attributes*, then their ordering by <DictionaryLink  term={"char"}><b>char</b></DictionaryLink>&lt;<ClLinks  term={"="}><b>=</b></ClLinks> is consistent with the numerical ordering by the predicate &lt;= on their <GlossaryTerm  term={"code"}><i>codes</i></GlossaryTerm>.

<DictionaryLink  term={"char"}><b>char</b></DictionaryLink>&gt;<ClLinks  term={"="}><b>=</b></ClLinks> returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if the <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> are monotonically nonincreasing; otherwise, it returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>.

**char=, char/=, char***&lt;***, char***&gt;***, char***&lt;***=, char***&gt;***=,** *. . .*

If two <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> have *identical implementation-defined attributes*, then their ordering by <DictionaryLink  term={"char"}><b>char</b></DictionaryLink>&gt;<ClLinks  term={"="}><b>=</b></ClLinks> is consistent with the numerical ordering by the predicate &gt;= on their <GlossaryTerm  term={"code"}><i>codes</i></GlossaryTerm>.

<DictionaryLink  term={"char-equal"}><b>char-equal</b></DictionaryLink>, <DictionaryLink  term={"char-not-equal"}><b>char-not-equal</b></DictionaryLink>, <DictionaryLink  term={"char-lessp"}><b>char-lessp</b></DictionaryLink>, <DictionaryLink  term={"char-greaterp"}><b>char-greaterp</b></DictionaryLink>, <DictionaryLink  term={"char-not-greaterp"}><b>char-not-greaterp</b></DictionaryLink>, and <DictionaryLink  term={"char-not-lessp"}><b>char-not-lessp</b></DictionaryLink> are similar to <ClLinks  term={"char="}><b>char=</b></ClLinks>, <ClLinks  term={"char/="}><b>char/=</b></ClLinks>, <DictionaryLink  term={"char"}><b>char</b></DictionaryLink>&lt;, <DictionaryLink  term={"char"}><b>char</b></DictionaryLink>&gt;, <DictionaryLink  term={"char"}><b>char</b></DictionaryLink>&lt;<ClLinks  term={"="}><b>=</b></ClLinks>, <DictionaryLink  term={"char"}><b>char</b></DictionaryLink>&gt;<ClLinks  term={"="}><b>=</b></ClLinks>, respectively, except that they ignore differences in <GlossaryTerm  term={"case"}><i>case</i></GlossaryTerm> and might have an <GlossaryTerm  term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm> behavior for *non-simple characters*. For example, an <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> might define that <DictionaryLink  term={"char-equal"}><b>char-equal</b></DictionaryLink>, *etc.* ignore certain *implementation-defined attributes*. The effect, if any, of each *implementation-defined attribute* upon these functions must be specified as part of the definition of that <GlossaryTerm  term={"attribute"}><i>attribute</i></GlossaryTerm>.

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

Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"program-error"}><b>program-error</b></DictionaryLink> if at least one <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> is not supplied.

**See Also:**

Section 2.1 (Character Syntax), Section 13.1.10 (Documentation of Implementation-Defined Scripts)

**Notes:**

If characters differ in their *code attribute* or any *implementation-defined attribute*, they are considered to be different by <ClLinks  term={"char="}><b>char=</b></ClLinks>.

There is no requirement that (eq c1 c2) be true merely because (char= c1 c2) is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>. While <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink> can distinguish two <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> that <ClLinks  term={"char="}><b>char=</b></ClLinks> does not, it is distinguishing them not as <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm>, but in some sense on the basis of a lower level implementation characteristic. If (eq c1 c2) is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>, then (char= c1 c2) is also true. <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> and <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink> compare <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> in the same way that <ClLinks  term={"char="}><b>char=</b></ClLinks> does.

The manner in which <GlossaryTerm  term={"case"}><i>case</i></GlossaryTerm> is used by <DictionaryLink  term={"char-equal"}><b>char-equal</b></DictionaryLink>, <DictionaryLink  term={"char-not-equal"}><b>char-not-equal</b></DictionaryLink>, <DictionaryLink  term={"char-lessp"}><b>char-lessp</b></DictionaryLink>, <DictionaryLink  term={"char-greaterp"}><b>char-greaterp</b></DictionaryLink>, <DictionaryLink  term={"char-not-greaterp"}><b>char-not-greaterp</b></DictionaryLink>, and <DictionaryLink  term={"char-not-lessp"}><b>char-not-lessp</b></DictionaryLink> implies an ordering for *standard characters* such that `A=a`, `B=b`, and so on, up to `Z=z`, and furthermore either `9<A` or `Z<0`.
