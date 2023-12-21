**extended-char** *Type*

**Supertypes:**

**extended-char**, **character**, **t**

**Description:**

The *type* **extended-char** is equivalent to the *type* (and character (not base-char)).

**Notes:**

The *type* **extended-char** might have no *elements*<sub>4</sub> in *implementations* in which all *characters* are of *type* **base-char**.

**char=, char/=, char***&lt;***, char***&gt;***, char***&lt;***=, char***&gt;***=,** *. . .*

<b>char=, char/=, char</b><i>&lt;</i><b>, char</b><i>&gt;</i><b>, char</b><i>&lt;</i><b>=, char</b><i>&gt;</i><b>=, <sup>char-equal, char-not-equal, char-lessp, char</sup> greaterp, char-not-greaterp, char-not-lessp</b> <i>Function</i>

**Syntax:**

**char**= &amp;rest *characters*<sup>+</sup> → generalized-boolean

**char***/* = &amp;rest *characters*<sup>+</sup> → generalized-boolean

**char**&lt; &amp;rest *characters*<sup>+</sup> → generalized-boolean

**char**&gt; &amp;rest *characters*<sup>+</sup> → generalized-boolean

**char**&lt;= &amp;rest *characters*<sup>+</sup> → generalized-boolean

**char**&gt;= &amp;rest *characters*<sup>+</sup> → generalized-boolean

**char-equal** &amp;rest *characters*<sup>+</sup> → generalized-boolean

**char-not-equal** &amp;rest *characters*<sup>+</sup> → generalized-boolean

**char-lessp** &amp;rest *characters*<sup>+</sup> → generalized-boolean

**char-greaterp** &amp;rest *characters*<sup>+</sup> → generalized-boolean

**char-not-greaterp** &amp;rest *characters*<sup>+</sup> → generalized-boolean

**char-not-lessp** &amp;rest *characters*<sup>+</sup> → generalized-boolean

**Arguments and Values:**

*character*—a *character* .

*generalized-boolean*—a *generalized boolean*.

**Description:**

These predicates compare *characters*.

**char=** returns *true* if all *characters* are the *same*; otherwise, it returns *false*. If two *characters* differ in any *implementation-defined attributes*, then they are not **char=**.

**char/=** returns *true* if all *characters* are different; otherwise, it returns *false*.

**char**&lt; returns *true* if the *characters* are monotonically increasing; otherwise, it returns *false*. If two *characters* have *identical implementation-defined attributes*, then their ordering by **char**&lt; is consistent with the numerical ordering by the predicate &lt; on their *codes*.

**char**&gt; returns *true* if the *characters* are monotonically decreasing; otherwise, it returns *false*. If two *characters* have *identical implementation-defined attributes*, then their ordering by **char**&gt; is consistent with the numerical ordering by the predicate &gt; on their *codes*.

**char**&lt;**=** returns *true* if the *characters* are monotonically nondecreasing; otherwise, it returns *false*. If two *characters* have *identical implementation-defined attributes*, then their ordering by **char**&lt;**=** is consistent with the numerical ordering by the predicate &lt;= on their *codes*.

**char**&gt;**=** returns *true* if the *characters* are monotonically nonincreasing; otherwise, it returns *false*.

**char=, char/=, char***&lt;***, char***&gt;***, char***&lt;***=, char***&gt;***=,** *. . .*

If two *characters* have *identical implementation-defined attributes*, then their ordering by **char**&gt;**=** is consistent with the numerical ordering by the predicate &gt;= on their *codes*.

**char-equal**, **char-not-equal**, **char-lessp**, **char-greaterp**, **char-not-greaterp**, and **char-not-lessp** are similar to **char=**, **char/=**, **char**&lt;, **char**&gt;, **char**&lt;**=**, **char**&gt;**=**, respectively, except that they ignore differences in *case* and might have an *implementation-defined* behavior for *non-simple characters*. For example, an *implementation* might define that **char-equal**, *etc.* ignore certain *implementation-defined attributes*. The effect, if any, of each *implementation-defined attribute* upon these functions must be specified as part of the definition of that *attribute*.

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

Should signal an error of *type* **program-error** if at least one *character* is not supplied.

**See Also:**

Section 2.1 (Character Syntax), Section 13.1.10 (Documentation of Implementation-Defined Scripts)

**Notes:**

If characters differ in their *code attribute* or any *implementation-defined attribute*, they are considered to be different by **char=**.

There is no requirement that (eq c1 c2) be true merely because (char= c1 c2) is *true*. While **eq** can distinguish two *characters* that **char=** does not, it is distinguishing them not as *characters*, but in some sense on the basis of a lower level implementation characteristic. If (eq c1 c2) is *true*, then (char= c1 c2) is also true. **eql** and **equal** compare *characters* in the same way that **char=** does.

The manner in which *case* is used by **char-equal**, **char-not-equal**, **char-lessp**, **char-greaterp**, **char-not-greaterp**, and **char-not-lessp** implies an ordering for *standard characters* such that `A=a`, `B=b`, and so on, up to `Z=z`, and furthermore either `9<a` `<` `div` or `z<0`.
