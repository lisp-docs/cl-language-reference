**extended-char** <GlossaryTerm styled={true} term={"type"}><i>Type</i></GlossaryTerm> 



**Supertypes:** 



<DictionaryLink styled={true} term={"extended-char"}><b>extended-char</b></DictionaryLink>, <DictionaryLink styled={true} term={"character"}><b>character</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



The <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"extended-char"}><b>extended-char</b></DictionaryLink> is equivalent to the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> (and character (not base-char)). 



**Notes:** 



The <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"extended-char"}><b>extended-char</b></DictionaryLink> might have no <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm><sub>4</sub> in <GlossaryTerm styled={true} term={"implementation"}><i>implementations</i></GlossaryTerm> in which all <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> are of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"base-char"}><b>base-char</b></DictionaryLink>. 







 



 



**char=, char/=, char***&lt;***, char***&gt;***, char***&lt;***=, char***&gt;***=,** *. . .* 



<b>char=, char/=, char</b><i>&lt;</i><b>, char</b><i>&gt;</i><b>, char</b><i>&lt;</i><b>=, char</b><i>&gt;</i><b>=, <sup>char-equal, char-not-equal, char-lessp, char</sup> greaterp, char-not-greaterp, char-not-lessp</b> <i>Function</i> 



**Syntax:** 



<DictionaryLink styled={true} term={"char"}><b>char</b></DictionaryLink>= &amp;rest <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm><sup>+</sup> *→ generalized-boolean* 



<DictionaryLink styled={true} term={"char"}><b>char*</b></DictionaryLink>/* = &amp;rest <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm><sup>+</sup> *→ generalized-boolean* 



<DictionaryLink styled={true} term={"char"}><b>char</b></DictionaryLink>&lt; &amp;rest <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm><sup>+</sup> *→ generalized-boolean* 



<DictionaryLink styled={true} term={"char"}><b>char</b></DictionaryLink>&gt; &amp;rest <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm><sup>+</sup> *→ generalized-boolean* 



<DictionaryLink styled={true} term={"char"}><b>char</b></DictionaryLink>&lt;= &amp;rest <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm><sup>+</sup> *→ generalized-boolean* 



<DictionaryLink styled={true} term={"char"}><b>char</b></DictionaryLink>&gt;= &amp;rest <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm><sup>+</sup> *→ generalized-boolean* 



<DictionaryLink styled={true} term={"char-equal"}><b>char-equal</b></DictionaryLink> &amp;rest <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm><sup>+</sup> *→ generalized-boolean* 



<DictionaryLink styled={true} term={"char-not-equal"}><b>char-not-equal</b></DictionaryLink> &amp;rest <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm><sup>+</sup> *→ generalized-boolean* 



<DictionaryLink styled={true} term={"char-lessp"}><b>char-lessp</b></DictionaryLink> &amp;rest <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm><sup>+</sup> *→ generalized-boolean* 



<DictionaryLink styled={true} term={"char-greaterp"}><b>char-greaterp</b></DictionaryLink> &amp;rest <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm><sup>+</sup> *→ generalized-boolean* 



<DictionaryLink styled={true} term={"char-not-greaterp"}><b>char-not-greaterp</b></DictionaryLink> &amp;rest <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm><sup>+</sup> *→ generalized-boolean* 



<DictionaryLink styled={true} term={"char-not-lessp"}><b>char-not-lessp</b></DictionaryLink> &amp;rest <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm><sup>+</sup> *→ generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> . 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



These predicates compare <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"char="}><b>char=</b></DictionaryLink> returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if all <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> are the <GlossaryTerm styled={true} term={"same"}><i>same</i></GlossaryTerm>; otherwise, it returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. If two <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> differ in any *implementation-defined attributes*, then they are not <DictionaryLink styled={true} term={"char="}><b>char=</b></DictionaryLink>. 



<DictionaryLink styled={true} term={"char/="}><b>char/=</b></DictionaryLink> returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if all <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> are different; otherwise, it returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"char"}><b>char</b></DictionaryLink>&lt; returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if the <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> are monotonically increasing; otherwise, it returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. If two <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> have *identical implementation-defined attributes*, then their ordering by <DictionaryLink styled={true} term={"char"}><b>char</b></DictionaryLink>&lt; is consistent with the numerical ordering by the predicate &lt; on their <GlossaryTerm styled={true} term={"code"}><i>codes</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"char"}><b>char</b></DictionaryLink>&gt; returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if the <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> are monotonically decreasing; otherwise, it returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. If two <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> have *identical implementation-defined attributes*, then their ordering by <DictionaryLink styled={true} term={"char"}><b>char</b></DictionaryLink>&gt; is consistent with the numerical ordering by the predicate &gt; on their <GlossaryTerm styled={true} term={"code"}><i>codes</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"char"}><b>char</b></DictionaryLink>&lt;<DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink> returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if the <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> are monotonically nondecreasing; otherwise, it returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. If two <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> have *identical implementation-defined attributes*, then their ordering by <DictionaryLink styled={true} term={"char"}><b>char</b></DictionaryLink>&lt;<DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink> is consistent with the numerical ordering by the predicate &lt;= on their <GlossaryTerm styled={true} term={"code"}><i>codes</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"char"}><b>char</b></DictionaryLink>&gt;<DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink> returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if the <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> are monotonically nonincreasing; otherwise, it returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



 



 



**char=, char/=, char***&lt;***, char***&gt;***, char***&lt;***=, char***&gt;***=,** *. . .* 



If two <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> have *identical implementation-defined attributes*, then their ordering by <DictionaryLink styled={true} term={"char"}><b>char</b></DictionaryLink>&gt;<DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink> is consistent with the numerical ordering by the predicate &gt;= on their <GlossaryTerm styled={true} term={"code"}><i>codes</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"char-equal"}><b>char-equal</b></DictionaryLink>, <DictionaryLink styled={true} term={"char-not-equal"}><b>char-not-equal</b></DictionaryLink>, <DictionaryLink styled={true} term={"char-lessp"}><b>char-lessp</b></DictionaryLink>, <DictionaryLink styled={true} term={"char-greaterp"}><b>char-greaterp</b></DictionaryLink>, <DictionaryLink styled={true} term={"char-not-greaterp"}><b>char-not-greaterp</b></DictionaryLink>, and <DictionaryLink styled={true} term={"char-not-lessp"}><b>char-not-lessp</b></DictionaryLink> are similar to <DictionaryLink styled={true} term={"char="}><b>char=</b></DictionaryLink>, <DictionaryLink styled={true} term={"char/="}><b>char/=</b></DictionaryLink>, <DictionaryLink styled={true} term={"char"}><b>char</b></DictionaryLink>&lt;, <DictionaryLink styled={true} term={"char"}><b>char</b></DictionaryLink>&gt;, <DictionaryLink styled={true} term={"char"}><b>char</b></DictionaryLink>&lt;<DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink>, <DictionaryLink styled={true} term={"char"}><b>char</b></DictionaryLink>&gt;<DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink>, respectively, except that they ignore differences in <GlossaryTerm styled={true} term={"case"}><i>case</i></GlossaryTerm> and might have an <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm> behavior for *non-simple characters*. For example, an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> might define that <DictionaryLink styled={true} term={"char-equal"}><b>char-equal</b></DictionaryLink>, *etc.* ignore certain *implementation-defined attributes*. The effect, if any, of each *implementation-defined attribute* upon these functions must be specified as part of the definition of that <GlossaryTerm styled={true} term={"attribute"}><i>attribute</i></GlossaryTerm>. 



**Examples:**
```lisp

(char= #\d #\d) *→ true* 
(char= #\A #\a) *→ false* 
(char= #\d #\x) *→ false* 
(char= #\d #\D) *→ false* 
(char/= #\d #\d) *→ false* 
(char/= #\d #\x) *→ true* 
(char/= #\d #\D) *→ true* 
(char= #\d #\d #\d #\d) *→ true* 
(char/= #\d #\d #\d #\d) *→ false* 
(char= #\d #\d #\x #\d) *→ false* 
(char/= #\d #\d #\x #\d) *→ false* 
(char= #\d #\y #\x #\c) *→ false* 
(char/= #\d #\y #\x #\c) *→ true* 
(char= #\d #\c #\d) *→ false* 
(char/= #\d #\c #\d) *→ false* 
(char< #\d #\x) *→ true* 
(char<= #\d #\x) *→ true* 
(char< #\d #\d) *→ false* 
(char<= #\d #\d) *→ true* 
(char< #\a #\e #\y #\z) *→ true* 
(char<= #\a #\e #\y #\z) *→ true* 
(char< #\a #\e #\e #\y) *→ false* 
(char<= #\a #\e #\e #\y) *→ true* 
(char> #\e #\d) *→ true* 
(char>= #\e #\d) *→ true* 
(char> #\d #\c #\b #\a) *→ true* 
(char>= #\d #\c #\b #\a) *→ true* 
(char> #\d #\d #\c #\a) *→ false* 
(char>= #\d #\d #\c #\a) *→ true* 
(char> #\e #\d #\b #\c #\a) *→ false* 
(char>= #\e #\d #\b #\c #\a) *→ false* 
(char> #\z #\A) *→ implementation-dependent* 
(char> #\Z #\a) *→ implementation-dependent* 
(char-equal #\A #\a) *→ true* 



(stable-sort (list #\b #\A #\B #\a #\c #\C) #’char-lessp) 
*→* (#\A #\a #\b #\B #\c #\C) 
(stable-sort (list #\b #\A #\B #\a #\c #\C) #’char<) 
*→* (#\A #\B #\C #\a #\b #\c) ;Implementation A 
*→* (#\a #\b #\c #\A #\B #\C) ;Implementation B 
*→* (#\a #\A #\b #\B #\c #\C) ;Implementation C 
*→* (#\A #\a #\B #\b #\C #\c) ;Implementation D 
*→* (#\A #\B #\a #\b #\C #\c) ;Implementation E 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"program-error"}><b>program-error</b></DictionaryLink> if at least one <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> is not supplied. 



**See Also:** 



Section 2.1 (Character Syntax), Section 13.1.10 (Documentation of Implementation-Defined Scripts) 



**Notes:** 



If characters differ in their *code attribute* or any *implementation-defined attribute*, they are considered to be different by <DictionaryLink styled={true} term={"char="}><b>char=</b></DictionaryLink>. 



There is no requirement that (eq c1 c2) be true merely because (char= c1 c2) is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. While <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink> can distinguish two <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> that <DictionaryLink styled={true} term={"char="}><b>char=</b></DictionaryLink> does not, it is distinguishing them not as <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm>, but in some sense on the basis of a lower level implementation characteristic. If (eq c1 c2) is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, then (char= c1 c2) is also true. <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink> and <DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink> compare <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> in the same way that <DictionaryLink styled={true} term={"char="}><b>char=</b></DictionaryLink> does. 



The manner in which <GlossaryTerm styled={true} term={"case"}><i>case</i></GlossaryTerm> is used by <DictionaryLink styled={true} term={"char-equal"}><b>char-equal</b></DictionaryLink>, <DictionaryLink styled={true} term={"char-not-equal"}><b>char-not-equal</b></DictionaryLink>, <DictionaryLink styled={true} term={"char-lessp"}><b>char-lessp</b></DictionaryLink>, <DictionaryLink styled={true} term={"char-greaterp"}><b>char-greaterp</b></DictionaryLink>, <DictionaryLink styled={true} term={"char-not-greaterp"}><b>char-not-greaterp</b></DictionaryLink>, and <DictionaryLink styled={true} term={"char-not-lessp"}><b>char-not-lessp</b></DictionaryLink> implies an ordering for *standard characters* such that A=a, B=b, and so on, up to Z=z, and furthermore either 9<a <="" div="" or="" z<0.=""></a>